const { Resend } = require('resend');

const sendEmail = async (subject, text) => {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'Webify Pro <onboarding@resend.dev>',
            to: process.env.EMAIL_USER,
            subject: subject,
            text: text
        });

        console.log('Email sent successfully via Resend!');
    } catch (error) {
        console.error('Error sending email via Resend:', error.message);
        // We do not throw the error so DB saves still succeed
    }
};

module.exports = sendEmail;
