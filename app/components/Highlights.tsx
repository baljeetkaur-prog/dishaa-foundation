import Link from "next/link";
import "./Highlights.css";

import {
  FaHandHoldingHeart,
  FaPeopleGroup,
  FaGraduationCap,
  FaCompass,
  FaArrowRight,
} from "react-icons/fa6";

const highlights = [
  {
    icon: <FaHandHoldingHeart />,
    title: "Individual Wellbeing",
    description:
      "Confidential counselling and support for life's challenges and transitions.",
    link: "/coming-soon",
  },
  {
    icon: <FaPeopleGroup />,
    title: "Women's Wellbeing",
    description:
      "Empowering programs and supportive spaces designed around women's needs.",
    link: "/coming-soon",
  },
  {
    icon: <FaGraduationCap />,
    title: "Professional Growth",
    description:
      "Clinical supervision, professional training, and consultancy services.",
    link: "/coming-soon",
  },
  {
    icon: <FaCompass />,
    title: "Meaningful Impact",
    description:
      "Building confidence, personal clarity, and stronger communities together.",
    link: "/coming-soon",
  },
];

export default function Highlights() {
  return (
    <section className="highlights-section">
      <div className="highlights-container">
        {highlights.map((item, index) => (
          <Link
            href={item.link}
            className="highlight-item"
            key={index}
          >
            <div className="highlight-icon">
              {item.icon}
            </div>

            <div className="highlight-content">
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="highlight-arrow">
                <FaArrowRight />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}