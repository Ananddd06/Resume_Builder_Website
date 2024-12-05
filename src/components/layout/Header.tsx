import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export function Header() {
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
            <a
              href="#pricing"
              className="relative text-gray-600 hover:text-blue-600 font-medium transition duration-300 group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <Link
            to="/login"
            className="rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login / Signup
          </Link>
        </div>
      </div>
    </header>
  );
}
