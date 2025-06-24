import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Upload,
  CheckCircle,
  Code,
  Palette,
  TrendingUp,
  Megaphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo-head";
import { insertJobApplicationSchema, type InsertJobApplication } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const openPositions = [
  {
    id: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120k - $160k",
    icon: Code,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    description: "Lead frontend development initiatives and mentor junior developers while building cutting-edge user interfaces."
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$90k - $130k",
    icon: Palette,
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    description: "Create beautiful, intuitive user experiences that drive engagement and conversion for our clients."
  },
  {
    id: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote / Austin",
    type: "Full-time",
    salary: "$70k - $100k",
    icon: Megaphone,
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    description: "Develop and execute comprehensive digital marketing strategies for our diverse client portfolio."
  },
  {
    id: "growth-hacker",
    title: "Growth Hacker",
    department: "Marketing",
    location: "Remote",
    type: "Contract",
    salary: "$60k - $90k",
    icon: TrendingUp,
    skills: ["A/B Testing", "Analytics", "Conversion Optimization", "Product Marketing"],
    description: "Drive user acquisition and retention through data-driven growth experiments and optimization."
  }
];

const benefits = [
  "Competitive salary and equity package",
  "Comprehensive health, dental, and vision insurance",
  "Flexible work hours and remote-first culture",
  "Professional development budget ($2,000/year)",
  "Latest tech equipment and home office setup",
  "Unlimited PTO and mental health support",
  "Team retreats and quarterly offsites",
  "Career growth and mentorship programs"
];

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<InsertJobApplication>({
    resolver: zodResolver(insertJobApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: "",
      portfolioUrl: "",
      linkedinUrl: "",
      availability: "",
      salary: "",
      remote: false,
    },
  });

  const jobApplicationMutation = useMutation({
    mutationFn: async (data: InsertJobApplication) => {
      const response = await apiRequest("POST", "/api/job-applications", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Application Submitted!",
        description: data.message,
      });
      form.reset();
      setResumeFile(null);
      setSelectedPosition("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertJobApplication) => {
    jobApplicationMutation.mutate(data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const applyToPosition = (positionId: string) => {
    const position = openPositions.find(p => p.id === positionId);
    if (position) {
      setSelectedPosition(position.title);
      form.setValue("position", position.title);
      // Scroll to application form
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEOHead
        title="Careers at CodeVente - Join Our Innovative Team"
        description="Join CodeVente's team of talented developers, designers, and marketers. Explore open positions and apply today for exciting career opportunities."
        keywords="careers at codevente, tech jobs, web developer jobs, ui ux designer jobs, digital marketing jobs"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build the future of digital experiences with passionate innovators and industry experts.
          </motion.p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose CodeVente?</h2>
            <p className="text-xl text-slate-600">We're building something special, and we want you to be part of it.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Collaborative Culture</h3>
              <p className="text-slate-600">Work with diverse, talented teams that value your ideas and contributions.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Growth Opportunities</h3>
              <p className="text-slate-600">Continuous learning and career advancement in a fast-growing company.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Work-Life Balance</h3>
              <p className="text-slate-600">Flexible schedules and remote-first approach to help you thrive.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Competitive Package</h3>
              <p className="text-slate-600">Excellent compensation, benefits, and equity opportunities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-xl text-slate-600">Discover your next career opportunity with us.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900">{position.title}</h3>
                            <p className="text-slate-600">{position.department}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>

                      <p className="text-slate-600 mb-4">{position.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-slate-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {position.salary}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {position.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        onClick={() => applyToPosition(position.id)}
                        className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700 transition-all duration-200"
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-slate-600">We invest in our team's success and well-being.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Apply Today</h2>
            <p className="text-xl text-slate-600">Ready to join our team? We'd love to hear from you.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input {...field} className="py-3" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input {...field} className="py-3" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} className="py-3" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} className="py-3" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position Applied For *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="py-3">
                                <SelectValue placeholder="Select a position" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {openPositions.map((position) => (
                                <SelectItem key={position.id} value={position.title}>
                                  {position.title}
                                </SelectItem>
                              ))}
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience Level *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="py-3">
                                <SelectValue placeholder="Select experience level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                              <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                              <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                              <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Resume Upload */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Resume/CV *
                      </label>
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label htmlFor="resume-upload" className="cursor-pointer">
                          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                          <p className="text-lg font-medium text-slate-700 mb-2">
                            {resumeFile ? resumeFile.name : "Upload your resume"}
                          </p>
                          <p className="text-sm text-slate-500">
                            PDF, DOC, or DOCX files only (max 5MB)
                          </p>
                        </label>
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cover Letter *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={6}
                              placeholder="Tell us why you're interested in this position and what you'd bring to our team..."
                              className="resize-vertical"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="portfolioUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Portfolio URL</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="https://your-portfolio.com" className="py-3" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="linkedinUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn Profile</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="https://linkedin.com/in/yourprofile" className="py-3" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="availability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Availability</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="py-3">
                                  <SelectValue placeholder="When can you start?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="immediately">Immediately</SelectItem>
                                <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                                <SelectItem value="1-month">1 month</SelectItem>
                                <SelectItem value="2-months">2+ months</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="salary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expected Salary</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="py-3">
                                  <SelectValue placeholder="Select salary range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="50k-70k">$50k - $70k</SelectItem>
                                <SelectItem value="70k-100k">$70k - $100k</SelectItem>
                                <SelectItem value="100k-130k">$100k - $130k</SelectItem>
                                <SelectItem value="130k-160k">$130k - $160k</SelectItem>
                                <SelectItem value="160k+">$160k+</SelectItem>
                                <SelectItem value="negotiable">Negotiable</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="remote"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-slate-600">
                              I am interested in remote work opportunities
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={jobApplicationMutation.isPending || !resumeFile}
                      className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-200"
                    >
                      {jobApplicationMutation.isPending ? "Submitting..." : "Submit Application"}
                    </Button>

                    {!resumeFile && (
                      <p className="text-sm text-slate-500 text-center">
                        Please upload your resume to submit the application
                      </p>
                    )}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}