"use client";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function JavariWidget(props: Record<string, any>) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const r = await fetch("/api/javari/chat", {
        method: "POST", headers: {"Content-Type":"application/json"},
        body: JSON.stringify({message:input, context:props.context})
      });
      const d = await r.json();
      setOutput(d.content || d.message || "");
    } catch { setOutput("Error reaching Javari AI."); }
    setLoading(false);
  }
  return <div style={{background:"#0F1F32",border:"1px solid rgba(0,180,216,0.12)",borderRadius:10,padding:14}}>
    <div style={{fontWeight:700,color:"#00B4D8",fontSize:13,marginBottom:8}}>🤖 Ask Javari AI</div>
    <div style={{display:"flex",gap:8}}>
      <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&ask()}
        placeholder={props.context || "Ask about your business..."} style={{flex:1,background:"#172D48",border:"1px solid rgba(0,180,216,0.15)",borderRadius:7,padding:"7px 10px",color:"#e2e8f0",fontSize:12,outline:"none",fontFamily:"system-ui"}} />
      <button onClick={ask} disabled={loading||!input.trim()} style={{background:"#1E3A5F",color:"#00B4D8",border:"1px solid rgba(0,180,216,0.2)",borderRadius:7,padding:"7px 13px",fontSize:12,fontWeight:700,cursor:"pointer"}}>{loading?"…":"Ask"}</button>
    </div>
    {output&&<p style={{fontSize:12,color:"#e2e8f0",marginTop:8,lineHeight:1.6}}>{output}</p>}
  </div>;
}
export default JavariWidget;
