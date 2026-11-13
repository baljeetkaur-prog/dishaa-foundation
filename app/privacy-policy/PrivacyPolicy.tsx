import Link from "next/link";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaClipboardCheck,
  FaEnvelope,
  FaArrowRight,
  FaGlobe,
} from "react-icons/fa";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <main className="privacypg-page">

      {/* HERO SECTION */}
      <section className="privacypg-hero">
        <div className="privacypg-hero-content">
          <span className="privacypg-hero-label">
            YOUR PRIVACY MATTERS TO US
          </span>

          <h1>Privacy Policy</h1>

          <div className="privacypg-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY CONTENT */}
      <section className="privacypg-main">
        <div className="privacypg-container">

          {/* INTRODUCTION */}
          <div className="privacypg-intro">
            <div className="privacypg-intro-icon">
              <FaShieldAlt />
            </div>

            <div>
              <span className="privacypg-section-label">
                OUR COMMITMENT TO PRIVACY
              </span>

              <h2>Protecting Your Personal Information</h2>

              <p>
                Dishaa Foundation is committed to protecting the privacy
                of our clients, website visitors, and anyone who contacts
                us. This policy explains how we handle personal information
                in accordance with the Privacy Act 1988 (Cth), the Australian
                Privacy Principles (APPs), and the Health Records Act 2001 (Vic),
                where applicable.
              </p>

              <p>
                We recognise the importance of confidentiality, trust and
                responsible information handling, particularly when
                providing counselling, professional supervision, wellbeing
                and consultancy services.
              </p>
            </div>
          </div>

          {/* POLICY SECTIONS */}
          <div className="privacypg-content">

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaUserShield /></span>
                <h2>1. Information We Collect</h2>
              </div>

              <p>
                The type of personal information we collect depends on
                how you interact with Dishaa Foundation and the services
                you request.
              </p>

              <p>This may include:</p>

              <ul>
                <li>Your name and contact details, including email address and phone number.</li>
                <li>Information you provide through our website contact and enquiry forms.</li>
                <li>Details relevant to counselling, professional supervision or consultancy enquiries.</li>
                <li>Information relating to appointments, service delivery and professional engagement.</li>
                <li>Health information or other sensitive information that you voluntarily provide where relevant to our services.</li>
                <li>Website usage information, such as browser type, device information and website interactions.</li>
              </ul>

              <p>
                We aim to collect only information that is reasonably
                necessary for the services we provide or for responding
                to your enquiry.
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaClipboardCheck /></span>
                <h2>2. How We Collect Information</h2>
              </div>

              <p>We may collect personal information through:</p>

              <ul>
                <li>Contact forms and enquiry submissions on our website.</li>
                <li>Phone calls, emails and other direct communications.</li>
                <li>Initial consultations, appointments and service-related discussions.</li>
                <li>Professional supervision, counselling and consultancy engagements.</li>
                <li>Other interactions where you voluntarily provide information to us.</li>
              </ul>

              <p>
                Where reasonably practicable, we collect personal
                information directly from the individual concerned.
                If information is collected from another source, we
                will handle it in accordance with applicable privacy
                requirements.
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaLock /></span>
                <h2>3. How We Use Your Information</h2>
              </div>

              <p>
                Personal information may be used for purposes including:
              </p>

              <ul>
                <li>Responding to enquiries and requests for information.</li>
                <li>Arranging consultations, appointments and professional services.</li>
                <li>Providing counselling, supervision, training and consultancy services.</li>
                <li>Maintaining appropriate service and professional records.</li>
                <li>Communicating important updates about services and appointments.</li>
                <li>Meeting applicable legal, regulatory and professional obligations.</li>
                <li>Improving our website, services and overall user experience.</li>
              </ul>

              <p>
                We will not use your personal information for unrelated
                purposes without an appropriate legal basis or your
                consent, where required.
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaShieldAlt /></span>
                <h2>4. Sensitive and Health Information</h2>
              </div>

              <p>
                Some Dishaa Foundation services may involve the collection
                or handling of sensitive information, including health
                information and details relating to personal circumstances.
              </p>

              <p>
                We treat this information with particular care and handle
                it in accordance with applicable privacy and health records
                legislation.
              </p>

              <p>
                Sensitive information will generally be collected with
                your consent and used only where reasonably necessary
                for the relevant service, or as otherwise permitted or
                required by law.
              </p>

              <p>
                Please avoid including detailed personal, medical or
                sensitive information in general website enquiry forms.
                Such information can be discussed through an appropriate
                and suitable communication process.
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaUserShield /></span>
                <h2>5. Disclosure of Personal Information</h2>
              </div>

              <p>
                Dishaa Foundation does not sell or rent personal information
                to third parties.
              </p>

              <p>
                We may disclose relevant information where reasonably
                necessary for service delivery or where permitted or
                required by law, including to:
              </p>

              <ul>
                <li>Professional service providers who assist with our operations.</li>
                <li>Technology, website hosting and communication providers.</li>
                <li>Other professionals or organisations involved in service delivery, where appropriate and authorised.</li>
                <li>Government agencies, regulators or authorities where legally required.</li>
              </ul>

              <p>
                We take reasonable steps to ensure that information is
                handled appropriately when shared with service providers.
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaLock /></span>
                <h2>6. Data Storage and Security</h2>
              </div>

              <p>
                We take reasonable steps to protect personal information
                from misuse, interference, loss, unauthorised access,
                modification or disclosure.
              </p>

              <p>
                Depending on the information and systems involved,
                security measures may include:
              </p>

              <ul>
                <li>Access restrictions for personal and service-related information.</li>
                <li>Secure systems and password-protected accounts.</li>
                <li>Appropriate digital security and administrative procedures.</li>
                <li>Limiting access to information to those who need it for authorised purposes.</li>
              </ul>

              <p>
                Personal information is retained only for as long as
                reasonably necessary for its intended purpose or as
                required by applicable legal, regulatory and professional
                obligations.
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaGlobe /></span>
                <h2>7. Website Cookies and Third-Party Services</h2>
              </div>

              <p>
                Our website may use cookies and similar technologies
                to support website functionality, understand visitor
                interactions and improve the browsing experience.
              </p>

              <p>
                Our website contact form also uses Google reCAPTCHA
                to help protect against spam and automated submissions.
                This service may collect certain information about
                your interaction with the website in accordance with
                Google's privacy practices.
              </p>

              <p>
                Third-party services used on our website may have their
                own privacy policies and information-handling practices.
                We encourage visitors to review those policies where
                relevant.
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaGlobe /></span>
                <h2>8. Overseas Disclosure</h2>
              </div>

              <p>
                Dishaa Foundation may receive enquiries from individuals
                located in Australia and other countries.
              </p>

              <p>
                Some technology or service providers supporting our
                website and operations may store or process information
                outside Australia.
              </p>

              <p>
                Where personal information is disclosed overseas,
                we will take steps required under applicable privacy
                laws to ensure that appropriate safeguards are in place.
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaUserShield /></span>
                <h2>9. Accessing and Correcting Your Information</h2>
              </div>

              <p>
                You may request access to personal information we hold
                about you and ask us to correct information that is
                inaccurate, incomplete or out of date.
              </p>

              <p>
                We will respond to requests in accordance with applicable
                privacy legislation. In certain circumstances, access
                may be restricted where permitted by law.
              </p>

              <p>
                To make an access or correction request, please contact
                us using the details provided below.
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaClipboardCheck /></span>
                <h2>10. Privacy Concerns and Complaints</h2>
              </div>

              <p>
                If you have a concern about how your personal information
                has been collected, used, stored or disclosed, we encourage
                you to contact Dishaa Foundation.
              </p>

              <p>
                We will review your concern and work towards resolving
                it in a timely and appropriate manner.
              </p>

              <p>
                If you are not satisfied with our response, you may
                contact the Office of the Australian Information
                Commissioner (OAIC) or the relevant Victorian privacy
                regulator, depending on the nature of your concern
                and the legislation that applies.
              </p>

              <p>
                <a
                  href="https://www.oaic.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Office of the Australian Information Commissioner
                  <FaArrowRight />
                </a>
              </p>
            </section>

            <section className="privacypg-item">
              <div className="privacypg-item-heading">
                <span><FaShieldAlt /></span>
                <h2>11. Changes to This Privacy Policy</h2>
              </div>

              <p>
                Dishaa Foundation may update this Privacy Policy from
                time to time to reflect changes in our services,
                information-handling practices or applicable legislation.
              </p>

              <p>
                Any updated version will be published on this page.
                We encourage visitors to review this policy periodically.
              </p>
            </section>

          </div>

          {/* CONTACT CTA */}
          <div className="privacypg-contact">
            <div className="privacypg-contact-icon">
              <FaEnvelope />
            </div>

            <div className="privacypg-contact-content">
              <h2>Questions About Your Privacy?</h2>

              <p>
                If you have any questions, concerns or requests relating
                to your personal information, please get in touch with
                Dishaa Foundation.
              </p>

              <a href="mailto:contact@dishaafoundation.com.au">
                contact@dishaafoundation.com.au
              </a>
            </div>

            <Link
              href="/contact-us"
              className="privacypg-contact-button"
            >
              Contact Us <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}