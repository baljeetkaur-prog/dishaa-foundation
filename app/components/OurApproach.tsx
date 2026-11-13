
import "./OurApproach.css";

const principles = [
  {
    number: "01",
    title: "Evidence-Informed",
    description:
      "Grounded in contemporary research, advanced social work theory and rigorous ethical standards.",
  },
  {
    number: "02",
    title: "Trauma-Informed",
    description:
      "Prioritising safety, trust, choice, collaboration and empowerment to support safety and healing across all services.",
  },
  {
    number: "03",
    title: "Person-Centred",
    description:
      "Honouring each person's lived experience, individual choices and inherent strengths in every interaction.",
  },
  {
    number: "04",
    title: "Culturally Responsive",
    description:
      "Deeply respectful of cultural diversity, family dynamics and social contexts that shape individual wellbeing.",
  },
];

export default function OurApproach() {
  return (
    <section className="approach-section">
      <div className="approach-container">

        <div className="approach-header">
          <div className="approach-heading-content">
            <span className="approach-eyebrow">
              CORE VALUES
            </span>

            <h2>
              Care guided by understanding,
              <span> respect and expertise.</span>
            </h2>
          </div>

          <div className="approach-intro">
            <p>
              Our work is guided by four core principles
              that shape how we support individuals,
              empower women, strengthen communities
              and work alongside professionals.
            </p>
          </div>
        </div>

        <div className="approach-grid">
          {principles.map((principle) => (
            <div
              className="approach-item"
              key={principle.number}
            >
              <div className="approach-item-top">
                <span className="approach-number">
                  {principle.number}
                </span>

                <span className="approach-item-line"></span>
              </div>

              <h3>{principle.title}</h3>

              <p>{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="approach-footer">
          <p>
            Every journey is different. Our commitment to
            <span> dignity, respect and meaningful change </span>
            remains the same.
          </p>
        </div>

      </div>
    </section>
  );
}
