import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
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
import FadeInSection from "@/components/animations/FadeInSection";
import { insertContactSchema } from "@shared/schema";
import { COMPANY_INFO } from "@/lib/constants";

const contactFormSchema = insertContactSchema.extend({
  phone: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialIcons = [
  { key: "linkedin" as const, Icon: Linkedin },
  { key: "github" as const, Icon: Github },
  { key: "instagram" as const, Icon: Instagram },
];

const nextSteps = [
  {
    step: "01",
    title: "We reply within 24 hours",
    desc: "A founder or engineer reads your brief and comes back with clarifying questions or a suggested next call.",
  },
  {
    step: "02",
    title: "Scope & quote",
    desc: "For ERPNext, web, or AI work we map modules or features and send a fixed-price range before any build starts.",
  },
  {
    step: "03",
    title: "Kickoff",
    desc: "Once you approve, we schedule discovery, share a timeline, and start the first sprint or implementation phase.",
  },
];

const contactFaqs = [
  {
    q: "How fast do you respond?",
    a: "We typically reply within one business day. WhatsApp is fastest for urgent ERP or production issues.",
  },
  {
    q: "Do I need a full brief before contacting you?",
    a: "No. A short note on the problem, current tools, and timeline is enough. We will help shape the scope on the first call.",
  },
  {
    q: "Can you start with a paid discovery only?",
    a: "Yes. Many ERPNext and product engagements begin with a paid audit so you get a clear roadmap before committing to implementation.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      newsletter: false,
    },
  });

  const whatsappHref = `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi CodeVente — I would like to discuss a project.",
  )}`;

  const onSubmit = async (data: ContactFormValues) => {
    setIsSending(true);
    try {
      const ownerEmail = COMPANY_INFO.email || "infocodevente@gmail.com";
      const messageWithPhone = data.phone
        ? `${data.message}\n\nPhone / WhatsApp: ${data.phone}`
        : data.message;

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
        phone: data.phone || "N/A",
        message: messageWithPhone,
        newsletter: data.newsletter ? "Yes" : "No",
      };

      await Promise.all([
        emailjs.send(
          "service_dy8se8c",
          "template_mfes4vk",
          {
            ...baseParams,
            email: data.email,
            name: data.name,
            title: data.service || "New contact inquiry",
          },
          "-99YvMRnAdyvXUCB2",
        ),
        emailjs.send(
          "service_dy8se8c",
          "template_mfes4vk",
          {
            ...baseParams,
            email: ownerEmail,
            name: "CodeVente Team",
            title: `New lead: ${data.name} (${data.service || "General inquiry"})`,
          },
          "-99YvMRnAdyvXUCB2",
        ),
      ]);

      toast({
        title: "Message sent",
        description: "We will get back to you within 24 hours.",
      });
      form.reset();
      setSent(true);
    } catch (error: unknown) {
      const err = error as { text?: string };
      toast({
        title: "Failed to send message",
        description: err?.text || "Please try again, or message us on WhatsApp.",
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
        title="Contact CodeVente — ERPNext, AI & Software Projects"
        description="Talk to CodeVente about ERPNext implementation, AI products, or custom software. Based in Karachi — we reply within 24 hours. WhatsApp, email, or the form."
        keywords="contact CodeVente, ERPNext consultant Karachi, software agency Pakistan, AI development quote, WhatsApp CodeVente"
        canonicalPath="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you want to <span className="gradient-text">build or fix</span>
          </>
        }
        description="ERPNext, a web or mobile product, or an AI workflow — send a brief and we will reply within 24 hours with next steps."
      >
        <Button asChild size="lg" className="btn-primary-gradient rounded-xl px-8 py-6 gap-2">
          <a href="#contact-form">
            Open the form
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
        <Button asChild size="lg" className="btn-outline-light rounded-xl px-8 py-6 gap-2">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            WhatsApp us
          </a>
        </Button>
      </PageHero>

      <section id="contact-form" className="section-padding section-dark">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <SectionHeader
                eyebrow="Project brief"
                title="Send a message"
                description="Share as much as you know. We will handle the rest on the first call."
                align="left"
                dark
              />

              {sent ? (
                <div className="card-glass p-8 md:p-10">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="heading-sub text-slate-900 mb-3">Message received</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you. We will reply to your email within one business day. If it is urgent,
                    WhatsApp is the fastest way to reach us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="btn-primary-gradient rounded-xl"
                      onClick={() => setSent(false)}
                    >
                      Send another message
                    </Button>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      <Button className="btn-outline-light rounded-xl gap-2">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
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
                            <FormLabel className="text-slate-700">Full name *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Your name" className="input-dark" required />
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
                            <FormLabel className="text-slate-700">Work email *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} placeholder="you@company.com" className="input-dark" required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Phone / WhatsApp</FormLabel>
                            <FormControl>
                              <Input {...field} value={field.value ?? ""} placeholder="+92 3xx xxxxxxx" className="input-dark" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Company</FormLabel>
                            <FormControl>
                              <Input {...field} value={field.value ?? ""} placeholder="Company name" className="input-dark" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">What do you need?</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                              <FormControl>
                                <SelectTrigger className="input-dark">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="erp-implementation">ERPNext implementation</SelectItem>
                                <SelectItem value="web-app-development">Web & app development</SelectItem>
                                <SelectItem value="ai-solutions">AI solutions & integration</SelectItem>
                                <SelectItem value="ui-ux">UI/UX design</SelectItem>
                                <SelectItem value="digital-marketing">Digital marketing</SelectItem>
                                <SelectItem value="seo">SEO</SelectItem>
                                <SelectItem value="consultation">Consultation / audit</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Budget range</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                              <FormControl>
                                <SelectTrigger className="input-dark">
                                  <SelectValue placeholder="Optional" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under-5k">Under $5k / PKR 1.5M</SelectItem>
                                <SelectItem value="5k-15k">$5k–15k</SelectItem>
                                <SelectItem value="15k-40k">$15k–40k</SelectItem>
                                <SelectItem value="40k-plus">$40k+</SelectItem>
                                <SelectItem value="not-sure">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Project details *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={6}
                              placeholder="What are you using today, what is broken, and when do you need to go live?"
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
                            <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <FormLabel className="text-sm text-slate-400 font-normal leading-snug">
                            Send me occasional product and ERPNext notes from CodeVente.
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSending}
                      className="w-full btn-primary-gradient py-6 text-base rounded-xl gap-2"
                    >
                      {isSending ? "Sending..." : "Send message"}
                      {!isSending && <ArrowRight className="w-4 h-4" />}
                    </Button>
                    <p className="text-xs text-slate-500 text-center">
                      Prefer chat?{" "}
                      <a href={whatsappHref} className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        Message us on WhatsApp
                      </a>
                    </p>
                  </form>
                </Form>
              )}
            </motion.div>

            <motion.div
              className="lg:col-span-2 space-y-5"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass p-6 flex items-start gap-4 hover:border-cyan-400/30 transition-colors block"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold mb-1">WhatsApp</p>
                  <p className="text-sm text-slate-600 mb-2">Fastest for ERP and project questions</p>
                  <p className="text-electric text-sm">{COMPANY_INFO.phone}</p>
                </div>
              </a>

              <div className="card-dark p-6 space-y-5">
                <h3 className="font-semibold text-slate-900 text-lg">Direct contact</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-electric" />
                    </div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-electric transition-colors break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-electric" />
                    </div>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className="hover:text-electric transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-electric" />
                    </div>
                    <span>
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-electric" />
                    </div>
                    <span>Mon–Sat, 11:00–19:00 PKT · replies within 24h</span>
                  </li>
                </ul>
              </div>

              {activeSocials.length > 0 && (
                <div className="card-dark p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Follow</h3>
                  <div className="flex gap-3">
                    {activeSocials.map(({ key, Icon }) => (
                      <a
                        key={key}
                        href={COMPANY_INFO.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-electric hover:border-electric/30 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="overflow-hidden rounded-2xl border border-slate-200 h-48">
                <iframe
                  title="CodeVente Karachi"
                  src="https://maps.google.com/maps?q=Karachi%20Pakistan&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full grayscale contrast-125 opacity-80"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Process"
            title="What happens after you write"
            description="No black box. You will know the next step within a day."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {nextSteps.map((item, i) => (
              <FadeInSection key={item.step} delay={i * 0.08}>
                <article className="card-light p-7 h-full">
                  <span className="text-3xl font-bold text-electric/20">{item.step}</span>
                  <h3 className="font-semibold text-slate-900 mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm section-muted">
        <div className="section-container max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Before you reach out"
          />
          <div className="space-y-4">
            {contactFaqs.map((item) => (
              <div key={item.q} className="card-light p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-8">
            Looking for ERPNext specifically?{" "}
            <Link href="/erpnext-implementation">
              <span className="text-electric font-medium hover:underline cursor-pointer">
                Read the implementation page
              </span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
