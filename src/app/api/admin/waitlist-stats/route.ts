import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    // Get total subscribers count
    const { count: totalSubscribers, error: countError } = await supabaseAdmin
      .from('waitlist_subscribers')
      .select('*', { count: 'exact', head: true })
    
    if (countError) {
      throw countError
    }
    
    // Get subscribers by status
    const { data: statusBreakdown, error: statusError } = await supabaseAdmin
      .from('waitlist_subscribers')
      .select('status')
    
    if (statusError) {
      throw statusError
    }
    
    // Count by status
    const statusCounts = statusBreakdown?.reduce((acc: Record<string, number>, row) => {
      acc[row.status] = (acc[row.status] || 0) + 1
      return acc
    }, {}) || {}
    
    // Get recent subscriptions (last 24 hours)
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    
    const { count: recentCount, error: recentError } = await supabaseAdmin
      .from('waitlist_subscribers')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', yesterday.toISOString())
    
    if (recentError) {
      throw recentError
    }
    
    // Get email statistics
    const { data: emailStats, error: emailError } = await supabaseAdmin
      .from('email_logs')
      .select('status')
    
    if (emailError) {
      console.error('Email stats error:', emailError)
    }
    
    const emailStatusCounts = emailStats?.reduce((acc: Record<string, number>, row) => {
      acc[row.status] = (acc[row.status] || 0) + 1
      return acc
    }, {}) || {}
    
    const stats = {
      subscribers: {
        total: totalSubscribers || 0,
        recent_24h: recentCount || 0,
        by_status: statusCounts,
      },
      emails: {
        total_sent: emailStats?.length || 0,
        by_status: emailStatusCounts,
      },
      last_updated: new Date().toISOString(),
    }
    
    return NextResponse.json(
      {
        success: true,
        message: 'Waitlist statistics retrieved successfully',
        data: stats,
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'private, max-age=300', // Cache for 5 minutes
        },
      }
    )
    
  } catch (error) {
    console.error('Admin stats error:', error)
    
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve waitlist statistics',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}