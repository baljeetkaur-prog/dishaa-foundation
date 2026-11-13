
import Link from "next/link";
import "./PathwaysSection.css";
import { FaArrowRight } from "react-icons/fa";

const pathways = [
  {
    title: "For Individuals",
    subtitle: "Dishaa Counselling",
    description:
      "Compassionate, professional support tailored to your life journey. We provide a safe, reflective environment for navigating stress, grief, life transitions, relationships, and emotional wellbeing.",
    button: "Explore Counselling",
    href: "/coming-soon",
  },
  {
    title: "For Women",
    subtitle: "Dishaa Women",
    description:
      "Thoughtfully curated wellbeing experiences, workshops, and personal growth circles. Designed for women seeking self-care, connection, confidence, and clarity during key life transitions.",
    button: "Explore Women's Wellbeing",
    href: "/coming-soon",
  },
  {
    title: "For Professionals & Organisations",
    subtitle: "Dishaa Learning & Consultancy",
    description:
      "External 1:1 clinical supervision, specialised workforce development, and organisational consultancy grounded in trauma-informed, culturally responsive practice and extensive sector leadership.",
    button: "Explore Professional Services",
    href: "/coming-soon",
  },
];

export default function PathwaysSection() {
  return (
    <section className="pathways-section" id="pathways">
      <div className="pathways-container">

        <div className="pathways-heading">
          <span className="pathways-eyebrow">
            HOW WE CAN SUPPORT YOU
          </span>

          <h2>
            Find your path <span>forward.</span>
          </h2>

          <p>
            Different journeys, different needs. Discover the support
            and opportunities designed to help you grow.
          </p>
        </div>

        <div className="pathways-grid">
          {pathways.map((pathway, index) => (
            <div className="pathway-card" key={pathway.title}>
              <div className="pathway-card-number">
                0{index + 1}
              </div>

              <div className="pathway-card-content">
                <h3>{pathway.title}</h3>

                <span className="pathway-subtitle">
                  {pathway.subtitle}
                </span>

                <p>{pathway.description}</p>

                <Link
                  href={pathway.href}
                  className="pathway-button"
                >
                  {pathway.button}
                  <FaArrowRight />
                </Link>
              </div>

              <div className="pathway-card-decoration"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
