"use client";
// app/layout.tsx — Javari Business
// CR AudioViz AI · EIN 39-3646201 · June 2026
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><head><title>Javari Business</title><meta name="viewport" content="width=device-width, initial-scale=1"/>
      {/* 2026-09-04: canonical declared here rather than through the metadata
          API, because this root layout is a client component and a client
          component cannot export metadata. Without a canonical the same page
          at the apex, at www, with a trailing slash and with tracking
          parameters is treated as four competing pages and the ranking is
          split between them.

          Worth noting separately: "use client" on a ROOT layout forces the
          entire tree client-side, which costs first paint on every route. That
          is a larger change than this one and is left alone deliberately. */}
      <link rel="canonical" href="https://javaribusiness.com" />
      </head>
    <body style={{margin:0,padding:0,background:"#040912",color:"#e2e8f0",fontFamily:"system-ui"}}>{children}</body></html>);
}
