import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.VITE_Contact_Email,
        pass: process.env.EMAIL_PASS
    }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.VITE_Contact_Email,
        subject: `New Contact Form Submission from ${name}`,
        text: `You have received a new message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <div style="padding: 12px; border-left: 4px solid #d0d0d0; background-color: #f9f9f9;">
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    `
    };

    const autoReplyOptions = {
        from: process.env.VITE_Contact_Email,
        to: email,
        subject: 'Thank You for Contacting UniSapphire',
        text: `Hello ${name},\n\nThank you for reaching out to UniSapphire. We appreciate you taking the time to contact us.\n\nWe have received your message and our team is currently reviewing it. We will get back to you as soon as possible.\n\nIf your inquiry is urgent, please feel free to reply to this email.\n\nThank you for your patience and interest in UniSapphire.\n\nBest regards,\nUniSapphire Team`,
        html: `
            <h3>Hello ${name},</h3>
            <p>Thank you for reaching out to <strong>UniSapphire</strong>. We appreciate you taking the time to contact us.</p>
            <p>We have received your message and our team is currently reviewing it. We will get back to you as soon as possible.</p>
            <p>If your inquiry is urgent, please feel free to reply to this email.</p>
            <p>Thank you for your patience and interest in UniSapphire.</p>
            <br>
            <p>Best regards,</p>
            <p><strong>UniSapphire Team</strong></p>
        `
    };
    
    try {
        await Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(autoReplyOptions)
        ]);
        res.status(200).json({ success: true, message: 'Emails sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
