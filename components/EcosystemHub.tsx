"use client";
const TOOLS = [
  {name:"Javari Legal",url:"https://javari-legal.vercel.app",icon:"⚖️"},
  {name:"Javari Marketing",url:"https://javari-marketing.vercel.app",icon:"📣"},
  {name:"Javari Sites",url:"https://javari-sites.vercel.app",icon:"🌐"},
  {name:"Javari Content",url:"https://javari-content.vercel.app",icon:"✍️"},
];
export function EcosystemHub() {
  return <div style={{padding:16,background:"#0F1F32",borderRadius:12,border:"1px solid rgba(0,180,216,0.12)"}}>
    <div style={{fontWeight:700,color:"#00B4D8",marginBottom:10,fontSize:13}}>🏆 Ecosystem Tools</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
      {TOOLS.map(t=><a key={t.name} href={t.url} style={{padding:"8px 10px",background:"#172D48",borderRadius:8,textDecoration:"none",fontSize:12,color:"#e2e8f0",display:"flex",alignItems:"center",gap:6}}>{t.icon} {t.name}</a>)}
    </div>
  </div>;
}
export default EcosystemHub;
