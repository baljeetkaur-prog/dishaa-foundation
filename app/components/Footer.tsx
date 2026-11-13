
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowRight,
  FaTriangleExclamation,
  FaPhoneVolume,
  FaHeart,
  FaGlobe,
} from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
            {/* CRISIS SUPPORT DISCLAIMER */}
<section
  className="footer-crisis-notice"
  aria-labelledby="crisis-notice-heading"
>
  <div className="footer-crisis-container">

    <div className="footer-crisis-heading">
      <FaTriangleExclamation className="footer-crisis-main-icon" />

      <h3 id="crisis-notice-heading">
        Important Safety &amp; Crisis Notice
      </h3>
    </div>

    <p className="footer-crisis-description">
      Dishaa Foundation provides scheduled professional counselling,
      supervision, and consultative services. We are not an emergency
      or crisis response service. If you or someone you know is in
      immediate danger or experiencing a mental health crisis, please
      use the resources below immediately:
    </p>

    <div className="footer-crisis-resources">

      <div className="footer-crisis-item">
        <FaPhoneVolume />
        <span>
          <strong>Australia Emergency Services:</strong>{" "}
          <a href="tel:000">Call 000</a>
        </span>
      </div>

      <div className="footer-crisis-item">
        <FaHeart />
        <span>
          <strong>Lifeline Australia:</strong>{" "}
          <a href="tel:131114">Call 13 11 14 (24/7)</a>
        </span>
      </div>

      <div className="footer-crisis-item">
        <FaHeart />
        <span>
          <strong>Beyond Blue Australia:</strong>{" "}
          <a href="tel:1300224636">Call 1300 22 4636</a>
        </span>
      </div>

      <div className="footer-crisis-item">
        <FaGlobe />
        <span>
          <strong>International Clients:</strong>{" "}
          Contact local emergency services (e.g., 911, 112, 999)
          or your nearest hospital emergency department (ED).
        </span>
      </div>

    </div>
  </div>
</section>
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/images/new_logo.png"
              alt="Dishaa Foundation"
              width={190}
              height={75}
            />
          </Link>

          <p>
            Mapping the path to personal clarity and professional impact.
            Supporting individuals, empowering women and strengthening
            communities through meaningful wellbeing services.
          </p>
        </div>

        {/* GET IN TOUCH */}
        <div className="footer-column">
          <h3>Get in Touch</h3>

          <ul className="footer-contact-list">
            <li>
             <FaPhone />
              <a href="tel:+61430500596">+61 430 500 596</a>
            </li>

            <li>
              <FaEnvelope />
              <a href="mailto:contact@dishaafoundation.com.au">
                contact@dishaafoundation.com.au
              </a>
            </li>

            <li>
              <FaLocationDot />
              <span>Melbourne, Australia</span>
            </li>
          </ul>
        </div>
{/* ABOUT US */}
<div className="footer-column">
  <h3>About Us</h3>

  <ul className="footer-links">
    <li>
      <Link href="/coming-soon">
        <FaArrowRight />
        About Dishaa
      </Link>
    </li>
    <li>
      <Link href="/coming-soon">
        <FaArrowRight />
        Our Approach
      </Link>
    </li>
    <li>
      <Link href="/coming-soon">
        <FaArrowRight />
        Meet the Founder
      </Link>
    </li>
    <li>
      <Link href="/coming-soon">
        <FaArrowRight />
        Community
      </Link>
    </li>
    <li>
      <Link href="/contact-us">
        <FaArrowRight />
        Contact Us
      </Link>
    </li>
  </ul>
</div>

{/* QUICK LINKS */}
<div className="footer-column">
  <h3>Quick Links</h3>

  <ul className="footer-links">
    <li>
      <Link href="/coming-soon">
        <FaArrowRight />
        Individual Counselling
      </Link>
    </li>
    <li>
      <Link href="/coming-soon">
        <FaArrowRight />
        Women's Wellbeing
      </Link>
    </li>
    <li>
      <Link href="/coming-soon">
        <FaArrowRight />
        Professional Supervision
      </Link>
    </li>
    <li>
      <Link href="/coming-soon">
        <FaArrowRight />
        Training & Workshops
      </Link>
    </li>
    <li>
      <Link href="/coming-soon">
        <FaArrowRight />
        Consultancy
      </Link>
    </li>
  </ul>
</div>

       </div>
             {/* ACKNOWLEDGMENT OF COUNTRY */}
      <section className="footer-country">
        <div className="footer-country-container">

          <div className="footer-country-image">
            <Image
              src="/images/footer-flags.webp"
              alt="Aboriginal and Torres Strait Islander flags"
              width={220}
              height={130}
            />
          </div>

          <div className="footer-country-content">
            <h3>ACKNOWLEDGMENT OF COUNTRY</h3>

            <p>
              We Acknowledge and pay our respect to the traditional owners
              of the land we live and work on. We pay respect to their elders
              past and present and extend to all Aboriginal and Torres Strait
              Islander peoples today. This land always was, and always will be,
              Aboriginal land.
            </p>
          </div>

        </div>
      </section>



      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
      <p>
  © 2026 Dishaa Foundation. All rights reserved. | Designed & Developed by{" "}
  <a
    href="https://socialsimba.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Social Simba
  </a>
</p>

          <div className="footer-legal-links">
  <Link href="/coming-soon">Privacy Policy</Link>
  <Link href="/coming-soon">Terms of Service</Link>
</div>
        </div>
      </div>
    </footer>
  );
}
