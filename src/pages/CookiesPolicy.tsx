import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookiesPolicy() {
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
            Cookies Policy
          </h1>
          <p className="text-pine-navy/60 mb-8">Last Updated: November 11, 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">1. What Are Cookies?</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us understand how you use our Site and improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">2. How We Use Cookies</h2>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                Seven Pines Design uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly, including form submissions and navigation</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences (like cookie consent)</li>
                <li><strong>Performance Cookies:</strong> Improve Site performance and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-pine-navy mb-3 mt-6">Session Cookies</h3>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                These are temporary cookies that expire when you close your browser. They help us track your session and ensure forms work correctly.
              </p>

              <h3 className="text-xl font-semibold text-pine-navy mb-3">Persistent Cookies</h3>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                These cookies remain on your device for a set period or until you delete them. They remember your preferences and help us recognize you on return visits.
              </p>

              <h3 className="text-xl font-semibold text-pine-navy mb-3">Third-Party Cookies</h3>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                We may use third-party services that set their own cookies, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80">
                <li><strong>GoHighLevel:</strong> For form submission and CRM functionality</li>
                <li><strong>Analytics Tools:</strong> To understand site traffic and user behavior</li>
                <li><strong>Hosting Services:</strong> For website delivery and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">4. Cookie Consent</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                When you first visit our Site, you'll see a notice about our use of cookies. By clicking "Accept" or continuing to use the Site, you consent to our use of cookies as described in this policy. You can change your cookie preferences at any time using your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">5. Managing Cookies</h2>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              
              <h3 className="text-xl font-semibold text-pine-navy mb-3 mt-6">Browser Settings</h3>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80 mb-4">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <h3 className="text-xl font-semibold text-pine-navy mb-3">Browser-Specific Instructions</h3>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
              </ul>
              
              <p className="text-pine-navy/80 leading-relaxed mt-4">
                <em>Note: Blocking or deleting cookies may impact your experience on our Site and limit certain functionality.</em>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">6. Do Not Track</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                Some browsers include a "Do Not Track" feature. Currently, there is no industry standard for responding to Do Not Track signals. Our Site does not currently respond to Do Not Track browser signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">7. Updates to This Policy</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Please check this page periodically for updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">8. Contact Us</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                If you have questions about our use of cookies, please contact us:
              </p>
              <p className="text-pine-navy/80 leading-relaxed mt-4">
                <strong className="text-pine-navy">Seven Pines Design</strong><br />
                Email: <a href="mailto:EJ@SevenPines.Design" className="text-pine-green hover:text-pine-gold transition-colors">EJ@SevenPines.Design</a><br />
                Phone: <a href="tel:+17162046443" className="text-pine-green hover:text-pine-gold transition-colors">(716) 204-6443</a>
              </p>
            </section>

            <section className="mt-8 pt-8 border-t border-pine-green/10">
              <p className="text-pine-navy/70 italic">
                For more information about how we handle your data, please review our <Link to="/privacy" className="text-pine-green hover:text-pine-gold transition-colors">Privacy Policy</Link> and <Link to="/terms" className="text-pine-green hover:text-pine-gold transition-colors">Terms & Conditions</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

