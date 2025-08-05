import { track } from '@vercel/analytics';

/**
 * Analytics utility functions for Koti Landing Page
 * Provides consistent event tracking across components
 */

export interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

// Page View Events
export const trackPageView = (page: string, language: string, additionalProps?: EventProperties) => {
  track('Page View', {
    page,
    language,
    timestamp: new Date().toISOString(),
    ...additionalProps
  });
};

// User Interaction Events
export const trackLanguageSwitch = (fromLang: string, toLang: string, page: string) => {
  track('Language Switch', {
    from: fromLang,
    to: toLang,
    page,
    timestamp: new Date().toISOString()
  });
};

export const trackScrollSection = (section: string, page: string, language: string) => {
  track('Section View', {
    section,
    page,
    language,
    timestamp: new Date().toISOString()
  });
};

export const trackCTAClick = (ctaType: string, location: string, page: string, language: string) => {
  track('CTA Click', {
    cta_type: ctaType,
    location,
    page,
    language,
    timestamp: new Date().toISOString()
  });
};

// Waitlist Events
export const trackWaitlistFormStart = (page: string, language: string, emailDomain?: string) => {
  track('Waitlist Form Started', {
    page,
    language,
    email_domain: emailDomain || 'unknown',
    timestamp: new Date().toISOString()
  });
};

export const trackWaitlistSuccess = (
  page: string, 
  language: string, 
  subscriberId: string, 
  emailSent: boolean,
  emailDomain?: string
) => {
  track('Waitlist Signup Success', {
    page,
    language,
    subscriber_id: subscriberId,
    email_sent: emailSent,
    email_domain: emailDomain || 'unknown',
    timestamp: new Date().toISOString()
  });
};

export const trackWaitlistError = (page: string, language: string, errorType: string, errorMessage?: string) => {
  track('Waitlist Signup Error', {
    page,
    language,
    error_type: errorType,
    error_message: errorMessage || 'Unknown error',
    timestamp: new Date().toISOString()
  });
};

// Survey Events
export const trackSurveyClick = (page: string, language: string, surveySource: string) => {
  track('Survey Link Click', {
    page,
    language,
    source: surveySource,
    timestamp: new Date().toISOString()
  });
};

// Navigation Events
export const trackNavigation = (from: string, to: string, method: string, language: string) => {
  track('Navigation', {
    from,
    to,
    method, // 'menu', 'cta', 'scroll', 'url'
    language,
    timestamp: new Date().toISOString()
  });
};

// Mobile Events
export const trackMobileViewport = (deviceType: string, screenSize: string, userAgent: string) => {
  track('Mobile Viewport Force', {
    device_type: deviceType,
    screen_size: screenSize,
    user_agent: userAgent.substring(0, 100), // Limit length
    timestamp: new Date().toISOString()
  });
};

// Performance Events
export const trackPerformance = (metric: string, value: number, page: string) => {
  track('Performance Metric', {
    metric,
    value,
    page,
    timestamp: new Date().toISOString()
  });
};

// Error Events
export const trackError = (errorType: string, errorMessage: string, page: string, context?: EventProperties) => {
  track('Error', {
    error_type: errorType,
    error_message: errorMessage.substring(0, 200), // Limit length
    page,
    timestamp: new Date().toISOString(),
    ...context
  });
};

// Business Metrics
export const trackBusinessMetric = (metric: string, value: number | string, category: string, additionalProps?: EventProperties) => {
  track('Business Metric', {
    metric,
    value,
    category,
    timestamp: new Date().toISOString(),
    ...additionalProps
  });
};