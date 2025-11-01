# React Routing Example

This project demonstrates how to implement client-side routing in a React application using **React Router v6**.  
It includes a main layout with a shared header, navbar, and footer, as well as multiple pages such as Home, About, Contact, and a custom 404 (Page Not Found) page.

---

## 🚀 Features

- 🧭 Routing setup with **React Router v6**
- 🧩 Common layout structure (`Header`, `Navbar`, `Footer`)
- 📄 Nested routes with `<Outlet />`
- ⚠️ Custom 404 Page (Page Not Found)
- 💅 Simple and clean component structure

---

## 🗂️ Project Structure
```
react-routing/
│
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Navbar.jsx
| | ├── Layout.jsx
│ │ └── Footer.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Contact.jsx
│ │ └── PageNotFound.jsx
│ │
│ ├── App.jsx
│ └── index.js
│
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/rashedulalam46/react-routing.git
```
2️⃣ Navigate into the project folder
```
cd react-routing
```

3️⃣ Install dependencies
```
npm install
```

4️⃣ Start the development server
```
npm start
```

Then open your browser and go to:
👉 http://localhost:3000

# 🧠 Usage

- Navigate between pages using the Navbar links.
- The URL updates dynamically without reloading the page.
- Visiting a non-existing route (e.g. /random) will display the Page Not Found component.

