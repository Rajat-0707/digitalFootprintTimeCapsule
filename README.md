# ⏳ Digital Footprint Time Capsule

A full-stack **MERN + TypeScript** application that allows users to store messages for the future.  
Users can write messages today, lock them with a specific date, and only unlock/read them when that date arrives.

This project is built around the idea of **digital time capsules** — preserving thoughts, memories, promises, or emotions and revisiting them at the right moment in the future.

---

## 🌐 Live Stack Overview

### Frontend
- React (TypeScript)
- React Router DOM
- Axios for API communication
- Vite for fast development
- Custom CSS (dark futuristic theme)
- Deployed on **Vercel**

### Backend
- Node.js
- Express (TypeScript)
- MongoDB with Mongoose
- JWT-based authentication
- Deployed on **Render**

---

## 🧠 Core Features

- 🔐 User authentication using JWT
- 📝 Create time-locked messages (capsules)
- 📅 Choose a future unlock date for each capsule
- 🔒 Capsules remain locked until the chosen date
- 🔓 Capsules automatically unlock once the date is reached
- 👤 Each user can only access their own capsules
- 🎨 Clean dark UI with animations
- 📱 Responsive design

---


## 🔐 Authentication Flow

1. User signs up or logs in
2. Backend validates credentials
3. JWT token is generated and sent to frontend
4. Token is stored on the client
5. Axios attaches token as `Authorization: Bearer <token>`
6. Protected routes verify token using middleware
7. User ID is extracted from token and attached to request

---

## 🕰 Capsule Unlock Logic

- Each capsule contains:
  - Message content
  - Unlock date
  - Owner (user ID)
- Backend compares:
  - `currentDate >= unlockDate`
- If false → capsule remains locked
- If true → capsule becomes readable
- Frontend visually represents locked/unlocked state

---

## ⚙️ Environment Variables

### Backend `.env`

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---
## 🌍 Deployment Details

- **Frontend** deployed on **Vercel**
- **Backend** deployed on **Render**
- **Database** hosted on **MongoDB Atlas**

### Important deployment notes
- Enable CORS properly on the backend
- Set environment variables correctly on Render
- Update Axios base URL for production
- Ensure JWT secret is consistent across environments
---
## ▶️ Running the Project Locally

### Backend
- cd Backend
- npm install
- npm run dev

### Frontend
- cd DigitalFootprintTimeCapsule
- npm install
- npm run dev

---

## 🎯 Why This Project?

This project demonstrates:

- Real-world authentication
- Secure API design
- Date-based access control
- Clean TypeScript architecture
- Practical MERN deployment
- Thoughtful user experience

It is not just CRUD — it introduces **time-based logic** and **restricted access**, making it more meaningful and unique.


## 🚀 Possible Future Enhancements

- Email notifications when a capsule unlocks
- One-time read capsules
- Capsule sharing with other users
- Encryption for message content
- Timeline / calendar visualization
- Admin dashboard


## 👨‍💻 Author

Built as a personal **MERN + TypeScript** project to explore  
authentication, protected routes, and meaningful digital experiences.

**Write now. Open later. Preserve the moment. ✨**

