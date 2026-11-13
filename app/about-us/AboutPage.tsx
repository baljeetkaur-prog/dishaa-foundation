
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import "./AboutPage.css";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaBookOpen,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="aboutpg-page">

      {/* HERO SECTION */}
      <section className="aboutpg-hero">
        <div className="aboutpg-hero-content">
          <span className="aboutpg-hero-label">
            GET TO KNOW DISHAA FOUNDATION
          </span>

          <h1>About Us</h1>

          <div className="aboutpg-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO SECTION */}
      <section className="aboutpg-intro">
        <div className="aboutpg-intro-container">

          <span className="aboutpg-section-label">
  OUR STORY
</span>

<h2>
  Finding Your Direction Through <span>Expertise and Empathy.</span>
</h2>

<div className="aboutpg-intro-text">
  <p>
    Dishaa means direction. At Dishaa Foundation, we believe that finding the right direction begins with feeling heard, understood, and supported. Our work brings together clinical expertise, evidence-informed practice, and genuine human connection to support emotional wellbeing, personal growth, and meaningful change.
  </p>

  <p>
    Founded by Dr. Saranbeer Kaur, Dishaa Foundation brings together professional knowledge and more than two decades of experience across social work, mental health, counselling, community development, and education. We support individuals, women, professionals, and organisations through culturally responsive, trauma-informed, and person-centred approaches.
  </p>
  <p>
    
  </p>
</div>

        </div>
      </section>

      {/* FOUNDER MESSAGE SECTION */}
      <section className="aboutpg-founder">
        <div className="aboutpg-founder-container">

          {/* LEFT CONTENT */}
          <div className="aboutpg-founder-content">

            <FaQuoteLeft className="aboutpg-founder-quote-icon" />

           <p className="aboutpg-founder-message">
  My journey in social work has been shaped by a deep commitment to supporting individuals, strengthening communities, and creating spaces where people feel safe to share their experiences. Over the past two decades, I have worked across mental health, acute health, child protection, family violence prevention, corrections, and higher education in Australia.

  <br /><br />

  Through Dishaa Foundation, I bring together my academic knowledge, professional experience, and passion for community advocacy to offer support that is compassionate, culturally safe, and grounded in evidence-informed practice. My hope is to help people recognise their strengths, find their direction, and move forward with confidence.
</p>

           <h3>Dr. Saranbeer Kaur</h3>

<span className="aboutpg-founder-designation">
  PhD, MSW | Founder, Dishaa Foundation
</span>

          </div>

          {/* RIGHT IMAGE */}
          <div className="aboutpg-founder-image">
            <Image
              src="/images/about_img.jpg"
              alt="Dishaa Foundation founder"
              width={700}
              height={800}
              priority
            />
          </div>

        </div>
      </section>
      {/* MISSION, VISION & VALUES SECTION */}
<section className="aboutpg-mvv">

  <div className="aboutpg-mvv-container">

    {/* SECTION HEADING */}
    <div className="aboutpg-mvv-heading">
      <span className="aboutpg-section-label">
        WHAT GUIDES US
      </span>

      <h2>
        Our purpose, <span>our direction</span> and what we stand for.
      </h2>

      <p>
        At Dishaa Foundation, our work is guided by a clear purpose
        and a commitment to creating meaningful, positive change
        for individuals, professionals and communities.
      </p>
    </div>


{/* MISSION, VISION & VALUES CARDS */}
<div className="aboutpg-mvv-top">

  {/* MISSION */}
  <div className="aboutpg-mvv-main-card">
    <div className="aboutpg-mvv-icon">
      <FaBullseye />
    </div>

    <span className="aboutpg-mvv-card-label">OUR MISSION</span>

    <h3>Supporting people to move forward with confidence.</h3>

    <p>
      Our mission is to provide accessible, compassionate and
      evidence-informed support that helps individuals recognise
      their strengths, navigate life's challenges and make
      meaningful changes. We aim to create safe and inclusive
      spaces where people feel heard, respected and empowered.
    </p>
  </div>

  {/* VISION */}
  <div className="aboutpg-mvv-main-card aboutpg-mvv-vision">
    <div className="aboutpg-mvv-icon">
      <FaEye />
    </div>

    <span className="aboutpg-mvv-card-label">OUR VISION</span>

    <h3>A community where everyone has the opportunity to thrive.</h3>

    <p>
      We envision a future where individuals, women and
      communities have the support, knowledge and opportunities
      they need to achieve wellbeing and personal growth.
      Through meaningful connections and professional
      collaboration, we aspire to contribute to a more
      understanding and inclusive society.
    </p>
  </div>

  {/* VALUES */}

{/* VALUES */}
<div className="aboutpg-mvv-main-card">
  <div className="aboutpg-mvv-icon">
    <FaHeart />
  </div>

  <span className="aboutpg-mvv-card-label">
    OUR VALUES
  </span>

  <h3>Guided by principles that put people first.</h3>

  <p>
    Our work is grounded in four core values: Evidence-Informed
    practice, Person-Centred support, Trauma-Informed care and
    Culturally Responsive approaches. These principles guide
    how we work, connect and support individuals, professionals
    and communities.
  </p>
</div>


</div>


  </div>
</section>
      {/* LEADERSHIP, EXPERIENCE & IMPACT SECTION */}
      <section className="aboutpg-impact">

        <div className="aboutpg-impact-container">

          {/* SECTION HEADING */}
          <div className="aboutpg-impact-heading">

            <span className="aboutpg-section-label">
              LEADERSHIP & EXPERIENCE
            </span>

            <h2>
              A Legacy of <span>Leadership & Advocacy.</span>
            </h2>

            <p>
              With over 20 years of professional experience, Dr. Saranbeer
              Kaur brings together academic knowledge, field experience
              and a commitment to creating positive change across
              individuals, families and communities.
            </p>

          </div>


          {/* IMPACT CARDS */}
          <div className="aboutpg-impact-grid">

            {/* CARD 1 */}
            <article className="aboutpg-impact-card">

              <div className="aboutpg-impact-icon">
                <FaBookOpen />
              </div>

              <h3>Academic & Field Education Excellence</h3>

              <p>
                Holding a PhD in Social Work, Dr. Kaur serves as a university lecturer, published contributor to Charles Sturt University’s *Guide to Social Work Field Education, and active field educator—providing clinical placement supervision to Master of Social Work students across Australian institutions to help shape the next generation of ethical, reflective practitioners.
              </p>

            </article>


            {/* CARD 2 */}
            <article className="aboutpg-impact-card">

              <div className="aboutpg-impact-icon">
                <FaHandsHelping />
              </div>

              <h3>Community Impact</h3>

              <p>
                 For over eight years, Dr. Kaur has facilitated respectful relationships workshops across communities throughout Victoria. Alongside collaborating with the World Health Organisation and leading Victorian organisations, her extensive community footprint includes co-designing women’s wellbeing programs with multicultural organisations like InTouch, running empowerment groups for elderly migrant women, and founding the Sikh Charity Club.
              </p>

            </article>


            {/* CARD 3 */}
            <article className="aboutpg-impact-card">

              <div className="aboutpg-impact-icon">
                <FaGlobe />
              </div>

              <h3>Public Advocacy & National Conferencing</h3>

              <p>
                A sought-after speaker and featured panellist at major national and state events—including the National Conference on the Prevention of Family Violence and Safe and Equal's PreventX conference—Dr. Kaur actively raises awareness and promotes respectful relationships within faith-based and multicultural communities across Victoria. Her vital work breaking the silence around family violence in South Asian communities was featured in a documentary shortlisted for the Indian Film Festival of Melbourne.
              </p>

            </article>


            {/* CARD 4 */}
            <article className="aboutpg-impact-card">

              <div className="aboutpg-impact-icon">
                <FaHeart />
              </div>

              <h3>Parliamentary Recognition</h3>

              <p>
                Her extensive community contributions were formally recognised in the Victorian Parliament by the Minister for Women, alongside nominations for the Premier’s Honor Roll and the Australian Volunteer of the Year Award.
              </p>

            </article>

          </div>


          {/* EXPERIENCE HIGHLIGHT */}
     <div className="aboutpg-impact-highlight">

  <div>
    <span className="aboutpg-impact-highlight-label">
      <span className="aboutpg-impact-highlight-line"></span>
      A CAREER BUILT ON EXPERIENCE
    </span>

    <h3>
      More than two decades of work across diverse
      fields of social care.
    </h3>
  </div>

  <p>
    Her professional experience spans mental health,
    acute health, child protection, family violence
    prevention, corrections and higher education.
    This breadth of experience informs her thoughtful,
    trauma-informed and culturally responsive approach.
  </p>

</div>

        </div>

      </section>
      {/* SERVICES SECTION */}
      <section className="aboutpg-services">

        <div className="aboutpg-services-list">

          {/* 1. INDIVIDUAL COUNSELLING */}
          <div className="aboutpg-service-row">
            <div className="aboutpg-service-content">
              <span className="aboutpg-service-number">01</span>
              <span className="aboutpg-service-label">FOR INDIVIDUALS</span>

              <h3>Individual Counselling</h3>

              <p>
                A supportive and confidential space to explore your
                thoughts, emotions and life experiences. Through
                person-centred and trauma-informed counselling, we
                help you navigate challenges, build self-awareness
                and develop practical ways to move forward.
              </p>

              <Link href="/contact-us" className="aboutpg-service-link">
                Explore this service <span>→</span>
              </Link>
            </div>

            <div className="aboutpg-service-image">
              <Image
                src="/images/individual-counselling.jpeg"
                alt="Individual counselling support"
                width={800}
                height={650}
              />
            </div>
          </div>

          {/* 2. WELLBEING & PERSONAL GROWTH */}
          <div className="aboutpg-service-row">
            <div className="aboutpg-service-content">
              <span className="aboutpg-service-number">02</span>
              <span className="aboutpg-service-label">FOR WOMEN</span>

              <h3>Wellbeing & Personal Growth</h3>

              <p>
                Supporting women to reconnect with themselves,
                recognise their strengths and prioritise their
                wellbeing. Our approach encourages self-discovery,
                emotional growth and greater confidence in navigating
                life's personal and professional transitions.
              </p>

              <Link href="/contact-us" className="aboutpg-service-link">
                Explore this service <span>→</span>
              </Link>
            </div>

            <div className="aboutpg-service-image">
              <Image
                src="/images/wellbeing.jpg"
                alt="Women's wellbeing and personal growth"
                width={800}
                height={650}
              />
            </div>
          </div>

          {/* 3. PROFESSIONAL SUPERVISION */}
          <div className="aboutpg-service-row">
            <div className="aboutpg-service-content">
              <span className="aboutpg-service-number">03</span>
              <span className="aboutpg-service-label">FOR PROFESSIONALS & Organisations</span>

              <h3>Clinical & Professional Supervision</h3>

              <p>
                Reflective and supportive supervision for professionals
                seeking to strengthen their practice, develop confidence
                and work through complex professional experiences.
                We provide a space for reflection, learning and
                continued professional development.
              </p>

              <Link href="/contact-us" className="aboutpg-service-link">
                Explore this service <span>→</span>
              </Link>
            </div>

            <div className="aboutpg-service-image">
              <Image
                src="/images/supervision.jpeg"
                alt="Professional supervision and development"
                width={800}
                height={650}
              />
            </div>
          </div>

          {/* 4. TRAINING & WORKSHOPS */}
          <div className="aboutpg-service-row">
            <div className="aboutpg-service-content">
              <span className="aboutpg-service-number">04</span>
              <span className="aboutpg-service-label">FOR COMMUNITY</span>

              <h3>Professional Training & Workshops</h3>

              <p>
                Learning experiences that build knowledge, develop
                practical skills and encourage meaningful conversations.
                Our training and workshops support individuals,
                teams and organisations through relevant,
                evidence-informed learning opportunities.
              </p>

              <Link href="/contact-us" className="aboutpg-service-link">
                Explore this service <span>→</span>
              </Link>
            </div>

            <div className="aboutpg-service-image">
              <Image
                src="/images/training.jpeg"
                alt="Training and professional workshops"
                width={800}
                height={650}
              />
            </div>
          </div>

          {/* 5. CONSULTANCY */}
          <div className="aboutpg-service-row">
            <div className="aboutpg-service-content">
              <span className="aboutpg-service-number">05</span>
              <span className="aboutpg-service-label">FOR ORGANISATIONS</span>

              <h3>Organisational Consultancy</h3>

              <p>
                Thoughtful consultancy that helps organisations
                strengthen their practices, address challenges and
                identify opportunities for growth. We bring together
                professional insight and evidence-informed approaches
                to support effective, sustainable outcomes.
              </p>

              <Link href="/contact-us" className="aboutpg-service-link">
                Explore this service <span>→</span>
              </Link>
            </div>

            <div className="aboutpg-service-image">
              <Image
                src="/images/consultancy.jpeg"
                alt="Consultancy and organisational support"
                width={800}
                height={650}
              />
            </div>
          </div>
          {/* 6. FIELD EDUCATION & STUDENT PLACEMENT */}
<div className="aboutpg-service-row">
  <div className="aboutpg-service-content">
    <span className="aboutpg-service-number">06</span>
    <span className="aboutpg-service-label">
      FOR STUDENTS & EMERGING PROFESSIONALS
    </span>

    <h3>Field Education & Student Placement</h3>

    <p>
      Supporting social work students through meaningful field
      education and placement experiences. We encourage reflective
      learning, professional development and the practical
      application of academic knowledge, helping students build
      confidence, strengthen their skills and prepare for
      professional practice.
    </p>

    <Link href="/contact-us" className="aboutpg-service-link">
      Explore this service <span>→</span>
    </Link>
  </div>

  <div className="aboutpg-service-image">
    <Image
      src="/images/stu-placement.jpeg"
      alt="Field education and student placement"
      width={800}
      height={650}
    />
  </div>
</div>

        </div>
      </section>
            {/* MARQUEE SECTION */}
      <section className="aboutpg-marquee-section">
        <div className="aboutpg-marquee-track">

          {[1, 2, 3, 4].map((group) => (
            <div className="aboutpg-marquee-group" key={group}>

              {[
                "A SPACE TO BE HEARD",
                "STRENGTH THROUGH UNDERSTANDING",
                "GROWTH WITH PURPOSE",
                "CARE WITHOUT JUDGEMENT",
                "A PATH TOWARDS CHANGE",
              ].map((item, index) => (
                <div className="aboutpg-marquee-item" key={index}>
                  <span>{item}</span>
                  <span className="aboutpg-marquee-separator">✦</span>
                </div>
              ))}

            </div>
          ))}

        </div>
      </section>
            {/* FINAL CTA SECTION */}
      <section className="aboutpg-cta-section">
        <div className="aboutpg-cta-box">

          <div className="aboutpg-cta-content">

            <h2>
  Take the first step towards <span>finding your direction.</span>
</h2>

<p>
  Connect with Dishaa Foundation for counselling, professional
  supervision, wellbeing support, training and organisational
  consultancy. We are here to help you take your next step.
</p>
          </div>

          <div className="aboutpg-cta-action">
         <Link href="/contact-us" className="aboutpg-cta-button">
  Make an Appointment <span>→</span>
</Link>
          </div>

        </div>
      </section>
      

    </main>
  );
}
