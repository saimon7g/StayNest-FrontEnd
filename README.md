# StayNest - Property Rental Platform

StayNest is a comprehensive property rental platform built with Next.js, offering multiple accommodation options including regular stays, meal-inclusive packages, and paying guest arrangements. The platform features sophisticated booking management, price negotiation, and meal planning systems.

## 🚀 Features

### Guest Features
- Property search with map integration
- Advanced filtering options
- Multiple accommodation types:
  - Standard stay
  - Stay with meals
  - Paying guest arrangements
- Booking management
  - Upcoming/previous bookings
  - Booking details
  - Cancellation system
- Price negotiation system
- Meal planning and selection
- Review and rating system

### Host Features
- Multi-step property registration
- Property listing management
- Service selection:
  - Standard accommodation
  - Meal-inclusive packages
  - Paying guest services
- Booking request handling
- Price negotiation dashboard
- Meal menu management
- Earnings tracking

### Core Features
- User authentication with token management
- Role-based access (Host/Guest)
- Real-time status tracking
- Interactive map integration
- Image handling
- Responsive design
- Secure payment processing

## 🛠️ Technical Stack

### Frontend
- **Framework:** Next.js 13+ (App Router)
- **UI Components:** 
  - Flowbite React
  - Tailwind CSS
  - React Icons
  - Custom components
- **State Management:**
  - React Context
  - Local state management
- **Maps:** MapTiler SDK
- **Date Handling:** React DatePicker
- **Forms:** Custom form implementations

### Authentication & API
- Token-based authentication
- Axios for API integration
- Custom API client configuration
- Session management

## 📋 Project Structure

```
staynest/
├── app/
│   ├── guest/             # Guest interfaces
│   │   ├── bookings/      # Booking management
│   │   ├── negotiations/  # Price negotiation
│   │   └── profile/       # User profile
│   ├── host/              # Host interfaces
│   │   ├── dashboard/     # Host dashboard
│   │   ├── properties/    # Property management
│   │   └── meals/         # Meal management
│   └── layout.js
├── components/
│   ├── Auth/             # Authentication components
│   ├── Booking/          # Booking components
│   ├── Maps/             # Map components
│   ├── Meals/            # Meal selection components
│   ├── Navigation/       # Navigation bars
│   └── UI/               # Reusable UI components
├── contexts/             # React contexts
├── API/                  # API integration
└── utils/               # Utility functions
```

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/staynest.git
cd staynest
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

## 🔐 Authentication System

- Token-based authentication
- Secure session management
- Role-based access control
- Automatic token refresh
- Persistent login state

## 💡 Key Components

### Navigation
- Separate navigation for hosts and guests
- User profile management
- Mode switching
- Search integration
- Notification system

### Booking System
- Multi-step booking process
- Meal selection interface
- Price calculation
- Booking modification
- Cancellation handling

### Negotiation System
- Real-time price negotiation
- Status tracking
- Automated notifications
- Counter-offer management
- Payment integration

### Meal Management
- Menu creation and management
- Meal scheduling
- Quantity management
- Price calculation
- Special requirements handling

## 📱 User Interfaces

### Guest Dashboard
- Booking overview
- Upcoming stays
- Previous bookings
- Active negotiations
- Profile management

### Host Dashboard
- Property listings
- Booking requests
- Active negotiations
- Meal management
- Earnings overview

## 🔄 API Integration

- Centralized API configuration
- Error handling
- Response transformation
- Authentication headers
- Request/response interceptors

## 🚀 Deployment

1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## ⚙️ Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS setup
- `postcss.config.js` - PostCSS configuration
- `axios.js` - API client setup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
























# StayNest - Setup and Running Guide

## Prerequisites

Before running StayNest, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn
- Git
- A code editor (VS Code recommended)
- Modern web browser (Chrome, Firefox, or Safari)

## Setting Up the Development Environment

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/staynest.git
cd staynest
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

This will install all required packages including:
- next
- react
- react-dom
- tailwindcss
- flowbite-react
- @maptiler/sdk
- axios
- react-datepicker
- react-icons
- react-dropzone

### 3. Environment Configuration

Create a `.env.local` file in the root directory:
```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_MAPTILER_API_KEY=your_maptiler_api_key

# Authentication
NEXT_PUBLIC_AUTH_TOKEN_KEY=authToken

# Map Configuration
NEXT_PUBLIC_MAP_DEFAULT_LAT=23.726
NEXT_PUBLIC_MAP_DEFAULT_LNG=90.394
NEXT_PUBLIC_MAP_DEFAULT_ZOOM=7
```

### 4. Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Access the application at: `http://localhost:3000`

## Project Structure Setup

Ensure your project structure matches the following:

```
staynest/
├── app/
│   ├── guest/
│   │   └── page.js
│   ├── host/
│   │   └── page.js
│   ├── layout.js
│   └── page.js
├── components/
│   ├── GuestSide/
│   │   ├── GuestNavBar.js
│   │   └── LoginForm.js
│   ├── HostSide/
│   │   ├── HostNavbar.js
│   │   └── ServiceSelection.js
│   └── Common/
│       ├── Map.js
│       └── Payment.js
├── API/
│   ├── auth.js
│   ├── GuestAPI.js
│   ├── HostAPI.js
│   └── axios.js
├── contexts/
│   ├── registrationContext.js
│   └── queryParamsContext.js
└── public/
    └── StaticImage/
        ├── logo1.png
        └── logo2.png
```

## Running Different Components

### 1. Authentication Setup
Ensure the authentication server is running:
```bash
# Check if authentication is working
curl http://localhost:8000/auth/login/
```

### 2. Map Integration
Set up MapTiler:
1. Get an API key from MapTiler
2. Add it to your environment variables
3. Test map functionality at `/guest` route

### 3. Image Handling
Set up image storage:
1. Create a `public/StaticImage` directory
2. Add required logos and images
3. Update image paths in components

## Testing the Application

### 1. Guest Flow
1. Visit `http://localhost:3000/guest`
2. Test user registration/login
3. Try property search
4. Test booking flow
5. Test meal selection

### 2. Host Flow
1. Visit `http://localhost:3000/host`
2. Register as a host
3. List a property
4. Test property management
5. Test booking management

## Common Issues and Solutions

### Authentication Issues
If token issues occur:
```javascript
// Clear local storage
localStorage.removeItem('authToken');
// Refresh the page
window.location.reload();
```

### Map Not Loading
Check MapTiler configuration:
```javascript
// In Map.js
maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
```

### API Connection Issues
Verify API configuration:
```javascript
// In axios.js
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
```

## Development Tips

1. Use the development server with hot reload:
```bash
npm run dev -- --turbo
```

2. Enable debug mode for detailed logs:
```bash
DEBUG=* npm run dev
```

3. Check for type errors:
```bash
npm run type-check
```

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm run start
```

3. Check for optimization opportunities:
```bash
npm run analyze
```

## Maintenance

Regular maintenance tasks:
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix automatic security issues
npm audit fix
```

## Support

For issues and support:
1. Check the common issues section
2. Review the API documentation
3. Check the component documentation
4. Contact the development team

## Additional Resources

- Backend API Documentation: `http://localhost:8000/api/docs`
- MapTiler Documentation: https://docs.maptiler.com/
- Flowbite React Components: https://flowbite-react.com/
- Next.js Documentation: https://nextjs.org/docs







