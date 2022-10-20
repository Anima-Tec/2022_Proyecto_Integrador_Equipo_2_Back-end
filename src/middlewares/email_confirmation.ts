import { ConfirmationEmailData } from '../interfaces/auth.interface'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config()

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export const sendConfirmationEmail = async ({
  data,
}: ConfirmationEmailData) => {
  const confirmationCode = Math.round(Math.random() * 999999)

  try {
    await transport.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: data.email,
      subject: 'Please confirm your account',
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${data.name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:8081/confirm/${confirmationCode}> Click here</a>
          </div>`,
    })
    return confirmationCode
  } catch (error) {
    console.log(error)
  }
}
