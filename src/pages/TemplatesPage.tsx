import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { templates } from '@/data/templates';
import { Button } from '@/components/ui/Button';

export function TemplatesPage() {
  const navigate = useNavigate();

  const handleTemplateClick = (template: typeof templates[0]) => {
    if (template.premium) {
      // In a real app, check if user has premium access
      window.location.hash = 'pricing';
      return;
    }
    navigate(`/editor/${template.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all hover:shadow-xl"
            onClick={() => handleTemplateClick(template)}
          >
            <div className="relative">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-48 object-cover"
              />
              {template.premium && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <Lock className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-semibold">Premium Template</p>
                    <p className="text-sm">${template.price}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <template.icon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{template.title}</h3>
                </div>
                {template.premium && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Premium
                  </span>
                )}
              </div>
              <p className="text-gray-600">{template.description}</p>
              {template.premium && (
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.hash = 'pricing';
                  }}
                >
                  Upgrade to Access
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}