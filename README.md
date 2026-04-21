# Sanjay Purty - 3D MERN Portfolio

A full-stack portfolio web application with a modern, interactive 3D frontend and a production-ready Node/Express/MongoDB backend.

## Features

- Multi-page portfolio using React Router
- 3D interactive hero scene using Three.js (`@react-three/fiber`, `@react-three/drei`)
- Project listing + detailed project pages from backend API
- Contact form integrated with backend, MongoDB, and optional SMTP email sending
- Protected admin page for creating/deleting portfolio projects
- Dark mode toggle, sticky navigation, toast notifications, and smooth animations
- Responsive, mobile-first UI with Tailwind CSS

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Framer Motion, Three.js, React Router, Axios
- **Backend:** Node.js, Express, Mongoose, Zod, Nodemailer
- **Database:** MongoDB

## Project Structure

```text
myPortfolio/
  frontend/
    src/
      components/
      pages/
      api/
      hooks/
  backend/
    server/
      config/
      controllers/
      routes/
      models/
      middleware/
```

## Installation

### 1) Clone and install dependencies

```bash
cd myPortfolio
cd backend && npm install
cd ../frontend && npm install
```

### 2) Configure environment variables

#### Backend (`backend/.env`)

Copy from `backend/.env.example` and update values:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/sanjay_portfolio
CLIENT_URL=http://localhost:5173
ADMIN_TOKEN=your_admin_token_here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
CONTACT_RECEIVER_EMAIL=your_email@example.com
```

#### Frontend (`frontend/.env`)

Copy from `frontend/.env.example`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Run Locally

### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

Open `http://localhost:5173`.

## API Endpoints

- `GET /api/health`
- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects` (requires `x-admin-token`)
- `PUT /api/projects/:id` (requires `x-admin-token`)
- `DELETE /api/projects/:id` (requires `x-admin-token`)
- `POST /api/contact`

## Admin Access

Set token in browser localStorage (must match backend `ADMIN_TOKEN`):

```js
localStorage.setItem("adminToken", "your_admin_token_here");
```

Navigate to `/admin`.

## Deployment Guidelines

### Option A: Render (Backend) + Netlify (Frontend)

1. Deploy `backend` as a Render Web Service.
2. Set backend environment variables in Render dashboard.
3. Deploy `frontend` on Netlify.
4. Set `VITE_API_BASE_URL` in Netlify to your Render backend URL, e.g.:
   - `https://your-backend.onrender.com/api`
5. Add your Netlify site URL as `CLIENT_URL` in backend env.

### Option B: AWS (EC2 + S3/CloudFront)

1. Host backend on EC2 (Node process via PM2, Nginx reverse proxy).
2. Build frontend (`npm run build`) and upload `frontend/dist` to S3.
3. Serve frontend via CloudFront.
4. Configure CORS and environment variables for domain URLs.

### Option C: Railway/Heroku-style Node host + Vercel/Netlify frontend

1. Deploy backend with MongoDB connection and env vars.
2. Deploy frontend static build.
3. Point frontend API base URL to backend `/api`.

## Build

```bash
cd frontend
npm run build
```

## Notes

- If SMTP variables are missing, contact messages are still saved to MongoDB.
- Replace placeholder content and project images with your real portfolio assets.
