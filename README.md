# 🩺 HayatCare – Full Stack Doctor Appointment Booking App

HayatCare is a full-stack web application that allows patients to book appointments with doctors online, doctors to manage their schedule and earnings, and admins to control system-wide access and users.

Built with the **MERN** stack (MongoDB, Express, React, Node.js) + Tailwind CSS, HayatCare is designed to be scalable, modular, and modern.

---

## 🚀 Features

### 👤 Patient

- Register & Login
- Browse and filter doctors by specialty
- View doctor profiles
- Book appointments by date/time
- Pay appointment fee online (Razorpay/Stripe)
- Manage appointments (cancel, pay)

### 🩺 Doctor

- Secure login
- View earnings and appointment list
- Mark appointments as completed or cancel them
- Update profile and consultation fee

### 🛠️ Admin

- Secure admin login
- View and manage all doctors
- Add, update, delete doctor profiles
- Monitor all appointments in the system

---

## 🧱 Tech Stack

### Frontend:

- React + Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Payment Integration

---

## 📁 Project Structure

```
src/
├── assets/ # Static images, icons
│
├── components/ # Reusable UI components
│ ├── Button.jsx
│ ├── Input.jsx
│ ├── Modal.jsx # Custom modal using React Portal
│ └── Loader.jsx
│
├── constants/ # Constants (role list, specialties, etc.)
│ └── index.js
│
├── context/ # Custom Context APIs (Auth, Modal, etc.)
│ ├── AuthContext.jsx
│ ├── ModalContext.jsx
│ └── useAuth.js # Custom hook to access AuthContext
│
├── layouts/ # Layouts for public, dashboard views
│ ├── MainLayout.jsx
│ ├── PatientLayout.jsx
│ ├── DoctorLayout.jsx
│ └── AdminLayout.jsx
│
├── pages/ # Route-level views (grouped by role)
│ ├── auth/ # Login, Register
│ ├── patient/
│ │ ├── BrowseDoctors.jsx
│ │ ├── BookAppointment.jsx
│ │ └── MyAppointments.jsx
│ ├── doctor/
│ ├── admin/
│ └── Home.jsx
│
├── services/ # Axios API functions
│ ├── api.js # Axios instance
│ ├── authService.js
│ ├── appointmentService.js
│ └── doctorService.js
│
├── utils/ # Helper functions
│ ├── validateForm.js
│ ├── formatDate.js
│ └── checkRole.js
│
├── routes/ # Route config and protected route wrappers
│ ├── AppRoutes.jsx
│ └── ProtectedRoute.jsx
│
├── hooks/ # Custom hooks
│ ├── useForm.js # Custom form state management
│ └── useModal.js
│
├── portal/ # Custom Portal for modals
│ └── ModalPortal.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## 🧠 Learnings & System Design

### This project teaches:

- Clean React folder structure

- Modular backend API design

- Role-based access control (RBAC)

- State management with React Context

- React Portals for modals

- Payment Integrations
