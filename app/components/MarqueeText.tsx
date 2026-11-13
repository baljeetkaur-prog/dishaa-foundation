import "./MarqueeText.css";

const marqueeItems = [
  "PERSONAL CLARITY",
  "EMOTIONAL WELLBEING",
  "WOMEN'S EMPOWERMENT",
  "PROFESSIONAL GROWTH",
  "MEANINGFUL CONNECTION",
];

export default function MarqueeText() {
  return (
    <section className="marquee-section">
      <div className="marquee-track">

        {[1, 2, 3, 4].map((group) => (
          <div className="marquee-group" key={group}>
            {marqueeItems.map((item, index) => (
              <div className="marquee-item" key={index}>
                <span>{item}</span>
                <span className="marquee-separator">✦</span>
              </div>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
}