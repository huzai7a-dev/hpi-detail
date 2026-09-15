import "server-only";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: Number(process.env.BREVO_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

export async function sendMail(options: { to: string; subject: string; html: string; attachments?: { filename: string; content: Buffer }[] }) {
  try {
    await transporter.sendMail({ from: process.env.EMAIL_FROM, ...options });
  } catch (error) {
    console.error("Failed to send email", { to: options.to, subject: options.subject, error });
  }
}
