const nodemailer = require('nodemailer');

// Create transporter for primary email service
const primaryTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.PRIMARY_EMAIL,
    pass: process.env.PRIMARY_PASSWORD,
  },
});

// Create transporter for backup email service
const backupTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.BACKUP_EMAIL,
    pass: process.env.BACKUP_PASSWORD,
  },
});

async function sendEmail(transporter, emailOptions) {
  return transporter.sendMail(emailOptions);
}

async function sendEmailWithRetry(emailOptions) {
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    try {
      await sendEmail(primaryTransporter, emailOptions);
      console.log('Email sent successfully via primary service');
      return;
    } catch (error) {
      attempts++;
      console.error(`Failed to send email via primary service: ${error.message}`);
      console.log(`Retrying... (${attempts}/${maxAttempts})`);
    }
  }

  console.log('Switching to backup service...');
  try {
    await sendEmail(backupTransporter, emailOptions);
    console.log('Email sent successfully via backup service');
  } catch (error) {
    console.error(`Failed to send email via backup service: ${error.message}`);
    console.log('Failed to send email after retries');
  }
}

module.exports = { sendEmailWithRetry };
