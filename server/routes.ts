import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);
  return httpServer;
}
