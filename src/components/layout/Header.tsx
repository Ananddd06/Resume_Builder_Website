import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';

export function Header() {
  const location = useLocation(); // Hook to get the current route
  const { user } = useUser(); // Get user data from Clerk

  // Check if the current path is either '/pricing' or '/payment'
  if (location.pathname === '/pricing' || location.pathname === '/payment') {
    return null; // Don't render the header for pricing or payment pages
  }

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ResumeATS</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/templates"
              className="relative text-gray-600 hover:text-blue-600 font-medium transition duration-300"
            >
              Templates
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="#features"
              className="relative text-gray-600 hover:text-blue-600 font-medium transition duration-300 group"
            >
              Features
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 font-bold group-hover:w-full"></span>
            </a>
            <Link
              to="/pricing"
              className="relative text-gray-600 hover:text-blue-600 font-medium transition duration-300 group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Render Login/Signup Button based on SignedIn or SignedOut */}
          <SignedOut>
            <SignInButton>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition duration-300">
                Login / Signup
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center space-x-4">
              {/* Greeting message with the user's name */}
              <span className="text-gray-900 text-lg">Hi, {user?.firstName}!</span>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
