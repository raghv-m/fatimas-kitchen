# Fatima Karahi Corner - Full-Stack Restaurant Web Application

A modern, full-featured restaurant website for Fatima Karahi Corner, featuring online ordering, reservations, AI-powered customer service, and comprehensive admin management.

## 🌟 Features

### Customer-Facing Features
- **Home Page**: Hero section, featured dishes, customer reviews, statistics, and location information
- **Interactive Menu**: Browse menu by category, search, filter (vegetarian, spicy), with detailed item information
- **Online Ordering**: Shopping cart, checkout process, payment integration, order tracking
- **Reservations**: AI-assisted table booking system with email confirmations
- **Reviews**: Customer testimonials and review submission
- **Contact**: Location details, hours, Google Maps integration
- **AI Chatbot**: Intelligent assistant for customer inquiries, menu recommendations, and reservations

### Admin Features
- **Dashboard**: Overview of orders, reservations, and key metrics
- **Order Management**: View, update status, and manage all orders
- **Reservation Management**: Confirm, modify, or cancel reservations
- **Menu Management**: Add, edit, remove menu items and categories
- **Review Moderation**: Approve and feature customer reviews
- **Analytics**: Sales reports, popular items, customer insights

### Technical Features
- **Fast Delivery Tracking**: Real-time order status updates
- **Email Notifications**: Automated confirmations for orders and reservations
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Meta tags, semantic HTML, fast loading
- **Secure**: Row-level security, authentication, data validation

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Supabase** - PostgreSQL database, authentication, real-time subscriptions
- **OpenAI GPT-4** - AI chatbot for customer service
- **Nodemailer** - Email notifications
- **Stripe** - Payment processing

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Supabase account
- OpenAI API key
- Stripe account (for payments)
- Email service (Gmail, SendGrid, etc.)

### Setup Steps

1. **Clone the repository**
   ```bash
   cd fatimas-kitchen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project at https://supabase.com
   - Run the database schema:
     ```bash
     # Copy the contents of lib/supabase/schema.sql
     # Paste and execute in Supabase SQL Editor
     ```
   - Run the seed data:
     ```bash
     # Copy the contents of lib/supabase/seed.sql
     # Paste and execute in Supabase SQL Editor
     ```

4. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your credentials:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

   # Email (Nodemailer)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   EMAIL_FROM=fatimakarahi@gmail.com

   # OpenAI
   OPENAI_API_KEY=your_openai_api_key

   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
fatimas-kitchen/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── chat/            # AI chatbot endpoint
│   │   ├── orders/          # Order management
│   │   ├── reservations/    # Reservation management
│   │   ├── menu/            # Menu data
│   │   └── categories/      # Menu categories
│   ├── menu/                # Menu page
│   ├── cart/                # Shopping cart
│   ├── checkout/            # Checkout process
│   ├── reservations/        # Reservation booking
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── reviews/             # Reviews page
│   ├── admin/               # Admin dashboard
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/             # Layout components (Navbar, Footer)
│   ├── home/               # Home page components
│   ├── menu/               # Menu components
│   ├── cart/               # Cart components
│   └── admin/              # Admin components
├── lib/                     # Utilities and configurations
│   ├── supabase/           # Supabase client and schemas
│   ├── store/              # Zustand stores
│   ├── types.ts            # TypeScript types
│   ├── utils.ts            # Utility functions
│   └── email.ts            # Email templates and sending
├── public/                  # Static assets
├── .env.local.example       # Environment variables template
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🗄️ Database Schema

### Main Tables
- **locations** - Restaurant locations (Calgary, Edmonton)
- **menu_categories** - Menu categories (Karahi, BBQ, Curries, etc.)
- **menu_items** - Individual menu items with pricing and details
- **customers** - Customer information
- **orders** - Order records with status tracking
- **order_items** - Items in each order
- **reservations** - Table reservations
- **reviews** - Customer reviews and ratings
- **chat_conversations** - AI chatbot conversation history
- **chat_messages** - Individual chat messages
- **admin_users** - Admin user accounts

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
- **Netlify**: Configure build command and environment variables
- **AWS Amplify**: Set up hosting and environment
- **Docker**: Use the included Dockerfile (if created)

## 🔐 Security

- Row-Level Security (RLS) enabled on all Supabase tables
- API routes protected with authentication
- Input validation using Zod schemas
- Secure payment processing with Stripe
- Environment variables for sensitive data

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `EMAIL_PASSWORD`

### Other Providers
- SendGrid, Mailgun, AWS SES supported
- Update `EMAIL_HOST` and `EMAIL_PORT` accordingly

## 🤖 AI Chatbot

The AI assistant can:
- Answer questions about menu, hours, locations
- Help customers make reservations
- Provide menu recommendations
- Handle customer service inquiries
- Learn from interactions to improve responses

## 📱 Mobile App

The codebase is ready for mobile app development using:
- React Native with Expo
- Same backend API endpoints
- Shared TypeScript types

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📈 Future Enhancements

- [ ] Loyalty program and rewards
- [ ] Gift cards
- [ ] Catering orders
- [ ] Multi-language support
- [ ] Push notifications
- [ ] Advanced analytics dashboard
- [ ] Inventory management
- [ ] Staff scheduling
- [ ] Customer accounts with order history

## 📞 Support

For questions or issues:
- Email: fatimakarahi@gmail.com
- Calgary: +1 403-280-0009
- Edmonton: +1 780-705-5000

## 📄 License

© 2024 Fatima Karahi Corner. All rights reserved.

