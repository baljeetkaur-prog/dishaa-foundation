
"use client";

import { useState } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane } from "react-icons/fa6";
import toast from "react-hot-toast";
import "./ContactSection.css";

export default function ContactSection() {
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
      subject: String(formData.get("service") || "General Enquiry"),
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
      console.error("Homepage contact form error:", error);

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
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE - CONTACT FORM */}
        <div className="contact-content">

          <span className="contact-eyebrow">
            LET'S CONNECT
          </span>

          <h2>
            Every meaningful change
            <span> begins with a conversation.</span>
          </h2>

          <p className="contact-description">
            Looking for support, professional guidance or an opportunity
            to create positive change in your community? Get in touch
            with Dishaa Foundation. We would be glad to hear from you.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="contact-name">
                  Full Name <span className="required-star">*</span>
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="contact-field">
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

            <div className="contact-field">
              <label htmlFor="contact-service">
                How Can We Support You? <span className="required-star">*</span>
              </label>

              <select
                id="contact-service"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
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

            <div className="contact-field">
              <label htmlFor="contact-message">
                Your Message <span className="required-star">*</span>
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Tell us a little about what you're looking for..."
                required
              />
            </div>

            {/* GOOGLE RECAPTCHA */}
            <div className="contact-recaptcha">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(token) => {
                  setCaptchaToken(token);
                  setCaptchaError("");
                }}
                onExpired={() => setCaptchaToken(null)}
              />

              {captchaError && (
                <p className="contact-captcha-error">
                  {captchaError}
                </p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="contact-submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Enquiry"}

              <FaPaperPlane className="contact-submit-icon" />
            </button>

          </form>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="contact-image">
          <Image
            src="/images/contact-section.png"
            alt="A welcoming and peaceful space"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

      </div>
    </section>
  );
}
