# Koti Backend Setup Guide

## 🚀 Quick Start

Your backend system has been implemented! Follow these steps to complete the setup:

## Step 1: Complete Environment Configuration

1. **Open your `.env.local` file** and replace the placeholder values with your actual Supabase credentials:

```env
# Replace these placeholder values with your actual Supabase credentials:
DATABASE_URL=postgresql://postgres:YOUR_ACTUAL_PASSWORD@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_ANON_KEY=your-actual-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-actual-service-role-key
```

**How to get these values:**
- Go to your Supabase dashboard
- Navigate to Settings → API
- Copy the Project URL, Project API keys
- For DATABASE_URL, go to Settings → Database → Connection string

## Step 2: Set Up Database Tables

1. **Go to your Supabase dashboard**
2. **Navigate to SQL Editor**
3. **Copy and paste the entire content from `/database/setup.sql`**
4. **Click "Run" to create all tables and indexes**

This will create:
- `waitlist_subscribers` table
- `email_logs` table  
- `survey_responses` table
- All necessary indexes and security policies

## Step 3: Test Your Setup

### Test Database Connection
```bash
curl http://localhost:3000/api/health
```

**Expected Response (if working):**
```json
{
  "success": true,
  "message": "All systems operational",
  "data": {
    "database": {
      "healthy": true,
      "message": "Database connection successful"
    },
    "email": {
      "healthy": true,
      "message": "SMTP connection successful"
    }
  }
}
```

### Test Waitlist Subscription
```bash
curl -X POST http://localhost:3000/api/waitlist/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed! Please check your email for next steps.",
  "data": {
    "subscriber_id": "uuid-here",
    "email_sent": true
  }
}
```

## Step 4: Create Google Form (Optional)

1. **Go to Google Forms**: https://forms.google.com
2. **Create a new form titled**: "Koti Credit Bureau - User Interest Survey"
3. **Add these recommended questions**:
   - Name (Short answer)
   - Phone Number (Short answer)
   - Location/City (Short answer)
   - Current Banking Relationship (Multiple choice)
   - Monthly Income Range (Multiple choice)
   - Credit Needs (Checkboxes: Personal loan, Credit card, Mortgage, Business loan, etc.)
   - How did you hear about Koti? (Multiple choice)

4. **Get the shareable link**:
   - Click "Send" → Link icon
   - Copy the link
   - Add it to your `.env.local` as `GOOGLE_FORM_URL`

## Step 5: Frontend Integration

The frontend integration is ready! The About Us page form will now:
- ✅ Validate email addresses
- ✅ Submit to your backend API
- ✅ Show success/error messages
- ✅ Send welcome emails automatically
- ✅ Store subscribers in database

## 📊 Available API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/health` | GET | Check system health |
| `/api/waitlist/subscribe` | POST | Subscribe to waitlist |
| `/api/admin/waitlist-stats` | GET | Get subscriber statistics |

## 🔧 Troubleshooting

### Database Issues
- **Error: "relation does not exist"** → Run the SQL setup script
- **Error: "authentication failed"** → Check your DATABASE_URL credentials

### Email Issues  
- **Error: "SMTP connection failed"** → Verify your Gmail app password
- **Error: "authentication failed"** → Enable 2FA and generate app password

### Common Fixes
1. **Restart your dev server** after changing `.env.local`
2. **Check Supabase dashboard** for any service outages
3. **Verify Gmail SMTP settings** in your Google account

## 📈 Monitoring & Analytics

### View Subscriber Stats
```bash
curl http://localhost:3000/api/admin/waitlist-stats
```

### Database Analytics
Check the `waitlist_analytics` view in your Supabase dashboard for real-time stats.

## 🔐 Security Features

✅ **Rate Limiting**: Max 3 attempts per email per 15 minutes  
✅ **Email Validation**: Server-side validation with Zod  
✅ **SQL Injection Protection**: Parameterized queries  
✅ **Row Level Security**: Enabled on all tables  
✅ **Input Sanitization**: All inputs validated and sanitized  

## 🎯 Next Steps

1. **Complete the Supabase setup** (Step 1-2)
2. **Test the endpoints** (Step 3)  
3. **Create your Google Form** (Step 4)
4. **Your waitlist is live!** 🎉

## 💡 Features Included

- **Automatic Welcome Emails** with professional HTML templates
- **Duplicate Prevention** - won't spam existing subscribers  
- **Email Logging** - track delivery success/failures
- **Rate Limiting** - prevent spam and abuse
- **Admin Statistics** - monitor your waitlist growth
- **Survey Integration** - ready for Google Forms
- **Mobile Responsive** - works on all devices
- **Error Handling** - graceful failure handling

Your backend is production-ready! Just complete the environment setup and you're good to go! 🚀