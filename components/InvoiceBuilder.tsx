"use client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function InvoiceBuilder(props: Record<string, any>) {
  return <div style={{padding:14,background:"#0F1F32",borderRadius:10,border:"1px solid rgba(0,180,216,0.12)"}}>
    <div style={{fontWeight:700,color:"#00B4D8",marginBottom:4,fontSize:13}}>📄 Invoice Builder</div>
    <p style={{color:"#9CA3AF",fontSize:12,margin:0}}>Create professional invoices with line items and tax.</p>
  </div>;
}
export default InvoiceBuilder;
