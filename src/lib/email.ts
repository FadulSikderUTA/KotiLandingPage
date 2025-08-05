import nodemailer from 'nodemailer'
import { supabaseAdmin } from './supabase'

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: parseInt(process.env.SMTP_PORT!),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
})

// Email templates
export const emailTemplates = {
  welcome: {
    subject: 'Welcome to Koti - Complete Your Profile Survey',
    html: (surveyUrl: string) => `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Koti Credit Bureau</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <div style="background: linear-gradient(135deg, #5daa80 0%, #4d8a6a 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">KOTI</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Your Credit, Your Power</p>
          </div>
          
          <div style="background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #0d0d0d; margin-top: 0; font-size: 24px;">Welcome to the Financial Revolution!</h2>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              Thank you for joining the Koti waitlist! You're now among the first to experience Bangladesh's first AI-powered credit scoring platform.
            </p>
            
            <p style="font-size: 16px; margin-bottom: 25px;">
              To help us better understand your financial needs and provide you with personalized insights, please take a moment to complete our brief survey:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${surveyUrl}" style="background: linear-gradient(135deg, #5daa80 0%, #4d8a6a 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block; transition: transform 0.2s;">
                Complete Your Profile Survey
              </a>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #5daa80; margin-top: 0; font-size: 18px;">What You'll Get:</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><strong>First Access</strong> to our platform when it launches</li>
                <li style="margin-bottom: 8px;"><strong>Premium Features</strong> at no additional cost</li>
                <li style="margin-bottom: 8px;"><strong>Free Credit Report</strong> and personalized insights</li>
                <li style="margin-bottom: 8px;"><strong>Exclusive Benefits</strong> and early updates</li>
              </ul>
            </div>
            
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              If you have any questions, feel free to reach out to us at 
              <a href="mailto:support@kotibd.com" style="color: #5daa80;">support@kotibd.com</a>
            </p>
            
            <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center;">
              <p style="font-size: 12px; color: #999; margin: 0;">
                © 2025 Koti Credit Bureau. All rights reserved.<br>
                This email was sent to you because you joined our waitlist.
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: (surveyUrl: string) => `
Welcome to Koti Credit Bureau!

Thank you for joining our waitlist! You're now among the first to experience Bangladesh's first AI-powered credit scoring platform.

To help us better understand your financial needs, please complete our brief survey:
${surveyUrl}

What You'll Get:
- First Access to our platform when it launches
- Premium Features at no additional cost
- Free Credit Report and personalized insights
- Exclusive Benefits and early updates

If you have any questions, reach out to us at support@kotibd.com

© 2025 Koti Credit Bureau. All rights reserved.
    `
  }
}

// Send welcome email function
export async function sendWelcomeEmail(
  email: string, 
  subscriberId: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const surveyUrl = process.env.GOOGLE_FORM_URL || 'https://forms.gle/YOUR_FORM_ID_HERE'
    
    const mailOptions = {
      from: {
        name: process.env.EMAIL_FROM_NAME!,
        address: process.env.EMAIL_FROM_ADDRESS!,
      },
      to: email,
      subject: emailTemplates.welcome.subject,
      html: emailTemplates.welcome.html(surveyUrl),
      text: emailTemplates.welcome.text(surveyUrl),
    }

    const info = await transporter.sendMail(mailOptions)
    
    // Log the email in database
    await supabaseAdmin
      .from('email_logs')
      .insert({
        subscriber_id: subscriberId,
        email_type: 'welcome',
        sent_at: new Date().toISOString(),
        status: 'sent',
      })

    return {
      success: true,
      messageId: info.messageId,
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    
    // Log the error in database
    await supabaseAdmin
      .from('email_logs')
      .insert({
        subscriber_id: subscriberId,
        email_type: 'welcome',
        sent_at: new Date().toISOString(),
        status: 'failed',
        error_message: error instanceof Error ? error.message : 'Unknown error',
      })

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Test email connection
export async function testEmailConnection(): Promise<{ success: boolean; message: string }> {
  try {
    await transporter.verify()
    return {
      success: true,
      message: 'SMTP connection successful'
    }
  } catch (error) {
    return {
      success: false,
      message: `SMTP connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}