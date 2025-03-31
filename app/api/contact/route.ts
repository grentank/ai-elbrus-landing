import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail address
    pass: process.env.EMAIL_PASSWORD, // your app-specific password
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, question } = body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@elbrusboot.camp",
      subject: "Новый вопрос с сайта",
      html: `
        <h2>Новый вопрос от посетителя сайта</h2>
        <p><strong>Имя:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Вопрос:</strong></p>
        <p>${question}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
