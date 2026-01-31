import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend =
  process.env.RESEND_API_KEY != null
    ? new Resend(process.env.RESEND_API_KEY)
    : null

const FROM = process.env.CONTACT_EMAIL_FROM ?? "onboarding@resend.dev"
const TO = process.env.CONTACT_EMAIL_TO

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body as {
      name?: string
      email?: string
      message?: string
    }
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      )
    }
    if (resend == null || TO == null || TO.trim() === "") {
      return NextResponse.json(
        { error: "Contact form is not configured." },
        { status: 503 },
      )
    }
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO.trim()],
      replyTo: email.trim(),
      subject: `Contact: ${name.trim()}`,
      html: [
        `<p><strong>From:</strong> ${escapeHtml(name.trim())} &lt;${escapeHtml(email.trim())}&gt;</p>`,
        `<p><strong>Message:</strong></p>`,
        `<pre>${escapeHtml(message.trim())}</pre>`,
      ].join(""),
    })
    if (error != null) {
      return NextResponse.json({ error: error.message }, { status: 502 })
    }
    return NextResponse.json({ ok: true, id: data?.id })
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    )
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
