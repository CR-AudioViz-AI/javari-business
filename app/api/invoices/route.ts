// app/api/invoices/route.ts — Javari Business Invoice API
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { NextRequest, NextResponse } from 'next/server';
// 2026-08-20: was createClient() from lib/supabase/server, a COOKIE client.
// Sessions live in localStorage on this platform and nothing writes a Supabase
// auth cookie, so getSession() returned null on every request and BOTH handlers
// answered 401 to everyone. Invoices have never listed or been created by anyone.
import { requireUser } from '@/lib/api/require-user';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

function db() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false },
      // Next 14 caches PostgREST GETs by URL and serves stale rows invisibly.
      global: { fetch: (u: RequestInfo | URL, o?: RequestInit) => fetch(u, { ...o, cache: 'no-store' }) } },
  );
}

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const auth = await requireUser(req);
  if (!auth.ok) return auth.res;
  const supabase = db();
  const session = { user: { id: auth.userId } };
  const { data, error } = await supabase
    .from('invoices').select('*, invoice_line_items(*)')
    .eq('user_id', session.user.id).order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ invoices: data });
}

export async function POST(req: NextRequest) {
  const auth = await requireUser(req);
  if (!auth.ok) return auth.res;
  const supabase = db();
  const session = { user: { id: auth.userId } };
  const body = await req.json();
  const { line_items, ...invoice } = body;
  const { data: inv, error } = await supabase
    .from('invoices').insert({ ...invoice, user_id: session.user.id }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (line_items?.length) {
    await supabase.from('invoice_line_items')
      .insert(line_items.map((li: any) => ({ ...li, invoice_id: inv.id })));
  }
  return NextResponse.json({ invoice: inv }, { status: 201 });
}
