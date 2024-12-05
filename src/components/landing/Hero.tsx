import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Create an <span className="text-blue-600">ATS-Friendly</span> Resume
              <br />
              That Gets You Hired
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Build professional resumes that pass Applicant Tracking Systems and land you more interviews.
              Our AI-powered platform ensures your resume stands out to both robots and humans.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate('/templates')}>Get Started Free</Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/templates')}>View Templates</Button>
            </div>
            <div className="mt-8 flex justify-center gap-x-8">
              {['ATS-Optimized', 'Professional Templates', 'AI-Powered'].map((feature) => (
                <div key={feature} className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}