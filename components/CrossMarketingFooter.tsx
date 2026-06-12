"use client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CrossMarketingFooter(props: Record<string, any>) {
  return <footer style={{borderTop:"1px solid rgba(0,180,216,0.08)",padding:"14px 20px",textAlign:"center",marginTop:32}}>
    <p style={{color:"#374151",fontSize:11,margin:"0 0 3px"}}>© 2026 CR AudioViz AI, LLC — EIN: 39-3646201</p>
    <p style={{color:"#374151",fontSize:10,margin:0}}>
      <a href="https://craudiovizai.com" style={{color:"#00B4D8",textDecoration:"none"}}>craudiovizai.com</a>
      {" · "}<a href="https://javariai.com" style={{color:"#00B4D8",textDecoration:"none"}}>javariai.com</a>
    </p>
  </footer>;
}
export default CrossMarketingFooter;
