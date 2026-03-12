"use server";

import nodemailer from "nodemailer";

interface ActionState {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const project = formData.get("project") as string;
  const message = formData.get("message") as string;
  const captchaToken = formData.get("g-recaptcha-response") as string;
  debugger

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  if (!captchaToken) {
    return { success: false, message: "Please complete the reCAPTCHA." };
  }

  try {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

    if (!user || !pass || !recaptchaSecret) {
      console.warn(
        "Missing EMAIL_USER, EMAIL_PASS or RECAPTCHA_SECRET_KEY environment variables."
      );
      return {
        success: false,
        message: "Server configuration error: Credentials missing.",
      };
    }

    // Verify reCAPTCHA
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${captchaToken}`;
    const verifyResponse = await fetch(verifyUrl, { method: "POST" });
    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.warn("reCAPTCHA verification failed:", verifyData);
      return {
        success: false,
        message: "reCAPTCHA verification failed. Please try again.",
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: user,
      replyTo: email,
      subject: `New Contact Form Submission from ${name} - ${project || "No Project"
        }`,
      text: `
      Name: ${name}
      Email: ${email}
      Project: ${project}
      Message: ${message}
    `,
      html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Project:</strong> ${project}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    };
    debugger
    const info = await transporter.sendMail(mailOptions);
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    debugger
    console.error("Error sending email:", error);
    const safeError = error instanceof Error ? error.message : "Unknown error";
    return { success: false, message: `Failed to send: ${safeError}` };
  }
}
