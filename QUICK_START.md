# Course Enrollment System - Quick Start Guide

## 🎉 System Overview

Your course enrollment system is **ready to use**! Students can:
1. Fill out enrollment form
2. See payment instructions (Meezan Bank: 0166-0108318685)
3. Upload payment screenshot
4. Submit enrollment

## 🚀 Two Ways to Save Data

### ✅ Option 1: Google Apps Script (RECOMMENDED for MVP)

**Why this is best:**
- ✅ **Simple setup** (15 minutes)
- ✅ **Completely FREE**
- ✅ **No server complexity**
- ✅ **Email notifications included**
- ✅ **Data in Google Sheets** (easy to manage)

**Setup:** Follow `GOOGLE_APPS_SCRIPT_SETUP.md`

**How it works:**
```
Website Form → Google Apps Script → Google Sheet → Email Notification
```

**What you need:**
1. Create a Google Sheet
2. Add Apps Script code
3. Deploy as web app
4. Add URL to `.env` file
5. Done! ✨

---

### ⚙️ Option 2: Google Sheets API (Advanced)

**Use this if:**
- You need server-side processing
- You want more control
- You're building a larger system

**Setup:** Follow `GOOGLE_SHEETS_SETUP.md`

**More complex:**
- Requires service account
- Need to manage credentials
- More configuration steps

---

## 🎯 Quick Start (5 Minutes Test)

Want to test RIGHT NOW without Google Sheets?

1. **Start your server:**
   ```bash
   npm run dev
   ```

2. **Visit enrollment page:**
   ```
   http://localhost:5000/courses/enroll
   ```

3. **Fill and submit the form**

4. **View enrollments:**
   ```
   http://localhost:5000/admin/enrollments
   ```

**Note:** Without Google Sheets setup, data is stored in memory (lost on restart). This is perfect for testing!

---

## 📋 Complete Setup (Google Apps Script - Recommended)

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet: "Course Enrollments"
3. Add headers: `Date | Name | Email | Phone | Source | Screenshot | Status | Notes`

### Step 2: Add Apps Script
1. Extensions → Apps Script
2. Copy code from `GOOGLE_APPS_SCRIPT_SETUP.md`
3. Update `YOUR_EMAIL` with your email
4. Save the script

### Step 3: Deploy
1. Deploy → New deployment → Web app
2. Execute as: **Me**
3. Who has access: **Anyone**
4. Copy the URL

### Step 4: Configure Environment
1. Create `.env` file:
   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_URL/exec
   ```
2. Restart dev server: `npm run dev`

### Step 5: Test!
1. Go to `/courses/enroll`
2. Submit enrollment
3. Check Google Sheet ✅
4. Check email ✅

---

## 📊 What Data is Collected

- **Full Name**
- **Email Address**
- **Phone Number**
- **Referral Source** (where they found you)
- **Payment Screenshot** (uploaded file)
- **Timestamp** (automatic)
- **Status** (default: Pending)

---

## 🔧 Important URLs

| Page | URL | Purpose |
|------|-----|---------|
| Courses | `/courses` | Course listing with "Enroll Now" button |
| Enrollment | `/courses/enroll` | 3-step enrollment form |
| Admin | `/admin/enrollments` | View all enrollments locally |

---

## 💰 Payment Information Displayed

The form automatically shows your correct details:

```
Price: Rs. 4,800 (Launch offer)
Bank: Meezan Bank
Account: 0166-0108318685
Name: CodeVente Tech
```

---

## 📁 File Structure

```
client/src/pages/
├── courses.tsx              ← Course listing page
├── course-enroll.tsx        ← Main enrollment form (3 steps)
└── admin-enrollments.tsx    ← Admin dashboard

server/
├── routes.ts                ← API endpoints
├── googleSheets.ts          ← Google Sheets API (Option 2)
└── storage.ts               ← Local storage

Documentation/
├── GOOGLE_APPS_SCRIPT_SETUP.md   ← Simple setup (RECOMMENDED)
├── GOOGLE_SHEETS_SETUP.md        ← Advanced setup
└── QUICK_START.md                ← This file
```

---

## ✨ Features

### Student Experience
- ✅ Beautiful dark-themed form
- ✅ Step-by-step process (1 of 3, 2 of 3, 3 of 3)
- ✅ Real-time validation
- ✅ File upload for payment proof
- ✅ Loading states & feedback
- ✅ Mobile responsive

### Admin Experience
- ✅ Google Sheet with all data
- ✅ Email notifications for each enrollment
- ✅ Local admin dashboard
- ✅ Easy data export
- ✅ Team sharing (via Google Sheets)

---

## 🐛 Troubleshooting

### Form not working?
1. Check if dev server is running: `npm run dev`
2. Open browser console (F12) for errors
3. Make sure all form fields are filled

### Data not saving to Google Sheet?
1. Verify `VITE_GOOGLE_APPS_SCRIPT_URL` in `.env`
2. Check Apps Script deployment settings
3. Look at Apps Script execution logs
4. Restart dev server after changing `.env`

### No email notification?
1. Update `YOUR_EMAIL` in Apps Script code
2. Check spam folder
3. Verify Apps Script permissions

### Can't see uploaded images?
1. Check if `/uploads/` folder exists
2. Images are stored locally (not in Google Sheets)
3. Only filename is saved to Google Sheet

---

## 🎯 Next Steps

1. **Now:** Test the form locally (works without Google Sheets)
2. **15 min:** Set up Google Apps Script (recommended)
3. **Later:** Customize course details if needed
4. **Optional:** Set up advanced Google Sheets API

---

## 📞 Support Files

- **Quick Setup:** `GOOGLE_APPS_SCRIPT_SETUP.md` ⭐
- **Advanced Setup:** `GOOGLE_SHEETS_SETUP.md`
- **Full Docs:** `ENROLLMENT_SYSTEM_DOCS.md`

---

## 🚦 Status Check

✅ Enrollment form is working
✅ Payment instructions display correctly
✅ File upload is functional
✅ Local storage works
⏳ Google Sheets integration (needs setup)

**To complete:** Follow `GOOGLE_APPS_SCRIPT_SETUP.md` (15 minutes)

---

**Need help?** Check the documentation files or test locally first!
