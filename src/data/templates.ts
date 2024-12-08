import { Briefcase, Gem, FileText, Key } from 'lucide-react';
import { BsBalloon } from 'react-icons/bs';
import { FaRobot } from 'react-icons/fa6';
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
    image: 'https://i.pinimg.com/736x/fc/7f/85/fc7f85d418a61b1fda80b3dba973f9bb.jpg',
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
    image: 'https://writelatex.s3.amazonaws.com/published_ver/19515.jpeg?X-Amz-Expires=14400&X-Amz-Date=20241208T062637Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20241208/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=b88e3cb004d7a3c87d0dd713223ff5408aa2707786a0db73e596efc9bdfe3211',
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
    id: 'Cyber Security',
    title: 'Cyber Security',
    description: 'Cyber Security Professional Resume ',
    icon: Key,
    image: 'https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=',
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cybersecurity Resume</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Roboto', sans-serif;
          background-color: #121212;
          color: #ffffff;
          margin: 0;
          padding: 20px;
        }
        .resume {
          max-width: 900px;
          margin: 0 auto;
          background: #1e1e1e;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
        }
        .header {
          background: linear-gradient(90deg, #4b6cb7, #182848);
          color: #fff;
          text-align: center;
          padding: 40px;
        }
        .header h1 {
          font-size: 3rem;
          font-family: 'Roboto Slab', serif;
        }
        .header h2 {
          font-size: 1.3rem;
          margin-top: 10px;
          font-weight: 400;
        }
        .header .contact {
          margin-top: 20px;
          font-size: 1rem;
        }
        .header .contact a {
          color: #ffd700;
          text-decoration: none;
        }
        .section {
          padding: 30px;
          border-bottom: 1px solid #333;
        }
        .section:last-child {
          border-bottom: none;
        }
        .section-title {
          font-family: 'Roboto Slab', serif;
          font-size: 1.8rem;
          color: #ffd700;
          margin-bottom: 20px;
        }
        .skills, .certifications, .projects, .soft-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .skill-item {
          flex: 1 1 45%;
          position: relative;
        }
        .skill-item span {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .skill-bar {
          width: 100%;
          height: 10px;
          background: #333;
          position: relative;
          border-radius: 5px;
          overflow: hidden;
        }
        .skill-bar .fill {
          height: 100%;
          background: #ffd700;
          border-radius: 5px;
        }
        .certification-item, .project-item {
          flex: 1 1 100%;
        }
        .certification-item {
          color: #ffd700;
        }
        .project-item a {
          color: #ffd700;
          text-decoration: none;
          font-weight: bold;
        }
        .project-item a:hover {
          text-decoration: underline;
        }
        .soft-skills .icon {
          flex: 1 1 20%;
          text-align: center;
        }
        .soft-skills .icon i {
          font-size: 2.5rem;
          color: #ffd700;
        }
        .soft-skills .icon p {
          margin-top: 10px;
          font-size: 1rem;
        }
        .download-btn {
          display: block;
          text-align: center;
          padding: 15px;
          background: #ffd700;
          color: #000;
          font-size: 1.2rem;
          font-weight: bold;
          text-transform: uppercase;
          text-decoration: none;
          margin-top: 20px;
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        }
        .download-btn:hover {
          background: #e6c200;
        }
      </style>
    </head>
    <body>
      <div class="resume">
        <!-- Header -->
        <div class="header">
          <h1>John Doe</h1>
          <h2>Cybersecurity Specialist</h2>
          <div class="contact">
            <p>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a> | Phone: +1 234 567 890</p>
            <p>Portfolio: <a href="#">johndoe.com</a> | LinkedIn: <a href="#">linkedin.com/in/johndoe</a></p>
          </div>
        </div>
    
        <!-- Professional Summary -->
        <div class="section">
          <h3 class="section-title">Professional Summary</h3>
          <p>
            Passionate cybersecurity professional with 7+ years of experience in penetration testing, threat analysis, and developing security protocols to safeguard organizational assets. Proven track record of reducing vulnerabilities and enhancing system security while staying ahead of the latest cyber threats.
          </p>
        </div>
    
        <!-- Skills -->
        <div class="section">
          <h3 class="section-title">Technical Skills</h3>
          <div class="skills">
            <div class="skill-item">
              <span>Penetration Testing</span>
              <div class="skill-bar">
                <div class="fill" style="width: 95%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <span>Network Security</span>
              <div class="skill-bar">
                <div class="fill" style="width: 90%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <span>Incident Response</span>
              <div class="skill-bar">
                <div class="fill" style="width: 85%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <span>Vulnerability Assessment</span>
              <div class="skill-bar">
                <div class="fill" style="width: 88%;"></div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Certifications -->
        <div class="section">
          <h3 class="section-title">Certifications</h3>
          <div class="certifications">
            <div class="certification-item">
              <p>Certified Ethical Hacker (CEH)</p>
            </div>
            <div class="certification-item">
              <p>Certified Information Systems Security Professional (CISSP)</p>
            </div>
            <div class="certification-item">
              <p>GIAC Penetration Tester (GPEN)</p>
            </div>
          </div>
        </div>
    
        <!-- Projects -->
        <div class="section">
          <h3 class="section-title">Projects</h3>
          <div class="projects">
            <div class="project-item">
              <p><strong>Network Security Analysis Tool</strong> – Developed a Python-based tool to automate security checks and reduce analysis time by 50%. <a href="#">View Demo</a></p>
            </div>
            <div class="project-item">
              <p><strong>Incident Response Framework</strong> – Designed an automated incident response system using SIEM tools. <a href="#">View Demo</a></p>
            </div>
          </div>
        </div>
    
        <!-- Soft Skills -->
        <div class="section">
          <h3 class="section-title">Soft Skills</h3>
          <div class="soft-skills">
            <div class="icon">
              <i class="fas fa-users"></i>
              <p>Teamwork</p>
            </div>
            <div class="icon">
              <i class="fas fa-brain"></i>
              <p>Critical Thinking</p>
            </div>
            <div class="icon">
              <i class="fas fa-comments"></i>
              <p>Communication</p>
            </div>
            <div class="icon">
              <i class="fas fa-clock"></i>
              <p>Time Management</p>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>`    
  },
  {
    id: 'Lead Software Engineer',
    title: 'Lead Software Engineer',
    description: 'Resume Particulary made for the Lead Software Engineer',
    icon: FileText,
    image: 'data:image/jpeg;base64,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',
    // premium: true,
    // price: 24.99,
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Lead Software Engineer Resume - A premium and visually stunning one-page resume crafted to stand out and secure opportunities in top-tier companies.">
      <title>Lead Software Engineer Resume</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          color: #333;
          background-color: #f4f7f6;
        }
    
        .resume {
          width: 90%;
          max-width: 900px;
          margin: 40px auto;
          background: linear-gradient(145deg, #ffffff, #e3e6e4);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
    
        /* Header Section */
        .header {
          background: #0078d4;
          color: #ffffff;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .header p {
          font-size: 1.1rem;
          margin: 5px 0;
        }
        .header p span {
          font-weight: 500;
          color: #ffffffd0;
        }
    
        /* Section Titles */
        .section-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 20px 0 10px;
          color: #0078d4;
          text-transform: uppercase;
          border-left: 5px solid #0078d4;
          padding-left: 10px;
        }
    
        /* Content Sections */
        .section {
          padding: 20px 30px;
        }
    
        .section-content {
          margin-bottom: 15px;
        }
    
        /* Professional Summary */
        .summary p {
          font-size: 1rem;
          line-height: 1.6;
          margin: 10px 0;
        }
    
        /* Experience Section */
        .experience-item {
          margin-bottom: 20px;
        }
        .experience-item h3 {
          font-size: 1.2rem;
          margin-bottom: 5px;
          color: #0078d4;
        }
        .experience-item h4 {
          font-size: 1rem;
          margin-bottom: 8px;
        }
        .experience-item p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #555;
        }
    
        .experience-item ul {
          margin-left: 20px;
          list-style-type: disc;
        }
    
        .experience-item ul li {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.5;
        }
    
        /* Skills Section */
        .skills ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
        }
        .skills ul li {
          background: #0078d41a;
          color: #0078d4;
          font-size: 0.9rem;
          padding: 8px 12px;
          margin: 5px;
          border-radius: 20px;
        }
    
        /* Projects Section */
        .projects .project-item {
          margin-bottom: 20px;
        }
        .projects .project-item h3 {
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: #0078d4;
        }
        .projects .project-item p {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.5;
        }
    
        /* Footer Section */
        .footer {
          background: #f4f7f6;
          color: #555;
          text-align: center;
          padding: 15px;
          font-size: 0.9rem;
        }
        .footer a {
          color: #0078d4;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
    
        /* Button */
        .download-btn {
          display: inline-block;
          padding: 12px 20px;
          background-color: #0078d4;
          color: #fff;
          font-weight: bold;
          border-radius: 6px;
          text-decoration: none;
          font-size: 1rem;
          margin: 15px auto;
          transition: background 0.3s ease;
        }
        .download-btn:hover {
          background-color: #005bb5;
        }
      </style>
    </head>
    <body>
      <div class="resume">
        <!-- Header -->
        <div class="header">
          <h1>John Doe</h1>
          <p>Lead Software Engineer | <span>10+ Years Experience</span></p>
          <p>Contact: <a href="mailto:john.doe@gmail.com" style="color: #ffffff;">john.doe@gmail.com</a> | +1 234 567 890</p>
        </div>
    
        <!-- Professional Summary -->
        <div class="section summary">
          <h2 class="section-title">Professional Summary</h2>
          <p>
            Accomplished Lead Software Engineer with 10+ years of expertise in designing and developing scalable, high-performance solutions. Specialized in cloud systems, team leadership, and cross-functional collaboration. Passionate about delivering innovative solutions and driving the success of engineering teams in fast-paced environments.
          </p>
        </div>
    
        <!-- Experience -->
        <div class="section experience">
          <h2 class="section-title">Professional Experience</h2>
          <div class="experience-item">
            <h3>Google</h3>
            <h4>Lead Software Engineer (2020 - Present)</h4>
            <p>Designed and led scalable cloud-native systems, improving service uptime by 99.98%. Spearheaded critical project initiatives that contributed to a 30% revenue increase.</p>
            <ul>
              <li>Led a cross-functional team of 15+ engineers in the design and deployment of highly available systems.</li>
              <li>Architected microservices for cloud-first applications, driving scalability and performance improvements.</li>
              <li>Implemented DevOps practices that reduced deployment time by 40% and enhanced monitoring capabilities.</li>
              <li>Mentored junior engineers, providing guidance on code reviews, system design, and best practices.</li>
            </ul>
          </div>
          <div class="experience-item">
            <h3>Microsoft</h3>
            <h4>Senior Software Engineer (2015 - 2020)</h4>
            <p>Developed AI-driven analytics tools for enterprise clients. Led a team of 15 engineers to successfully deliver key milestones on time and within budget.</p>
            <ul>
              <li>Designed and developed an AI-powered analytics dashboard that increased business intelligence by 50%.</li>
              <li>Collaborated with clients to define technical requirements and ensured project deliverables met business goals.</li>
              <li>Implemented CI/CD pipelines, reducing manual deployment errors and enhancing software quality.</li>
              <li>Improved legacy systems through code optimization, leading to a 30% improvement in system performance.</li>
            </ul>
          </div>
        </div>
    
        <!-- Key Projects -->
        <div class="section projects">
          <h2 class="section-title">Key Projects</h2>
          <div class="project-item">
            <h3>Cloud Security Platform</h3>
            <p>Architected a security-first cloud platform for enterprise applications, achieving a 50% reduction in incidents.</p>
            <ul>
              <li>Implemented identity and access management (IAM) protocols to strengthen cloud security.</li>
              <li>Optimized network security architecture to protect against potential vulnerabilities.</li>
              <li>Integrated automated security tools to continuously monitor and address threats in real-time.</li>
            </ul>
          </div>
          <div class="project-item">
            <h3>AI-Powered Analytics Dashboard</h3>
            <p>Built a real-time AI dashboard that boosted operational efficiency by 60%.</p>
            <ul>
              <li>Developed machine learning models to automate predictive analytics and data visualization.</li>
              <li>Utilized big data tools to process and analyze millions of records in real-time.</li>
              <li>Collaborated with cross-functional teams to enhance data accessibility and user experience.</li>
            </ul>
          </div>
        </div>
    
        <!-- Skills -->
        <div class="section skills">
          <h2 class="section-title">Technical Skills</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Cloud Computing (AWS, GCP)</li>
            <li>Docker & Kubernetes</li>
            <li>Machine Learning</li>
            <li>Microservices Architecture</li>
            <li>CI/CD</li>
          </ul>
        </div>
    
        <!-- Footer -->
        <div class="footer">
          <p>Find me on: <a href="https://www.linkedin.com/in/johndoe" target="_blank">LinkedIn</a> | <a href="https://github.com/johndoe" target="_blank">GitHub</a></p>
        </div>
      </div>
    </body>
    </html>
    `
  },
  {
    id: 'Ai ML Engineer',
    title: 'Ai Ml Engineer',
    description: 'Contemporary design with unique layout',
    icon: FaRobot,
    image: 'data:image/jpeg;base64,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',
    // premium: true,
    // price: 24.99,
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Machine Learning Engineer Resume</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
            }
    
            body {
                background-color: #ffffff;
                color: #333333;
                line-height: 1.6;
                font-size: 14px;
            }
    
            .container {
                width: 80%;
                margin: 0 auto;
                padding: 50px 0;
            }
    
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
    
            .header h1 {
                font-size: 36px;
                font-weight: bold;
            }
    
            .header h2 {
                font-size: 20px;
                font-weight: normal;
                color: #555;
            }
    
            .section-title {
                font-size: 18px;
                font-weight: bold;
                margin-top: 20px;
                border-bottom: 2px solid #333;
                padding-bottom: 5px;
                margin-bottom: 15px;
            }
    
            .section-content {
                margin-bottom: 20px;
            }
    
            .skills ul {
                list-style: none;
                padding-left: 0;
            }
    
            .skills li {
                display: inline-block;
                margin-right: 15px;
                font-size: 14px;
                background-color: #f4f4f4;
                padding: 5px 10px;
                border-radius: 5px;
            }
    
            .experience,
            .education {
                margin-bottom: 30px;
            }
    
            .experience h3,
            .education h3 {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 5px;
            }
    
            .experience p,
            .education p {
                font-size: 14px;
                color: #777;
            }
    
            .experience ul,
            .education ul {
                list-style: none;
                padding-left: 0;
            }
    
            .experience ul li,
            .education ul li {
                font-size: 14px;
                margin-bottom: 5px;
            }
    
            .contact {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 50px;
            }
    
            .contact div {
                width: 48%;
            }
    
            .contact ul {
                list-style: none;
                padding-left: 0;
                margin-bottom: 10px;
            }
    
            .contact ul li {
                font-size: 14px;
                margin-bottom: 5px;
                text-align: left;
            }
    
            .button {
                display: inline-block;
                text-align: center;
                padding: 10px 20px;
                background-color: #333;
                color: white;
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
                border-radius: 5px;
                transition: 0.3s ease;
            }
    
            .button:hover {
                background-color: #555;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <h1>John Doe</h1>
                <h2>Machine Learning Engineer</h2>
            </div>
    
            <div class="section-content">
                <div class="section-title">Summary</div>
                <p>
                    Highly skilled and results-driven Machine Learning Engineer with 5+ years of experience developing and deploying
                    cutting-edge machine learning models and AI systems. Adept at building intelligent solutions to complex problems,
                    with expertise in Python, TensorFlow, Scikit-learn, and deep learning architectures. Passionate about leveraging
                    AI to transform business challenges into opportunities.
                </p>
            </div>
    
            <div class="section-content">
                <div class="section-title">Skills</div>
                <div class="skills">
                    <ul>
                        <li>Python</li>
                        <li>TensorFlow</li>
                        <li>Machine Learning</li>
                        <li>Deep Learning</li>
                        <li>Scikit-learn</li>
                        <li>Data Analysis</li>
                        <li>Model Deployment</li>
                        <li>Cloud Computing (AWS, GCP)</li>
                        <li>Natural Language Processing</li>
                        <li>Data Engineering</li>
                    </ul>
                </div>
            </div>
    
            <div class="section-content experience">
                <div class="section-title">Experience</div>
                <div>
                    <h3>Senior Machine Learning Engineer | XYZ Corp. | Jan 2021 – Present</h3>
                    <p><em>Location: Remote</em></p>
                    <ul>
                        <li>Designed and implemented machine learning pipelines to automate data processing and predictive modeling for product recommendations.</li>
                        <li>Led the development of an NLP-based customer sentiment analysis tool, improving product feedback analysis accuracy by 30%.</li>
                        <li>Worked with cross-functional teams to deploy machine learning models on AWS, resulting in a 40% improvement in model inference speed.</li>
                        <li>Optimized model performance through hyperparameter tuning and performance evaluation metrics, achieving a 15% increase in accuracy.</li>
                    </ul>
                </div>
                <div>
                    <h3>Machine Learning Engineer | ABC Tech | Jun 2017 – Dec 2020</h3>
                    <p><em>Location: New York, NY</em></p>
                    <ul>
                        <li>Developed predictive analytics models using Scikit-learn to identify market trends and customer behavior, increasing revenue by 10%.</li>
                        <li>Utilized deep learning techniques to build image recognition models that achieved 95% accuracy in identifying objects in real-time.</li>
                        <li>Collaborated with data engineers to streamline data pipelines and ensure clean, reliable data for model training.</li>
                        <li>Conducted A/B testing to evaluate the performance of various ML models and provided actionable insights to the product team.</li>
                    </ul>
                </div>
            </div>
    
            <div class="section-content education">
                <div class="section-title">Education</div>
                <div>
                    <h3>Master of Science in Computer Science | University of ABC | 2016</h3>
                    <p><em>Location: New York, NY</em></p>
                    <ul>
                        <li>Specialized in Artificial Intelligence and Machine Learning.</li>
                        <li>Graduated with honors (GPA: 3.9/4.0).</li>
                    </ul>
                </div>
                <div>
                    <h3>Bachelor of Technology in Computer Science | XYZ University | 2014</h3>
                    <p><em>Location: Los Angeles, CA</em></p>
                    <ul>
                        <li>Graduated with distinction (GPA: 3.8/4.0).</li>
                        <li>Completed a thesis on "Optimization of Machine Learning Algorithms in Large-Scale Datasets."</li>
                    </ul>
                </div>
            </div>
    
            <div class="contact">
                <div>
                    <div class="section-title">Contact</div>
                    <ul>
                        <li>Email: john.doe@email.com</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></li>
                        <li>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </body>
    
    </html>    
    `
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
  {
    id: 'Full Stack Developer',
    title: 'Full Stack Developer',
    description: 'Designed for Full-Stack Professionals',
    icon: Gem,
    image: 'data:image/png;base64,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',
    premium: true,
    price: 24.99,
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Full Stack Developer Resume</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f7f7f7;
                color: #333;
                line-height: 1.6;
                padding: 0;
                margin: 0;
            }
    
            .container {
                max-width: 1000px;
                margin: 40px auto;
                background-color: #fff;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
    
            .header {
                display: flex;
                align-items: center;
                margin-bottom: 40px;
            }
    
            .header img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                object-fit: cover;
                margin-right: 20px;
            }
    
            .header h1 {
                font-size: 36px;
                color: #333;
                font-weight: 600;
                margin-bottom: 5px;
            }
    
            .header h2 {
                font-size: 20px;
                color: #777;
                font-weight: 500;
                margin-bottom: 10px;
            }
    
            .header p {
                font-size: 16px;
                color: #444;
            }
    
            .section-title {
                font-size: 24px;
                font-weight: 600;
                color: #333;
                margin-top: 20px;
                position: relative;
                padding-bottom: 10px;
            }
    
            .section-title::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 50px;
                height: 2px;
                background-color: #6c63ff;
            }
    
            .skills {
                margin-top: 20px;
            }
    
            .skills ul {
                display: flex;
                flex-wrap: wrap;
                list-style: none;
                padding-left: 0;
            }
    
            .skills li {
                background-color: #f4f4f4;
                padding: 10px 20px;
                margin: 8px;
                border-radius: 20px;
                font-size: 16px;
                font-weight: 500;
                color: #555;
            }
    
            .experience {
                margin-top: 30px;
            }
    
            .experience ul {
                list-style: none;
                padding-left: 0;
            }
    
            .experience li {
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 2px solid #eaeaea;
            }
    
            .experience h3 {
                font-size: 22px;
                font-weight: 600;
                color: #333;
            }
    
            .experience span {
                color: #777;
                font-size: 14px;
                font-weight: 500;
            }
    
            .experience p {
                color: #555;
                font-size: 16px;
            }
    
            .footer {
                text-align: center;
                padding-top: 40px;
                border-top: 2px solid #eaeaea;
                margin-top: 40px;
            }
    
            .footer p {
                font-size: 16px;
                color: #777;
            }
    
            .footer a {
                color: #6c63ff;
                font-weight: bold;
                text-decoration: none;
            }
    
            /* Responsive Design */
            @media (max-width: 768px) {
                .header {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
    
                .header img {
                    margin: 0 0 15px 0;
                    width: 80px;
                    height: 80px;
                }
    
                .skills li {
                    font-size: 14px;
                    padding: 8px 16px;
                    margin: 6px;
                }
    
                .experience h3 {
                    font-size: 18px;
                }
    
                .experience p {
                    font-size: 14px;
                }
            }
        </style>
    </head>
    <body>
    
    <div class="container">
        <!-- Header Section -->
        <div class="header">
            <img src="https://via.placeholder.com/100" alt="Profile Picture">
            <div>
                <h1>John Doe</h1>
                <h2>Full Stack Developer</h2>
                <p>Email: <a href="mailto:john.doe@email.com">john.doe@email.com</a></p>
                <p>Phone: (123) 456-7890</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></p>
                <p>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></p>
            </div>
        </div>
    
        <!-- Skills Section -->
        <div class="skills">
            <div class="section-title">Skills</div>
            <ul>
                <li>JavaScript (React, Node.js)</li>
                <li>HTML, CSS, SCSS</li>
                <li>MongoDB, SQL</li>
                <li>RESTful APIs</li>
                <li>Git, GitHub</li>
                <li>Docker, Kubernetes</li>
                <li>AWS, Heroku</li>
                <li>Agile Development</li>
            </ul>
        </div>
    
        <!-- Experience Section -->
        <div class="experience">
            <div class="section-title">Experience</div>
            <ul>
                <li>
                    <h3>Senior Full Stack Developer | ABC Tech</h3>
                    <span>January 2022 - Present</span>
                    <p>Led a team of developers to build full-stack applications using React and Node.js. Responsible for building and maintaining scalable systems, optimizing back-end services, and integrating third-party APIs. Improved application performance by 30% through code refactoring and optimization.</p>
                </li>
                <li>
                    <h3>Full Stack Developer | XYZ Ltd</h3>
                    <span>June 2020 - December 2021</span>
                    <p>Developed and deployed web applications with JavaScript (React.js and Node.js). Integrated various cloud services (AWS, Firebase), automated testing and deployment pipelines using GitHub Actions, and optimized codebase for improved efficiency and maintainability.</p>
                </li>
            </ul>
        </div>
    
        <!-- Footer Section -->
        <div class="footer">
            <p>Excited to bring my full-stack expertise to innovative projects! Reach out via <a href="mailto:john.doe@email.com">Email</a>.</p>
        </div>
    </div>
    
    </body>
    </html>
    
    `
  },
  {
    id: 'Data Science Engineer',
    title: 'Data Science',
    description: 'Designed for Full-Stack Professionals',
    icon: Gem,
    image: 'data:image/png;base64,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',
    premium: true,
    price: 24.99,
    defaultHTML: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Premium Data Science Resume</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: 'Poppins', sans-serif;
                background-color: #f9f9f9;
                color: #333;
            }
    
            .container {
                width: 70%;
                margin: 50px auto;
                background-color: #fff;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
    
            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 30px;
            }
    
            .header img {
                border-radius: 50%;
                width: 120px;
                height: 120px;
                object-fit: cover;
                border: 4px solid #6c63ff;
            }
    
            .header h1 {
                font-size: 38px;
                font-weight: 600;
                color: #333;
            }
    
            .header h2 {
                font-size: 20px;
                font-weight: 400;
                color: #777;
            }
    
            .header p {
                color: #444;
                font-size: 16px;
            }
    
            .section {
                margin-top: 40px;
            }
    
            .section-title {
                font-size: 26px;
                font-weight: 600;
                color: #6c63ff;
                border-bottom: 3px solid #6c63ff;
                display: inline-block;
                padding-bottom: 5px;
            }
    
            .section ul {
                padding-left: 0;
                margin-top: 10px;
                list-style-type: none;
            }
    
            .section li {
                font-size: 16px;
                color: #444;
                margin-bottom: 15px;
            }
    
            .skills li {
                display: inline-block;
                margin: 8px 15px 8px 0;
                background-color: #6c63ff;
                color: #fff;
                padding: 8px 20px;
                border-radius: 25px;
                font-size: 14px;
            }
    
            .experience h3,
            .projects h3 {
                font-size: 20px;
                font-weight: 600;
                color: #333;
            }
    
            .experience span,
            .projects span {
                color: #777;
                font-size: 14px;
            }
    
            .experience p,
            .projects p {
                font-size: 16px;
                color: #555;
            }
    
            .footer {
                margin-top: 40px;
                text-align: center;
                padding-top: 20px;
                font-size: 16px;
                color: #777;
                border-top: 2px solid #eaeaea;
            }
    
            .footer a {
                color: #6c63ff;
                text-decoration: none;
                font-weight: bold;
            }
    
            @media (max-width: 768px) {
                .container {
                    width: 90%;
                    padding: 20px;
                }
    
                .header {
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                }
    
                .header img {
                    margin-bottom: 20px;
                }
    
                .skills li {
                    font-size: 12px;
                    margin: 6px 10px;
                    padding: 6px 15px;
                }
    
                .section-title {
                    font-size: 22px;
                }
            }
        </style>
    </head>
    <body>
    
    <div class="container">
        <!-- Header Section -->
        <div class="header">
            <img src="https://via.placeholder.com/120" alt="Profile Image">
            <div>
                <h1>John Doe</h1>
                <h2>Data Scientist | Machine Learning Expert</h2>
                <p>Email: <a href="mailto:john.doe@email.com">john.doe@email.com</a></p>
                <p>Phone: (123) 456-7890</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></p>
                <p>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></p>
            </div>
        </div>
    
        <!-- Skills Section -->
        <div class="section skills">
            <div class="section-title">Skills</div>
            <ul>
                <li>Python (Pandas, NumPy, Scikit-learn)</li>
                <li>Machine Learning (Supervised, Unsupervised, Reinforcement)</li>
                <li>Data Visualization (Matplotlib, Seaborn, Plotly)</li>
                <li>Deep Learning (TensorFlow, Keras, PyTorch)</li>
                <li>SQL & NoSQL Databases (MySQL, MongoDB)</li>
                <li>Cloud Platforms (AWS, Google Cloud)</li>
                <li>Data Cleaning & Preprocessing</li>
                <li>Git & GitHub</li>
            </ul>
        </div>
    
        <!-- Education Section -->
        <div class="section education">
            <div class="section-title">Education</div>
            <ul>
                <li>
                    <h3>Master's in Data Science | XYZ University</h3>
                    <span>2020 - 2022</span>
                    <p>Graduated with distinction, focusing on AI, ML, and Data Analytics. Completed advanced projects in NLP, Time-Series Forecasting, and Machine Learning Algorithms.</p>
                </li>
                <li>
                    <h3>Bachelor's in Computer Science | ABC University</h3>
                    <span>2016 - 2020</span>
                    <p>Developed a strong foundation in algorithms, statistics, and programming. Engaged in multiple hackathons and data science challenges.</p>
                </li>
            </ul>
        </div>
    
        <!-- Projects Section -->
        <div class="section projects">
            <div class="section-title">Projects</div>
            <ul>
                <li>
                    <h3>Customer Churn Prediction</h3>
                    <span>Built a machine learning model using Random Forest and XGBoost to predict customer churn. Improved accuracy by 15% through feature engineering and model tuning.</span>
                </li>
                <li>
                    <h3>Stock Market Prediction</h3>
                    <span>Used LSTM models for time-series forecasting of stock prices. Applied sentiment analysis on financial news data for improved predictions.</span>
                </li>
                <li>
                    <h3>Recommendation System</h3>
                    <span>Developed a collaborative filtering-based recommendation system to suggest products to users based on their past purchases and similar user behavior.</span>
                </li>
            </ul>
        </div>
    
        <!-- Experience Section -->
        <div class="section experience">
            <div class="section-title">Experience</div>
            <ul>
                <li>
                    <h3>Data Scientist | XYZ Tech</h3>
                    <span>January 2022 - Present</span>
                    <p>Developed and deployed ML models for predictive analytics, improving customer engagement by 20%. Led the data pipeline creation and ETL processes for large-scale data integration.</p>
                </li>
                <li>
                    <h3>Data Analyst Intern | ABC Corp</h3>
                    <span>June 2021 - December 2021</span>
                    <p>Collaborated in data mining and data wrangling tasks. Created dashboards using PowerBI and Python to present actionable insights to stakeholders.</p>
                </li>
            </ul>
        </div>
    
        <!-- Footer Section -->
        <div class="footer">
            <p>&copy; 2024 John Doe | <a href="mailto:john.doe@email.com">Contact Me</a></p>
        </div>
    </div>
    
    </body>
    </html>
    `
  },
];