import Link from "next/link";
import {
  FaFileContract,
  FaUserCheck,
  FaClipboardList,
  FaHandshake,
  FaShieldAlt,
  FaExclamationTriangle,
  FaGlobe,
  FaEnvelope,
  FaArrowRight,
  FaBalanceScale,
  FaCalendarAlt,
} from "react-icons/fa";
import "./TermsOfService.css";

export default function TermsOfService() {
  return (
    <main className="termspg-page">

      {/* HERO SECTION */}
      <section className="termspg-hero">
        <div className="termspg-hero-content">
          <span className="termspg-hero-label">
            IMPORTANT INFORMATION
          </span>

          <h1>Terms of Service</h1>

          <div className="termspg-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="termspg-main">
        <div className="termspg-container">

          {/* INTRODUCTION */}
          <div className="termspg-intro">
            <div className="termspg-intro-icon">
              <FaFileContract />
            </div>

            <div>
              <span className="termspg-section-label">
                PLEASE READ CAREFULLY
              </span>

              <h2>Understanding Our Terms</h2>

              <p>
                Welcome to Dishaa Foundation. These Terms of Service explain
                the conditions that apply when you access our website,
                contact us or engage with our services.
              </p>

              <p>
                By using this website or engaging with our services, you
                acknowledge that you have read and understood these terms.
                If you do not agree with them, please discontinue using
                the website.
              </p>
            </div>
          </div>

          {/* TERMS CONTENT */}
          <div className="termspg-content">

            {/* 1 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaUserCheck /></span>
                <h2>1. About Dishaa Foundation</h2>
              </div>

              <p>
                Dishaa Foundation provides services focused on individual
                wellbeing, personal development and professional growth.
                Our services may include:
              </p>

              <ul>
                <li>Individual counselling and wellbeing support.</li>
                <li>Women's wellbeing and personal growth services.</li>
                <li>Professional supervision for practitioners.</li>
                <li>Training, workshops and professional development.</li>
                <li>Consultancy and organisational support.</li>
              </ul>

              <p>
                The availability, scope and delivery of services may vary
                depending on the nature of the engagement and the agreed
                arrangements.
              </p>
            </section>

            {/* 2 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaClipboardList /></span>
                <h2>2. Use of This Website</h2>
              </div>

              <p>
                You agree to use this website responsibly and only for
                lawful purposes. When accessing our website, you must not:
              </p>

              <ul>
                <li>Use the website in a way that violates applicable laws or regulations.</li>
                <li>Attempt to gain unauthorised access to our website, systems or information.</li>
                <li>Introduce malicious software, harmful code or disruptive material.</li>
                <li>Copy, reproduce or distribute website content without permission.</li>
                <li>Use our website in a way that may affect its security, availability or functionality.</li>
              </ul>

              <p>
                We reserve the right to restrict or suspend access where
                misuse or a breach of these terms is identified.
              </p>
            </section>

            {/* 3 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaHandshake /></span>
                <h2>3. Services and Engagements</h2>
              </div>

              <p>
                Information provided on this website is intended to
                introduce our services and help visitors understand
                the support and professional opportunities available.
              </p>

              <p>
                Contacting us or submitting an enquiry does not automatically
                establish a professional relationship or guarantee acceptance
                into a service.
              </p>

              <p>
                Before a service begins, relevant arrangements may be
                discussed and confirmed, including:
              </p>

              <ul>
                <li>The nature and scope of the service.</li>
                <li>Fees, payment arrangements and applicable charges.</li>
                <li>Appointment scheduling and cancellation arrangements.</li>
                <li>Communication methods and service expectations.</li>
                <li>Any relevant consent, confidentiality or service agreements.</li>
              </ul>

              <p>
                Any specific agreement made between Dishaa Foundation and
                a client or organisation will apply to the relevant engagement.
              </p>
            </section>

            {/* 4 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaShieldAlt /></span>
                <h2>4. Counselling and Professional Services</h2>
              </div>

              <p>
                Counselling, wellbeing and professional supervision services
                are provided within the agreed scope of each engagement.
                These services are intended to support reflection, learning,
                wellbeing and professional development.
              </p>

              <p>
                Individual experiences and outcomes may vary. We do not
                guarantee specific personal, professional or organisational
                outcomes.
              </p>

              <p>
                Clients and participants are encouraged to communicate
                their needs, ask questions and raise any concerns about
                the suitability or scope of a service.
              </p>

              <p>
                Where a service is not appropriate for an individual's
                circumstances or needs, alternative support or referral
                options may be discussed where suitable.
              </p>
            </section>

            {/* 5 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaExclamationTriangle /></span>
                <h2>5. Emergency and Crisis Support</h2>
              </div>

              <p>
                Dishaa Foundation is not an emergency response service
                and our website, contact forms, emails and appointments
                are not monitored as emergency or crisis communication
                channels.
              </p>

              <p>
                If you or someone else is in immediate danger or requires
                urgent assistance in Australia, contact emergency services
                by calling <strong>000</strong>.
              </p>

              <p>
                For crisis support, you may contact:
              </p>

              <ul>
                <li><strong>Lifeline:</strong> 13 11 14</li>
                <li><strong>Beyond Blue:</strong> 1300 22 4636</li>
              </ul>

              <p>
                Please do not rely on Dishaa Foundation's website or
                communication channels for urgent assistance.
              </p>
            </section>

            {/* 6 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaLockIcon /></span>
                <h2>6. Privacy and Confidentiality</h2>
              </div>

              <p>
                We respect the privacy of individuals who visit our website
                or engage with our services. Personal information is handled
                in accordance with our Privacy Policy and applicable privacy
                requirements.
              </p>

              <p>
                Information shared during professional engagements will
                be treated with care and confidentiality, subject to
                applicable legal, ethical and professional obligations.
              </p>

              <p>
                For further information about how personal information
                is collected, used and protected, please read our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </section>

            {/* 7 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaBalanceScale /></span>
                <h2>7. Intellectual Property</h2>
              </div>

              <p>
                Unless otherwise stated, the content on this website,
                including text, graphics, branding, images, documents
                and other materials, belongs to Dishaa Foundation or
                is used with permission.
              </p>

              <p>
                You may view and use website content for personal,
                non-commercial purposes. You must not reproduce,
                distribute, modify, publish or commercially use our
                content without prior written permission.
              </p>
            </section>

            {/* 8 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaGlobe /></span>
                <h2>8. Third-Party Websites and Resources</h2>
              </div>

              <p>
                Our website may contain links to external websites,
                organisations or resources for additional information
                and convenience.
              </p>

              <p>
                These external websites are not controlled by Dishaa
                Foundation. We are not responsible for their content,
                availability, privacy practices or terms of use.
              </p>

              <p>
                Visitors should review the relevant terms and privacy
                policies before using third-party websites or services.
              </p>
            </section>

            {/* 9 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaCalendarAlt /></span>
                <h2>9. Changes to Services and Website Content</h2>
              </div>

              <p>
                We may update, modify, suspend or discontinue parts of
                our website or services from time to time.
              </p>

              <p>
                We also make reasonable efforts to keep website information
                accurate and current. However, information may change,
                and we do not guarantee that all website content will
                always be complete or up to date.
              </p>
            </section>

            {/* 10 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaBalanceScale /></span>
                <h2>10. Limitation of Liability</h2>
              </div>

              <p>
                To the extent permitted by applicable law, Dishaa Foundation
                is not liable for loss or damage arising from:
              </p>

              <ul>
                <li>Temporary website interruptions or unavailability.</li>
                <li>Errors, omissions or outdated information on the website.</li>
                <li>Unauthorised access to or interference with website systems beyond our reasonable control.</li>
                <li>Use of external websites or third-party resources linked from our website.</li>
                <li>Reliance on general website information without obtaining appropriate professional advice.</li>
              </ul>

              <p>
                Nothing in these terms excludes, restricts or modifies
                any consumer guarantee, right or remedy that cannot
                lawfully be excluded under applicable Australian law.
              </p>
            </section>

            {/* 11 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaGlobe /></span>
                <h2>11. Governing Law</h2>
              </div>

              <p>
                These Terms of Service are governed by the laws applicable
                in Victoria, Australia, unless another jurisdiction's
                mandatory laws apply.
              </p>

              <p>
                Any disputes relating to the use of this website or
                these terms will be handled in accordance with
                applicable laws and regulations.
              </p>
            </section>

            {/* 12 */}
            <section className="termspg-item">
              <div className="termspg-item-heading">
                <span><FaFileContract /></span>
                <h2>12. Updates to These Terms</h2>
              </div>

              <p>
                Dishaa Foundation may revise these Terms of Service
                from time to time to reflect changes in our services,
                website practices or legal requirements.
              </p>

              <p>
                Any revised terms will be published on this page.
                Continued use of the website after updates are published
                indicates acceptance of the revised terms, to the
                extent permitted by law.
              </p>
            </section>

          </div>

          {/* CONTACT CTA */}
          <div className="termspg-contact">
            <div className="termspg-contact-icon">
              <FaEnvelope />
            </div>

            <div className="termspg-contact-content">
              <h2>Have Questions About Our Terms?</h2>

              <p>
                If you have questions about these Terms of Service
                or need clarification about our services, please
                get in touch with Dishaa Foundation.
              </p>

              <a href="mailto:contact@dishaafoundation.com.au">
                contact@dishaafoundation.com.au
              </a>
            </div>

            <Link
              href="/contact-us"
              className="termspg-contact-button"
            >
              Contact Us <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

// Reuse the lock icon from react-icons
function FaLockIcon() {
  return <FaShieldAlt />;
}