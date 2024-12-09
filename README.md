# Resume_Builder_Website
A modern and dynamic Resume Builder web application that allows users to create, edit, and download their resumes with various customizable templates. The app uses Clerk for authentication, enabling users to log in or sign up securely. With a live editor for resumes, users can make real-time changes to their resumes. The app also features rephrasing tools, an ATS (Applicant Tracking System) score panel, and a downloadable PDF resume option. Additionally, there's a premium template available with a fake payment gateway integration (using Braintree) for users who wish to create high-quality resumes quickly.

Features

1. Clerk Authentication
  * Users can sign up and log in using Clerk authentication.
  * Secure authentication options with email, Google, or Apple sign-in methods.
2. Live Editor for Resumes
  * Users can choose from a variety of live editor templates to build their resume.
  * Real-time editing allows users to see changes as they update their resume.
  * Ability to modify various sections, such as Personal Info, Experience, Education, Skills, and more.
3. ATS Panel
  * The ATS score panel evaluates the resume based on key factors such as keyword optimization, formatting, and clarity to ensure that the resume passes Applicant Tracking Systems (ATS) screening.
  * Provides feedback and suggestions to improve the resume’s score.
4. Rephrasing Tool
  * Includes an in-built word rephrasing tool to enhance the language and make the resume more professional and polished.
  * Users can click on specific sections to rephrase the text with one click.
5. Downloadable PDF Resume
  * Once the resume is complete, users can download their resume as a PDF file by simply clicking the "Download Resume" button.
6. Premium Template & Payment
  * Users can opt for premium templates that offer advanced customization options and better formatting.
  * The fake Braintree payment integration allows users to simulate a transaction for accessing the premium templates. This is useful for demo purposes or for users testing out premium features.
7. Responsive Design
  * The web app is designed to be responsive, making it suitable for both desktop and mobile users.


Tech Stack

Frontend: React.js, Tailwind CSS
Authentication: Clerk
PDF Generation: jspdf
Payment Integration (Fake): Braintree
API Integration: Braintree, Body-Parser
Build Tool: Vite
Other Libraries: html-docx-js, katex, react-icons



Installation and Setup

To get started with the Resume Builder, follow these steps:

1. Clone the repository
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder
2. Install dependencies
npm install
3. Set up environment variables
Create a .env file in the root of the project and add your Clerk API keys and Braintree API keys (if applicable):

CLERK_FRONTEND_API=<your_clerk_frontend_api>
CLERK_API_KEY=<your_clerk_api_key>
BRAINTREE_MERCHANT_ID=<your_braintree_merchant_id>
BRAINTREE_PUBLIC_KEY=<your_braintree_public_key>
BRAINTREE_PRIVATE_KEY=<your_braintree_private_key>
4. Run the development server
npm run dev
This will start the development server and open the app in your browser at http://localhost:3000.

Usage

1. Authentication
Go to the login or sign-up page to create an account or log in.
You can use Clerk authentication for signing in with email, Google, or Apple.
2. Editing the Resume
After logging in, you will be directed to the Live Resume Editor.
Choose a template from the available options and start editing your resume.
Modify sections such as Personal Info, Experience, Education, Skills, etc.
The changes will reflect in real-time, and you can see the ATS score as you make edits.
3. Rephrasing Tool
Click on any section of your resume to rephrase the text.
The app will automatically suggest rephrased versions of your text.
4. ATS Score Panel
The ATS panel will show your current resume score, based on ATS-friendly criteria.
The score will update as you make changes, and the app will suggest improvements to help your resume pass ATS filters.
5. Download Resume
Once your resume is ready, click the "Download Resume" button to generate a PDF of your resume.
The downloaded file will be ready for submission to potential employers.
6. Premium Template & Payment
If you want access to premium templates, you can use the fake Braintree payment integration to simulate a payment for the premium features. This allows users to access premium templates after simulating a successful transaction.
