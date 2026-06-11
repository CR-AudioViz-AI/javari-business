// app/api/invoices/route.ts — Javari Business Invoice API
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { data, error } = await supabase
    .from('invoices').select('*, invoice_line_items(*)')
    .eq('user_id', session.user.id).order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ invoices: data });
}

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
