# Fatima Karahi Corner - Setup Guide

## 🚀 Quick Start (Current Status)

The application is now running in **demo mode** with placeholder credentials. You can:
- ✅ Browse all pages (Home, Menu, About, Contact, Reviews, Reservations)
- ✅ Add items to cart
- ✅ View the checkout flow
- ✅ See the UI/UX design
- ⚠️ Database features won't work (orders, reservations, reviews) until Supabase is configured
- ⚠️ AI Chatbot will show a demo message until OpenAI is configured
- ⚠️ Email confirmations won't send until email is configured

## 📋 Complete Setup Instructions

### 1. Set Up Supabase (Database)

**Step 1:** Create a Supabase Account
- Go to https://supabase.com
- Sign up for a free account
- Create a new project

**Step 2:** Run Database Schema
- In your Supabase dashboard, go to the SQL Editor
- Copy the contents of `lib/supabase/schema.sql`
- Paste and run it in the SQL Editor
- This creates all necessary tables (locations, menu_items, orders, reservations, reviews, etc.)

**Step 3:** Add Sample Data
- In the SQL Editor, copy the contents of `lib/supabase/seed.sql`
- Paste and run it
- This adds sample menu items, locations, and reviews

**Step 4:** Get Your Credentials
- Go to Project Settings → API
- Copy your **Project URL** (looks like: `https://xxxxx.supabase.co`)
- Copy your **anon/public key** (starts with `eyJ...`)
- Copy your **service_role key** (starts with `eyJ...`)

**Step 5:** Update `.env.local`
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. Set Up OpenAI (AI Chatbot)

**Step 1:** Create OpenAI Account
- Go to https://platform.openai.com
- Sign up or log in
- Add billing information (required for API access)

**Step 2:** Create API Key
- Go to API Keys section
- Click "Create new secret key"
- Copy the key (starts with `sk-...`)

**Step 3:** Update `.env.local`
```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

**Cost Estimate:** The chatbot uses GPT-4 Turbo. Typical cost is ~$0.01-0.05 per conversation.

### 3. Set Up Email (Order/Reservation Confirmations)

**Option A: Gmail (Easiest for Testing)**

**Step 1:** Enable 2-Factor Authentication on your Gmail account

**Step 2:** Create an App Password
- Go to Google Account → Security → 2-Step Verification → App passwords
- Generate a new app password for "Mail"
- Copy the 16-character password

**Step 3:** Update `.env.local`
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
EMAIL_FROM=Fatima Karahi Corner <your-email@gmail.com>
```

**Option B: SendGrid (Recommended for Production)**
- Sign up at https://sendgrid.com
- Get your API key
- Update email configuration accordingly

**Option C: AWS SES, Mailgun, etc.**
- Follow their respective setup guides
- Update SMTP settings in `.env.local`

### 4. Set Up Stripe (Payment Processing) - OPTIONAL

**Note:** Currently, the app only supports "Cash on Delivery". Stripe integration is prepared but not fully implemented.

**Step 1:** Create Stripe Account
- Go to https://stripe.com
- Sign up for an account

**Step 2:** Get API Keys
- Go to Developers → API Keys
- Copy Publishable key and Secret key

**Step 3:** Update `.env.local`
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
```

## 🧪 Testing the Application

### Test Without Real Services (Current State)
1. Browse the website - all pages work
2. Add items to cart - cart functionality works
3. Try the chatbot - shows demo message
4. Try checkout/reservations - will fail gracefully

### Test With Supabase Only
1. Complete Supabase setup above
2. Restart the dev server: `npm run dev`
3. Menu items will load from database
4. Orders and reservations will be saved
5. Reviews can be submitted
6. ⚠️ No email confirmations yet
7. ⚠️ Chatbot still in demo mode

### Test With Supabase + OpenAI
1. Complete both Supabase and OpenAI setup
2. Restart the dev server
3. AI Chatbot will work fully
4. Can answer questions about menu, hours, locations
5. Can help with reservations
6. ⚠️ No email confirmations yet

### Full Production Setup
1. Complete all setups (Supabase + OpenAI + Email)
2. Restart the dev server
3. All features work:
   - ✅ Menu from database
   - ✅ Orders with email confirmations
   - ✅ Reservations with email confirmations
   - ✅ AI Chatbot
   - ✅ Reviews system
   - ✅ Full functionality

## 🔄 Restart the Server

After updating `.env.local`, restart the development server:

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

## 📱 Accessing the Application

- **Local:** http://localhost:3000
- **Network:** http://172.20.10.2:3000 (accessible from other devices on your network)

## 🎨 Customization

### Update Restaurant Information
- Edit `lib/supabase/seed.sql` to change locations, menu items
- Edit `app/api/chat/route.ts` to update AI chatbot knowledge

### Update Branding/Colors
- Edit `tailwind.config.ts` to change color scheme
- Current colors: Red (primary), Yellow (secondary)

### Update Content
- Edit individual page files in `app/` directory
- Edit components in `components/` directory

## 🚨 Troubleshooting

### "supabaseUrl is required" Error
- Make sure `.env.local` exists in the root directory
- Restart the dev server after creating/editing `.env.local`

### Menu Items Not Showing
- Verify Supabase is set up correctly
- Check that seed data was run
- Check browser console for errors

### Chatbot Not Working
- Verify OpenAI API key is correct
- Check that you have billing enabled on OpenAI account
- Check API usage limits

### Emails Not Sending
- Verify SMTP credentials are correct
- For Gmail, ensure app password is used (not regular password)
- Check spam folder

### Build Errors
- Run `npm install --legacy-peer-deps` to reinstall dependencies
- Delete `.next` folder and restart: `rm -rf .next && npm run dev`

## 📞 Support

For issues with:
- **Next.js:** https://nextjs.org/docs
- **Supabase:** https://supabase.com/docs
- **OpenAI:** https://platform.openai.com/docs
- **Stripe:** https://stripe.com/docs

## 🎉 Next Steps

1. Set up Supabase to enable database features
2. Set up OpenAI to enable AI chatbot
3. Set up email to enable confirmations
4. Customize menu items and content
5. Deploy to production (Vercel recommended)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables from `.env.local`
5. Deploy!

Vercel automatically handles:
- SSL certificates
- CDN
- Automatic deployments on git push
- Environment variables
- Serverless functions

### Other Deployment Options
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Docker

---

**Current Status:** ✅ Application is running in demo mode at http://localhost:3000

**Next Step:** Set up Supabase to enable full database functionality!

