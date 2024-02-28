// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: `LaRenzo <${fromEmail}>`,
      to: [email],
      subject: "Hello world",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted</p>
          <p>{message}</p>
          {/* domain needed. go to 1:23:50 in video. This adds a domain that you own!!!!*/}
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
