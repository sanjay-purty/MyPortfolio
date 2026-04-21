const nodemailer = require("nodemailer");
const { z } = require("zod");
const Contact = require("../models/Contact");

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const getTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const sendContactMessage = async (req, res) => {
  const payload = contactSchema.parse(req.body);
  const contact = await Contact.create(payload);

  const transporter = getTransporter();
  if (transporter && process.env.CONTACT_RECEIVER_EMAIL && process.env.SMTP_PASS !== "YOUR_APP_PASSWORD_HERE") {
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        subject: `New portfolio message from ${payload.name}`,
        text: `${payload.message}\n\nSender: ${payload.email}`,
      });
    } catch (error) {
      console.error("Failed to send email notification:", error.message);
    }
  } else {
    console.warn("Email notification skipped: SMTP not properly configured in .env");
  }

  res.status(201).json({
    message: "Message received successfully.",
    contact,
  });
};

module.exports = { sendContactMessage };
