// server/api/contact.js
import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, name, phone, message } = body

    // Basic validation
    if (!email || !message) {
      return { error: 'Email and message are required.' }
    }

    // Create a transporter using your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,  // your Gmail address
        pass: process.env.GMAIL_PASS   // your Gmail app password
      }
    })

    // Send the email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'you@yourdomain.com',  // Replace with your email
      subject: `Contact Form Submission from ${name || 'Unknown'}`,
      text: `
Email: ${email}
Phone: ${phone || 'N/A'}
Name: ${name || 'N/A'}
Message: ${message}
`
    })

    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: 'Internal server error' }
  }
})
