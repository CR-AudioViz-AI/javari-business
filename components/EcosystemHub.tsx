"use client";
const TOOLS = [
  {name:"Legal",url:"https://javari-legal.vercel.app",icon:"⚖️"},
  {name:"Marketing",url:"https://javari-marketing.vercel.app",icon:"📣"},
  {name:"Sites",url:"https://javari-sites.vercel.app",icon:"🌐"},
  {name:"Content",url:"https://javari-content.vercel.app",icon:"✍️"},
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function EcosystemHub(props: Record<string, any>) {
  return <div style={{padding:14,background:"#0F1F32",borderRadius:10,border:"1px solid rgba(0,180,216,0.12)"}}>
    <div style={{fontWeight:700,color:"#00B4D8",marginBottom:8,fontSize:13}}>🏆 Platform Tools</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
      {TOOLS.map(t=><a key={t.name} href={t.url} style={{padding:"6px 8px",background:"#172D48",borderRadius:6,textDecoration:"none",fontSize:11,color:"#e2e8f0",display:"flex",alignItems:"center",gap:5}}>{t.icon} {t.name}</a>)}
    </div>
  </div>;
}
export default EcosystemHub;
