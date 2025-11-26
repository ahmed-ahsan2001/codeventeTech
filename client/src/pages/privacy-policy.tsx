import { motion } from "framer-motion";
import SEOHead from "@/components/seo-head";
import { COMPANY_INFO } from "@/lib/constants";

export default function PrivacyPolicy() {
  const lastUpdated = "January 2024";

  return (
    <>
      <SEOHead
        title="Privacy Policy - CodeVente"
        description="CodeVente's Privacy Policy outlining how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, user privacy, codevente privacy"
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
            Privacy Policy
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
                At {COMPANY_INFO.name} ("we," "our," or "us"), we are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website, use our services, or interact with our mobile applications.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">1. Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1.1 Personal Information</h3>
              <p className="text-slate-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Register for an account or use our services</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Fill out contact forms or request information</li>
                <li>Enroll in our courses or training programs</li>
                <li>Apply for job positions</li>
                <li>Contact us for customer support</li>
              </ul>
              <p className="text-slate-600 mb-6">
                This information may include your name, email address, phone number, postal address, 
                payment information, resume, and any other information you choose to provide.
              </p>

              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1.2 Automatically Collected Information</h3>
              <p className="text-slate-600 mb-4">
                When you access our website or use our services, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Device information (device type, operating system, browser type)</li>
                <li>IP address and location data</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and analytics data</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">2. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">3. Information Sharing and Disclosure</h2>
              <p className="text-slate-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers 
                who perform services on our behalf. These include:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Payment processors (for processing transactions)</li>
                    <li>Email service providers (for sending communications)</li>
                    <li>Analytics providers (for understanding app usage and performance)</li>
                    <li>Cloud hosting services (for data storage and processing)</li>
                    <li>Customer support platforms (for providing assistance)</li>
                  </ul>
                  These service providers are contractually obligated to protect your information and use it only 
                  for the purposes we specify.
                </li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in 
                response to valid requests by public authorities (e.g., court orders, subpoenas)</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
                your information may be transferred to the acquiring entity</li>
                <li><strong>With Your Consent:</strong> We may share your information with your explicit consent 
                for specific purposes</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">4. Data Retention</h2>
              <p className="text-slate-600 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required or permitted by law. Our 
                retention periods are as follows:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li><strong>Account Information:</strong> Retained for the duration of your account's existence 
                and for a reasonable period thereafter (typically 30-90 days) to comply with legal obligations 
                and resolve disputes</li>
                <li><strong>Transaction Records:</strong> Retained for at least 7 years as required by financial 
                and tax regulations</li>
                <li><strong>Marketing Communications:</strong> Retained until you unsubscribe or request deletion</li>
                <li><strong>Support Communications:</strong> Retained for up to 3 years to improve our services 
                and resolve issues</li>
                <li><strong>Analytics Data:</strong> Retained in aggregated, anonymized form for up to 2 years</li>
                <li><strong>Course Enrollment Data:</strong> Retained for the duration of your enrollment and 
                for up to 2 years after course completion for record-keeping purposes</li>
              </ul>
              <p className="text-slate-600 mb-6">
                When you request deletion of your account or personal information, we will delete or anonymize 
                your data within 30 days, except where we are required to retain it for legal, regulatory, or 
                legitimate business purposes.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">5. Data Security</h2>
              <p className="text-slate-600 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Encryption of data in transit using SSL/TLS protocols</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure data centers with physical security measures</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
              <p className="text-slate-600 mb-6">
                However, no method of transmission over the Internet or electronic storage is 100% secure, and 
                we cannot guarantee absolute security. If you have reason to believe that your interaction with 
                us is no longer secure, please contact us immediately.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">6. Your Rights and Choices</h2>
              <p className="text-slate-600 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information and receive a copy of 
                the data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (also known as the 
                "right to be forgotten")</li>
                <li><strong>Objection:</strong> Object to processing of your personal information for certain 
                purposes, such as direct marketing</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service in a 
                machine-readable format</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable 
                (this does not affect the lawfulness of processing before withdrawal)</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time by clicking the 
                unsubscribe link in emails or contacting us directly</li>
              </ul>
              <p className="text-slate-600 mb-4">
                To exercise these rights, please contact us at {COMPANY_INFO.email}. We will respond to your 
                request within 30 days. You may also:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Update your account information directly through your account settings</li>
                <li>Delete your account through the app settings or by contacting us</li>
                <li>Manage cookie preferences through your browser settings</li>
              </ul>
              <p className="text-slate-600 mb-6">
                If you are located in the European Economic Area (EEA) or California, you have additional rights 
                under GDPR and CCPA respectively. If you are not satisfied with our response, you have the right 
                to lodge a complaint with your local data protection authority.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">7. Mobile App Data Collection</h2>
              <p className="text-slate-600 mb-4">
                When you use our mobile application, we may collect additional information, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li><strong>Device Information:</strong> Device model, operating system version, unique device 
                identifiers, mobile network information</li>
                <li><strong>App Usage Data:</strong> Features used, time spent in app, crash reports, performance 
                data</li>
                <li><strong>Location Data:</strong> With your permission, we may collect precise or approximate 
                location data to provide location-based features</li>
                <li><strong>Push Notifications:</strong> We may send push notifications to your device. You can 
                manage notification preferences in your device settings</li>
                <li><strong>Camera and Photos:</strong> With your permission, we may access your camera or photo 
                library to enable features like profile pictures or document uploads</li>
              </ul>
              <p className="text-slate-600 mb-6">
                You can control app permissions through your device settings. Note that disabling certain 
                permissions may limit your ability to use some features of the app.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">8. Cookies and Tracking Technologies</h2>
              <p className="text-slate-600 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and mobile app, 
                and to hold certain information. Types of cookies we use include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the service to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our service</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements (if applicable)</li>
              </ul>
              <p className="text-slate-600 mb-6">
                You can instruct your browser or device to refuse all cookies or to indicate when a cookie is 
                being sent. However, if you do not accept cookies, you may not be able to use some portions of 
                our service. For more information about managing cookies, visit your browser's help section.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">9. Children's Privacy</h2>
              <p className="text-slate-600 mb-6">
                Our services are not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us immediately.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">10. International Data Transfers</h2>
              <p className="text-slate-600 mb-6">
                Your information may be transferred to and maintained on computers located outside of your state, 
                province, country, or other governmental jurisdiction where data protection laws may differ. By 
                using our services, you consent to the transfer of your information to our facilities and those 
                third parties with whom we share it as described in this policy. We ensure that appropriate 
                safeguards are in place to protect your information in accordance with this Privacy Policy, 
                including standard contractual clauses approved by relevant data protection authorities.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">11. California Privacy Rights (CCPA)</h2>
              <p className="text-slate-600 mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy 
                Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by us and our service providers</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-slate-600 mb-6">
                To exercise these rights, please contact us at {COMPANY_INFO.email} with "California Privacy Rights" 
                in the subject line.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">12. European Privacy Rights (GDPR)</h2>
              <p className="text-slate-600 mb-6">
                If you are located in the European Economic Area (EEA), you have rights under the General Data 
                Protection Regulation (GDPR), including the rights listed in Section 6 above. Our legal basis for 
                processing your personal information includes: (1) your consent, (2) performance of a contract, 
                (3) compliance with legal obligations, (4) protection of vital interests, (5) performance of a 
                task carried out in the public interest, and (6) legitimate interests pursued by us or a third party.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">13. Changes to This Privacy Policy</h2>
              <p className="text-slate-600 mb-6">
                We may update our Privacy Policy from time to time to reflect changes in our practices, technology, 
                legal requirements, or other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the "Last Updated" date at the top of this policy</li>
                <li>Sending you an email notification (for significant changes)</li>
                <li>Displaying a prominent notice in our app or on our website</li>
              </ul>
              <p className="text-slate-600 mb-6">
                You are advised to review this Privacy Policy periodically for any changes. Your continued use of 
                our services after changes become effective constitutes acceptance of those changes.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">14. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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

