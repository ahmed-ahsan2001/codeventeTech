import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: (data) => {
      toast({ title: "Success!", description: data.message });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({ title: "Error", description: "Please enter your email address.", variant: "destructive" });
      return;
    }
    newsletterMutation.mutate(email.trim());
  };

  return (
    <section className="section-padding-sm section-muted">
      <div className="section-container">
        <motion.div
          className="max-w-2xl mx-auto text-center card-light p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow-light mb-3">Newsletter</p>
          <h2 className="heading-section text-slate-900 mb-3">Stay in the Loop</h2>
          <p className="text-slate-600 mb-6">
            Get insights on AI, software development, and startup product trends.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 rounded-xl border-slate-200 focus:border-primary"
              disabled={newsletterMutation.isPending}
            />
            <Button
              type="submit"
              disabled={newsletterMutation.isPending}
              className="btn-primary-gradient h-12 px-8 rounded-xl"
            >
              {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
