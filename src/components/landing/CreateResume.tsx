// src/landing/CreateResume.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

export function CreateResume() {
  return (
    <>
      <section className="bg-blue-100 py-16 relative">
        {/* Image as Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(https://d.novoresume.com/images/landing_page/wave-with-people@2x.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10">
          {/* Left Side */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-gray-900">
              Our resume builder is your professional advantage
            </h1>
            <Link to="/templates" className="mt-8 inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              Create a Resume
            </Link>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 text-left">
            <p className="text-lg text-gray-700">
              Apply with confidence and see immediate improvements in your job search with a fast, powerful and easy-to-use resume builder designed to land you the job!
            </p>
          </div>
        </div>
      </section>

      {/* Dark Background Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&#169; 2024 Copyright AnandJ. Created by Anand</p>
        </div>
      </footer>
    </>
  );
}
