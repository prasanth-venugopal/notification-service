# 📧 Notification Service with Email Retry Logic

## 🚀 Project Overview
This is a Node.js-based notification service that sends emails using a primary email service. If the primary service fails after three retries, it automatically switches to a backup email service.

### ✨ Features
- **Primary and Backup Email Service:** Automatically switches to a backup email service after three failed attempts with the primary service.
- **Retry Logic:** Retries sending the email up to three times before switching to the backup service.
- **Environment Variables:** Secure configuration using `.env` file for sensitive information such as email credentials.

## 🗂 Project Structure

```plaintext
notification-service/
│
├── node_modules/
├── .gitignore
      └── .env
├── package.json
├── README.md
└── src/
    ├── emailServices.js
    └── index.js


🛠 Prerequisites
🟢 Node.js (v14 or later)
🟢 npm (v6 or later)
🟢 Gmail or other email service credentials
📥 Installation
Clone the repository:
    bash
    Copy code
    git clone https://github.com/yourusername/notification-service.git
    cd notification-service
Install dependencies:
    bash
    Copy code
    npm install
    Create a .env file in the root directory with the following content:
    plaintext
    Copy code
      PRIMARY_EMAIL=your_primary_email@gmail.com
      PRIMARY_PASSWORD=your_primary_email_password
      BACKUP_EMAIL=your_backup_email@gmail.com
      BACKUP_PASSWORD=your_backup_email_password
Run the service:
    bash
    Copy code
    nodemon index.js
🛡 Usage
The service will automatically attempt to send an email using the primary email service. If it fails, it will retry up to three times before switching to the backup service.

🐛 Troubleshooting
Invalid Login: Ensure that you have entered the correct credentials in the .env file.

📄 License
This project is licensed under the MIT License.

vbnet
Copy code

This version reflects the updated project structure you provided. Let me know if you need any further changes!




