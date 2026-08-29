import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollToTop from "@/components/scroll-to-top";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";
import Careers from "@/pages/careers";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Courses from "@/pages/courses";
import CourseEnroll from "@/pages/course-enroll";
import AdminEnrollments from "@/pages/admin-enrollments";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import CaseStudy from "@/pages/case-study";
import ERPNextImplementation from "@/pages/erpnext-implementation";
import NotFound from "@/pages/404";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/erpnext-implementation" component={ERPNextImplementation} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio/:slug" component={CaseStudy} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/blog" component={Blog} />
      <Route path="/courses/enroll" component={CourseEnroll} />
      <Route path="/courses" component={Courses} />
      <Route path="/admin/enrollments" component={AdminEnrollments} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white">
          <CustomCursor />
          <ScrollToTop />
          <Navigation />
          <main>
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
