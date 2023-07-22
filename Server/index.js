const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
let cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

//API routes and descriptions
const apiRoutes = [
    {
        route: '/sendMail',
        description: 'Send mail from portfolio to admin',
        details: 'This route allows you to send an email from your portfolio to the admin. It uses the Google API, OAuth2, and Nodemailer to securely send the email.',
    }
];

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.use(express.json(), cors({ origin: '*' }));

app.get('/', (req, res) => {
    res.render('helper', { apiRoutes });
});

app.post('/sendEmail', async (req, res) => {
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECS_URI = process.env.REDIRECS_URI;
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECS_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


    const { fullname, email, message } = req.body;

    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.MY_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            }
        });

        const mailOptions = {
            from: `Portfolio web <${process.env.MY_EMAIL}>`,
            to: process.env.MY_EMAIL,
            subject: 'New Message from portfolio',
            text: `Full Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`,
            html: `
            <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
                <h2 style="color: #1C658C;">New Message from Portfolio</h2>
                <p style="font-size: 16px; color: #333;">Here are the details:</p>
                <ul>
                    <li><strong>Full Name:</strong> ${fullname}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Message:</strong> ${message}</li>
                </ul>
            </div>
        `,
        };

        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully');
        res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});