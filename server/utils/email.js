const axios = require('axios');

const sendEmail = async (subject, text) => {
    try {
        await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: {
                subject: subject,
                message: text,
                to_name: 'Webify Pro Admin',
            }
        });
        console.log('Email sent successfully via EmailJS API!');
    } catch (error) {
        console.error('Error sending email via EmailJS:', error.response?.data || error.message);
        // We do not throw the error because we still want the DB save to succeed 
        // even if the email API quota is reached or fails.
    }
};

module.exports = sendEmail;
