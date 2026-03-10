const nodemailer = require('nodemailer');

/**
 * Robust email sending utility that won't crash the server on failure.
 * @param {string} subject - Email subject
 * @param {string} text - Email body
 */
const sendEmail = async (subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            // TLS settings to help prevent connection drops in strict environments like Vercel/Render
            tls: {
                rejectUnauthorized: false
            }
        });

        // Verify connection configuration (optional, but good for debugging logs)
        // await transporter.verify();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to admin
            subject: subject,
            text: text
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.messageId}`);
        return true;
    } catch (error) {
        // We log the error but DO NOT throw it.
        // This ensures the calling function (like a POST route) continues executing
        // and returns a 201/200 success to the user instead of a 500 error.
        console.error('Nodemailer Error. Email delivery failed, but proceeding with application flow:', error.message);
        return false;
    }
};

module.exports = sendEmail;
