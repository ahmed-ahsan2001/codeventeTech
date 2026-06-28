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

5. **Format the Payment Screenshot column (Column F) to show images:**
   - Click on column F header to select the entire column
   - Adjust column width: Drag to make it wider (e.g., 200-250 pixels)
   - Right-click → "Resize column" → Set to 200
   - Adjust row height: Select rows 2 onwards → Right-click → "Resize rows" → Set to 150
   
   This will give enough space to display the payment screenshots!

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
    
    // Handle image if it's base64
    let imageUrl = "Not uploaded yet";
    if (data.paymentScreenshotBase64) {
      imageUrl = uploadImageToDrive(data.paymentScreenshotBase64, data.paymentScreenshot);
    }
    
    // Append new row with data
    sheet.appendRow([
      new Date(),                    // Date
      data.fullName,                 // Name
      data.email,                    // Email
      data.phoneNumber,              // Phone
      data.referralSource,           // Referral Source
      imageUrl,                      // Payment Screenshot (Drive URL or filename)
      "Pending",                     // Status
      ""                             // Notes
    ]);
    
    // Optional: Send email notification
    sendEmailNotification(data, imageUrl);
    
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

function uploadImageToDrive(base64Data, filename) {
  try {
    // Remove data:image/xxx;base64, prefix if present
    const base64String = base64Data.replace(/^data:image\/\w+;base64,/, '');
    
    // Decode base64
    const blob = Utilities.newBlob(
      Utilities.base64Decode(base64String),
      'image/jpeg',
      filename || 'payment-screenshot.jpg'
    );
    
    // Get or create "Course Payments" folder in Drive
    let folder;
    const folders = DriveApp.getFoldersByName("Course Payment Screenshots");
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder("Course Payment Screenshots");
    }
    
    // Upload file to Drive
    const file = folder.createFile(blob);
    
    // Make file viewable by anyone with link
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Return the file URL
    return file.getUrl();
    
  } catch (error) {
    console.error("Error uploading to Drive:", error);
    return "Upload failed: " + filename;
  }
}

function sendEmailNotification(data, imageUrl) {
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

💰 Payment Screenshot:
${imageUrl}

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
6. **IMPORTANT:** You need to authorize additional permissions:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** (if you see a warning)
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow** (The script needs Drive access to save images)
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
3. Fill out the form and upload a payment screenshot
4. Submit enrollment
5. Check your Google Sheet - you should see:
   - ✅ Student data in the row
   - ✅ Payment screenshot as a clickable Google Drive link
6. **To display the image directly in the sheet:**
   - Images are uploaded to Google Drive
   - Click the link in the Payment Screenshot column to view
   - **Optional:** To embed images, you can manually edit the formula in that cell:
     - If the cell shows a Drive URL like: `https://drive.google.com/file/d/FILE_ID/view`
     - Replace it with: `=IMAGE("https://drive.google.com/uc?id=FILE_ID")`
     - The image will display directly in the cell!
7. Check your email - you should receive a notification with the Drive link!

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
- No server required for data

✅ **Email Notifications**
- Instant email when someone enrolls
- Includes all student details
- Shows payment screenshot filename
- Direct link to your spreadsheet

✅ **File Storage**
- Payment screenshots are stored on your server in `/uploads/` folder
- Only the filename is saved to Google Sheet
- You can view images by going to `http://localhost:5000/admin/enrollments`
- This keeps your Google Sheet clean and fast

✅ **Free Forever**
- No costs
- No database fees
- Google Drive space not used for images

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
| Date       | Name          | Email           | Phone        | Source    | Payment Screenshot                      | Status   | Notes           |
|------------|---------------|-----------------|--------------|-----------|----------------------------------------|----------|-----------------|
| 6/12/2026  | Ahmed Khan    | ahmed@email.com | +92 300...   | Instagram | [Google Drive Link - Click to view]    | Pending  | Payment verified|
| 6/12/2026  | Sara Ali      | sara@email.com  | +92 321...   | Facebook  | [Google Drive Link - Click to view]    | Verified | Access sent     |
```

**About Payment Screenshots:**
- **Automatic Upload:** Images are automatically uploaded to Google Drive
- **Stored in Folder:** "Course Payment Screenshots" folder in your Google Drive
- **View Images:** Click the link in the sheet to open the image
- **Direct Display (Optional):** You can convert Drive links to =IMAGE() formulas to show images directly in cells
- **Email:** You'll receive the Drive link in your notification email too

**To show images directly in cells:**
1. After a submission, you'll see a Drive URL in the Payment Screenshot column
2. The URL looks like: `https://drive.google.com/file/d/ABC123xyz/view`
3. Extract the FILE_ID (the part between `/d/` and `/view`)
4. Replace the cell content with: `=IMAGE("https://drive.google.com/uc?id=ABC123xyz")`
5. The image will display in the cell!

**Or use this simpler approach:**
- Just click the Drive link to view the payment proof
- This way you don't need to modify formulas manually

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
