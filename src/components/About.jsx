import { motion } from 'framer-motion'
import aboutPhoto from '../assets/remind/headshot.jpg'

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
        <h2 className="about-heading">Hi! I'm Tanvi.</h2>
        <p className="about-bio">
            I came to product through code. I started as a programmer, moved into designing products at startups, and completed my Master of IT (Interaction Design) at UTS in 2026, where I worked on design projects end-to-end and researched how designers can use AI in their workflow.
        </p>
        <p className="about-bio">
            Over three years across startups and enterprises, I've helped one startup find its path to monetization through user research and product thinking, and helped another land an enterprise pilot within two months of launch.        </p>
        <p className="about-bio">
            I enjoy taking a product all the way from an idea on a napkin to something real that drives impact for businesses and the people who use it. When I'm not building products, I'm probably cooking, or deep in whatever creative hobby I've picked up that week: pottery, painting, and now vibe coding past my bed time.
        </p>
      </motion.div>
    </section>
  )
}