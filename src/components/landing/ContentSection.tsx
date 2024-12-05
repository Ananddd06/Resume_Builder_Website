import React from 'react';

export function ContentSection() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold text-black">
            Professional Resume Builder
          </h1>
          <h2 className="mt-4 text-xl text-gray-800">
            Ultimate Resume Builder
          </h2>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 text-left">
          <p className="text-lg font-sans text-black">
            Use tested and proven professional resume templates that match what
            employers look for. Powerful and precise tools at your fingertips.
            Easy and fast. Try it today for free.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 flex justify-center">
        <img
          src="https://images.ctfassets.net/14q5t4r3zqb4/5vlTS1mxB5picGLGfPQxno/4fefef54658561eae1769d0ad56fa6b8/Image__8_.png"
          alt="Resume Builder"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
