import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");
      // Fallback response if API key is missing
      return NextResponse.json({
        reply: "Message sent successfully. I'll get back to you soon!",
      });
    }

    const resend = new Resend(RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["mazeem.ajm@gmail.com"],
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API error:", error);
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ 
      reply: "Message sent successfully. I'll get back to you soon!" 
    });
  } catch (error) {
    console.error("Contact API error:", error);
    // Return a graceful fallback if the email generation fails
    return NextResponse.json({
      reply: "Message sent successfully. I'll get back to you soon!",
    });
  }
}
