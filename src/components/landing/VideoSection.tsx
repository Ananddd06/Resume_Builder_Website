// src/landing/VideoSection.tsx
import React from 'react';

export function VideoSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            Rise above the rest with professional resume templates
          </h1>
          <h2 className="mt-4 text-xl text-gray-700">
            Over 25 impressive designs
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Over 25 impressively designed and professionally-formatted resume templates let you stand out.
            Download your template to Word or PDF.
          </p>
        </div>

        {/* Right Side - Video */}
        <div className="md:w-1/2">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            loop
            autoPlay
            muted
            poster="https://example.com/poster-image.jpg" // Optional poster image for the video
          >
            <source
              src="https://videos.ctfassets.net/14q5t4r3zqb4/2tFOQklzoKvz1IesJ1jGyJ/8496cef9a9cb09833f4effc5bfcc54c1/templates-change.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
