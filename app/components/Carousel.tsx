
import Link from "next/link";
import Image from "next/image";
import "./Carousel.css";
import { FaArrowRight } from "react-icons/fa";

export default function Carousel() {
  // Replace this with the actual Halaxy booking URL
  const halaxyBookingUrl = "ADD_YOUR_HALAXY_BOOKING_URL";

  return (
    <section className="carousel-section">
      <div className="carousel-container">

        {/* LEFT CONTENT */}
        <div className="carousel-content">

          <span className="carousel-eyebrow">
            DISHAA FOUNDATION
          </span>

          <h1>
            Culturally Responsive{" "}
            <span>Counselling, Supervision & Wellbeing Solutions</span>
          </h1>

          <p className="carousel-description">
           Empowering individuals, practitioners, and communities across Australia and worldwide through evidence-based psychological support, clinical supervision, and transformative wellbeing workshops that honor every unique life journey.
          </p>

          {/* CONSULTATION LANGUAGES */}
          <div className="carousel-languages">
            <span className="language-label">Consultations available in:</span>
            <div className="language-list">
              <span>English</span>
              <span>हिन्दी (Hindi)</span>
              <span>ਪੰਜਾਬੀ (Punjabi)</span>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="carousel-buttons">

      <Link
  href="/contact-us"
  className="carousel-btn-primary"
>
  Book 1:1 Session
  <FaArrowRight className="carousel-btn-icon" />
</Link>

            <Link href="/contact-us" className="carousel-btn-secondary">
              Inquire for Workshops & Consulting
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="carousel-image-wrapper">
          <Image
            src="/images/carouselimg.png"
            alt="Dr. Saranbeer Kaur - Dishaa Foundation"
            width={550}
            height={550}
            priority
            className="carousel-image"
          />
        </div>

      </div>
    </section>
  );
}
