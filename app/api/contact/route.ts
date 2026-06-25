import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
    if (!ANTHROPIC_API_KEY) {
      console.error("ANTHROPIC_API_KEY is not configured.");
      // Fallback response if API key is missing
      return NextResponse.json({
        reply: "Message sent. Azeem will be in touch.",
      });
    }

    const systemPrompt =
      "You are a friendly assistant on Azeem's portfolio. A visitor has reached out. Acknowledge their message warmly in 2-3 sentences, confirm Azeem will get back to them soon, and sign off as Azeem's assistant.";

    const anthropicPayload = {
      model: "claude-3-7-sonnet-20250219",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: `New message from ${name} (${email}):\n\n${message}`,
        },
      ],
    };

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(anthropicPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Anthropic API error:", errorData);
      throw new Error("Failed to fetch from Anthropic API");
    }

    const data = await response.json();

    // Extract the text content from Anthropic's response
    const replyText =
      data.content?.[0]?.text || "Message sent. Azeem will be in touch.";

    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error("Contact API error:", error);
    // Return a graceful fallback if the AI generation fails
    return NextResponse.json({
      reply: "Message sent. Azeem will be in touch.",
    });
  }
}
