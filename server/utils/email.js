const nodemailer = require('nodemailer');

const sendEmail = async (subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            },
            // Force IPv4 to avoid IPv6 connection issues
            family: 4
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: subject,
            text: text
        };

        // Set a timeout for email sending (8 seconds to stay under Vercel's 10s limit)
        await Promise.race([
            transporter.sendMail(mailOptions),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Email timeout')), 8000)
            )
        ]);
        
        console.log('Email sent successfully via Nodemailer!');
    } catch (error) {
        console.error('Error sending email via Nodemailer:', error.message);
        // We do not throw the error because we still want the DB save to succeed
    }
};

module.exports = sendEmail;
