
"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import "./FloatingActions.css";

export default function FloatingActions() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = Math.round(
        (window.scrollY / scrollableHeight) * 100
      );

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 25;
  const strokeOffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="floating-actions">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/61430500596"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Scroll Progress Button */}
      <button
        className="scroll-progress-button"
        onClick={scrollToTop}
        aria-label={`Scroll progress ${scrollProgress} percent. Click to go to top.`}
      >
        <svg className="scroll-progress-circle" viewBox="0 0 60 60">
          <circle
            className="scroll-progress-track"
            cx="30"
            cy="30"
            r="25"
          />

          <circle
            className="scroll-progress-fill"
            cx="30"
            cy="30"
            r="25"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeOffset,
            }}
          />
        </svg>

        <span className="scroll-progress-text">
          {scrollProgress}%
        </span>
      </button>

    </div>
  );
}
