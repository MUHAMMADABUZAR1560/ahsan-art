import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build')

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, service, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Ahsan Art Creative Studio Contact Form <onboarding@resend.dev>',
      to: ['imahsan9876@gmail.com'],
      replyTo: email,
      subject: `New Inquiry from ${name} — ${service || 'General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 12px;">
          <div style="background: #7c3aed; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">📩 New Client Inquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-size: 14px;">Ahsan Art Creative Studio — Contact Form</p>
          </div>

          <div style="background: white; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 140px;">👤 Client Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #111;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">📧 Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111;">
                  <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">🎯 Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #7c3aed;">${service || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">💰 Pricing</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${budget || 'Not selected'}</td>
              </tr>
            </table>
          </div>

          <div style="background: white; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
            <p style="color: #888; font-size: 13px; margin: 0 0 12px 0;">💬 Project Details</p>
            <p style="color: #111; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background: #7c3aed; border-radius: 8px; padding: 20px; text-align: center;">
            <a href="mailto:${email}" 
               style="background: white; color: #7c3aed; padding: 12px 28px; border-radius: 50px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-block;">
              Reply to ${name}
            </a>
          </div>

          <p style="color: #bbb; font-size: 12px; text-align: center; margin-top: 20px;">
            This email was sent from the contact form on ahsanart.pk
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
