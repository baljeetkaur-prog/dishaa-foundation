
"use client";

import { useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

import {
  FaTriangleExclamation,
  FaPhoneVolume,
  FaHeart,
  FaGlobe,
} from "react-icons/fa6";
import toast from "react-hot-toast";
import "./ContactPage.css";

export default function ContactPage() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      setCaptchaError("Please complete the reCAPTCHA verification.");
      return;
    }

    setCaptchaError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject: String(formData.get("subject") || "General Enquiry"),
      message: String(formData.get("message") || ""),
      captchaToken,
    };

    try {
      setSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your enquiry. Please try again."
        );
      }

      toast.success("Your enquiry has been sent successfully!");

      form.reset();
      setCaptchaToken(null);
      setCaptchaError("");

    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contactpg-page">

      {/* HERO SECTION */}
      <section className="contactpg-hero">
        <div className="contactpg-hero-content">
          <span className="contactpg-hero-label">
            WE WOULD LOVE TO HEAR FROM YOU
          </span>

          <h1>Contact Us</h1>

          <div className="contactpg-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contactpg-main">
        <div className="contactpg-container">

          {/* LEFT SIDE - CONTACT INFORMATION */}
          <div className="contactpg-info">
            <span className="contactpg-section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's start a <span>conversation.</span>
            </h2>

         <p className="contactpg-intro">
  Whether you're seeking individual counselling, professional
  supervision, women's wellbeing support or services for your
  organisation, we'd love to hear from you. Submit your enquiry
  using the form, and we'll get back to you to discuss the
  next steps.
</p>

            <div className="contactpg-info-list">

              {/* PHONE */}
              <div className="contactpg-info-item">
                <div className="contactpg-info-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3>Call Us</h3>
                  <a href="tel:+61430500596">
                    +61 430 500 596
                  </a>
                  <p>We're happy to hear from you.</p>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="contactpg-info-item">
                <div className="contactpg-info-icon">
                  <FaWhatsapp />
                </div>

                <div>
                  <h3>WhatsApp Us</h3>
                  <a
                    href="https://wa.me/61430500596"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +61 430 500 596
                  </a>
                  <p>Message us directly for enquiries.</p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="contactpg-info-item">
                <div className="contactpg-info-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h3>Email Us</h3>
                  <a href="mailto:contact@dishaafoundation.com.au">
                    contact@dishaafoundation.com.au
                  </a>
                  <p>Send us your questions or enquiries.</p>
                </div>
              </div>

              {/* OUR REACH */}
              <div className="contactpg-info-item">
                <div className="contactpg-info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3>Our Reach</h3>
                  <p>
                    Supporting individuals and communities in
                    Australia and beyond.
                  </p>
                </div>
              </div>

                       </div>

            {/* CRISIS SUPPORT NOTICE */}
            <div className="contactpg-crisis-notice">

              <div className="contactpg-crisis-heading">
                <FaTriangleExclamation />
                <h3>Important Safety &amp; Crisis Notice</h3>
              </div>

              <p>
                Dishaa Foundation provides scheduled professional
                counselling, supervision, and consultative services.
                We are not an emergency or crisis response service.
                If you or someone you know is in immediate danger or
                experiencing a mental health crisis, please use the
                resources below immediately:
              </p>

              <div className="contactpg-crisis-resources">

                <div>
                  <FaPhoneVolume />
                  <span>
                    <strong>Australia Emergency Services:</strong>{" "}
                    <a href="tel:000">Call 000</a>
                  </span>
                </div>

                <div>
                  <FaHeart />
                  <span>
                    <strong>Lifeline Australia:</strong>{" "}
                    <a href="tel:131114">Call 13 11 14 (24/7)</a>
                  </span>
                </div>

                <div>
                  <FaHeart />
                  <span>
                    <strong>Beyond Blue Australia:</strong>{" "}
                    <a href="tel:1300224636">Call 1300 22 4636</a>
                  </span>
                </div>

                <div>
                  <FaGlobe />
                  <span>
                    <strong>International Clients:</strong>{" "}
                    Contact local emergency services (e.g., 911, 112,
                    999) or your nearest hospital emergency department (ED).
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE - ENQUIRY FORM */}
          <div
            className="contactpg-form-wrapper"
            id="contact-form"
          >
            <div className="contactpg-form-heading">
              <span>SEND AN ENQUIRY</span>

              <h2>How Can We Help You?</h2>

          <p>
  Tell us what you're looking for, and we'll be happy to guide
  you through the next steps. Individual appointments,
  professional supervision, workshops and organisational
  enquiries can all be submitted through this form.
</p>
            </div>

            <form
              className="contactpg-form"
              onSubmit={handleSubmit}
            >

              {/* NAME AND EMAIL */}
              <div className="contactpg-form-row">
                <div className="contactpg-field">
                  <label htmlFor="contact-name">
                    Your Name <span className="required-star">*</span>
                  </label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="contactpg-field">
                  <label htmlFor="contact-email">
                    Email Address <span className="required-star">*</span>
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* PHONE AND SUBJECT */}
              <div className="contactpg-form-row">
                <div className="contactpg-field">
                  <label htmlFor="contact-phone">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="contactpg-field">
                  <label htmlFor="contact-subject">
                    Subject <span className="required-star">*</span>
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select an enquiry
                    </option>

                    <option value="Individual Counselling">
                      Individual Counselling
                    </option>

                    <option value="Professional Supervision">
                      Professional Supervision
                    </option>

                    <option value="15-Minute Initial Consultation">
                      15-Minute Initial Consultation
                    </option>

                    <option value="Women's Wellbeing Circles">
                      Women's Wellbeing Circles
                    </option>

                    <option value="Custom Professional Workshops">
                      Custom Professional Workshops
                    </option>

                    <option value="Organisational Consulting">
                      Organisational Consulting
                    </option>

                    <option value="General Enquiry">
                      General Enquiry
                    </option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="contactpg-field">
                <label htmlFor="contact-message">
                  Your Message <span className="required-star">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              {/* GOOGLE RECAPTCHA */}
              <div className="contactpg-recaptcha">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token) => {
                    setCaptchaToken(token);
                    setCaptchaError("");
                  }}
                  onExpired={() => setCaptchaToken(null)}
                />

                {captchaError && (
                  <p className="contactpg-captcha-error">
                    {captchaError}
                  </p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="contactpg-submit-btn"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </button>

     <p className="contactpg-form-disclaimer">
  All appointment requests are currently handled through this
  enquiry form. Submitting an enquiry does not confirm an
  appointment. Our team will contact you to discuss availability
  and arrangements. For workshops, women's wellbeing circles
  and organisational consulting, you can also reach us directly
  via WhatsApp.
</p>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
