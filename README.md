

# 🐾 **PawHaven – Pet Care Service Website**

A modern pet-care service platform built with **Next.js**, featuring a smooth UI, responsive design, and dynamic service details page. Users can explore all services, view details, and contact easily.

---

## 🚀 **Setup & Installation**

Follow the steps below to run the project locally:

### 1️⃣ **Clone the repository**

```bash
git clone https://github.com/hafijurrahmanMILON/PawHaven.git
cd pawhaven
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

## 🛣️ **Route Summary**

| Route                    | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `/`                      | Homepage – Hero, featured services, highlights |
| `/products`              | Displays all products/services                 |
| `/products/[id]`         | Dynamic product/service details page           |
| `/about`                 | About the company/brand                        |
| `/contact`               | Contact form & support information             |
| `/login`                 | User login page                                |
| `/register`              | User registration page                         |

---

## 📁 **Project Structure**

```
app/
 ├─ page.jsx
 ├─ products/
 │   ├─ page.jsx
 │   └─ [product_id]/
 │        └─ page.jsx
 ├─ about/
 │   └─ page.jsx
 ├─ contact/
 │   └─ page.jsx
components/
 ├─ Navbar.jsx
 ├─ Footer.jsx
 └─ ProductDetailsCard.jsx
public/
 └─ services.json
```

---

## 🛠️ **Tech Stack**

* **Next.js 14 (App Router)**
* **React**
* **DaisyUI + TailwindCSS**
* **Google Fonts**
* **Dynamic Routing**
* **Responsive UI**

---

