# AI Course Recommendation Engine

> **Sree Sowmya Gaddam** · Cumberland University · MS in Information Technology · 2026

A full-stack web application built with **React 18 + Vite** (frontend) and **Spring Boot 3** (backend).

---

## Project Structure

```
ai-course-engine/
├── frontend/          ← React 18 + Vite
│   ├── src/
│   │   ├── components/   (Navbar, Hero, Milestones, Progress, TechStack, Impact, WeekReport, Footer)
│   │   ├── hooks/        (useApi.js)
│   │   ├── api.js        (Axios calls to Spring Boot)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── backend/           ← Spring Boot 3 + Java 17
    ├── src/main/java/com/aicourse/
    │   ├── AiCourseEngineApplication.java
    │   ├── controller/ProjectController.java
    │   ├── model/       (Milestone, Task, ProjectStats)
    │   ├── repository/  (MilestoneRepository, TaskRepository)
    │   └── service/ProjectService.java
    ├── src/main/resources/application.properties
    └── pom.xml
```

---

## Prerequisites

| Tool | Version |
|------|---------|
| Java | 17+     |
| Maven | 3.8+   |
| Node.js | 18+  |
| npm  | 9+      |

---

## Running Locally

### 1 — Start the Spring Boot backend

```bash
cd backend
mvn spring-boot:run
```

API runs on **http://localhost:8080**

Available endpoints:
- `GET /api/health`
- `GET /api/stats`
- `GET /api/milestones`
- `GET /api/tasks`
- H2 Console → http://localhost:8080/h2-console

### 2 — Start the React frontend

```bash
cd frontend
npm install
npm run dev
```

App runs on **http://localhost:5173**
The Vite dev server proxies `/api/*` → `http://localhost:8080`.

---

## Deploying to GitHub Pages (Frontend only)

### Step 1 – Build the frontend

```bash
cd frontend
npm run build
```

This creates a `frontend/dist/` folder.

### Step 2 – Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ai-course-engine.git
git push -u origin main
```

### Step 3 – Deploy `dist/` to GitHub Pages

Install the gh-pages tool:
```bash
npm install --save-dev gh-pages
```

Add to `frontend/package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Then run:
```bash
npm run deploy
```

Your site will be live at:
```
https://YOUR_USERNAME.github.io/ai-course-engine/
```

> **Note:** GitHub Pages hosts only the static React frontend. For the Spring Boot API, deploy it to Railway, Render, or AWS EC2 and update the `baseURL` in `src/api.js`.

---

## Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | React 18, Vite, Axios         |
| Backend   | Spring Boot 3, Java 17, Maven |
| Database  | H2 (dev) / PostgreSQL (prod)  |
| AI/ML     | LangChain, OpenAI, Python     |
| Cloud     | AWS EC2, S3, Lambda           |
| Deploy    | GitHub Pages (frontend)       |

---

## API Response Examples

**GET /api/stats**
```json
{
  "accuracyImprovement": "50%",
  "advisorWorkloadReduction": "35%",
  "studentSatisfactionTarget": "90%+",
  "duration": "12 Weeks",
  "totalBudget": "$1,800",
  "awsCost": "$800/yr",
  "openAiCost": "$500"
}
```

**GET /api/milestones**
```json
[
  { "id": 1, "title": "Data Collection & EDA", "period": "Month 1 · Feb – Mar 2026", ... },
  { "id": 2, "title": "LLM Integration & Model Dev", ... },
  { "id": 3, "title": "Deployment & Evaluation", ... }
]
```
