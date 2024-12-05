import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple, FaLinkedin } from 'react-icons/fa';

export function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Create an Account</h1>
        <p className="mt-2 text-gray-600 text-center">
          Sign up using your social account or email and password.
        </p>
        <div className="mt-6 space-y-4">
          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
            <FaGoogle className="h-5 w-5" />
            <span>Continue with Google</span>
          </button>

          {/* Apple Login Button */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300">
            <FaApple className="h-5 w-5" />
            <span>Continue with Apple</span>
          </button>

          {/* LinkedIn Login Button */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition duration-300">
            <FaLinkedin className="h-5 w-5" />
            <span>Continue with LinkedIn</span>
          </button>
        </div>
        <div className="mt-6">
          <hr className="border-gray-300" />
          <p className="text-center text-gray-600 mt-4">Or</p>
        </div>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
