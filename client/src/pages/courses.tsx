import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Play,
  Code,
  Palette,
  TrendingUp,
  Trophy,
  BookOpen,
  Zap
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
import { insertCourseEnrollmentSchema, type InsertCourseEnrollment } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { COURSES } from "@/lib/constants";

const categoryColors = {
  development: "bg-blue-100 text-blue-800",
  marketing: "bg-violet-100 text-violet-800",
  design: "bg-emerald-100 text-emerald-800"
};

const categoryIcons = {
  development: Code,
  marketing: TrendingUp,
  design: Palette
};

const benefits = [
  { icon: Trophy, title: "Industry Experts", description: "Learn from professionals with years of real-world experience" },
  { icon: BookOpen, title: "Practical Projects", description: "Build portfolio-worthy projects throughout each course" },
  { icon: Users, title: "Community Access", description: "Join our exclusive community of learners and professionals" },
  { icon: Zap, title: "Career Support", description: "Get job placement assistance and career guidance" }
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState("all");
  const { toast } = useToast();

  const form = useForm<InsertCourseEnrollment>({
    resolver: zodResolver(insertCourseEnrollmentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      courseId: "",
      courseName: "",
      experience: "",
      goals: "",
      heardAbout: "",
      newsletter: false,
    },
  });

  const courseEnrollmentMutation = useMutation({
    mutationFn: async (data: InsertCourseEnrollment) => {
      const response = await apiRequest("POST", "/api/course-enrollments", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Enrollment Successful!",
        description: data.message,
      });
      form.reset();
      setSelectedCourse("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit enrollment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertCourseEnrollment) => {
    courseEnrollmentMutation.mutate(data);
  };

  const enrollInCourse = (courseId: string) => {
    const course = COURSES.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course.title);
      form.setValue("courseId", course.id);
      form.setValue("courseName", course.title);
      // Scroll to enrollment form
      document.getElementById("enrollment-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filters = [
    { id: "all", label: "All Courses" },
    { id: "development", label: "Development" },
    { id: "marketing", label: "Marketing" },
    { id: "design", label: "Design" }
  ];

  const filteredCourses = activeFilter === "all" 
    ? COURSES 
    : COURSES.filter(course => course.category === activeFilter);

  return (
    <>
      <SEOHead
        title="Professional Tech Courses - Learn Web Development, Marketing & Design"
        description="Advance your career with CodeVente's professional courses in web development, digital marketing, and UI/UX design. Expert instruction and hands-on projects."
        keywords="web development courses, digital marketing training, ui ux design courses, online tech education, programming bootcamp"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Learn Future-Ready Skills
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master in-demand technologies with hands-on courses taught by industry experts. 
            Build real projects and advance your career.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-blue-600 px-8 py-4 font-semibold hover:bg-blue-50 transition-all duration-200"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Browse Courses
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("enrollment-form")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Learning
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Courses?</h2>
            <p className="text-xl text-slate-600">Comprehensive learning experience designed for career success.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Courses</h2>
            <p className="text-xl text-slate-600">Choose from our comprehensive selection of professional courses.</p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => {
              const IconComponent = categoryIcons[course.category as keyof typeof categoryIcons];
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <Card className="bg-white hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={categoryColors[course.category as keyof typeof categoryColors]}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-white rounded-lg px-2 py-1">
                        <div className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-500">{course.level}</span>
                        <div className="flex items-center text-sm text-slate-500">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students} students
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{course.title}</h3>
                      <p className="text-slate-600 mb-4 line-clamp-2">{course.description}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-slate-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="text-sm text-slate-500">
                          by {course.instructor}
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <p className="text-sm font-medium text-slate-700">What you'll learn:</p>
                        <div className="grid grid-cols-1 gap-1">
                          {course.modules.slice(0, 3).map((module, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {module}
                            </div>
                          ))}
                          {course.modules.length > 3 && (
                            <p className="text-xs text-slate-500 ml-5">+{course.modules.length - 3} more modules</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-slate-900">{course.price}</span>
                          <span className="text-sm text-slate-500 line-through ml-2">{course.originalPrice}</span>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Save {Math.round((1 - parseInt(course.price.replace('$', '').replace(',', '')) / parseInt(course.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                        </Badge>
                      </div>

                      <Button
                        onClick={() => enrollInCourse(course.id)}
                        className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 transition-all duration-200"
                      >
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enrollment-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Start Learning?</h2>
            <p className="text-xl text-slate-600">Fill out the form below to enroll in your chosen course.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-50">
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
                      name="courseId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Course *</FormLabel>
                          <Select onValueChange={(value) => {
                            field.onChange(value);
                            const course = COURSES.find(c => c.id === value);
                            if (course) {
                              form.setValue("courseName", course.title);
                              setSelectedCourse(course.title);
                            }
                          }} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="py-3">
                                <SelectValue placeholder="Choose a course" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {COURSES.map((course) => (
                                <SelectItem key={course.id} value={course.id}>
                                  {course.title} - {course.price}
                                </SelectItem>
                              ))}
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
                          <FormLabel>Current Experience Level *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="py-3">
                                <SelectValue placeholder="Select your experience level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                              <SelectItem value="some-experience">Some Experience</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="goals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Learning Goals *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={4}
                              placeholder="What do you hope to achieve with this course? What are your career goals?"
                              className="resize-vertical"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="heardAbout"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="py-3">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="google-search">Google Search</SelectItem>
                              <SelectItem value="social-media">Social Media</SelectItem>
                              <SelectItem value="friend-referral">Friend Referral</SelectItem>
                              <SelectItem value="online-ad">Online Advertisement</SelectItem>
                              <SelectItem value="blog-article">Blog Article</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="newsletter"
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
                              I'd like to receive course updates, learning tips, and special offers
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Next Steps:</strong> After submitting this form, we'll send you detailed course information, 
                        payment instructions, and access to our learning platform within 24 hours.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={courseEnrollmentMutation.isPending}
                      className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-200"
                    >
                      {courseEnrollmentMutation.isPending ? "Enrolling..." : "Enroll Now"}
                    </Button>
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