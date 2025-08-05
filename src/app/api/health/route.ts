import { NextResponse } from 'next/server'
import { checkDatabaseHealth } from '@/lib/supabase'
import { testEmailConnection } from '@/lib/email'

export async function GET() {
  try {
    // Check database health
    const databaseHealth = await checkDatabaseHealth()
    
    // Check email service health
    const emailHealth = await testEmailConnection()
    
    const healthStatus = {
      database: {
        healthy: databaseHealth.healthy,
        message: databaseHealth.message,
      },
      email: {
        healthy: emailHealth.success,
        message: emailHealth.message,
      },
      timestamp: new Date().toISOString(),
    }
    
    const overallHealthy = databaseHealth.healthy && emailHealth.success
    
    return NextResponse.json(
      {
        success: overallHealthy,
        message: overallHealthy ? 'All systems operational' : 'Some systems have issues',
        data: healthStatus,
      },
      { 
        status: overallHealthy ? 200 : 503,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    )
  } catch (error) {
    console.error('Health check failed:', error)
    
    return NextResponse.json(
      {
        success: false,
        message: 'Health check failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}