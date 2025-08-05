-- Koti Waitlist Database Setup
-- Run this script in your Supabase SQL Editor

-- Create waitlist_subscribers table
CREATE TABLE IF NOT EXISTS waitlist_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'bounced')),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Create email_logs table
CREATE TABLE IF NOT EXISTS email_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subscriber_id UUID REFERENCES waitlist_subscribers(id) ON DELETE CASCADE,
    email_type VARCHAR(50) NOT NULL CHECK (email_type IN ('welcome', 'survey_reminder', 'confirmation')),
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'sent' CHECK (status IN ('sent', 'delivered', 'failed', 'bounced')),
    error_message TEXT
);

-- Create survey_responses table
CREATE TABLE IF NOT EXISTS survey_responses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subscriber_id UUID REFERENCES waitlist_subscribers(id) ON DELETE CASCADE,
    form_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist_subscribers(created_at);
CREATE INDEX IF NOT EXISTS idx_email_logs_subscriber ON email_logs(subscriber_id);
CREATE INDEX IF NOT EXISTS idx_email_logs_sent_at ON email_logs(sent_at);
CREATE INDEX IF NOT EXISTS idx_survey_responses_subscriber ON survey_responses(subscriber_id);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Create policies for service role access (full access)
CREATE POLICY "Service role can do everything on waitlist_subscribers" ON waitlist_subscribers
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do everything on email_logs" ON email_logs
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do everything on survey_responses" ON survey_responses
    FOR ALL USING (auth.role() = 'service_role');

-- Create policies for authenticated users (read-only for their own data)
CREATE POLICY "Users can read their own waitlist subscription" ON waitlist_subscribers
    FOR SELECT USING (email = auth.email());

-- Insert some sample data for testing (optional)
-- INSERT INTO waitlist_subscribers (email, status) VALUES 
--     ('test@example.com', 'pending'),
--     ('demo@kotibd.com', 'confirmed');

-- Create a view for basic analytics
CREATE OR REPLACE VIEW waitlist_analytics AS
SELECT 
    COUNT(*) as total_subscribers,
    COUNT(*) FILTER (WHERE status = 'pending') as pending_subscribers,
    COUNT(*) FILTER (WHERE status = 'confirmed') as confirmed_subscribers,
    COUNT(*) FILTER (WHERE status = 'bounced') as bounced_subscribers,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '24 hours') as subscriptions_last_24h,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as subscriptions_last_7d,
    MIN(created_at) as first_subscription,
    MAX(created_at) as latest_subscription
FROM waitlist_subscribers;

-- Grant access to the view
GRANT SELECT ON waitlist_analytics TO service_role;