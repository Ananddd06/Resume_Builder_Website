import React, { useState } from 'react';
import { useSignIn } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaApple, FaLinkedin } from 'react-icons/fa';

export function Login() {
  const { signIn, isLoaded, setActive } = useSignIn();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSocialSignIn = async (strategy: 'oauth_google' | 'oauth_apple' | 'oauth_linkedin') => {
    try {
      if (!isLoaded) return;
      setIsLoading(true);
      setError(null);
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/templates',
      });
    } catch (error) {
      console.error('Error with social sign in:', error);
      setError('An error occurred during social sign in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      if (!isLoaded) return;
      setIsLoading(true);
      setError(null);
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        navigate('/templates');
      } else {
        console.error('Unexpected result:', result);
        setError('An unexpected error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center">Welcome Back</h1>
        <p className="mt-2 text-gray-600 text-center">
          Log in using your social account or email and password.
        </p>
        {error && (
          <p className="mt-2 text-red-600 text-center">{error}</p>
        )}
        <div className="mt-6 space-y-4">
          {/* Google Login Button */}
          <button 
            onClick={() => handleSocialSignIn('oauth_google')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300"
            disabled={isLoading}
          >
            <FaGoogle className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          {/* Apple Login Button */}
          <button 
            onClick={() => handleSocialSignIn('oauth_apple')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300"
            disabled={isLoading}
          >
            <FaApple className="w-5 h-5" />
            <span>Continue with Apple</span>
          </button>

          {/* LinkedIn Login Button */}
          <button 
            onClick={() => handleSocialSignIn('oauth_linkedin')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition duration-300"
            disabled={isLoading}
          >
            <FaLinkedin className="w-5 h-5" />
            <span>Continue with LinkedIn</span>
          </button>
        </div>

        <div className="mt-6">
          <hr className="border-gray-300" />
          <p className="text-center text-gray-600 mt-4">Or</p>
        </div>

        {/* Email and Password Login Form */}
        <form onSubmit={handleEmailSignIn} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-full hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

