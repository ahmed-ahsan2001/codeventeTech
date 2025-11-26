import { motion } from "framer-motion";
import SEOHead from "@/components/seo-head";
import { COMPANY_INFO } from "@/lib/constants";

export default function TermsOfService() {
  const lastUpdated = "January 2024";

  return (
    <>
      <SEOHead
        title="Terms of Service - CodeVente"
        description="CodeVente's Terms of Service outlining the rules and regulations for using our services."
        keywords="terms of service, terms and conditions, user agreement, codevente terms"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Terms of Service
          </motion.h1>
          <motion.p
            className="text-xl text-slate-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-slate-600 mb-8">
                Please read these Terms of Service ("Terms," "Terms of Service") carefully before using the 
                {COMPANY_INFO.name} website, mobile application, or services (collectively, the "Service") 
                operated by {COMPANY_INFO.name} ("us," "we," or "our").
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">1. Acceptance of Terms</h2>
              <p className="text-slate-600 mb-6">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with 
                any part of these terms, then you may not access the Service. These Terms apply to all visitors, 
                users, and others who access or use the Service.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">2. Use License</h2>
              <p className="text-slate-600 mb-4">
                Permission is granted to temporarily access and use our Service for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title, and under 
                this license you may not:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the Service</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-slate-600 mb-6">
                This license shall automatically terminate if you violate any of these restrictions and may be 
                terminated by {COMPANY_INFO.name} at any time.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">3. User Accounts</h2>
              <p className="text-slate-600 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Maintaining the security of your account and password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring that you exit from your account at the end of each session</li>
              </ul>
              <p className="text-slate-600 mb-6">
                We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel 
                orders at our sole discretion.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">4. Acceptable Use</h2>
              <p className="text-slate-600 mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Collect or store personal data about other users without their consent</li>
                <li>Use automated systems (bots, scrapers) to access the Service</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">5. Intellectual Property Rights</h2>
              <p className="text-slate-600 mb-6">
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of {COMPANY_INFO.name} and its licensors. The Service is protected by 
                copyright, trademark, and other laws. Our trademarks and trade dress may not be used in 
                connection with any product or service without our prior written consent.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">6. Payment Terms</h2>
              <p className="text-slate-600 mb-4">
                If you purchase any paid services or courses, you agree to pay all fees associated with such 
                purchases. You represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>You have the legal right to use any payment method you provide</li>
                <li>The information you provide is accurate and complete</li>
                <li>You authorize us to charge your payment method for the amounts specified</li>
              </ul>
              <p className="text-slate-600 mb-6">
                All fees are non-refundable unless otherwise stated. We reserve the right to change our 
                pricing at any time, but price changes will not affect purchases already completed.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">7. Course Enrollment and Content</h2>
              <p className="text-slate-600 mb-4">
                When you enroll in our courses or training programs:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>You receive a limited, non-exclusive, non-transferable license to access course materials</li>
                <li>Course content is for your personal, non-commercial use only</li>
                <li>You may not share, distribute, or resell course materials</li>
                <li>We reserve the right to modify or discontinue courses at any time</li>
                <li>Certificates of completion are provided at our discretion</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">8. Disclaimer</h2>
              <p className="text-slate-600 mb-6">
                The information on this Service is provided on an "as is" basis. To the fullest extent 
                permitted by law, {COMPANY_INFO.name} excludes all representations, warranties, conditions, 
                and terms relating to our Service and the use of this Service (including, without limitation, 
                any warranties implied by law in respect of satisfactory quality, fitness for purpose, and/or 
                the use of reasonable care and skill).
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">9. Limitation of Liability</h2>
              <p className="text-slate-600 mb-6">
                In no event shall {COMPANY_INFO.name}, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, or 
                other intangible losses, resulting from your use of the Service.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">10. Indemnification</h2>
              <p className="text-slate-600 mb-6">
                You agree to defend, indemnify, and hold harmless {COMPANY_INFO.name} and its licensee and 
                licensors, and their employees, contractors, agents, officers and directors, from and against 
                any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses 
                (including but not limited to attorney's fees), resulting from or arising out of your use and 
                access of the Service, or a breach of these Terms.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">11. Termination</h2>
              <p className="text-slate-600 mb-6">
                We may terminate or suspend your account and bar access to the Service immediately, without 
                prior notice or liability, under our sole discretion, for any reason whatsoever and without 
                limitation, including but not limited to a breach of the Terms. If you wish to terminate your 
                account, you may simply discontinue using the Service.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">12. Governing Law</h2>
              <p className="text-slate-600 mb-6">
                These Terms shall be interpreted and governed by the laws of {COMPANY_INFO.address.country}, 
                without regard to its conflict of law provisions. Our failure to enforce any right or provision 
                of these Terms will not be considered a waiver of those rights.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">13. Changes to Terms</h2>
              <p className="text-slate-600 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms 
                taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">14. Contact Information</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <p className="text-slate-700 mb-2"><strong>Email:</strong> {COMPANY_INFO.email}</p>
                <p className="text-slate-700 mb-2"><strong>Phone:</strong> {COMPANY_INFO.phone}</p>
                <p className="text-slate-700">
                  <strong>Address:</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, 
                  {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}, {COMPANY_INFO.address.country}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

