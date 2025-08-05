import { z } from 'zod'

// Waitlist subscription validation schema
export const waitlistSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .max(255, 'Email is too long'),
})

// Health check response schema
export const healthCheckSchema = z.object({
  database: z.object({
    healthy: z.boolean(),
    message: z.string(),
  }),
  email: z.object({
    healthy: z.boolean(),
    message: z.string(),
  }),
  timestamp: z.string(),
})

// API response schemas
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.any().optional(),
  error: z.string().optional(),
})

// Types inferred from schemas
export type WaitlistInput = z.infer<typeof waitlistSchema>
export type HealthCheck = z.infer<typeof healthCheckSchema>
export type ApiResponse = z.infer<typeof apiResponseSchema>

// Validation helper functions
export function validateEmail(email: string): { valid: boolean; error?: string } {
  try {
    waitlistSchema.parse({ email })
    return { valid: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        valid: false,
        error: error.issues[0]?.message || 'Invalid email format'
      }
    }
    return {
      valid: false,
      error: 'Validation failed'
    }
  }
}

// Rate limiting helper (simple in-memory implementation)
const emailSubmissions = new Map<string, number[]>()

export function checkRateLimit(email: string, maxAttempts: number = 3, windowMs: number = 15 * 60 * 1000): boolean {
  const now = Date.now()
  const submissions = emailSubmissions.get(email) || []
  
  // Remove old submissions outside the time window
  const recentSubmissions = submissions.filter(time => now - time < windowMs)
  
  if (recentSubmissions.length >= maxAttempts) {
    return false // Rate limit exceeded
  }
  
  // Add current submission
  recentSubmissions.push(now)
  emailSubmissions.set(email, recentSubmissions)
  
  return true // Within rate limit
}

// Clean up old rate limit entries (call periodically)
export function cleanupRateLimit(): void {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  
  for (const [email, submissions] of emailSubmissions.entries()) {
    const recentSubmissions = submissions.filter(time => now - time < windowMs)
    if (recentSubmissions.length === 0) {
      emailSubmissions.delete(email)
    } else {
      emailSubmissions.set(email, recentSubmissions)
    }
  }
}