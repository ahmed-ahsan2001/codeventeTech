import { google } from 'googleapis';

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID || '';

// Initialize Google Sheets API
export async function getGoogleSheetsClient() {
  // For development/testing, you can use a service account or OAuth2
  // This example uses service account credentials
  const credentials = process.env.GOOGLE_CREDENTIALS;
  
  if (!credentials) {
    console.warn('GOOGLE_CREDENTIALS not found. Google Sheets integration will be disabled.');
    return null;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('Failed to initialize Google Sheets client:', error);
    return null;
  }
}

// Add enrollment data to Google Sheets
export async function addEnrollmentToSheet(enrollmentData: {
  fullName: string;
  email: string;
  phoneNumber: string;
  referralSource: string;
  paymentScreenshot?: string;
  createdAt: Date;
}) {
  const sheets = await getGoogleSheetsClient();
  
  if (!sheets || !SPREADSHEET_ID) {
    console.log('Google Sheets not configured. Skipping sheet update.');
    return false;
  }

  try {
    const values = [
      [
        new Date(enrollmentData.createdAt).toLocaleString(),
        enrollmentData.fullName,
        enrollmentData.email,
        enrollmentData.phoneNumber,
        enrollmentData.referralSource,
        enrollmentData.paymentScreenshot || 'Not uploaded',
        'Pending', // Status
      ]
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:G', // Adjust the range based on your sheet structure
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log('✓ Enrollment data added to Google Sheets');
    return true;
  } catch (error) {
    console.error('Failed to add data to Google Sheets:', error);
    return false;
  }
}

// Initialize the sheet with headers (run this once)
export async function initializeSheetHeaders() {
  const sheets = await getGoogleSheetsClient();
  
  if (!sheets || !SPREADSHEET_ID) {
    console.log('Google Sheets not configured.');
    return;
  }

  try {
    // Check if headers already exist
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A1:G1',
    });

    if (response.data.values && response.data.values.length > 0) {
      console.log('Headers already exist in Google Sheet');
      return;
    }

    // Add headers
    const headers = [
      [
        'Date',
        'Full Name',
        'Email',
        'Phone Number',
        'Referral Source',
        'Payment Screenshot',
        'Status'
      ]
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A1:G1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: headers,
      },
    });

    // Format headers (bold, background color)
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: 0,
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: {
                    red: 0.2,
                    green: 0.4,
                    blue: 0.6,
                  },
                  textFormat: {
                    foregroundColor: {
                      red: 1.0,
                      green: 1.0,
                      blue: 1.0,
                    },
                    fontSize: 11,
                    bold: true,
                  },
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat)',
            },
          },
        ],
      },
    });

    console.log('✓ Google Sheet headers initialized');
  } catch (error) {
    console.error('Failed to initialize sheet headers:', error);
  }
}
