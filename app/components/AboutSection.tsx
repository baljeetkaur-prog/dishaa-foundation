
import Image from "next/image";
import Link from "next/link";
import "./AboutSection.css";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image-wrapper">
          <div className="about-image-frame">
            <Image
              src="/images/aboutimg.png"
              alt="Dr. Saranbeer Kaur, Founder of Dishaa Foundation"
              width={600}
              height={700}
              className="about-image"
            />
          </div>

          <div className="about-image-decoration"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <span className="about-eyebrow">
            MEET THE FOUNDER
          </span>

          <h2>
            Dr. Saranbeer Kaur
            <span> (PhD, MSW)</span>
          </h2>

          <div className="about-founder-roles">
            Social Worker <span>|</span> Counsellor <span>|</span>
            University Lecturer <span>|</span> Community Advocate
          </div>

          <p className="about-description">
            Dr. Saranbeer Kaur is an Accredited Social Worker with the Australian Association of Social Workers (AASW),counsellor, university lecturer, and family violence prevention advocate with over 20 years of professional experience in Australia. As the first woman of Indian origin in Victoria to earn a Doctorate in Social Work, she brings together academic expertise, clinical leadership, and a deep commitment to community wellbeing.
          </p>


          <p className="about-description">
            Her professional journey includes collaborating with the World Health Organisation, lecturing at university level, contributing to Charles Sturt University's Guide to Social Work Field Education, and providing clinical supervision to Master of Social Work students across Australian institutions. She has also appeared as a featured panellist at the National Conference on the Prevention of Family Violence and Safe and Equal's PreventX conference.
          </p>

          <p className="about-description">
            Recognised in the Victorian Parliament by the Minister for Women and nominated for the Premier's Honor Roll, Dr. Kaur is committed to fostering emotional health, personal clarity, and professional growth through trauma-informed and culturally safe practice.
          </p>

          <Link href="/about-us" className="about-cta">
            Discover Our Story
            <FaArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
}
