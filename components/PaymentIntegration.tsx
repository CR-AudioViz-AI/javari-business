"use client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PaymentIntegration(props: Record<string, any>) {
  return <div style={{padding:14,background:"#0F1F32",borderRadius:10,border:"1px solid rgba(0,180,216,0.12)"}}>
    <div style={{fontWeight:700,color:"#00B4D8",marginBottom:4,fontSize:13}}>💳 Payments</div>
    <p style={{color:"#9CA3AF",fontSize:12,margin:"0 0 8px"}}>Secure Stripe + PayPal payment processing.</p>
    <a href="https://craudiovizai.com/billing" style={{background:"#FF0800",color:"#fff",borderRadius:6,padding:"5px 12px",fontSize:11,fontWeight:700,textDecoration:"none"}}>Manage Billing →</a>
  </div>;
}
export default PaymentIntegration;
