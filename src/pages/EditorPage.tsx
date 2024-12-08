import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import html2pdf from 'html2pdf.js';
import { templates } from '@/data/templates';
import { Button } from '@/components/ui/Button';
import { Download, RotateCw, List, ChevronRight, ChevronLeft } from 'lucide-react';

const synonymLibrary = {
  team: ["collaborative professional", "group contributor"],
  managed: ["oversaw", "supervised", "directed"],
  developed: ["created", "engineered", "designed"],
};

const atsKeywords = ["team player", "leadership", "data-driven", "problem-solving", "collaborative"];

const skillsFromJob = [
  "teamwork", "communication", "problem-solving", "JavaScript", "React", "Python", "machine learning", "leadership"
];

export function EditorPage() {
  const { templateId } = useParams();
  const template = templates.find((t) => t.id === templateId);
  const [html, setHtml] = useState(template?.defaultHTML || '');
  const [jobDescription, setJobDescription] = useState('');
  const [atsScore, setAtsScore] = useState(0);
  const [isRephrasePanelOpen, setRephrasePanelOpen] = useState(false);
  const [isAtsPanelOpen, setAtsPanelOpen] = useState(false);

  const previewRef = useRef(null);

  // Update content and recalculate ATS score when template or content changes
  useEffect(() => {
    if (template) {
      setHtml(template.defaultHTML);
    }
  }, [template]);

  // Function to calculate ATS score based on job description and content
  const calculateAtsScore = (content, jobDesc) => {
    const contentLower = content.toLowerCase();
    const jobDescLower = jobDesc.toLowerCase();

    const matchedSkills = skillsFromJob.filter((skill) => contentLower.includes(skill.toLowerCase()));
    const skillMatchPercentage = (matchedSkills.length / skillsFromJob.length) * 100;
    setAtsScore(isNaN(skillMatchPercentage) ? 0 : skillMatchPercentage);
  };

  // Handle content change in the editor
  const handleEditorChange = (value) => {
    setHtml(value || '');  // Update HTML state
    calculateAtsScore(value, jobDescription);  // Recalculate ATS score whenever content changes
  };

  // Handle rephrasing of a specific word
  const handleRephrase = (word, replacement) => {
    const updatedHtml = html.replace(new RegExp(`\\b${word}\\b`, 'g'), replacement);
    setHtml(updatedHtml);  // Update the HTML state with rephrased text
    calculateAtsScore(updatedHtml, jobDescription);  // Recalculate ATS score after rephrasing
  };

  // Function to handle PDF download of the resume
  const handleDownload = async () => {
    if (!previewRef.current) return;
    const iframe = previewRef.current;
    const element = iframe.contentDocument?.documentElement;
    const opt = {
      margin: 0.5,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navbar */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">{template?.title || "Resume Editor"}</h1>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="text-gray-200 hover:text-white transition"
            onClick={() => setRephrasePanelOpen(!isRephrasePanelOpen)}
          >
            <RotateCw className="h-5 w-5" /> Rephrasing
          </Button>
          <Button
            variant="ghost"
            className="text-gray-200 hover:text-white transition"
            onClick={() => setAtsPanelOpen(!isAtsPanelOpen)}
          >
            <List className="h-5 w-5" /> ATS Panel
          </Button>
          <Button
            variant="default"
            className="bg-indigo-600 hover:bg-indigo-700 transition"
            onClick={handleDownload}
          >
            <Download className="h-5 w-5" /> Download PDF
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Left - Editor */}
        <div className="w-1/2 bg-gray-800 border-r border-gray-700">
          <Editor
            height="100%"
            defaultLanguage="html"
            theme="vs-dark"
            value={html} // Ensure this is linked to the state
            onChange={handleEditorChange} // Update on change
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: 'on',
              automaticLayout: true,
              cursorStyle: 'line',
              smoothScrolling: true,
            }}
          />
        </div>

        {/* Right - Preview */}
        <div className="w-1/2 relative bg-gray-900 shadow-lg">
          <iframe
            ref={previewRef}
            title="Resume Preview"
            srcDoc={html}  // This will update the preview in real-time
            className="w-full h-full"
            sandbox="allow-same-origin"
          />
        </div>
      </div>

      {/* Panels */}
      {isAtsPanelOpen && (
        <div className="absolute top-0 right-0 h-full w-80 bg-gray-800 text-white p-4 shadow-md">
          <Button onClick={() => setAtsPanelOpen(false)} className="text-white">
            <ChevronRight />
          </Button>
          <h2 className="text-xl font-bold mb-4">ATS Scoring Panel</h2>
          <p className="mb-2 text-gray-400">
            Based on matching keywords in the job description and resume content.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">ATS Score:</h3>
            <div className="w-full bg-gray-700 rounded-full overflow-hidden h-5 mt-2">
              <div
                style={{ width: `${atsScore}%` }}
                className={`h-full ${atsScore === 100 ? 'bg-green-500' : 'bg-red-500'} rounded-full`}
              />
            </div>
            <p className="text-center mt-2 text-gray-300">{atsScore}%</p>
          </div>
          <h3 className="text-lg font-semibold">Matched Keywords:</h3>
          <ul className="mt-2 list-disc list-inside text-gray-300">
            {atsKeywords
              .filter((keyword) => html.toLowerCase().includes(keyword))
              .map((keyword, idx) => (
                <li key={idx}>{keyword}</li>
              ))}
          </ul>
        </div>
      )}

      {isRephrasePanelOpen && (
        <div className="absolute top-0 left-0 h-full w-80 bg-gray-800 text-white p-4 shadow-md">
          <Button onClick={() => setRephrasePanelOpen(false)} className="text-white">
            <ChevronLeft />
          </Button>
          <h2 className="text-xl font-bold mb-4">Rephrasing Suggestions</h2>
          <div>
            {Object.keys(synonymLibrary).map((word) => (
              <div key={word} className="bg-gray-700 p-2 rounded-md shadow-sm hover:bg-gray-600">
                <p className="text-sm font-medium">{word}</p>
                <div className="flex gap-2 mt-1">
                  {synonymLibrary[word].map((replacement, i) => (
                    <button
                      key={i}
                      className="text-sm text-blue-400 hover:underline"
                      onClick={() => handleRephrase(word, replacement)}
                    >
                      {replacement}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default EditorPage;
 