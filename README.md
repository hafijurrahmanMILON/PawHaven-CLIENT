

# 🐾 **PawHaven – Pet Care Service Website**

A modern pet-care service platform built with **Next.js**, featuring a smooth UI, responsive design, and dynamic service details page. Users can explore all services, view details, and contact easily.

---

## 🚀 **Setup & Installation**

Follow the steps below to run the project locally:

### 1️⃣ **Clone the repository**

```bash
git clone https://github.com/hafijurrahmanMILON/PawHaven-CLIENT.git
cd PawHavenCLIENT
```

### 2️⃣ **Install dependencies**

```bash
npm install
```

### 3️⃣ **Run the development server**

```bash
npm run dev
```

### 4️⃣ Open project in browser

```
http://localhost:3000
```

Your app will now be running locally.

---

## 🛣️ Route Summary

| Route | Access | Description |
|------|--------|-------------|
| `/` | Public | Homepage – Hero, featured services, highlights |
| `/products` | Public | Displays all products/services |
| `/products/[id]` | Public | Dynamic product/service details page |
| `/about` | Public | About the company/brand |
| `/contact` | Public | Contact form & support information |
| `/login` | Public | User login page |
| `/register` | Public | User registration page |
| `/dashboard` | Protected | Dashboard page (accessible only after login) |

---


## 🔐 Authentication

- Mock authentication using a hardcoded email and password  
- Authentication state stored in cookies  
- Protected routes implemented using Next.js middleware  
- Unauthenticated users are redirected to the login page  

### 🔑 Login Credentials (Mock)

```text
Email: ezioAuditore@DaFirenze.com
Password: edwardKenway



---

## ✅ Implemented Features

- 📱 **Responsive Landing Page**  
  Fully responsive landing page with **7 relevant sections**, optimized for desktop and mobile devices.

- 🧭 **Navigation Bar**  
  Navbar with navigation links to **Login** and **Products** pages.

- 🌐 **Public Product / Service Listing**  
  Publicly accessible page displaying available products or services.

- 📄 **Dynamic Product / Service Details Page**  
  Individual product/service details rendered dynamically based on route parameters.

- 🔌 **Express.js API**  
  Backend API built with **Express.js** for fetching product/service data.

- 🍪 **Cookie-based Mock Authentication**  
  Simple cookie-based authentication system for simulating user login.

- 🔒 **Protected Dashboard Route**  
  Dashboard route protected via authentication middleware.

- 🔁 **Conditional Navbar Rendering**  
  Navbar items update dynamically based on user login state.

---


## 🧩 Feature Explanation (Brief)

- **Landing Page**  
  Introduces PawHaven and its services with a pet-care-focused design.

- **Products Page**  
  Fetches and displays available services from the Express.js API.

- **Product Details Page**  
  Displays full details of a selected product or service using dynamic routing.

- **Authentication**  
  Simulates user login using hardcoded credentials stored in cookies.

- **Protected Route**  
  Demonstrates route protection using middleware to restrict access.

- **Express API**  
  Serves product and service data in JSON format for client-side consumption.


---

## 🛠️ Technologies Used

- **Next.js 15/16** (App Router)  
- **React**  
- **Express.js** (API / JSON)  
- **Tailwind CSS**  
- **DaisyUI**  
- **Cookie-based authentication**  
- **Dynamic routing**


---