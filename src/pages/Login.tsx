import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple, FaLinkedin } from 'react-icons/fa';

export function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center">Welcome Back</h1>
        <p className="mt-2 text-gray-600 text-center">
          Log in using your social account or email and password.
        </p>
        <div className="mt-6 space-y-4">
          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
            <FaGoogle className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          {/* Apple Login Button */}
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300">
            <FaApple className="w-5 h-5" />
            <span>Continue with Apple</span>
          </button>

          {/* LinkedIn Login Button */}
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition duration-300">
            <FaLinkedin className="w-5 h-5" />
            <span>Continue with LinkedIn</span>
          </button>
        </div>

        <div className="mt-6">
          <hr className="border-gray-300" />
          <p className="text-center text-gray-600 mt-4">Or</p>
        </div>

        {/* Email and Password Login Form */}
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
