"use client";
// UniversalBrandKit — Logo, colors, fonts across all brand assets
export function UniversalBrandKit({ businessName }: { businessName?: string }) {
  return (
    <div style={{padding:16,background:"#0F1F32",borderRadius:12,border:"1px solid rgba(0,180,216,0.12)"}}>
      <h3 style={{color:"#00B4D8",margin:"0 0 8px",fontSize:14}}>🎨 Brand Kit</h3>
      <p style={{color:"#9CA3AF",fontSize:12,margin:"0 0 12px"}}>
        {businessName ? `Building brand kit for ${businessName}` : "AI-powered logo, colors, and brand guide"}
      </p>
      <a href="https://javari-logo-studio.vercel.app"
        style={{background:"#1E3A5F",color:"#00B4D8",borderRadius:7,padding:"8px 16px",
          fontSize:12,fontWeight:700,textDecoration:"none",display:"inline-block"}}>
        Open Logo Studio →
      </a>
    </div>
  );
}
