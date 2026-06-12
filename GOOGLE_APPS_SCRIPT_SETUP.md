# Google Apps Script Setup (Simple & Free!)

This is the recommended approach for your MVP - no backend complexity, completely free!

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Course Enrollments"
4. Add these headers in the first row (A1 to H1):

```
Date | Name | Email | Phone | Referral Source | Payment Screenshot | Status | Notes
```

## Step 2: Create Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Append new row with data
    sheet.appendRow([
      new Date(),                    // Date
      data.fullName,                 // Name
      data.email,                    // Email
      data.phoneNumber,              // Phone
      data.referralSource,           // Referral Source
      data.paymentScreenshot || "Not uploaded yet", // Payment Screenshot
      "Pending",                     // Status
      ""                             // Notes
    ]);
    
    // Optional: Send email notification
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true,
        message: "Enrollment submitted successfully!" 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false,
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  // Replace with your email
  const YOUR_EMAIL = "your-email@example.com";
  
  const subject = "🎓 New Course Enrollment!";
  
  const body = `
New student enrolled in AI Agent Content Video Ads course!

📝 Student Details:
━━━━━━━━━━━━━━━━━━━━
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phoneNumber}
Found us via: ${data.referralSource}

💰 Payment: ${data.paymentScreenshot ? "Screenshot uploaded" : "Pending"}

View all enrollments:
https://docs.google.com/spreadsheets/d/${SpreadsheetApp.getActiveSpreadsheet().getId()}

━━━━━━━━━━━━━━━━━━━━
Time: ${new Date().toLocaleString()}
  `;
  
  try {
    MailApp.sendEmail(YOUR_EMAIL, subject, body);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "OK",
      message: "Apps Script is running" 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. **Important:** Update the `YOUR_EMAIL` variable in the code with your actual email address
5. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
6. Name your project: "Course Enrollment API"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Fill in the settings:
   - **Description:** "Course enrollment endpoint"
   - **Execute as:** **Me** (your Google account)
   - **Who has access:** **Anyone**
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** (if you see a warning)
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web app URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 4: Add URL to Your Website

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add this line:
   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=YOUR_SCRIPT_URL_HERE
   ```
3. Replace `YOUR_SCRIPT_URL_HERE` with the URL you copied

Example:
```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycby.../exec
```

## Step 5: Test It!

1. Restart your development server: `npm run dev`
2. Go to `/courses/enroll`
3. Fill out the form and submit
4. Check your Google Sheet - you should see the data!
5. Check your email - you should receive a notification!

## Troubleshooting

### "Script is not running"
- Make sure you deployed the script correctly
- Check that "Who has access" is set to **Anyone**
- Try redeploying

### "Authorization error"
- Go back to Apps Script
- Click **Deploy** → **Manage deployments**
- Click ✏️ Edit
- Click **Deploy** again

### "Data not appearing in sheet"
- Check the Apps Script execution logs
- In Apps Script, go to **Executions** to see errors
- Make sure Sheet1 exists in your spreadsheet

### "No email received"
- Check your spam folder
- Make sure you updated `YOUR_EMAIL` in the script
- Gmail has daily email limits (100 emails/day for free accounts)

## What You Get

✅ **Automatic Data Saving**
- All enrollments saved to Google Sheets
- Timestamped entries
- No server required

✅ **Email Notifications**
- Instant email when someone enrolls
- Includes all student details
- Direct link to your spreadsheet

✅ **Free Forever**
- No costs
- No server hosting
- No database fees

✅ **Easy Management**
- View/edit in Google Sheets
- Share with team members
- Export to Excel anytime
- Filter and sort data

## Google Sheet Features You Can Use

Once data is in your sheet, you can:

1. **Add status dropdown**
   - Select Status column
   - Data → Data validation
   - List: `Pending, Verified, Access Sent, Completed`

2. **Conditional formatting**
   - Highlight pending payments in yellow
   - Highlight completed in green

3. **Charts & Reports**
   - Track enrollments over time
   - See referral sources breakdown

4. **Share with team**
   - Share the sheet with your team
   - Set permissions (view/edit)

## Example Sheet Layout

```
| Date       | Name          | Email           | Phone        | Source    | Screenshot | Status   | Notes           |
|------------|---------------|-----------------|--------------|-----------|------------|----------|-----------------|
| 6/12/2026  | Ahmed Khan    | ahmed@email.com | +92 300...   | Instagram | Uploaded   | Pending  | Payment verified|
| 6/12/2026  | Sara Ali      | sara@email.com  | +92 321...   | Facebook  | Uploaded   | Pending  |                 |
```

## Security Notes

- The script runs under your Google account
- Only you can see the spreadsheet (unless you share it)
- The endpoint URL is public but harmless (just adds data to your sheet)
- You can disable the deployment anytime from Apps Script

## Need Help?

1. Check **Executions** in Apps Script for errors
2. Look at server console logs
3. Verify the URL in `.env` file
4. Make sure you restarted the dev server after adding the URL

---

**This is the simplest and best solution for your MVP! 🚀**
