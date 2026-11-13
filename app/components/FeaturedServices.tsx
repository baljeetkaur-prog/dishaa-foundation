
import Link from "next/link";
import "./FeaturedServices.css";
import { FaArrowRight } from "react-icons/fa6";

const services = [
  {
    category: "PROFESSIONAL SUPPORT",
    title: "Individual Professional Supervision",
    description:
      "One-on-one reflective supervision for social workers, community practice leaders, and human services practitioners.",
    link: "/coming-soon",
  },
  {
    category: "LEARNING & DEVELOPMENT",
    title: "Specialised Training & Workshops",
    description:
      "Custom corporate and community workshops covering trauma-informed care, culturally responsive practice, and family violence prevention.",
    link: "/coming-soon",
  },
  {
    category: "WOMEN'S WELLBEING",
    title: "Women's Wellbeing Circles",
    description:
      "Small-group facilitated spaces focusing on identity, self-care, boundaries, and personal empowerment.",
    link: "/coming-soon",
  },
  {
    category: "INDIVIDUAL SUPPORT",
    title: "Individual Counselling",
    description:
      "Confidential, evidence-informed social work counselling addressing emotional health, grief, and life adjustments.",
    link: "/coming-soon",
  },
];

export default function FeaturedServices() {
  return (
    <section className="featured-section">
      <div className="featured-container">

        {/* LEFT CONTENT */}
        <div className="featured-left">
          <span className="featured-eyebrow">
            OUR SERVICES
          </span>

          <h2>
            Support that
            <span> moves you </span>
            forward.
          </h2>

          <p className="featured-intro">
            Every journey is different. Discover the
            professional support, learning experiences
            and wellbeing services designed to help
            you find clarity and move forward.
          </p>

    <Link
  href="/coming-soon"
  className="featured-contact-link"
>
  Discuss your needs
  <span>
    <FaArrowRight />
  </span>
</Link>
        </div>

        {/* RIGHT SERVICES LIST */}
        <div className="featured-right">
          {services.map((service) => (
            <Link
              href={service.link}
              className="featured-service"
              key={service.title}
            >
              <div className="featured-service-details">

                <span className="featured-service-category">
                  <span className="featured-category-dot"></span>
                  {service.category}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="featured-service-arrow">
                <FaArrowRight />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
