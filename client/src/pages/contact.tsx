import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo-head";
import PageHero from "@/components/layout/page-hero";
import SectionHeader from "@/components/layout/section-header";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { COMPANY_INFO } from "@/lib/constants";

const socialIcons = [
  { key: "linkedin" as const, Icon: Linkedin },
  { key: "github" as const, Icon: Github },
  { key: "instagram" as const, Icon: Instagram },
];

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      newsletter: false,
    },
  });

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data: InsertContact) => {
    setIsSending(true);
    try {
      const ownerEmail = COMPANY_INFO.email || "ahmedbawany2001@gmail.com";
      const baseParams = {
        to_email: ownerEmail,
        recipient_email: ownerEmail,
        recipient: ownerEmail,
        to: ownerEmail,
        user_name: data.name,
        user_email: data.email,
        reply_to: data.email,
        company: data.company || "N/A",
        service: data.service || "N/A",
        budget: data.budget || "N/A",
        message: data.message,
        newsletter: data.newsletter ? "Yes" : "No",
      };

      await Promise.all([
        emailjs.send("service_dy8se8c", "template_mfes4vk", {
          ...baseParams,
          email: data.email,
          name: data.name,
          title: data.service || "New contact inquiry",
        }, "-99YvMRnAdyvXUCB2"),
        emailjs.send("service_dy8se8c", "template_mfes4vk", {
          ...baseParams,
          email: ownerEmail,
          name: "CodeVente Team",
          title: `New lead: ${data.name} (${data.service || "General inquiry"})`,
        }, "-99YvMRnAdyvXUCB2"),
      ]);

      toast({
        title: "Message Sent!",
        description: "Your message has been sent. We'll get back to you shortly.",
      });
      form.reset();
    } catch (error: unknown) {
      const err = error as { text?: string };
      toast({
        title: "Failed to send message",
        description: err?.text || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const activeSocials = socialIcons.filter(({ key }) => COMPANY_INFO.social[key]);

  return (
    <>
      <SEOHead
        title="Contact CodeVente - Start Your AI or Software Project"
        description="Contact CodeVente for AI development, web and mobile app development, UI/UX design, and startup software consulting. Get a free quote today."
        keywords="contact codevente, AI development quote, mobile app development, software agency contact, startup tech consultation"
        canonicalPath="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Let's Build Your Product"
        description="Web app, mobile app, or AI integration — tell us about your startup project. We'll respond within 24 hours."
      />

      <section className="section-padding section-dark">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <SectionHeader
                eyebrow="Get in touch"
                title="Send Us a Message"
                align="left"
                dark
              />
              <Form {...form}>
                <form
                  ref={formRef}
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="form-dark"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Full Name *</FormLabel>
                          <FormControl>
                            <Input {...field} className="input-dark" required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} className="input-dark" required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Company</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} className="input-dark" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Service Needed</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                          <FormControl>
                            <SelectTrigger className="input-dark">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="web-app-development">Web & App Development</SelectItem>
                            <SelectItem value="ai-solutions">AI Solutions & Integration</SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="seo">SEO Optimization</SelectItem>
                            <SelectItem value="consultation">Tech Consultation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Project Details *</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            placeholder="Tell us about your project, goals, and timeline..."
                            className="input-dark resize-none"
                            required
                          />
                        </FormControl>
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
                            checked={!!field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-slate-400 font-normal leading-snug">
                          I'd like to receive updates about digital trends and CodeVente news.
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full btn-primary-gradient py-6 text-base rounded-xl"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div className="card-dark p-6 space-y-5">
                <h3 className="font-semibold text-white text-lg">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-sky-300" />
                    </div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-sky-300" />
                    </div>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-sky-300" />
                    </div>
                    <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</span>
                  </li>
                </ul>
              </div>

              {activeSocials.length > 0 && (
                <div className="card-dark p-6">
                  <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {activeSocials.map(({ key, Icon }) => (
                      <a
                        key={key}
                        href={COMPANY_INFO.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="card-glass p-6">
                <p className="text-sm text-slate-300">
                  <span className="text-white font-medium">Free technical audit</span> — we'll review your web, mobile, or AI product idea and outline a path to production. No commitment required.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
