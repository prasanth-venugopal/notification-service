require('dotenv').config();
const { sendEmailWithRetry } = require('./emailServices');

const emailOptions = {
  from: process.env.PRIMARY_EMAIL,
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email.'
};

// Call the function to send the email with retry logic
sendEmailWithRetry(emailOptions);
