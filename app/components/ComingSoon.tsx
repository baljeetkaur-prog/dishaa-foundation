
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa6";
import "./ComingSoon.css";

type ComingSoonProps = {
  title?: string;
};

export default function ComingSoon({
  title = "Something Meaningful Is Taking Shape",
}: ComingSoonProps) {
  return (
    <main className="coming-soon">
      <div className="coming-soon-container">

        <Link href="/" className="coming-soon-logo">
          <Image
            src="/images/new_logo.png"
            alt="Dishaa Foundation"
            width={190}
            height={75}
            priority
          />
        </Link>

        <div className="coming-soon-content">

          <span className="coming-soon-eyebrow">
            DISHAA FOUNDATION
          </span>

          <div className="coming-soon-line"></div>

          <h1>{title}</h1>

          <p className="coming-soon-description">
            We are thoughtfully preparing this space to bring you
            meaningful support, guidance and resources. This page
            will be available soon.
          </p>

          <p className="coming-soon-message">
            Thank you for your patience. We look forward to welcoming
            you here.
          </p>

          <div className="coming-soon-buttons">
            <Link href="/" className="coming-soon-home-btn">
              <FaArrowLeft />
              Back to Homepage
            </Link>

            <Link
              href="mailto:contact@dishaafoundation.com.au"
              className="coming-soon-contact-btn"
            >
              <FaEnvelope />
              Get in Touch
            </Link>
          </div>

        </div>

        <div className="coming-soon-bottom">
          <span>Mapping the path to personal clarity and professional impact.</span>
          <span>© 2026 Dishaa Foundation</span>
        </div>

      </div>
    </main>
  );
}
