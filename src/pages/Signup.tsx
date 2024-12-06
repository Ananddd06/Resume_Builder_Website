import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignUp } from '@clerk/clerk-react';
import { FaGoogle, FaApple, FaLinkedin } from 'react-icons/fa';

export function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signUp, isLoaded } = useSignUp();
  const navigate = useNavigate();

  const handleSocialSignUp = async (strategy: 'oauth_google' | 'oauth_apple' | 'oauth_linkedin') => {
    try {
      if (!isLoaded) return;
      setIsLoading(true);
      setError(null);
      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/verify-email',
      });
    } catch (error) {
      console.error('Error with social sign up:', error);
      setError('An error occurred during social sign up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      setIsLoading(true);
      setError(null);
      const result = await signUp.create({
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ').slice(1).join(' '),
        emailAddress: email,
        password,
      });

      if (result.status === 'complete') {
        console.log('Sign up successful');
        navigate('/templates');
      } else {
        // Start the email verification process
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
        navigate('/verify-email');
      }
    } catch (err: any) {
      console.error('Error signing up:', err);
      setError(err.errors?.[0]?.message || 'An error occurred during sign up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Create an Account</h1>
        <p className="mt-2 text-gray-600 text-center">
          Sign up using your social account or email and password.
        </p>
        {error && (
          <p className="mt-2 text-red-600 text-center">{error}</p>
        )}
        <div className="mt-6 space-y-4">
          <button 
            onClick={() => handleSocialSignUp('oauth_google')}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            disabled={isLoading || !isLoaded}
          >
            <FaGoogle className="h-5 w-5" />
            <span>Continue with Google</span>
          </button>

          <button 
            onClick={() => handleSocialSignUp('oauth_apple')}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300 disabled:opacity-50"
            disabled={isLoading || !isLoaded}
          >
            <FaApple className="h-5 w-5" />
            <span>Continue with Apple</span>
          </button>

          <button 
            onClick={() => handleSocialSignUp('oauth_linkedin')}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition duration-300 disabled:opacity-50"
            disabled={isLoading || !isLoaded}
          >
            <FaLinkedin className="h-5 w-5" />
            <span>Continue with LinkedIn</span>
          </button>
        </div>
        <div className="mt-6">
          <hr className="border-gray-300" />
          <p className="text-center text-gray-600 mt-4">Or</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              required
              disabled={isLoading || !isLoaded}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
              disabled={isLoading || !isLoaded}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="Create a password"
              required
              disabled={isLoading || !isLoaded}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !isLoaded}
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-full hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
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

