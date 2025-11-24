import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-pine-white to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-pine-green hover:text-pine-gold font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-pine-green/10">
          <h1 className="text-4xl lg:text-5xl font-bold text-pine-navy mb-4">
            Privacy Policy
          </h1>
          <p className="text-pine-navy/60 mb-8">Last Updated: November 11, 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">1. Introduction</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                Seven Pines Design ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-pine-navy mb-3 mt-6">Information You Provide</h3>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                We collect information that you voluntarily provide when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80 mb-4">
                <li>Fill out contact forms or request consultations</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a callback or quote</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                This may include: name, email address, phone number, company name, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-pine-navy mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                When you visit our Site, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80">
                <li>Browser type and version</li>
                <li>IP address and general location</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device type and operating system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">3. How We Use Your Information</h2>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you information about our services and updates</li>
                <li>Improve our website and service offerings</li>
                <li>Analyze site usage and trends</li>
                <li>Process service requests and consultations</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">4. Third-Party Service Providers</h2>
              
              <h3 className="text-xl font-semibold text-pine-navy mb-3 mt-6">GoHighLevel CRM Integration</h3>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                When you submit a form on our website, your information is securely transmitted to GoHighLevel, our customer relationship management (CRM) platform. GoHighLevel processes this data to help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80 mb-4">
                <li>Manage and respond to your inquiries</li>
                <li>Track communication history</li>
                <li>Schedule consultations and follow-ups</li>
                <li>Send automated responses and updates</li>
              </ul>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                GoHighLevel maintains its own privacy practices and security measures. For more information, please review <a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-pine-green hover:text-pine-gold transition-colors">GoHighLevel's Privacy Policy</a>.
              </p>

              <h3 className="text-xl font-semibold text-pine-navy mb-3 mt-6">Other Third-Party Services</h3>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                We may also use other trusted third-party services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80">
                <li>Hosting providers (Vercel) for website infrastructure</li>
                <li>Email service providers for communications</li>
                <li>Analytics tools to understand site usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our Site. For detailed information about our cookie practices, please see our <Link to="/cookies" className="text-pine-green hover:text-pine-gold transition-colors">Cookies Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">6. Data Security</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">7. Data Retention</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Contact information from inquiries is typically retained for up to 2 years or until you request deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">8. Your Rights</h2>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="text-pine-navy/80 leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:EJ@SevenPines.Design" className="text-pine-green hover:text-pine-gold transition-colors">EJ@SevenPines.Design</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">9. Marketing Communications</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                If you subscribe to our newsletter or opt-in to marketing communications, we may send you updates, promotional materials, and service announcements. You can unsubscribe at any time by clicking the unsubscribe link in our emails or contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">10. Children's Privacy</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">11. International Users</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                Our services are operated in the United States. If you are accessing our Site from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">12. Changes to This Policy</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">13. Contact Us</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <p className="text-pine-navy/80 leading-relaxed mt-4">
                <strong className="text-pine-navy">Seven Pines Design</strong><br />
                Email: <a href="mailto:EJ@SevenPines.Design" className="text-pine-green hover:text-pine-gold transition-colors">EJ@SevenPines.Design</a><br />
                Phone: <a href="tel:+17162046443" className="text-pine-green hover:text-pine-gold transition-colors">(716) 204-6443</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

