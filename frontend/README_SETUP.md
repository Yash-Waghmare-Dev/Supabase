# Supabase Authentication Project

A simple React/TypeScript application demonstrating Supabase authentication with email confirmation and image upload functionality.

## Features

- ✅ User Registration with email confirmation
- ✅ User Login/Logout
- ✅ Protected Dashboard route
- ✅ Image upload functionality
- ✅ Modern, responsive UI

## Setup Instructions

### 1. Supabase Project Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Once your project is created, go to Settings > API
3. Copy your `Project URL` and `anon public` key

### 2. Configure Environment

1. Open `src/lib/supabase.ts`
2. Replace the placeholder values:
   ```typescript
   const supabaseUrl = 'YOUR_SUPABASE_URL'
   const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'
   ```

### 3. Set up Storage Bucket (for image uploads)

1. In your Supabase dashboard, go to Storage
2. Create a new bucket called `images`
3. Set the bucket to be public or configure RLS policies as needed

### 4. Configure Email Authentication

1. In your Supabase dashboard, go to Authentication > Settings
2. Configure your email templates and SMTP settings
3. Make sure email confirmation is enabled

### 5. Run the Application

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── LoginForm.tsx       # Login form component
│   ├── RegisterForm.tsx    # Registration form component
│   ├── Dashboard.tsx       # Protected dashboard with image upload
│   └── ProtectedRoute.tsx  # Route protection wrapper
├── contexts/
│   └── AuthContext.tsx     # Authentication context provider
├── lib/
│   └── supabase.ts        # Supabase client configuration
├── App.tsx                # Main app with routing
└── App.css               # Styles
```

## Usage

1. **Register**: Create a new account with email/password
2. **Email Confirmation**: Check your email and click the confirmation link
3. **Login**: Sign in with your confirmed credentials
4. **Dashboard**: Upload and view images in your personal dashboard

## Technologies Used

- React 19
- TypeScript
- Vite
- Supabase
- React Router DOM

## Notes

- The app uses email confirmation for security
- Images are stored in Supabase Storage
- All routes except login/register are protected
- Responsive design works on mobile and desktop
