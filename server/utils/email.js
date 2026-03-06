const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmail = async (subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'musabiftikhar44@gmail.com', // Notifying the user
        subject: subject,
        text: text
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Force the request to fail instead of hanging
    }
};

module.exports = sendEmail;
