
import Link from "next/link";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import "./CtaSection.css";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-banner">

          <div className="cta-decoration"></div>

          <div className="cta-left">
            <span className="cta-eyebrow">GET IN TOUCH</span>

            <h2>
              A little conversation
              <span> can open a new direction.</span>
            </h2>

            <p>
              Take the first step towards clarity, growth and meaningful
              change. We would love to hear from you.
            </p>
          </div>

          <div className="cta-right">
            <span className="cta-help-label">NEED HELP?</span>

            <a href="tel:+61430500596" className="cta-phone">
              <FaPhoneAlt />
              +61 430 500 596
            </a>

            <span className="cta-or">OR</span>

    <Link href="/contact-us" className="cta-button">
  Make an Appointment
  <FaArrowRight />
</Link>
          </div>

        </div>
      </div>
    </section>
  );
}
