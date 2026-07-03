# 📝 Quick Start Guide - Deployment Preparation

## Step 0: Initialize Git Repository & Push to GitHub

Jalankan commands berikut di terminal (di folder root project):

```bash
# Navigate ke project root
cd "e:\Semester 4\Back End\M15\tugas_p15_fullstack-main"

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Full stack todo app"

# Add remote (ganti YOUR_USERNAME dan YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**PENTING**: Repository harus PUBLIC agar Railway & Vercel bisa akses!

---

## Step 1: Check Local Environment Setup

### Backend Environment
```bash
cd be_teori15
# File .env sudah ada dengan credentials local
# File .env.example ada sebagai template
# .gitignore configured
```

### Frontend Environment
```bash
cd fe_teori15
# File .env.local ada (VITE_API_URL=http://localhost:3000/api)
# File .env.example ada sebagai template
# .gitignore configured
```

---

## Step 2: Test Local Development

```bash
# Terminal 1 - Backend
cd be_teori15
npm run dev
# Expected: Server berjalan di port 3000

# Terminal 2 - Frontend  
cd fe_teori15
npm run dev
# Expected: Server berjalan di port 5173
```

Open http://localhost:5173 - aplikasi harus berjalan normal

---

## Step 3: Prepare for Deployment

### Railway Setup
1. Create account di https://railway.app
2. Create new project
3. Add MySQL database plugin
4. Deploy backend from GitHub

### Vercel Setup
1. Create account di https://vercel.com
2. Import GitHub repository
3. Configure settings
4. Deploy frontend

**See DEPLOYMENT.md for detailed steps**

---

## Step 4: Collect Information for Submission

After deployment successful, kumpulkan:

```
Frontend URL: https://[your-vercel-url].vercel.app
Backend URL: https://[your-railway-url].railway.app

Database Info:
- Hostname: [xxx].railway.app
- Port: 3306
- Database Name: [name]
(JANGAN include password)

Screenshots:
- Railway backend dashboard
- Railway MySQL dashboard
- Vercel frontend dashboard  
- Frontend homepage screenshot
- Create/edit/delete operation screenshots
```

---

## Files Included

📁 **Documentation**
- `DEPLOYMENT.md` - Step-by-step deployment guide
- `SECURITY_CHECKLIST.md` - Security verification checklist
- `QUICK_START.md` - This file
- `instruksi-praktek.txt` - Original requirements
- `table.sql` - Database schema

📁 **Backend (be_teori15/)**
- `src/server.js` - Server entry point
- `src/app.js` - Express app configuration
- `src/config/database.js` - Database configuration (dev & prod)
- `src/models/todo.model.js` - Todo model
- `src/controllers/todo.controller.js` - Business logic
- `src/routes/` - API routes
- `.env` - Local development config
- `.env.example` - Production config template
- `.gitignore` - Git ignore rules
- `package.json` - Dependencies

📁 **Frontend (fe_teori15/)**
- `src/App.jsx` - Main React component
- `src/index.css` - Styles
- `.env.local` - Local development config
- `.env.example` - Production config template
- `.gitignore` - Git ignore rules
- `package.json` - Dependencies
- `vite.config.js` - Vite configuration

---

## Troubleshooting Common Issues

### "Cannot find module" error
```bash
# Reinstall dependencies
npm install
```

### Port already in use
```bash
# Change PORT in .env (backend) or use different terminal
```

### API not responding
```bash
# Check VITE_API_URL in frontend .env.local
# Check backend is running on correct port
# Check CORS configured correctly
```

### Database connection error
```bash
# Local dev: Check SQLite file permissions
# Production: Check environment variables at Railway/Vercel
```

### Build fails
```bash
# Check package.json scripts
# Verify all dependencies installed
# Check for syntax errors
```

---

## Next Steps

1. ✅ Ensure code is security-ready (done)
2. ⬜ Initialize git & push to GitHub (YOU - Step 0)
3. ⬜ Create Railway account & deploy backend (YOU)
4. ⬜ Create Vercel account & deploy frontend (YOU)
5. ⬜ Test production deployment (YOU)
6. ⬜ Collect info & screenshots (YOU)
7. ⬜ Submit assignment with documentation (YOU)

---

**Ready to deploy? Follow DEPLOYMENT.md!**
