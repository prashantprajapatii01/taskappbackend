# 🚀 TaskFlow - MERN Stack Task Management Application

TaskFlow is a full-stack Task Management Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage daily tasks efficiently with secure authentication, task tracking, and responsive UI.

---

## 📌 Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Password Hashing using bcrypt

### ✅ Task Management

* Create Tasks
* View Tasks
* Edit Tasks
* Delete Tasks
* Toggle Task Status (Pending / Completed)
* User-Specific Tasks

### 📊 Dashboard

* Total Tasks Count
* Completed Tasks Count
* Pending Tasks Count
* Search Tasks
* Filter Tasks by Status

### 🎨 UI Features

* Responsive Bootstrap Design
* Modern Dashboard Layout
* Toast Notifications
* Mobile Friendly Interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap 5
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcryptjs

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```bash
taskflow/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │
│   │── components/
│   │── pages/
│   │── context/
│   │── routes/
│   │── services/
│   │── styles/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/taskflow.git
```

---

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

Server will run on:

```bash
http://localhost:5000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

## 🔑 API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

---

### Tasks

#### Create Task

```http
POST /api/tasks
```

#### Get All Tasks

```http
GET /api/tasks
```

#### Get Single Task

```http
GET /api/tasks/:id
```

#### Update Task

```http
PUT /api/tasks/:id
```

#### Delete Task

```http
DELETE /api/tasks/:id
```

#### Toggle Status

```http
PATCH /api/tasks/:id/toggle
```

---

## 🔒 Authentication Header

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📈 Future Enhancements

* Due Dates
* Task Priorities
* Dark Mode
* User Profile
* Task Categories
* Drag & Drop Board
* Email Notifications
* Analytics Charts

---

## 👨‍💻 Author

**Prashant Kumar**

B.Tech Student | MERN Stack Developer | Web Designer



---

## ⭐ Support

If you found this project helpful, please give it a ⭐ on GitHub.
