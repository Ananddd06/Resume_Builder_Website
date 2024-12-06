import { Briefcase, Gem, FileText } from 'lucide-react';
import { BsBalloon } from 'react-icons/bs';
import { RxResume } from 'react-icons/rx';

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
    id: 'Beginer Friendly',
    title: 'Beginer Resume',
    description: 'This is a simple way to generate your resume.',
    icon: Briefcase,
    image: 'https://writelatex.s3.amazonaws.com/published_ver/34334.jpeg?X-Amz-Expires=14400&X-Amz-Date=20241206T121841Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20241206/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=51d9408ddbb1a248e0ea2bb67c2123b90809b51e8d83f6da1f16b201118a0932',
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f5f7fa;
                color: #333;
                line-height: 1.6;
            }
            .container {
                max-width: 1200px;
                margin: 40px auto;
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                display: flex;
                padding: 30px;
            }
            .left-section, .right-section {
                flex: 1;
                padding: 20px;
            }
            .left-section {
                border-right: 2px solid #e5e5e5;
            }
            .header {
                font-size: 28px;
                font-weight: bold;
                color: #333;
                margin-bottom: 20px;
            }
            .contact-info, .section-title {
                font-weight: bold;
                color: #555;
                margin-bottom: 15px;
                font-size: 16px;
            }
            .section-title {
                color: #007bff;
                font-size: 20px;
                border-bottom: 2px solid #007bff;
                display: inline-block;
                padding-bottom: 5px;
                margin-bottom: 20px;
            }
            .edu-item, .exp-item, .project-item, .achievement-item, .skill-item {
                margin-bottom: 20px;
            }
            .title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .details {
                font-size: 14px;
                color: #555;
                margin-top: 5px;
            }
            a {
                color: #007bff;
                text-decoration: underline;
            }
            .skills, .tools, .achievements, .links {
                margin-bottom: 20px;
            }
            ul {
                padding-left: 20px;
            }
            li {
                margin-bottom: 5px;
            }
            .links a {
                color: #007bff;
                text-decoration: underline;
                font-size: 14px;
            }
            /* Alignment and Equal Spacing */
            .container > div {
                padding: 20px;
            }
            .right-section {
                padding-left: 40px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <!-- Left Section -->
            <div class="left-section">
                <div class="header">Your Name</div>
                <div class="contact-info">📧 Gmail: yourmail4@gmail.com</div>
                <div class="contact-info">📱 Contact: +91 98xxxxxx10</div>
                <div class="contact-info">📍 Location: Place, Country</div>
                
                <div class="education">
                    <div class="section-title">EDUCATION</div>
                    <div class="edu-item">
                        <div class="title">Your Institution Name — B.Tech/M.Tech</div>
                        <div class="details">From date to date</div>
                        <div class="details">Specialization: Artificial Intelligence and Machine Learning</div>
                        <div class="details">GPA: 10.0</div>
                    </div>
                </div>
    
                <div class="experience">
                    <div class="section-title">EXPERIENCE</div>
                    <div class="exp-item">
                        <div class="title">Title of your experience</div>
                        <div class="details">From date to date</div>
                        <div class="details">• Line 1</div>
                        <div class="details">• Line 2</div>
                        <div class="details">• Line 3</div>
                        <div class="details">• Line 4</div>
                    </div>
                </div>
    
                <div class="projects">
                    <div class="section-title">PROJECTS</div>
                    <div class="project-item">
                        <div class="title">Project 1 — Web App</div>
                        <div class="details">• Line 1</div>
                        <div class="details">• Line 2</div>
                        <div class="details"><a href="https://linkifhosted/">View Project</a></div>
                    </div>
                    <div class="project-item">
                        <div class="title">Project 2 — Mobile App</div>
                        <div class="details">• Tech stacks used</div>
                    </div>
                </div>
            </div>
    
            <!-- Right Section -->
            <div class="right-section">
                <div class="skills">
                    <div class="section-title">PROGRAMMING LANGUAGES</div>
                    <ul>
                        <li><strong>Experienced:</strong> C++, Python, MySQL</li>
                        <li><strong>Intermediate:</strong> HTML, CSS, PHP</li>
                        <li><strong>Familiar:</strong> Java, JavaScript</li>
                    </ul>
                </div>
    
                <div class="tools">
                    <div class="section-title">TOOLS</div>
                    <ul>
                        <li>Figma</li>
                        <li>GitHub</li>
                    </ul>
                </div>
    
                <div class="achievements">
                    <div class="section-title">ACHIEVEMENTS</div>
                    <div class="achievement-item">
                        <div class="title">Achievement 1</div>
                        <div class="details">• Line 2</div>
                        <div class="details">• Line 3</div>
                    </div>
                    <div class="achievement-item">
                        <div class="title">Achievement 2</div>
                        <div class="details">• Line 2</div>
                        <div class="details">• Line 3</div>
                    </div>
                </div>
    
                <div class="links">
                    <div class="section-title">LINKS</div>
                    <ul>
                        <li><a href="https://github.com" target="_blank">GitHub</a></li>
                        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                        <li><a href="https://leetcode.com" target="_blank">LeetCode</a></li>
                        <li><a href="https://hackerrank.com" target="_blank">HackerRank</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
    </html>
    
`,
  },
  {
    id: 'professional',
    title: 'FAANG CRACKING RESUME',
    description: 'Perfect for experienced professionals',
    icon: Briefcase,
    image: 'https://writelatex.s3.amazonaws.com/published_ver/19515.jpeg?X-Amz-Expires=14400&X-Amz-Date=20241206T160118Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20241206/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=703b538c0ce25ab51e557cb69f3f1e0643920564c6a902dc4f48dd2338411464',
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <title>Resume - First Last</title>
        <style>
            body {
              font-family: 'Times New Roman', Times, serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
                font-size: 12px; /* Default font size for body text */
            }
    
            .container {
                width: 80%;
                margin: auto;
                background-color: white;
                padding: 40px;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
    
            h1, h2 {
                color: #2C3E50;
                font-weight: bold;
            }
    
            h1 {
                font-size: 16px; /* Adjusted font size for the main heading */
            }
    
            h2 {
                font-size: 14px; /* Adjusted font size for section titles */
            }
    
            .header {
                text-align: center;
                margin-bottom: 40px;
            }
    
            .header h1 {
                margin: 0;
                font-size: 16px;
            }
    
            .header p {
                font-size: 12px; /* Adjusted font size for paragraph */
                color: #7F8C8D;
                margin: 10px 0;
            }
    
            .contact-info a {
                text-decoration: none;
                color: #3498DB;
            }
    
            .section-title {
                border-bottom: 2px solid #3498DB;
                padding-bottom: 5px;
                margin-bottom: 20px;
                font-size: 14px;
                color: #3498DB;
            }
    
            .experience, .projects, .education {
                margin-bottom: 30px;
            }
    
            ul {
                list-style-type: disc;
                margin-left: 20px;
            }
    
            .skills ul {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
            }
    
            .skills li {
                background-color: #3498DB;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
            }
    
            .bullet-point {
                margin-bottom: 5px;
            }
        </style>
    </head>
    <body>
    
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>First Last</h1>
            <p>123 Street Name, Town, State 12345</p>
            <p class="contact-info">
            <a href="mailto:x@gmail.com"><i class="fas fa-envelope"></i>Email</a> |
            <a href="https://linkedin.com/in/username"><i class="fab fa-linkedin"></i>LinkedIn</a> |
            <a href="https://github.com/username"><i class="fab fa-github"></i>GitHub</a>
        </p>
            </p>
        </div>
    
        <!-- Education Section -->
        <div class="education">
            <h2 class="section-title">Education</h2>
            <div>
                <strong>State University</strong> | Bachelor of Science in Computer Science
                <p>Sep. 2017 -- May 2021 | City, State</p>
            </div>
        </div>
    
        <!-- Relevant Coursework Section -->
        <div class="coursework">
    <h2 class="section-title">Relevant Coursework</h2>
    <ul class="coursework-list">
        <li>Data Structures</li>
        <li>Software Methodology</li>
        <li>Algorithms Analysis</li>
        <li>Database Management</li>
        <li>Artificial Intelligence</li>
        <li>Internet Technology</li>
        <li>Systems Programming</li>
        <li>Computer Architecture</li>
    </ul>
</div>

<style>
    .coursework-list {
        display: flex;
        flex-wrap: wrap; /* Allows items to wrap to the next row */
        gap: 10px; /* Space between items */
        margin: 0;
        padding: 0;
        list-style-type: disc;
        padding-left: 20px; /* Indent bullet points */
    }

    .coursework-list li {
        flex: 0 0 25%; /* Each item takes up 25% of the row (4 items per row) */
    }
</style>

    
        <!-- Experience Section -->
        <div class="experience">
            <h2 class="section-title">Experience</h2>
    
            <div>
                <strong>Electronics Company</strong> | Software Engineer Intern
                <p>May 2020 -- August 2020 | City, State</p>
                <ul>
                    <li class="bullet-point">Developed a service to automatically perform a set of unit tests daily on a product in development to decrease time needed for team members to identify and fix bugs/issues.</li>
                    <li class="bullet-point">Incorporated scripts using Python and PowerShell to aggregate XML test results into an organized format and load the latest build code onto the hardware for daily testing.</li>
                    <li class="bullet-point">Utilized Jenkins to automate the process of loading the latest build code and test files, running tests, and generating a report of the results once per day.</li>
                    <li class="bullet-point">Explored ways to visualize and send a daily report of test results to team members using HTML, Javascript, and CSS.</li>
                </ul>
            </div>
    
            <div>
                <strong>Startup, Inc</strong> | Front End Developer Intern
                <p>May 2019 -- August 2019 | City, State</p>
                <ul>
                    <li class="bullet-point">Assisted in the development of the front end of a mobile application for iOS/Android using Dart and the Flutter framework.</li>
                    <li class="bullet-point">Worked with Google Firebase to manage user inputted data across multiple platforms including web and mobile apps.</li>
                    <li class="bullet-point">Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.</li>
                    <li class="bullet-point">Utilized Android Studio as a development environment to visualize the application on both iOS and Android.</li>
                </ul>
            </div>
        </div>
    
        <!-- Projects Section -->
        <div class="projects">
            <h2 class="section-title">Projects</h2>
    
            <div>
                <strong>Gym Reservation Bot</strong> | Python, Selenium, Google Cloud Console
                <p>January 2021</p>
                <ul>
                    <li class="bullet-point">Developed an automatic bot using Python and Google Cloud Console to register for a timeslot at my school gym.</li>
                    <li class="bullet-point">Implemented Selenium to create an instance of Chrome to interact with the correct elements of the web page.</li>
                    <li class="bullet-point">Created a Linux virtual machine on Google Cloud to run the program daily from the cloud.</li>
                    <li class="bullet-point">Used Cron to schedule the program to execute automatically every day at 11 AM.</li>
                </ul>
            </div>
    
            <div>
                <strong>Ticket Price Calculator App</strong> | Java, Android Studio
                <p>November 2020</p>
                <ul>
                    <li class="bullet-point">Created an Android application using Java and Android Studio to calculate ticket prices for trips to museums in NYC.</li>
                    <li class="bullet-point">Processed user inputted information in the back-end of the app to return a subtotal price based on the tickets selected.</li>
                    <li class="bullet-point">Utilized the layout editor to create a UI for the application to allow different scenes to interact with each other.</li>
                </ul>
            </div>
    
            <div>
                <strong>Transaction Management GUI</strong> | Java, Eclipse, JavaFX
                <p>October 2020</p>
                <ul>
                    <li class="bullet-point">Designed a sample banking transaction system using Java to simulate the common functions of using a bank account.</li>
                    <li class="bullet-point">Used JavaFX to create a GUI that supports actions such as creating an account, deposit, withdrawal, and listing all accounts.</li>
                    <li class="bullet-point">Implemented object-oriented programming practices such as inheritance to create different account types and databases.</li>
                </ul>
            </div>
        </div>
    
        <!-- Technical Skills Section -->
<div class="skills">
    <h2 class="section-title">Technical Skills</h2>

    <div class="skills-section">
        <span class="skills-heading">Languages:</span>
        <span class="skills-list">Python, Java, C, HTML/CSS, JavaScript, SQL</span>
    </div>
    
    <div class="skills-section">
        <span class="skills-heading">Developer Tools:</span>
        <span class="skills-list">VS Code, Eclipse, Google Cloud Platform, Android Studio</span>
    </div>
    
    <div class="skills-section">
        <span class="skills-heading">Technologies/Frameworks:</span>
        <span class="skills-list">Linux, Jenkins, GitHub, JUnit, WordPress</span>
    </div>
</div>

<style>
    .skills {
        margin-top: 20px;
    }

    .section-title {
        font-size: 1.5em;
        margin-bottom: 20px;
        color: #333;
    }

    .skills-section {
        margin-bottom: 10px;
    }

    .skills-heading {
        font-size: 1.2em;
        font-weight: bold;
        color: #555;
    }

    .skills-list {
        font-size: 1em;
        color: #333;
        margin-left: 5px;
    }
</style>

    
        <!-- Leadership Section -->
        <div class="leadership">
            <h2 class="section-title">Leadership / Extracurricular</h2>
            <div>
                <strong>Fraternity</strong> | President
                <p>Spring 2020 -- Present | University Name</p>
                <ul>
                    <li class="bullet-point">Achieved a 4-star fraternity ranking by the Office of Fraternity and Sorority Affairs (highest possible ranking).</li>
                    <li class="bullet-point">Managed the executive board of 5 members and ran weekly meetings to oversee progress in essential parts of the chapter.</li>
                    <li class="bullet-point">Led a chapter of 30+ members towards goals that improve and promote community service, academics, and unity.</li>
                </ul>
            </div>
    
            <div>
                <strong>University Club</strong> | Founder and President
                <p>Fall 2018 -- Present | City, State</p>
                <ul>
                    <li class="bullet-point">Established a new student-run club to encourage awareness of data structures and algorithms and promote programming contests.</li>
                    <li class="bullet-point">Managed an active team of 10 members and set weekly coding challenges with leaderboards and rewards.</li>
                    <li class="bullet-point">Organized study sessions and invite guest speakers to provide tips on technical interviews and competitive programming.</li>
                </ul>
            </div>
        </div>
    </div>
    
    </body>
    </html>
`,
  },
  {
    id: 'Modern-Deedy',
    title: 'Modern-Deedy',
    description: 'A one-page, single-column fork of Deedy, customized to look like Jake resume',
    icon: Gem,
    image: 'data:image/jpeg;base64,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',
    premium: true,
    price: 19.99,
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume | Your Name</title>
        <style>
            /* Global Styles */
            body {
                font-family: 'Arial', sans-serif;
                background-color: #121212;
                color: #EAEAEA;
                margin: 0;
                padding: 0;
                line-height: 1.6;
            }
            h1, h2, h3, h4 {
                margin: 0;
                padding: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            a {
                color: #EAEAEA;
                text-decoration: none;
            }
            /* Header */
            .header {
                background-color: #1F1F1F;
                padding: 20px;
                text-align: center;
                position: sticky;
                top: 0;
                z-index: 1000;
            }
            .header h1 {
                font-size: 2.5rem;
                margin-bottom: 10px;
            }
            .header .contact-info {
                font-size: 1.1rem;
                margin-top: 5px;
            }
            .header a {
                margin: 0 15px;
                transition: all 0.3s ease;
            }
            .header a:hover {
                color: #FF6B6B;
            }
    
            /* Section */
            section {
                padding: 50px 20px;
                margin: 0 5%;
            }
            section h2 {
                font-size: 2.2rem;
                margin-bottom: 20px;
                text-transform: uppercase;
                border-bottom: 2px solid #FF6B6B;
                padding-bottom: 10px;
                letter-spacing: 1px;
            }
    
            /* Experience / Projects */
            .experience, .projects {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
                margin-top: 40px;
            }
            .experience .job, .projects .project {
                background: #1E1E1E;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
                transition: all 0.3s ease;
            }
            .experience .job:hover, .projects .project:hover {
                transform: translateY(-10px);
                box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
            }
            .job h3, .project h3 {
                font-size: 1.6rem;
                margin: 0 0 10px;
            }
            .job .date, .project .tech {
                font-size: 1rem;
                color: #FF6B6B;
            }
            .job p, .project p {
                font-size: 1.1rem;
                margin-top: 10px;
                line-height: 1.4;
            }
    
            /* Education */
            .education {
                margin-top: 40px;
                background-color: #333;
                padding: 20px;
                border-radius: 8px;
            }
            .education h3 {
                margin: 0 0 15px;
                font-size: 1.6rem;
            }
            .education p {
                font-size: 1.1rem;
                line-height: 1.4;
                margin-bottom: 10px;
            }
    
            /* Skills */
            .skills {
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }
            .skills .skill {
                background-color: #333;
                border-radius: 8px;
                padding: 10px 20px;
                color: #FF6B6B;
                font-size: 1rem;
                font-weight: bold;
            }
    
            /* Footer */
            footer {
                background-color: #1F1F1F;
                color: #EAEAEA;
                text-align: center;
                padding: 15px 0;
                margin-top: 50px;
            }
            footer p {
                margin: 0;
            }
        </style>
    </head>
    <body>
        <!-- Header Section -->
        <header class="header">
            <h1>Your Name</h1>
            <div class="contact-info">
                <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a> | Phone: 123-456-7890</p>
                <p>
                    <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank">LinkedIn</a> |
                    <a href="https://github.com/yourgithub" target="_blank">GitHub</a> |
                    <a href="https://yourwebsite.com" target="_blank">Website</a>
                </p>
            </div>
        </header>
    
        <!-- Education Section -->
        <section id="education">
            <h2>Education</h2>
            <div class="education">
                <h3>BSc. in Computer Science</h3>
                <p>University of Windsor, Windsor, ON | Graduated: June 2021</p>
                <p>Relevant Coursework: Data Structures, Operating Systems, Software Testing, and more.</p>
            </div>
        </section>
    
        <!-- Experience Section -->
        <section id="experience">
            <h2>Work Experience</h2>
            <div class="experience">
                <div class="job">
                    <h3>Software Development Engineer Intern</h3>
                    <p class="date">Amazon | Toronto, ON | May 2020 – Aug 2020</p>
                    <p>Designed and implemented a dashboard using React and TypeScript to visualize data stored in DynamoDB, increasing efficiency by over 10x.</p>
                    <ul>
                        <li>Ensured secure application access with AWS Lambda@Edge for request validation.</li>
                        <li>Created a CI/CD pipeline to streamline production deployments.</li>
                    </ul>
                </div>
                <div class="job">
                    <h3>Research Assistant</h3>
                    <p class="date">University of Windsor | Windsor, ON | Feb 2020 – May 2020</p>
                    <p>Developed a Personal Health Record (PHR) system using Spring and implemented advanced encryption for secure access control.</p>
                </div>
            </div>
        </section>
    
        <!-- Projects Section -->
        <section id="projects">
            <h2>Projects</h2>
            <div class="projects">
                <div class="project">
                    <h3><a href="https://github.com/yourgithub/project" target="_blank">Project Name</a></h3>
                    <p class="tech">Tech Stack: React, Node.js, MongoDB</p>
                    <p>A description of the project goes here, explaining what it does and any notable achievements or challenges.</p>
                </div>
                <div class="project">
                    <h3><a href="https://github.com/yourgithub/project2" target="_blank">Another Project</a></h3>
                    <p class="tech">Tech Stack: Python, Flask, PostgreSQL</p>
                    <p>Description of another project, highlighting its features and your contribution.</p>
                </div>
            </div>
        </section>
    
        <!-- Skills Section -->
        <section id="skills">
            <h2>Skills</h2>
            <div class="skills">
                <div class="skill">Java</div>
                <div class="skill">Python</div>
                <div class="skill">JavaScript</div>
                <div class="skill">React</div>
                <div class="skill">AWS</div>
                <div class="skill">Node.js</div>
                <div class="skill">Docker</div>
                <div class="skill">SQL</div>
            </div>
        </section>
    
        <!-- Footer -->
        <footer>
            <p>&copy; 2024 Your Name | All Rights Reserved</p>
        </footer>
    </body>
    </html>
    `
  },
  {
    id : 'Faang Resume',
    title : 'Faang Resume',
    description: 'Elegant design for senior executives',
    icon: RxResume,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHi57yTmX29HnzbXxQIS7eOMUWwy_lDk6ImQ&s',
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Creative FAANG Resume</title>
      <style>
        /* Global styles */
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f7f8f9;
          color: #333;
        }
    
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 50px;
          background-color: #fff;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }
    
        /* Header styles */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
    
        .header h1 {
          font-size: 36px;
          font-weight: bold;
          color: #2c3e50;
          margin: 0;
          letter-spacing: 2px;
        }
    
        .header .info {
          font-size: 18px;
          color: #7f8c8d;
        }
    
        .header .info span {
          display: block;
          margin: 5px 0;
        }
    
        /* Section Title */
        .section-title {
          background-color: #3498db;
          color: white;
          padding: 10px;
          font-size: 22px;
          font-weight: bold;
          border-radius: 5px;
          margin: 30px 0 15px 0;
          text-align: center;
          text-transform: uppercase;
        }
    
        /* Skills Grid */
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }
    
        .skill {
          background-color: #ecf0f1;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: bold;
          color: #2c3e50;
          transition: background-color 0.3s ease;
        }
    
        .skill:hover {
          background-color: #3498db;
          color: white;
        }
    
        /* Experience and Education */
        .experience-item, .education-item {
          margin-bottom: 25px;
          border-bottom: 1px solid #ecf0f1;
          padding-bottom: 15px;
        }
    
        .experience-item h3, .education-item h3 {
          font-size: 22px;
          margin: 0;
          color: #2c3e50;
        }
    
        .experience-item p, .education-item p {
          font-size: 16px;
          color: #7f8c8d;
        }
    
        .experience-item span, .education-item span {
          font-size: 14px;
          color: #95a5a6;
        }
    
        .experience-item .accomplishments, .education-item .accomplishments {
          margin-top: 10px;
        }
    
        .accomplishments ul {
          list-style-type: square;
          margin-left: 20px;
        }
    
        .accomplishments li {
          font-size: 16px;
          color: #7f8c8d;
        }
    
        /* Project Section */
        .projects {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }
    
        .project-item {
          padding: 20px;
          background-color: #ecf0f1;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
    
        .project-item h3 {
          font-size: 20px;
          margin: 0 0 10px;
          color: #2c3e50;
        }
    
        .project-item p {
          font-size: 16px;
          color: #7f8c8d;
        }
    
        .project-item span {
          font-size: 14px;
          color: #95a5a6;
          display: block;
          margin-top: 5px;
        }
    
        /* Footer */
        .footer {
          text-align: center;
          font-size: 14px;
          color: #7f8c8d;
          margin-top: 30px;
        }
    
        /* Responsive Design */
        @media (max-width: 768px) {
          .projects {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
    
      <div class="container">
        <!-- Header Section -->
        <div class="header">
          <div>
            <h1>John Doe</h1>
            <div class="info">
              <span>Email: johndoe@example.com</span>
              <span>Phone: (123) 456-7890</span>
              <span>Location: San Francisco, CA</span>
            </div>
          </div>
          <div class="info">
            <span>LinkedIn: <a href="https://www.linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></span>
            <span>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></span>
            <span>Portfolio: <a href="https://johndoe.com" target="_blank">johndoe.com</a></span>
          </div>
        </div>
    
        <!-- Skills Section -->
        <div class="section-title">Skills</div>
        <div class="skills">
          <div class="skill">JavaScript</div>
          <div class="skill">React.js</div>
          <div class="skill">Node.js</div>
          <div class="skill">Python</div>
          <div class="skill">AWS</div>
          <div class="skill">MongoDB</div>
          <div class="skill">Docker</div>
          <div class="skill">SQL</div>
        </div>
    
        <!-- Experience Section -->
        <div class="section-title">Experience</div>
        <div class="experience">
          <div class="experience-item">
            <h3>Software Engineer | Google</h3>
            <p>July 2020 – Present</p>
            <span>San Francisco, CA</span>
            <div class="accomplishments">
              <ul>
                <li>Led the development of a data pipeline, optimizing processing time by 30%.</li>
                <li>Collaborated with cross-functional teams to develop scalable microservices architecture using Node.js and Docker.</li>
                <li>Designed and implemented RESTful APIs, improving system reliability and scalability.</li>
              </ul>
            </div>
          </div>
          <div class="experience-item">
            <h3>Software Developer | Facebook</h3>
            <p>June 2018 – June 2020</p>
            <span>Menlo Park, CA</span>
            <div class="accomplishments">
              <ul>
                <li>Developed a real-time notification system that handled millions of requests per second.</li>
                <li>Improved UI responsiveness by implementing lazy loading and optimizing performance.</li>
              </ul>
            </div>
          </div>
        </div>
    
        <!-- Education Section -->
        <div class="section-title">Education</div>
        <div class="education">
          <div class="education-item">
            <h3>Master of Computer Science</h3>
            <p>Stanford University | 2018 – 2020</p>
          </div>
          <div class="education-item">
            <h3>Bachelor of Computer Science</h3>
            <p>University of California, Berkeley | 2014 – 2018</p>
          </div>
        </div>
    
        <!-- Projects Section -->
        <div class="section-title">Projects</div>
        <div class="projects">
          <div class="project-item">
            <h3>Real-Time Chat Application</h3>
            <p>Built a real-time chat application using WebSockets and Node.js, supporting up to 10,000 simultaneous users.</p>
            <span>Technologies: Node.js, WebSockets, MongoDB</span>
          </div>
          <div class="project-item">
            <h3>AI Chatbot</h3>
            <p>Developed an AI-powered chatbot using Python and TensorFlow for automated customer support.</p>
            <span>Technologies: Python, TensorFlow, AWS Lambda</span>
          </div>
        </div>
    
        <!-- Footer Section -->
        <div class="footer">
          <p>John Doe | Software Engineer | AI/ML Enthusiast | Open to opportunities</p>
        </div>
      </div>
    
    </body>
    </html>
    `
  },
  {
    id: 'Beautiful Design',
    title: 'Beautiful Design',
    description: 'Elegant design for UI Developers',
    icon: BsBalloon,
    image: 'https://resumegenius.com/wp-content/uploads/clean-resume-skin-orange.png',
    // premium: true,
    // price: 19.99,
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FAANG Style Resume</title>
        <style>
            /* Universal Styling */
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                background-color: #f5f5f5;
            }
    
            .container {
                width: 210mm; /* A4 width */
                height: 297mm; /* A4 height */
                display: flex;
                margin-top: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                background-color: white;
                overflow: hidden;
            }
    
            .left-section {
                width: 30%;
                background-color: #fff9e1;
                padding: 20px;
                border-radius: 8px 0 0 8px;
                box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
            }
    
            .right-section {
                width: 70%;
                padding: 20px;
            }
    
            .title {
                font-size: 1.8em;
                font-weight: bold;
                color: #555;
                margin-top: 10px;
            }
    
            .contact, .summary {
                margin-top: 20px;
            }
    
            .contact p, .summary p {
                font-size: 1.1em;
                color: #555;
                line-height: 1.5;
            }
    
            .contact a {
                color: #007BFF;
                text-decoration: none;
            }
    
            .right-section h2 {
                font-size: 1.8em;
                font-weight: bold;
                color: #333;
                border-bottom: 2px solid #eee;
                padding-bottom: 5px;
                margin-bottom: 10px;
            }
    
            .experience, .education, .skills {
                margin-bottom: 20px;
            }
    
            .experience ul, .education ul, .skills ul {
                list-style: none;
                padding-left: 0;
            }
    
            .experience li, .education li, .skills li {
                font-size: 1.1em;
                color: #555;
                margin-bottom: 15px;
            }
    
            .experience li span, .education li span {
                font-weight: bold;
                color: #333;
            }
    
            .experience li p, .education li p {
                line-height: 1.5;
            }
    
            .skills ul {
                display: flex;
                flex-wrap: wrap;
            }
    
            .skills li {
                margin-right: 15px;
                margin-bottom: 10px;
                background-color: #007BFF;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
            }
    
            .footer {
                margin-top: 20px;
                font-size: 0.9em;
                text-align: center;
                color: #888;
            }
    
            /* Make sure the layout fits A4 size and is printable */
            @page {
                size: A4;
                margin: 0;
            }
    
            /* Remove the margin for the printed version */
            body {
                margin: 0;
            }
        </style>
    </head>
    <body>
    
    <div class="container">
        <div class="left-section">
            <div class="title">Software Engineer</div>
    
            <div class="contact">
                <p><strong>Contact:</strong></p>
                <p>Email: <a href="mailto:example@email.com">example@email.com</a></p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>LinkedIn: <a href="https://linkedin.com/in/example" target="_blank">linkedin.com/in/example</a></p>
            </div>
    
            <div class="summary">
                <p><strong>Summary:</strong></p>
                <p>A results-driven Software Engineer with extensive experience in developing scalable applications and delivering high-quality code. Expertise in AI/ML, frontend, and backend systems, with a strong foundation in data structures and algorithms. Proficient in collaborating across teams and mentoring junior engineers.</p>
            </div>
        </div>
    
        <div class="right-section">
            <div class="experience">
                <h2>Experience</h2>
                <ul>
                    <li>
                        <span>Software Engineer</span> | ABC Corp | Jan 2022 - Present
                        <p>- Built and optimized machine learning pipelines, improving model training times by 30%.</p>
                        <p>- Spearheaded the development of a React Native app with 100k+ downloads.</p>
                    </li>
                    <li>
                        <span>Junior Developer</span> | XYZ Technologies | Jun 2020 - Dec 2021
                        <p>- Contributed to the development of RESTful APIs and database designs.</p>
                        <p>- Worked on a React web app that increased user engagement by 40%.</p>
                    </li>
                    <li>
                        <span>Intern</span> | DEF Solutions | Jan 2020 - May 2020
                        <p>- Automated internal workflows, reducing manual intervention by 50%.</p>
                    </li>
                </ul>
            </div>
    
            <div class="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <span>M.Tech in AI/ML</span> | SRM University | 2024 (Expected)
                    </li>
                    <li>
                        <span>B.Tech in ECE</span> | Rajalakshmi Engineering College | 2020
                    </li>
                </ul>
            </div>
    
            <div class="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>React Native</li>
                    <li>SQL</li>
                    <li>Machine Learning</li>
                    <li>AWS</li>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>HTML/CSS</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
    
            <div class="footer">
                <p>Thank you for reviewing my resume. Let's connect!</p>
            </div>
        </div>
    </div>
    
    </body>
    </html>
    `,
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