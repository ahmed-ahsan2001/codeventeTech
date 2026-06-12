# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to automatically save course enrollment data.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Course Enrollments" (or any name you prefer)
4. Copy the Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/[THIS_IS_YOUR_SHEET_ID]/edit
   ```

## Step 2: Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 3: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `course-enrollment-service`
   - Description: `Service account for course enrollment data`
4. Click "Create and Continue"
5. Skip the optional steps (no roles needed)
6. Click "Done"

## Step 4: Generate JSON Key

1. Find your service account in the list
2. Click on it to open details
3. Go to the "Keys" tab
4. Click "Add Key" > "Create New Key"
5. Choose "JSON" format
6. Click "Create" - this will download a JSON file

## Step 5: Share Google Sheet with Service Account

1. Open the JSON file you downloaded
2. Find the `client_email` field (looks like: `xxx@xxx.iam.gserviceaccount.com`)
3. Copy this email address
4. Open your Google Sheet
5. Click "Share" button
6. Paste the service account email
7. Give it "Editor" permission
8. Click "Send"

## Step 6: Configure Environment Variables

1. Open the downloaded JSON file
2. Copy the entire JSON content (make sure it's valid JSON)
3. Create a `.env` file in your project root (if it doesn't exist)
4. Add these variables:

```env
# Paste the entire JSON content as a single line (no line breaks)
GOOGLE_CREDENTIALS={"type":"service_account","project_id":"your-project",...}

# Your Google Sheet ID from Step 1
GOOGLE_SHEETS_ID=your_sheet_id_here
```

**Important:** The `GOOGLE_CREDENTIALS` must be a single line of valid JSON.

## Step 7: Initialize Sheet Headers

The first time you run the application, the headers will be automatically created in your Google Sheet with these columns:

- Date
- Full Name
- Email
- Phone Number
- Referral Source
- Payment Screenshot
- Status

## Step 8: Test the Integration

1. Restart your server: `npm run dev`
2. Go to the enrollment page
3. Fill out the form and submit
4. Check your Google Sheet - you should see the data appear!

## Troubleshooting

### Error: "GOOGLE_CREDENTIALS not found"
- Make sure your `.env` file exists and has the `GOOGLE_CREDENTIALS` variable
- Ensure the JSON is properly formatted (no line breaks, valid JSON)

### Error: "Permission denied"
- Make sure you shared the Google Sheet with the service account email
- The service account needs "Editor" permission

### Data not appearing in sheet
- Check the server console for error messages
- Verify the `GOOGLE_SHEETS_ID` is correct
- Make sure the sheet name is "Sheet1" or update the range in `googleSheets.ts`

## Security Notes

- **Never commit your `.env` file to git**
- The `.gitignore` file should include `.env`
- Keep your service account credentials secure
- Only share the Google Sheet with necessary people

## What Happens When Someone Enrolls

1. User fills out the enrollment form (Step 1)
2. User sees payment instructions (Step 2)
3. User uploads payment screenshot (Step 3)
4. Data is sent to your API
5. Data is saved to memory storage (for local testing)
6. Data is automatically added to Google Sheets
7. You receive a new row with all enrollment information!

## Viewing Enrollments

Simply open your Google Sheet to see all enrollments in real-time. You can:
- Sort and filter data
- Add notes or comments
- Update the "Status" column manually
- Export to Excel or PDF
- Share with your team

That's it! Your course enrollment system is now integrated with Google Sheets! 🎉
