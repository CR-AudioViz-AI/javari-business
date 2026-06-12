"use client";
export function UniversalBrandKit({ businessName }: { businessName?: string }) {
  return <div style={{padding:16,background:"#0F1F32",borderRadius:12,border:"1px solid rgba(0,180,216,0.12)"}}>
    <div style={{fontWeight:700,color:"#00B4D8",marginBottom:6,fontSize:13}}>🎨 Brand Kit</div>
    <p style={{color:"#9CA3AF",fontSize:12,margin:0}}>
      {businessName ? `Building brand kit for ${businessName}` : "AI-powered logo, colors, and brand guide."}
    </p>
  </div>;
}
export default UniversalBrandKit;
