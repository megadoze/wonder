import { services } from "@/data/content";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    const raw = await request.text();

    if (raw.length > 10000) {
      return Response.json({ error: "Request too large." }, { status: 413 });
    }

    const parsed: unknown = JSON.parse(raw);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Invalid request");
    }

    body = parsed as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const getString = (key: string) =>
    typeof body[key] === "string" ? (body[key] as string).trim() : "";

  const name = getString("name");
  const email = getString("email");
  const service = getString("service");
  const project = getString("project");
  const website = getString("website");

  // Ignore submissions from basic spam bots.
  if (website) {
    return Response.json({ ok: true });
  }

  const validService = services.some((item) => item.title === service);

  if (
    name.length < 1 ||
    name.length > 120 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    !validService ||
    project.length < 10 ||
    project.length > 4000
  ) {
    return Response.json(
      { error: "Please check your enquiry details." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact email configuration is missing.");

    return Response.json(
      { error: "Contact form unavailable." },
      { status: 503 },
    );
  }

  const message = [
    "WONDER — NEW PROJECT ENQUIRY",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service}`,
    "",
    "ABOUT THE SPACE",
    project,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `WONDER <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `WONDER — New project enquiry: ${service}`,
        text: message,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Resend submission failed:",
        response.status,
        await response.text(),
      );

      return Response.json(
        { error: "Unable to send enquiry." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact request failed:", error);

    return Response.json({ error: "Unable to send enquiry." }, { status: 502 });
  }
}
