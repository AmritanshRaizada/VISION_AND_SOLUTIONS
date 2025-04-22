require('dotenv').config(); // Load environment variables

const express = require('express');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

const port = process.env.PORT || 3000;

const upload = multer();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit-form', upload.none(), async (req, res) => {
    const { name, email, company, location, message } = req.body;
    const entry = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nLocation: ${location}\nMessage: ${message}\n------------------------\n`;

    // Save to file
    fs.appendFile('sub.txt', entry, (err) => {
        if (err) {
            console.error('Failed to save entry', err);
            return res.status(500).send('Internal Server Error');
        }
    });

    // Send email
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: [
                'amritansh.pvt@gmail.com',
                'info@visionandsolutions.com',
                'dheerajkumar8179@gmail.com',
                'naveen@visionandsolutions.com'
            ],
            subject: 'New Contact Form Submission',
            text: entry
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Form submitted & email sent!');
    } catch (error) {
        console.error('Failed to send email', error);
        res.status(500).send('Email sending failed');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
