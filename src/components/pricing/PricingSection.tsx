import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Free',
    price: 0,
    features: [
      'Basic Templates',
      'PDF Export',
      'ATS-Friendly Formats',
      'Basic Editor',
      'Limited Template Access',
    ],
    notIncluded: [
      'Premium Templates',
      'Advanced Editor Features',
      'Priority Support',
      'Custom Fonts',
    ],
  },
  {
    name: 'Premium',
    price: 24.99,
    features: [
      'All Free Features',
      'Premium Templates',
      'Advanced Editor Features',
      'Priority Support',
      'Custom Fonts',
      'Unlimited Downloads',
      'Regular Updates',
      'Multiple Formats',
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that's right for you</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price > 0 && <span className="text-gray-600">/month</span>}
                </div>
                
                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded?.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-400">
                      <X className="h-5 w-5 text-red-500 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  className="w-full mt-8"
                  variant={plan.name === 'Premium' ? 'primary' : 'outline'}
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Upgrade Now'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}