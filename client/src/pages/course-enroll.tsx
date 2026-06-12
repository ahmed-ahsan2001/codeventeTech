import { useState } from "react";
import * as React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo-head";

const STUDENT_COLORS = [
  "#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16", 
  "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9",
  "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef",
  "#ec4899", "#f43f5e"
];

export default function CourseEnroll() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    referralSource: "",
  });
  const { toast } = useToast();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const enrolledStudents = 20; // Mock data
  const totalSeats = 50;
  const seatsRemaining = totalSeats - enrolledStudents;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.fullName.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.phoneNumber.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your phone number.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.referralSource) {
      toast({
        title: "Missing Information",
        description: "Please select where you found us.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Details Saved!",
        description: "Moving to payment instructions...",
      });
      
      // Move to next step
      setStep(2);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleFinalSubmit = async () => {
    if (!uploadedFile) {
      toast({
        title: "Screenshot Required",
        description: "Please upload your payment screenshot before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      
      if (!scriptUrl) {
        console.warn('Google Apps Script URL not configured. Using local API fallback.');
        // Fallback to local API
        await submitToLocalAPI();
        return;
      }

      // Prepare data for Google Apps Script
      const enrollmentData = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        referralSource: formData.referralSource,
        paymentScreenshot: uploadedFile.name,
      };

      // Submit to Google Apps Script
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrollmentData),
      });

      // Note: no-cors mode doesn't allow reading the response
      // So we assume success if no error is thrown
      
      toast({
        title: "Enrollment Complete! 🎉",
        description: "We'll verify your payment and send access within 24 hours. Check your email.",
      });
      
      // Also submit to local API for backup
      await submitToLocalAPI();
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          referralSource: "",
        });
        setUploadedFile(null);
        setStep(1);
      }, 2000);

    } catch (error) {
      console.error('Enrollment error:', error);
      
      // Try local API as fallback
      try {
        await submitToLocalAPI();
        toast({
          title: "Enrollment Saved Locally",
          description: "We've saved your enrollment. We'll process it soon!",
        });
      } catch (fallbackError) {
        toast({
          title: "Error",
          description: "Failed to submit enrollment. Please try again or contact support.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitToLocalAPI = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('referralSource', formData.referralSource);
    if (uploadedFile) {
      formDataToSend.append('paymentScreenshot', uploadedFile);
    }

    const response = await fetch('/api/course-enrollments', {
      method: 'POST',
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error('Local API submission failed');
    }

    return response.json();
  };

  const benefits = [
    "10 Full Modules",
    "Secret Code lock",
    "USD Payment Block",
    "Live $5 to $10K Challenge",
    "Lifetime Access",
    "50 AI Prompts",
    "WhatsApp Support",
    "Private Community"
  ];

  return (
    <>
      <SEOHead
        title="Enroll in AI Agent Content Video Ads Course - Limited Time Offer"
        description="Master AI-powered video advertising and content creation. Enroll now at a special launch price. Limited seats available."
        keywords="ai video ads, content creation, ai agents, video marketing, online learning"
      />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0d1220] to-[#0a0e1a] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Pricing & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Launch Badge */}
              <div className="inline-block">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  🚀 Launch Price: First 100 Students Only
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-bold text-orange-500">$15</span>
                  <div className="text-xl text-gray-300">
                    <span className="font-semibold">Rs. 4,800</span>
                    <div className="text-sm text-gray-400">Launch Price</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  You can this back on your very first client project. Everything after that is pure profit.
                </p>
              </div>

              {/* Student Enrollment Indicator */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {Array.from({ length: totalSeats }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < enrolledStudents
                          ? `bg-[${STUDENT_COLORS[i % STUDENT_COLORS.length]}]`
                          : "bg-gray-700"
                      }`}
                      style={{
                        backgroundColor: i < enrolledStudents 
                          ? STUDENT_COLORS[i % STUDENT_COLORS.length]
                          : undefined
                      }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  ⏱️ {enrolledStudents} students enrolled. Price increases to Rs. 9,999 soon.
                </p>
              </div>

              {/* How to Enroll */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">HOW TO ENROLL</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div className="text-sm text-gray-300 pt-1">
                      <span className="font-semibold text-white">Fill in your details</span>
                      <br />
                      Name, phone, email, and where you found us.
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="text-sm text-gray-300 pt-1">
                      <span className="font-semibold text-white">Send Rs. 4,800</span>
                      <br />
                      Send from any app: Jazzcash, Easypaisa, Nayapay, etc. or Use your Meezan Bank account: Copy the favorite this and send exactly Rs. 4,800.
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="text-sm text-gray-300 pt-1">
                      <span className="font-semibold text-white">Upload your screenshot</span>
                      <br />
                      We verify and send your access link.
                    </div>
                  </div>
                </div>
              </div>

              {/* What You Get */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">WHAT YOU GET</h3>
                <div className="grid grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Section - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#141824] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#0f1420] to-[#1a1f2e] border-b border-gray-800 px-6 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-gray-400">Enroll Now</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-400">● Live</span>
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <div className="px-8 py-8">
                  <div className="mb-6">
                    <div className="text-xs text-orange-500 font-semibold mb-2">
                      → STEP {step} OF 3
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {step === 1 && "Your Details."}
                      {step === 2 && "Payment Instructions."}
                      {step === 3 && "Upload Screenshot."}
                    </h2>
                    <p className="text-sm text-orange-400">
                      {step === 1 && `→ ${seatsRemaining} seats remaining. Grab yours before price hits Rs. 9,900`}
                      {step === 2 && "→ Send exactly Rs. 4,800 to secure your spot"}
                      {step === 3 && "→ Upload your payment proof to get instant access"}
                    </p>
                  </div>

                  {step === 1 && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-300">
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="e.g., Ahmed Hassan"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="bg-[#0d1117] border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 h-12"
                          required
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-300">
                          Phone Number
                        </Label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder="e.g., +92 300 1234567"
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                          className="bg-[#0d1117] border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 h-12"
                          required
                        />
                      </div>

                      {/* Email Address */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-[#0d1117] border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 h-12"
                          required
                        />
                      </div>

                      {/* Where did you find us? */}
                      <div className="space-y-2">
                        <Label htmlFor="referralSource" className="text-sm font-medium text-gray-300">
                          Where did you find us?
                        </Label>
                        <Select
                          value={formData.referralSource}
                          onValueChange={(value) => handleInputChange("referralSource", value)}
                        >
                          <SelectTrigger className="bg-[#0d1117] border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500 h-12">
                            <SelectValue placeholder="Select platform..." />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1a1f2e] border-gray-700">
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="facebook">Facebook</SelectItem>
                            <SelectItem value="twitter">Twitter/X</SelectItem>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                            <SelectItem value="youtube">YouTube</SelectItem>
                            <SelectItem value="tiktok">TikTok</SelectItem>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="friend">Friend Referral</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold h-12 text-base transition-all duration-200 shadow-lg hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Processing..." : "Continue"}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-6 space-y-4">
                        <h3 className="text-lg font-semibold text-white">Payment Options</h3>
                        
                        <div className="space-y-3">
                          <p className="text-sm text-gray-300">
                            Send <span className="font-bold text-orange-500">Rs. 4,800</span> via any of these methods:
                          </p>
                          
                          <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Jazzcash</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Easypaisa</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Nayapay</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Bank Transfer (Meezan Bank)</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-700">
                          <p className="text-xs text-gray-400 mb-2">Account Details:</p>
                          <div className="bg-[#070a0f] p-4 rounded border border-gray-700">
                            <p className="text-white font-mono text-sm">Account: 0166-0108318685</p>
                            <p className="text-white font-mono text-sm">Bank: Meezan Bank</p>
                            <p className="text-white font-mono text-sm">Name: Mohammad Ahmed Ahsan</p>
                            <p className="text-white font-mono text-sm">Amount: Rs. 4,800</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => setStep(3)}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold h-12 text-base transition-all duration-200 shadow-lg hover:shadow-orange-500/50"
                      >
                        I've Made Payment
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>

                      <button
                        onClick={() => setStep(1)}
                        className="w-full text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        ← Back to Details
                      </button>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-6 space-y-4">
                        <h3 className="text-lg font-semibold text-white">Upload Payment Screenshot</h3>
                        <p className="text-sm text-gray-300">
                          Take a screenshot of your payment confirmation and upload it below.
                        </p>

                        <div 
                          className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-orange-500 transition-colors cursor-pointer"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <div className="space-y-2">
                            <div className="text-4xl">📸</div>
                            <p className="text-sm text-gray-300">
                              {uploadedFile ? uploadedFile.name : "Click to upload or drag and drop"}
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                            {uploadedFile && (
                              <div className="mt-2 text-xs text-green-500">
                                ✓ File ready to submit
                              </div>
                            )}
                          </div>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                const file = e.target.files[0];
                                setUploadedFile(file);
                                toast({
                                  title: "Screenshot Uploaded!",
                                  description: `${file.name} is ready to submit.`,
                                });
                              }
                            }}
                          />
                        </div>
                      </div>

                      <Button
                        onClick={handleFinalSubmit}
                        disabled={!uploadedFile || isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold h-12 text-base transition-all duration-200 shadow-lg hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Submit & Complete Enrollment"}
                        <Check className="w-5 h-5 ml-2" />
                      </Button>

                      <button
                        onClick={() => setStep(2)}
                        className="w-full text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        ← Back to Payment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
