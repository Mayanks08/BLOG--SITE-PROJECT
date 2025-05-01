# 📝 BolgSite – A Full-Featured Blogging Platform

**BolgSite** is a modern web application that allows users to create, read, and share rich blog content with images, styled text, and hyperlinks using the **TinyMCE** rich text editor. 
Built with **Vite + React** for a lightning-fast front-end and powered by **Appwrite** and **Cloudinary**, it provides seamless content creation and delivery.

---

## 🚀 Features

- ✍️ **Rich Blog Editor** using TinyMCE (Hyperlinks, Code Blocks, Embedded Media & more)
- 🧾 **Full Blog CRUD Functionality** – create, update, read, and delete posts
- 🖼️ **Image Uploads with Cloudinary CDN**
- 🔒 **User Authentication** (Login, Signup, Logout) with secure access and refresh token handling
- 🔐 **Password Encryption** for secure user storage
- ⚙️ **Middleware & Protected Routes**
- 🔁 **Token-Based Authentication** (Access + Refresh)
- 📦 **Reusable Components** with React and React Hook Form
- 🎨 **Responsive UI** using Tailwind CSS
- ⚡ **Fast Dev Environment** powered by Vite
- 🌐 **Cloudinary Integration** for optimized image uploads and delivery

---

## 🛠️ Tech Stack

- **Frontend:** Vite, React, Tailwind CSS, React Hook Form, TinyMCE
- **Backend (as-a-service):** Appwrite
- **Image CDN & Optimization:** Cloudinary
- **Authentication:** Appwrite Auth with access & refresh tokens
- **Form Handling:** React Hook Form
- **Security:** Encrypted passwords, JWT auth middleware

---

## 🧩 Folder Structure (Simplified)

src/ ├── components/

components ├── pages/ # Route pages (Home, Blog, Login, etc.) 

├── services/ # Appwrite & Cloudinary logic

├── middlewares/ # Token and auth guards 

├── hooks/ # Custom React hooks

├── utils/ # Utility functions (e.g., password encryption) 

└── App.jsx # App root


---

## ☁️ Image Upload with Cloudinary

Images added to blog posts are uploaded via API directly to **Cloudinary**. The returned optimized CDN URLs are stored in the Appwrite database and rendered in the blog content.

- Cloudinary auto-optimizes size and format for faster delivery
- Supports transformation URLs for cropping, resizing, and more
- Secure API key usage with server-side upload handling (if applicable)

---

## 🧪 Running Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/blogify.git
   cd 12Megablog
   
   npm install
   

  ##Set up .env file
   VITE_APPWRITE_ENDPOINT=https://[HOSTNAME]/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_db_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

```bash
npm run dev
```

🔐 Auth & Middleware
Uses access/refresh tokens stored in HTTP-only cookies

Middleware validates and refreshes tokens when needed

Protected routes for authenticated users

📱 Responsive Design
Built with Tailwind CSS, ensuring mobile-first design and full responsiveness across devices.



