// Import necessary modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { Header } from '@/components/layout/Header';
import { LandingPage } from '@/pages/LandingPage';
import { TemplatesPage } from '@/pages/TemplatesPage';
import { EditorPage } from '@/pages/EditorPage';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { PaymentPage } from '@/pages/PaymentPage';
import { PricingSection } from '@/components/pricing/PricingSection';

// Fetch the Clerk Publishable Key from environment variables
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          {/* Common Header for all pages */}
          <Header />

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/editor/:templateId" element={<EditorPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ClerkProvider>
  );
}
