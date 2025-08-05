import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client for public operations (anonymous)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client for server-side operations (service role)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)

// Database types
export interface WaitlistSubscriber {
  id: string
  email: string
  created_at: string
  status: 'pending' | 'confirmed' | 'bounced'
  metadata?: Record<string, any>
}

export interface EmailLog {
  id: string
  subscriber_id: string
  email_type: 'welcome' | 'survey_reminder' | 'confirmation'
  sent_at: string
  status: 'sent' | 'delivered' | 'failed' | 'bounced'
  error_message?: string
}

export interface SurveyResponse {
  id: string
  subscriber_id: string
  form_data: Record<string, any>
  submitted_at: string
}

// Database health check
export async function checkDatabaseHealth(): Promise<{ healthy: boolean; message: string }> {
  try {
    const { data, error } = await supabase
      .from('waitlist_subscribers')
      .select('count')
      .limit(1)

    if (error) {
      return {
        healthy: false,
        message: `Database connection failed: ${error.message}`
      }
    }

    return {
      healthy: true,
      message: 'Database connection successful'
    }
  } catch (error) {
    return {
      healthy: false,
      message: `Database health check failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}