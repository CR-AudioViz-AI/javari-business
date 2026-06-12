"use client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function UniversalBrandKit(props: Record<string, any>) {
  return <div style={{padding:14,background:"#0F1F32",borderRadius:10,border:"1px solid rgba(0,180,216,0.12)"}}>
    <div style={{fontWeight:700,color:"#00B4D8",marginBottom:4,fontSize:13}}>🎨 Brand Kit</div>
    <p style={{color:"#9CA3AF",fontSize:12,margin:"0 0 8px"}}>
      {props.businessName ? `Brand kit for ${props.businessName}` : "AI-powered logo, colors, and brand guide."}
    </p>
    <a href="https://javari-logo-studio.vercel.app" style={{background:"#1E3A5F",color:"#00B4D8",borderRadius:6,padding:"5px 12px",fontSize:11,fontWeight:700,textDecoration:"none"}}>Open Logo Studio →</a>
  </div>;
}
export default UniversalBrandKit;
