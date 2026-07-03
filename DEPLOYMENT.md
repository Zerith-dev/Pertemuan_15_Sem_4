# 🚀 Panduan Deployment Full Stack Todo App

## Tahap 1: Persiapan (DONE ✅)

### Security Checklist
- ✅ `.env` files sudah di `.gitignore`
- ✅ `.env.example` dibuat sebagai reference
- ✅ Passwords di-read dari environment variables (bukan hardcoded)
- ✅ Production config menggunakan MySQL
- ✅ Development config menggunakan SQLite

### Pre-Deployment Verification
```bash
# Backend
cd be_teori15
npm install
npm run dev  # Test berjalan di port 3000

# Frontend  
cd fe_teori15
npm install
npm run dev  # Test berjalan di port 5173
```

---

## Tahap 2: Deploy Backend ke Railway ✈️

### Step 1: Setup Railway Account
1. Buka https://railway.app
2. Sign up atau login
3. Create new project

### Step 2: Setup MySQL Database di Railway
1. Di Railway dashboard, klik "New" → "Database" → "MySQL"
2. Tunggu hingga provisioning selesai
3. Catat informasi database:
   - **Hostname**: `[xxx].railway.app` (dari panel Connection tab)
   - **Port**: `3306`
   - **Database**: `railway` (atau sesuai yang muncul)
   - **Username**: `root`
   - **Password**: (generate atau copy dari panel)

### Step 3: Setup Backend Repository
1. Pastikan repository GitHub sudah di-push (public)
2. Struktur folder harus:
   ```
   repository/
   ├── be_teori15/
   │   ├── src/
   │   ├── package.json
   │   ├── .gitignore
   │   └── .env.example
   └── table.sql
   ```

### Step 4: Deploy Backend via Railway
1. Di Railway dashboard, klik "New" → "GitHub Repo"
2. Pilih repository Anda
3. Pilih branch `main`
4. Konfigurasi:
   - **Root Directory**: `be_teori15`
   - **Start Command**: `node src/server.js`
5. Klik "Deploy"

### Step 5: Configure Environment Variables di Railway
1. Buka project Backend yang sudah di-deploy
2. Go to Variables tab
3. Add variables:
   ```
   NODE_ENV = production
   DB_NAME = railway
   DB_USER = root
   DB_PASSWORD = [copy dari MySQL panel]
   DB_HOST = [copy hostname dari MySQL panel]
   DB_PORT = 3306
   PORT = 3000
   ```
4. Save dan redeploy

### Step 6: Setup Database Schema
1. Copy isi file `table.sql`
2. Di Railway MySQL panel, buka SQL editor
3. Paste query dan execute
4. Verify table `todos` sudah created

### Step 7: Test Backend
1. Buka Network tab di Railway backend deployment
2. Copy public URL (format: `https://xxx.railway.app`)
3. Test di browser:
   ```
   https://xxx.railway.app/api/todos
   ```
4. Response harus: `{"success":true,"message":"Todos retrieved successfully","data":[]}`

---

## Tahap 3: Deploy Frontend ke Vercel 🌐

### Step 1: Setup Vercel Account
1. Buka https://vercel.com
2. Sign up atau login dengan GitHub account
3. Create new project

### Step 2: Deploy Frontend via Vercel
1. Klik "New Project" → "Import Git Repository"
2. Pilih repository Anda
3. Konfigurasi:
   - **Framework**: React
   - **Root Directory**: `fe_teori15`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Klik "Deploy"

### Step 3: Configure Environment Variables di Vercel
1. Buka project Frontend di Vercel
2. Go to Settings → Environment Variables
3. Add variable:
   ```
   VITE_API_URL = https://[BACKEND_RAILWAY_URL]/api
   ```
   (ganti `[BACKEND_RAILWAY_URL]` dengan URL dari Railway backend)
4. Save dan redeploy

### Step 4: Test Frontend
1. Buka URL dari Vercel (format: `https://xxx.vercel.app`)
2. Test semua fitur:
   - ✅ Load page
   - ✅ Add todo
   - ✅ Edit todo
   - ✅ Delete todo
   - ✅ Change status
   - ✅ Set priority

---

## Tahap 4: Verification Checklist ✅

### Backend (Railway)
- [ ] Database terhubung
- [ ] GET /api/todos works
- [ ] POST /api/todos works
- [ ] PUT /api/todos/:id works
- [ ] DELETE /api/todos/:id works
- [ ] Status code 200/201 untuk success
- [ ] Error handling berfungsi

### Frontend (Vercel)
- [ ] Page loads
- [ ] Form berfungsi
- [ ] CRUD operations work
- [ ] Redirect to backend API
- [ ] Display data dari backend
- [ ] No CORS errors

### Database (Railway MySQL)
- [ ] Table `todos` exists
- [ ] Columns sesuai schema (id, title, description, priority, status, due_date, createdAt, updatedAt)
- [ ] Auto-increment untuk ID
- [ ] Timestamps tracking

---

## URLs untuk Dikumpulkan

Setelah semuanya selesai, kumpulkan informasi:

1. **Frontend URL (Vercel)**: https://xxx.vercel.app
2. **Backend URL (Railway)**: https://xxx.railway.app
3. **Database Info (Railway)**:
   - Hostname: `[xxx].railway.app`
   - Port: `3306`
   - Database Name: `railway`
4. **Screenshots**:
   - Railway dashboard (backend & database)
   - Vercel dashboard (frontend)
   - Aplikasi running di Vercel (screenshot homepage)
   - Test POST request (create todo)
   - Test GET request (tampil todos)

---

## Troubleshooting

### Backend tidak connect ke database
- Cek .env variables di Railway
- Pastikan MySQL instance running
- Verify credentials di Railway panel

### Frontend blank atau error
- Cek VITE_API_URL di Vercel environment variables
- Pastikan backend URL benar
- Cek browser console untuk error messages

### CORS Error
- Backend sudah install `cors` package
- CORS middleware sudah di `app.js`

---

## Catatan Penting
- ✅ Jangan push `.env` file ke GitHub
- ✅ Use `.env.example` sebagai template
- ✅ Environment variables diset di platform deployment (Railway & Vercel)
- ✅ Database credentials tidak boleh ada di code
- ✅ Repository harus PUBLIC untuk deployment
