const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.json());

app.post('/send-validation-email', async (req, res) => {
    try {
        const { email } = req.body;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Validation',
            text: 'Please click the link to validate your email.',
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully');
        res.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

