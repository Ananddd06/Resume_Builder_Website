// import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { ContentSection } from '@/components/landing/ContentSection';
import { VideoSection } from '@/components/landing/VideoSection';
import { CreateResume } from '@/components/landing/CreateResume';
// import { PricingSection } from '@/components/pricing/PricingSection';

export function LandingPage() {
  return (
    <>
      <Hero />
      {/* <PricingSection /> */}
      <ContentSection />
      <VideoSection />
      <CreateResume />
    </>
  );
}