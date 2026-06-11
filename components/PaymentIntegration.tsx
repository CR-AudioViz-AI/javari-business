"use client";
// PaymentIntegration — Stripe/PayPal checkout for business services
export function PaymentIntegration({ plan, amount, onSuccess }: {
  plan?: string; amount?: number; onSuccess?: () => void;
}) {
  return (
    <div style={{padding:16,background:"#0F1F32",borderRadius:12,border:"1px solid rgba(0,180,216,0.12)"}}>
      <h3 style={{color:"#00B4D8",margin:"0 0 8px",fontSize:14}}>💳 Payment & Billing</h3>
      <p style={{color:"#9CA3AF",fontSize:12,margin:"0 0 12px"}}>
        {plan ? `Plan: ${plan}` : "Secure payment processing"} {amount ? `— $${amount}` : ""}
      </p>
      <a href="https://craudiovizai.com/billing"
        style={{background:"#FF0800",color:"#fff",borderRadius:7,padding:"8px 16px",
          fontSize:12,fontWeight:700,textDecoration:"none",display:"inline-block"}}>
        Manage Billing →
      </a>
    </div>
  );
}
