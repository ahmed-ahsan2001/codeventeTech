import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import path from "path";
import { storage } from "./storage";
import { addEnrollmentToSheet } from "./googleSheets";
import { insertContactSchema, insertNewsletterSchema, insertJobApplicationSchema, insertCourseEnrollmentSchema } from "@shared/schema";

// Configure multer for file uploads
const uploadStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'payment-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: uploadStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve uploaded files
  app.use('/uploads', express.static('uploads'));

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, message: "Thank you! We'll get back to you within 24 hours." });
    } catch (error: any) {
      if (error.issues) {
        // Zod validation error
        res.status(400).json({ 
          success: false, 
          message: "Validation failed",
          errors: error.issues.map((issue: any) => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form. Please try again." 
        });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(validatedData);
      res.json({ success: true, message: "Successfully subscribed to newsletter!" });
    } catch (error: any) {
      if (error.message === "Email already subscribed to newsletter") {
        res.status(400).json({ 
          success: false, 
          message: "This email is already subscribed to our newsletter." 
        });
      } else if (error.issues) {
        // Zod validation error
        res.status(400).json({ 
          success: false, 
          message: "Please enter a valid email address." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to subscribe. Please try again." 
        });
      }
    }
  });

  // Get contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Get newsletter subscribers (admin endpoint)
  app.get("/api/newsletters", async (req, res) => {
    try {
      const newsletters = await storage.getNewsletters();
      res.json(newsletters);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch newsletters" });
    }
  });

  // Job application submission
  app.post("/api/job-applications", async (req, res) => {
    try {
      const validatedData = insertJobApplicationSchema.parse(req.body);
      const jobApplication = await storage.createJobApplication(validatedData);
      res.json({ success: true, message: "Thank you for your application! We'll review it and get back to you within 1-2 weeks." });
    } catch (error: any) {
      if (error.issues) {
        // Zod validation error
        res.status(400).json({ 
          success: false, 
          message: "Validation failed",
          errors: error.issues.map((issue: any) => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit application. Please try again." 
        });
      }
    }
  });

  // Get job applications (admin endpoint)
  app.get("/api/job-applications", async (req, res) => {
    try {
      const jobApplications = await storage.getJobApplications();
      res.json(jobApplications);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch job applications" });
    }
  });

  // Course enrollment submission with file upload
  app.post("/api/course-enrollments", upload.single('paymentScreenshot'), async (req, res) => {
    try {
      const enrollmentData = {
        fullName: req.body.fullName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        referralSource: req.body.referralSource,
        paymentScreenshot: req.file ? req.file.filename : undefined,
      };

      const validatedData = insertCourseEnrollmentSchema.parse(enrollmentData);
      const courseEnrollment = await storage.createCourseEnrollment(validatedData);
      
      // Add to Google Sheets
      await addEnrollmentToSheet({
        ...validatedData,
        createdAt: new Date(),
      });
      
      res.json({ 
        success: true, 
        message: "Thank you for enrolling! We'll verify your payment and send access details within 24 hours." 
      });
    } catch (error: any) {
      if (error.issues) {
        // Zod validation error
        res.status(400).json({ 
          success: false, 
          message: "Validation failed",
          errors: error.issues.map((issue: any) => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit enrollment. Please try again." 
        });
      }
    }
  });

  // Get course enrollments (admin endpoint)
  app.get("/api/course-enrollments", async (req, res) => {
    try {
      const courseEnrollments = await storage.getCourseEnrollments();
      res.json(courseEnrollments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch course enrollments" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
