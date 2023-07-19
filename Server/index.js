const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
let cors = require('cors');

const app = express();
const port = 3000;

//API routes and descriptions
const apiRoutes = [
    {
        route: '/sendMail',
        description: 'Send mail from portfolio to admin',
    },
    {
        route: '/users',
        description: 'Get a list of all users',
    },
    {
        route: '/users/:id',
        description: 'Get a specific user by ID',
    },
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
    const { fullname, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'mdmstudio6fsk@gmail.com',
                pass: 'NoveSilne123',
            },
        });

        const mailOptions = {
            from: 'mdmstudio6fsk@gmail.com',
            to: 'mdmstudio6fsk@gmail.com',
            subject: 'New Message from Portfolio',
            text: `Full Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`,
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