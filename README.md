# 🚀 AlejandroDev — Responsive Header Component

![Header Preview](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2Eyc2JtNGZ3MmQ4bzNjc21nMjU2cWhwZ2loOGV6ZDlpd3VhYmZzMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/H1dxi6xdh4NGQCZSvz/giphy.gif)

## 🧩 About this project

This is a **responsive and animated header component** built with **React + TailwindCSS + Boxicons**.  
It includes both **desktop and mobile navigation**, a **hamburger menu** toggle, and a clean minimalist design — perfect for portfolios, landing pages, or web apps.

---

## ✨ Features

✅ Fully **responsive** (mobile-first design)\
✅ **Smooth mobile menu toggle** using React `useState`\
✅ Built with **TailwindCSS** for fast and modern styling\
✅ Uses **Boxicons** for sleek and lightweight icons\
✅ Ready to integrate into any React project\
✅ Simple, scalable, and clean code

---

## 🛠️ Tech Stack

| Technology | Description |
|-------------|--------------|
| ⚛️ **React** | UI library for building interactive components |
| 🎨 **TailwindCSS** | Utility-first CSS framework |
| 🔷 **Boxicons** | Free icon set for modern UIs |

---

## 🧠 How It Works

The header uses a simple state variable to manage the mobile menu’s visibility:

```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
