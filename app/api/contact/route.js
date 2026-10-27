export async function POST(req) {
  const url = process.env.CONTACT_ENDPOINT
  if (!url) return Response.json({ ok:false, error:"Messaging is not configured." }, { status:501 })
  let body
  try { body = await req.json() } catch { return Response.json({ ok:false, error:"Invalid request." }, { status:400 }) }
  const { name, email, message } = body || {}
  if (!name || !/^\S+@\S+\.\S+$/.test(email||"") || !message) return Response.json({ ok:false, error:"Please complete all fields." }, { status:400 })
  try {
    const r = await fetch(url, { method:"POST", headers:{ "Content-Type":"application/json", Accept:"application/json" }, body:JSON.stringify({ name, email, message }) })
    if (!r.ok) return Response.json({ ok:false, error:"Delivery failed." }, { status:502 })
    return Response.json({ ok:true })
  } catch { return Response.json({ ok:false, error:"Delivery failed." }, { status:502 }) }
}
