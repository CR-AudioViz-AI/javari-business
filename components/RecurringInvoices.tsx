"use client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RecurringInvoices(props: Record<string, any>) {
  return <div style={{padding:14,background:"#0F1F32",borderRadius:10,border:"1px solid rgba(0,180,216,0.12)"}}>
    <div style={{fontWeight:700,color:"#00B4D8",marginBottom:4,fontSize:13}}>🔄 Recurring Invoices</div>
    <p style={{color:"#9CA3AF",fontSize:12,margin:0}}>Automatic recurring billing for your clients.</p>
  </div>;
}
export default RecurringInvoices;
