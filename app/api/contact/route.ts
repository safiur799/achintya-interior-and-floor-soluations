import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Contact form submission received:', body);
    const { name, email, topic, message } = body;

    if (!name || !email || !topic) {
      return NextResponse.json(
        { error: 'Name, Email, and Topic are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Resend default for free accounts
      to: ['support@achintyainterior.com'],
      subject: `New Contact Inquiry: ${topic}`,
      html: `
        <h2>New Inquiry from ${name}</h2>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided.'}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
