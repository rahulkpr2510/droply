
<div align="center">
  <h1 align="center">Droply</h1>
  <p align="center">A Dropbox-inspired full-stack file storage web app built with Next.js, PostgreSQL (Neon), Clerk, Drizzle ORM & ImageKit.</p>
  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logo=postgresql&logoColor=white&color=4169E1" alt="PostgreSQL/Neon" />
    <img src="https://img.shields.io/badge/-DrizzleORM-black?style=for-the-badge&logo=postgresql&logoColor=white&color=2D3748" alt="Drizzle ORM" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logo=clerk&logoColor=white&color=3B82F6" alt="Clerk" />
    <img src="https://img.shields.io/badge/-ImageKit-black?style=for-the-badge&logo=cloudinary&logoColor=white&color=F47E27" alt="ImageKit" />
    <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4" alt="Tailwind CSS" />
  </div>
</div>




## 🚀 Table of Contents
	1.	📌 Introduction
	2.	⚙️ Tech Stack
	3.	🔋 Features
	4.	🧱 Architecture
	5.	👩‍💻 Project Structure
	6.	🔄 Getting Started
	7.	🧩 Environment Variables
	8.	📦 Scripts
	9.	📁 Sample Workflows
	10.	📈 Future Enhancements
	11.	🤝 Contributing
	12.	📝 License



## 📌 Introduction

Droply is a Dropbox-like file storage application that lets users register, sign in, upload files, organize folders, star files, and manage trash — all with a slick responsive UI powered by modern JS tooling and infrastructure.



## ⚙️ Tech Stack

Droply uses a forward-looking, scalable stack:

Frontend:

	- Next.js (App Router, React)
	- TypeScript
	- Tailwind CSS
	- HeroUI components

Backend & Services:

	- Postgres hosted on Neon
	- Drizzle ORM (type-safe SQL queries)
	- Clerk for authentication
	- ImageKit for file uploads & delivery


## 🔋 Features

Droply supports:

	- 🪪 Secure authentication & session handling with Clerk
	- 📤 File uploads using ImageKit
	- 🗂️ Nested folders & file hierarchy
	- ⭐ Star files for quick access
	- 🗑️ Trash bin support
	- 🎨 Responsive UI with Tailwind + HeroUI
	- 🧠 TypeScript + Drizzle for type safety
	- 🧩 Extensible backend APIs

## 🧱 Architecture

Droply follows the App Router pattern in Next.js:

	- Frontend UI in app/ and components/
	- API routes for file operations
	- Database schema & migrations with Drizzle (drizzle/)
	- Shared types in types/
	- Tailwind config for scalable UI utilities



## 👨‍💻 Project Structure
```
├── app/                  # Next.js pages & layouts  
├── components/           # Reusable UI components  
├── config/               # App config (Clerk, ImageKit)  
├── drizzle/              # Drizzle ORM schema & config  
├── lib/                  # Helper libraries & API clients  
├── public/               # Static assets  
├── styles/               # Global styles  
├── types/                # Shared TypeScript types  
├── .env.example          # Example environment vars  
├── drizzle.config.ts     # Drizzle ORM config  
├── next.config.js        # Next.js config  
├── package.json
└── tsconfig.json

```


## 🔄 Getting Started

### Prerequisites

Make sure you’ve got the following installed:

	- Node.js >= 18
	- npm / pnpm / yarn
	- A Clerk account
	- A Neon Postgres database
	- An ImageKit account


### 🪄 Installation

Clone the repo
```
git clone https://github.com/rahulkpr2510/droply.git
cd droply
```
Install dependencies
```
npm install
```


### 🧪 Configure Environment Variables

Create a .env.local file at the root with:
```
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_XXXX
CLERK_SECRET_KEY=sk_XXXX

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=ik_pub_XXXX
IMAGEKIT_PRIVATE_KEY=ik_pri_XXXX
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint

# Database
DATABASE_URL=postgresql://username:password@host:port/dbname

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
(Use .env.example as a template.)  ￼



### 📦 NPM / Yarn Scripts
```
npm run dev         # Start dev server
npm run build       # Build for production
npm run start       # Run production server
npm run lint        # ESLint pass
```


## 📁 Sample Workflows

Upload a file

	1.	Sign in via Clerk
	2.	Navigate to dashboard
	3.	Drag & drop file
	4.	File goes to ImageKit & stores metadata in database

Star / Trash

	1.	Hit ⭐ to star
	2.	Hit 🗑️ to move to Trash
	3.	Restore or permanently delete from Trash


## 📈 Future Enhancements

- 🚀 User roles (admin, viewer)
- 🌐 Shareable public links
- 📊 File analytics (views, downloads)
- ☁️ Folder encryption
- 📁 Bulk file actions
- 🧠 AI categorization


## 🤝 Contributing

Pull requests welcome. If you’re fixing issues or adding features, please open an issue first and follow proper commit messages & branch naming.


## 📝 License

MIT License — feel free to use and adapt however you like!  ￼
