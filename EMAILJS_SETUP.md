# EmailJS Setup Instructions

To enable email functionality for your contact form, follow these steps:

## 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account

## 2. Create Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose "Gmail" and connect your Gmail account (amangupta83a@gmail.com)
- Note the Service ID (replace 'service_portfolio' in Contact.js)

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

- Set "To Email" to: amangupta83a@gmail.com
- Note the Template ID (replace 'template_contact' in Contact.js)

## 4. Get Public Key
- Go to "Account" → "General"
- Copy your Public Key (replace 'your_public_key' in Contact.js)

## 5. Update Contact.js
Replace these values in src/components/Contact.js:
- `service_portfolio` → Your Service ID
- `template_contact` → Your Template ID  
- `your_public_key` → Your Public Key

## 6. Install Dependencies
Run: `npm install @emailjs/browser`

## 7. Test
- Fill out the contact form on your website
- Check your Gmail inbox for the message
- Verify the sender's email is included for replies

Your contact form will now send emails directly to amangupta83a@gmail.com!