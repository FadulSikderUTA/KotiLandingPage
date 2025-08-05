import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendWelcomeEmail } from '@/lib/email'
import { validateEmail, checkRateLimit } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { email } = body
    
    // Validate email format
    const validation = validateEmail(email)
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: validation.error || 'Invalid email format',
        },
        { status: 400 }
      )
    }
    
    // Check rate limiting (max 3 attempts per 15 minutes per email)
    if (!checkRateLimit(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
        },
        { status: 429 }
      )
    }
    
    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabaseAdmin
      .from('waitlist_subscribers')
      .select('id, email, status')
      .eq('email', email.toLowerCase())
      .single()
    
    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 means no rows returned, which is what we want for new emails
      console.error('Database check error:', checkError)
      return NextResponse.json(
        {
          success: false,
          message: 'Database error occurred',
        },
        { status: 500 }
      )
    }
    
    if (existingSubscriber) {
      // Email already exists
      if (existingSubscriber.status === 'confirmed') {
        return NextResponse.json(
          {
            success: false,
            message: 'You are already subscribed to our waitlist!',
          },
          { status: 409 }
        )
      } else {
        // Resend welcome email if status is pending
        const emailResult = await sendWelcomeEmail(email, existingSubscriber.id)
        
        return NextResponse.json(
          {
            success: true,
            message: 'Welcome email resent successfully! Please check your inbox.',
            data: {
              subscriber_id: existingSubscriber.id,
              email_sent: emailResult.success,
            },
          },
          { status: 200 }
        )
      }
    }
    
    // Insert new subscriber
    const { data: newSubscriber, error: insertError } = await supabaseAdmin
      .from('waitlist_subscribers')
      .insert({
        email: email.toLowerCase(),
        status: 'pending',
        metadata: {
          user_agent: request.headers.get('user-agent'),
          ip_address: request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown',
          referrer: request.headers.get('referer'),
          subscribed_at: new Date().toISOString(),
        },
      })
      .select('id, email')
      .single()
    
    if (insertError) {
      console.error('Database insert error:', insertError)
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to subscribe to waitlist',
        },
        { status: 500 }
      )
    }
    
    // Send welcome email
    const emailResult = await sendWelcomeEmail(email, newSubscriber.id)
    
    return NextResponse.json(
      {
        success: true,
        message: emailResult.success 
          ? 'Successfully subscribed! Please check your email for next steps.'
          : 'Subscribed successfully, but email sending failed. We will contact you soon.',
        data: {
          subscriber_id: newSubscriber.id,
          email_sent: emailResult.success,
        },
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Waitlist subscription error:', error)
    
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again.',
        error: process.env.NODE_ENV === 'development' 
          ? (error instanceof Error ? error.message : 'Unknown error')
          : undefined,
      },
      { status: 500 }
    )
  }
}