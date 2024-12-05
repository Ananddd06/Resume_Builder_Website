import { Briefcase, GraduationCap, Award, Gem, FileText } from 'lucide-react';

export interface Template {
  id: string;
  title: string;
  description: string;
  icon: any;
  image: string;
  defaultHTML: string;
  premium?: boolean;
  price?: number;
}

export const templates: Template[] = [
  {
    id: 'professional',
    title: 'Professional',
    description: 'Perfect for experienced professionals',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400',
    defaultHTML: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume - Anand J</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
      color: #333;
      line-height: 1.6;
    }
    .container {
      max-width: 900px;
      margin: auto;
      padding: 20px;
      background: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .heading {
      text-align: center;
      margin-bottom: 20px;
    }
    .heading h1 {
      font-size: 2.5rem;
      margin: 0;
    }
    .heading p {
      font-size: 1rem;
      color: #555;
    }
    .section {
      margin-bottom: 20px;
    }
    .section h2 {
      margin-bottom: 10px;
      font-size: 1.5rem;
      color: #444;
      border-bottom: 2px solid #eee;
      padding-bottom: 5px;
    }
    .subheading {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .subheading h3 {
      margin: 0;
      font-size: 1.2rem;
    }
    .subheading span {
      font-size: 0.9rem;
      color: #777;
    }
    .list {
      margin: 0;
      padding-left: 20px;
    }
    .list li {
      margin-bottom: 5px;
    }
    .contact-links a {
      text-decoration: none;
      color: #0066cc;
    }
    .skills, .certificates, .interests {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .skills div, .certificates div, .interests div {
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="heading">
      <h1>Anand J</h1>
      <p>
        +91-9677166702 | 
        <a href="https://leetcode.com/u/getMaAnG/" class="contact-links">leetcode.com/u/getMaAnG</a> | 
        <a href="https://github.com/Ananddd06" class="contact-links">github.com/Ananddd06</a> | 
        <a href="https://linkedin.com/in/anandj06" class="contact-links">linkedin.com/in/anandj06</a>
      </p>
    </div>

    <div class="section">
      <h2>Education</h2>
      <div class="subheading">
        <h3>Rajalakshmi Engineering College</h3>
        <span>Aug 2020 – May 2024</span>
      </div>
      <p>Bachelor of Engineering – Electronics and Communication</p>
      <div class="subheading">
        <h3>Devi Academy Senior Secondary School</h3>
        <span>Aug 2018 – May 2020</span>
      </div>
      <p>Maths and Computer-Science</p>
    </div>

    <div class="section">
      <h2>Experience</h2>
      <div class="subheading">
        <h3>Larsen and Toubro</h3>
        <span>Jan 2024 – Apr 2024</span>
      </div>
      <p>Elv and Ict Design Internship, Chennai</p>
      <ul class="list">
        <li>Designed and integrated ELV systems (fire alarms, CCTV, access control, BMS) into the data center.</li>
        <li>Created engineering drawings and layouts using AutoCAD, ensuring compliance with standards.</li>
        <li>Planned and installed structured cabling (fiber optic and copper) for optimal data center communication.</li>
        <li>Prepared a Bill of Quantity based on technical specifications.</li>
      </ul>
    </div>

    <div class="section">
      <h2>Projects</h2>
      <div class="subheading">
        <h3>LeetCode Problem Solving Portal</h3>
        <span>Oct 2024</span>
      </div>
      <ul class="list">
        <li>Built a CLI-based system in Java with user registration, login, and problem-solving features.</li>
        <li>Implemented filtering by category and difficulty for LeetCode's top 150 problems.</li>
        <li>Integrated random problem selection with external LeetCode links.</li>
        <li>Applied OOP principles for scalable and maintainable code design.</li>
      </ul>
    </div>

    <div class="section">
      <h2>Technical Skills</h2>
      <div class="skills">
        <div><strong>Languages:</strong> Java, C++, Python, React-Native</div>
        <div><strong>Frameworks:</strong> React, Material-UI, Tailwind CSS, Clerk, Convex, API</div>
        <div><strong>Developer Tools:</strong> Git, VS Code, Visual Studio, IntelliJ</div>
      </div>
    </div>

    <div class="section">
      <h2>Certificates</h2>
      <div class="certificates">
        <div>Google Cybersecurity Professional Certificate (Coursera)</div>
        <div>Frontend Developer in Meta (Coursera)</div>
        <div>The Complete Ethical Hacking Course (Udemy)</div>
      </div>
    </div>

    <div class="section">
      <h2>Interests</h2>
      <div class="interests">
        <div>Travel</div>
        <div>Fitness</div>
        <div>Karate</div>
      </div>
    </div>
  </div>
</body>
</html>
`,
  },
  {
    id: 'executive',
    title: 'Executive Premium',
    description: 'Elegant design for senior executives',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400',
    premium: true,
    price: 19.99,
    defaultHTML: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Georgia', serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background: white;
      color: #2c3e50;
    }
    .resume {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
      border: 1px solid #e0e0e0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
      border-bottom: 3px double #2c3e50;
      padding-bottom: 20px;
    }
    .header h1 {
      font-size: 32px;
      margin: 0;
      color: #1a365d;
      letter-spacing: 3px;
    }
    .title {
      font-size: 20px;
      color: #4a5568;
      margin: 10px 0;
    }
    .contact-info {
      font-size: 15px;
      color: #4a5568;
    }
    .section {
      margin: 25px 0;
    }
    .section-title {
      font-size: 22px;
      color: #1a365d;
      border-bottom: 2px solid #cbd5e0;
      padding-bottom: 8px;
      margin-bottom: 15px;
    }
    .experience-item {
      margin-bottom: 20px;
    }
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .company {
      font-size: 18px;
      font-weight: bold;
      color: #2d3748;
    }
    .date {
      color: #718096;
      font-style: italic;
    }
    .position {
      font-size: 16px;
      color: #4a5568;
      font-style: italic;
      margin: 5px 0;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 8px;
      color: #4a5568;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 15px;
    }
    .skill-category {
      background: #f7fafc;
      padding: 15px;
      border-radius: 5px;
    }
    .skill-category h4 {
      margin: 0 0 10px 0;
      color: #2d3748;
    }
  </style>
</head>
<body>
  <!-- Executive template content here -->
</body>
</html>`,
  },
  {
    id: 'modern',
    title: 'Modern Premium',
    description: 'Contemporary design with unique layout',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=400',
    premium: true,
    price: 24.99,
    defaultHTML: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background: white;
      color: #333;
    }
    .resume {
      max-width: 800px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 30px;
    }
    .sidebar {
      background: #2c3e50;
      color: white;
      padding: 30px;
      min-height: 100vh;
    }
    .main-content {
      padding: 30px;
    }
    .profile-img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 0 auto 20px;
      display: block;
      border: 3px solid white;
    }
    .name {
      font-size: 24px;
      text-align: center;
      margin-bottom: 10px;
    }
    .title {
      font-size: 16px;
      text-align: center;
      color: #ecf0f1;
      margin-bottom: 30px;
    }
    .contact-info {
      margin-bottom: 30px;
    }
    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 14px;
    }
    .section {
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 20px;
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 5px;
      margin-bottom: 15px;
    }
    .experience-item {
      margin-bottom: 20px;
    }
    .company {
      font-weight: bold;
      font-size: 16px;
    }
    .position {
      color: #3498db;
      font-size: 14px;
      margin: 5px 0;
    }
    .date {
      font-size: 14px;
      color: #7f8c8d;
    }
    ul {
      padding-left: 20px;
      margin: 10px 0;
    }
    li {
      margin-bottom: 5px;
      font-size: 14px;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .skill {
      background: #3498db;
      color: white;
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <!-- Modern template content here -->
</body>
</html>`,
  },
  // ... (previous templates remain the same)
];