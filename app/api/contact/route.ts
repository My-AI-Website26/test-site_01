import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SERVICE_LABELS: Record<string, string> = {
  "cafe-table": "Cafe Table Booking",
  "food-truck": "Food Truck Booking",
  "cake-order": "Cake Order",
};

export async function POST(request: Request) {
  const { name, email, service, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { error: "Email sending is not configured on the server." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const serviceLabel = SERVICE_LABELS[service] ?? service ?? "General enquiry";

  try {
    await transporter.sendMail({
      from: `"Torsbeanie Website" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Enquiry: ${serviceLabel} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nService needed: ${serviceLabel}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { error: "Failed to send the message. Please try again later." },
      { status: 502 }
    );
  }
}
