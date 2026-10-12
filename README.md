# CareerHub — Full-Stack Job Portal

A complete job portal built with React.js, Node.js, Express.js, MongoDB/Mongoose, JWT, Multer, Cloudinary, Axios, React Router and Tailwind CSS.

## Features

### Authentication & Roles
- Register/login with JWT
- Job seeker, recruiter and admin roles
- Protected role-based routes

### Job Seekers
- Profile with skills, experience, location and bio
- Search jobs by keyword
- Filter by location, salary, category and experience
- Job details page
- Apply with PDF/DOC/DOCX resume
- Cover letter
- Application tracking

### Recruiters
- Recruiter/company profile
- Create, update and delete vacancies
- View all applicants
- Open candidate resumes
- Update application status: Applied, Shortlisted, Interview, Selected, Rejected

### Admin
- Dashboard statistics
- Manage users/recruiters/job seekers
- Delete users
- View and delete job postings

## Project structure

```text
job-portal/
├── client/                 # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express + MongoDB backend
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── package.json
│   └── .env.example
├── package.json            # Root scripts for easy setup
└── README.md
```

## Setup on macOS

Open Terminal in the `job-portal` folder.

### Option A — one command setup

```bash
npm install
npm run install:all
```

Create the backend environment file:

```bash
cp server/.env.example server/.env
```

Edit `server/.env` and set your MongoDB connection and JWT secret.

Then start both frontend and backend:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

### Option B — separate terminals

Terminal 1:

```bash
cd client
npm install
npm run dev
```

Terminal 2:

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

## MongoDB

For local MongoDB:

```env
MONGO_URI=mongodb://127.0.0.1:27017/careerhub
```

For MongoDB Atlas, replace it with your Atlas connection string.

## Cloudinary

Cloudinary is optional for local development. If Cloudinary variables are empty, uploaded resumes are stored in `server/uploads`.

Add these to `server/.env` for Cloudinary:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Admin account

Set:

```env
ADMIN_EMAIL=admin@careerhub.com
ADMIN_PASSWORD=Admin@12345
```

Then from `server` run:

```bash
npm run seed:admin
```

Login at `/login` with the admin credentials.

## API

Backend runs on `http://localhost:5000`.

Health check:

```text
http://localhost:5000/api/health
```
