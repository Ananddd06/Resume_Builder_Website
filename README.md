<img width="1668" alt="Screenshot 2024-12-09 at 12 06 13" src="https://github.com/user-attachments/assets/2339d991-ce5b-451b-9e63-607db0e3d01e"># Resume_Builder_Website
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

<img width="557" alt="Screenshot 2024-12-09 at 12 05 38" src="https://github.com/user-attachments/assets/728c2b1c-55f2-4c55-ab6f-3b2b0809ef9d">
<img width="1146" alt="Screenshot 2024-12-09 at 12 05 45" src="https://github.com/user-attachments/assets/3b6adb2a-64ff-4a78-9b7e-43bbe07f85db">
<img width="1359" alt="Screenshot 2024-12-09 at 12 06 03" src="https://github.com/user-attachments/assets/fb8e726c-3227-493a-bbf3-5ab04a0d6363">
<img width="1668" alt="Screenshot 2024-12-09 at 12 06 13" src="https://github.com/user-attachments/assets/c432375f-e1d9-42a0-8857-7b957fcad784">
<img width="1668" alt="Screenshot 2024-12-09 at 12 06 22" src="https://github.com/user-attachments/assets/f282a3d0-de4b-4460-b002-d3e697fd72b3">
<img width="313" alt="Screenshot 2024-12-09 at 12 06 31" src="https://github.com/user-attachments/assets/ae520b28-d9a5-478c-8d98-b4fbd8e8e3dc">
<img width="321" alt="Screenshot 2024-12-09 at 12 06 37" src="https://github.com/user-attachments/assets/01000740-29a9-455a-a117-27ee2b55856f">
<img width="1278" alt="Screenshot 2024-12-09 at 12 06 50" src="https://github.com/user-attachments/assets/adb1fae0-e46a-4360-84ab-ef6771b863df">
<img width="1082" alt="Screenshot 2024-12-09 at 12 07 00" src="https://github.com/user-attachments/assets/21bb6772-633b-425c-9516-5bccd8947384">
<img width="846" alt="Screenshot 2024-12-09 at 12 07 05" src="https://github.com/user-attachments/assets/3d7c4005-ee6f-4e8f-95d9-f88daaa32969">
<img width="1672" alt="Screenshot 2024-12-09 at 12 05 16" src="https://github.com/user-attachments/assets/6f289c7a-4834-471d-9cb1-3089b79871c8">



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
If you want access to premium templates, you can use the fake Braintree payment integration to simulate a payment for the premium features. This allows users to access premium templates after simulating a successful transaction .
