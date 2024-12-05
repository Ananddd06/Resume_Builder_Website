import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import html2pdf from 'html2pdf.js';
import { templates } from '@/data/templates';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export function EditorPage() {
  const { templateId } = useParams();
  const template = templates.find(t => t.id === templateId);
  const [html, setHtml] = useState(template?.defaultHTML || '');
  const previewRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (template) {
      setHtml(template.defaultHTML);
    }
  }, [template]);

  const handleDownload = async () => {
    if (!previewRef.current) return;

    const iframe = previewRef.current;
    const element = iframe.contentDocument?.documentElement;
    
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-900">
          {template?.title} Template
        </h1>
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
      <div className="flex h-[calc(100%-3rem)]">
        <div className="w-1/2 h-full border-r border-gray-200">
          <Editor
            height="100%"
            defaultLanguage="html"
            theme="vs-light"
            value={html}
            onChange={(value) => setHtml(value || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: 'on',
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
        <div className="w-1/2 h-full bg-white">
          <iframe
            ref={previewRef}
            title="Resume Preview"
            srcDoc={html}
            className="w-full h-full"
            sandbox="allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}