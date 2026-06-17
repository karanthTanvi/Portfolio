import { motion } from 'framer-motion'
import aboutPhoto from '../assets/remind/headshot.jpg'

// const focus = ['Product Design', 'Product Management', 'Full working rights', 'Sydney']

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <style>{`
        .about-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 4rem;
          display: grid;
          grid-template-columns: minmax(280px, 0.8fr) 1.2fr;
          gap: 4rem;
          align-items: center;
        }

        .about-availability {
        margin: -0.75rem 0 1.75rem;
        font-size: 13px;
        letter-spacing: 0.03em;
        color: var(--text-muted);
        }

        .about-photo {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border-radius: 24px;
          background: var(--surface-secondary);
          display: block;
        }
        .about-label {
          display: block;
          margin: 0 0 1.25rem;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .about-heading {
          margin: 0 0 1.75rem;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.022em;
          line-height: 1.15;
          color: var(--text);
        }
        .about-bio {
          margin: 0 0 1.25rem;
          max-width: 52ch;
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          color: var(--text-muted);
          line-height: 1.65;
          letter-spacing: -0.01em;
        }
        .about-bio:last-of-type { margin-bottom: 2rem; }
        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .about-tag {
          font-size: 12px;
          padding: 0.4rem 0.85rem;
          border-radius: 9999px;
          border: 1px solid var(--border);
          color: var(--text-muted);
          letter-spacing: 0.02em;
        }

        @media (max-width: 860px) {
          .about-section {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 4rem 1.5rem;
          }
          .about-photo { max-width: 360px; }
        }
      `}</style>

      <motion.img
        src={aboutPhoto}
        alt="Tanvi Karanth"
        className="about-photo"
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />

      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1 }}
      >
        {/* <span className="about-label">About</span> */}
        <h2 className="about-heading">I'm Tanvi, a Product Manager based in Sydney.</h2>
        {/* <p className="about-availability">Sydney, Australia · Full working rights</p> */}
        <p className="about-bio">
            My journey to product design started as a programmer. I started out implementing code, then moved along the chain into designing the product at startups, and then did my Master's in Interaction Design at UTS, building academic and research credentials using AI in the product design workflow. 

        </p>
        <p className="about-bio">
            I have three years of experience across enterprises and startups; my journey includes helping a startup achieve monetization through rigorous user research along with helping another build a product that landed it a pilot with an enterprise firm within two months of launch.

        </p>
        <p className="about-bio">
            I love taking a product from an idea on a napkin to a production-grade system driving real impact in businesses and consumers and I am comfortable from ideating in a white-board all the way to the building the code that goes underneath.
        </p>
        {/* <div className="about-tags">
          {focus.map((f) => (
            <span key={f} className="about-tag">{f}</span>
          ))}
        </div> */}
      </motion.div>
    </section>
  )
}