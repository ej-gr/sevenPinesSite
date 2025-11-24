import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
            Terms & Conditions
          </h1>
          <p className="text-pine-navy/60 mb-8">Last Updated: November 11, 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">1. Agreement to Terms</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                By accessing and using the Seven Pines Design website ("Site"), you agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">2. Services</h2>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                Seven Pines Design provides web design, development, branding, and digital marketing services. All services are subject to the specific terms outlined in individual service agreements or contracts.
              </p>
              <p className="text-pine-navy/80 leading-relaxed">
                Service descriptions, pricing, and timelines are subject to change. Final project scope and deliverables will be detailed in a signed agreement between Seven Pines Design and the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">3. Intellectual Property</h2>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                All content on this Site, including text, graphics, logos, images, and software, is the property of Seven Pines Design or its content suppliers and is protected by international copyright laws.
              </p>
              <p className="text-pine-navy/80 leading-relaxed">
                Upon full payment for services rendered, clients receive ownership of the final deliverables as specified in the service agreement. Seven Pines Design retains the right to display completed work in our portfolio unless otherwise specified in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">4. Payment Terms</h2>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                Payment terms will be specified in individual service agreements. Typical payment structures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80">
                <li>50% deposit upon project commencement</li>
                <li>50% balance upon project completion and before final delivery</li>
                <li>Custom payment plans as agreed upon in writing</li>
              </ul>
              <p className="text-pine-navy/80 leading-relaxed mt-4">
                Late payments may result in project delays or suspension of services. All fees are non-refundable once work has commenced, except as specified in individual agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">5. Project Timeline</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                While we strive to complete projects within the estimated timeline (typically 7 days for our Launch Kit), actual completion may vary based on client responsiveness, content availability, and project complexity. Timelines are estimates and not guarantees unless explicitly stated in a service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">6. Revisions and Changes</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                Our standard packages include one round of revisions as specified in the service agreement. Additional revisions or scope changes may incur additional fees. Major changes to project scope will require a revised agreement and additional payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">7. Client Responsibilities</h2>
              <p className="text-pine-navy/80 leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-pine-navy/80">
                <li>Providing timely feedback and approvals</li>
                <li>Supplying necessary content, images, and brand materials</li>
                <li>Ensuring all provided content is legally owned or properly licensed</li>
                <li>Maintaining domain registration and hosting services (where applicable)</li>
                <li>Timely payment according to the agreed schedule</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">8. Limitation of Liability</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                Seven Pines Design shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or this Site. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">9. Third-Party Services</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                We may use third-party services and tools in the delivery of our services, including but not limited to GoHighLevel, hosting providers, and analytics platforms. Use of these services is subject to their respective terms and privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">10. Termination</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                Either party may terminate a service agreement with written notice. Termination terms, including payment for work completed, will be as specified in the individual service agreement. Seven Pines Design reserves the right to refuse service to anyone for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">11. Governing Law</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the State of Connecticut, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">12. Changes to Terms</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                Seven Pines Design reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to this Site. Your continued use of the Site after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pine-navy mb-4">13. Contact Information</h2>
              <p className="text-pine-navy/80 leading-relaxed">
                For questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="text-pine-navy/80 leading-relaxed mt-4">
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

