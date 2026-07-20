import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  const errors: string[] = [];
  if (!name || typeof name !== "string" || !name.trim())
    errors.push("Name is required");
  if (!email || typeof email !== "string" || !email.trim())
    errors.push("Email is required");
  if (!message || typeof message !== "string" || !message.trim())
    errors.push("Message is required");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join("; ") }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY not set in .env.local");
    return NextResponse.json(
      { error: "Email service not configured. Please contact me directly at sheikhhasib037@gmail.com." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO || "sheikhhasib037@gmail.com",
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : "unknown error";
    console.error("Resend send failed:", detail);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
