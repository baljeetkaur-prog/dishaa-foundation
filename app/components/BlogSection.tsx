
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import "./BlogSection.css";

const articles = [
  {
    category: "EMOTIONAL WELLBEING",
    title: "Finding clarity through life's changing seasons",
    description:
      "Life transitions can bring uncertainty, new responsibilities and unexpected emotions. Creating space to reflect can help you understand what you need next.",
    image: "/images/blog-1.jpg",
    link: "/coming-soon",
    featured: true,
  },
  {
    category: "WOMEN'S WELLBEING",
    title: "Making space for yourself without feeling guilty",
    description:
      "Why self-care, healthy boundaries and meaningful connection matter in everyday life.",
    image: "/images/blog-2.jpg",
    link: "/coming-soon",
  },
  {
    category: "PROFESSIONAL GROWTH",
    title: "The value of reflection in professional practice",
    description:
      "How reflective practice can strengthen confidence, learning and professional development.",
    image: "/images/blog-3.jpg",
    link: "/coming-soon",
  },
];

export default function BlogSection() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <section className="blog-section" id="blogs">
      <div className="blog-container">

        {/* SECTION HEADER */}
        <div className="blog-header">
          <div className="blog-heading">
            <span className="blog-eyebrow">BLOGS & ARTICLES</span>
            <h2>
              Ideas to inspire
              <span> growth and understanding.</span>
            </h2>
          </div>

          <div className="blog-header-right">
            <p>
              Explore reflections, practical insights and conversations
              around emotional wellbeing, personal growth and professional
              practice.
            </p>

      <Link href="/coming-soon" className="blog-all-link">
  Explore all articles
  <FaArrowRight />
</Link>
          </div>
        </div>

        {/* ARTICLES */}
        <div className="blog-grid">

          {/* FEATURED ARTICLE */}
          <Link
            href={featuredArticle.link}
            className="blog-featured"
          >
            <div className="blog-featured-image">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="blog-featured-content">
              <span className="blog-category">
                {featuredArticle.category}
              </span>

              <h3>{featuredArticle.title}</h3>

              <p>{featuredArticle.description}</p>

              <span className="blog-read-link">
                Read article
                <FaArrowRight />
              </span>
            </div>
          </Link>

          {/* OTHER ARTICLES */}
          <div className="blog-side-list">
            {otherArticles.map((article) => (
              <Link
                href={article.link}
                className="blog-side-article"
                key={article.title}
              >
                <div className="blog-side-image">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                <div className="blog-side-content">
                  <span className="blog-category">
                    {article.category}
                  </span>

                  <h3>{article.title}</h3>

                 <p>{article.description}</p>

<span className="blog-side-read-link">
  Read article
  <FaArrowRight />
</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
