import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import remindVideo from '../assets/remind/remind.webm'
import { useRef, useEffect } from 'react'

const projects = [
  {
    id: '01',
    name: 'reMind',
    description: "Award-winning app that calms anxiety using your loved one's face and voice.",
    tags: ['Apple Foundation Program', 'Best Project Award', 'Product Design'],
    year: '2024',
    media: remindVideo,
    type: 'video',
    path: '/work/remind',
  },
  {
    id: '02',
    name: 'AI for Usability Testing',
    description: 'Leveraging artificial intelligence to streamline and enhance the usability testing process.',
    tags: ['AI', 'UX Research', 'Product Design'],
    year: '2024',
    image: null,
    path: '/work/ai-usability',
  },
  {
    id: '03',
    name: 'First Revenue',
    description: 'User research and product strategy that helped generate first revenue for an early stage startup.',
    tags: ['User Research', 'Strategy', 'Product Management'],
    year: '2023',
    image: null,
    path: '/work/first-revenue',
  },
  {
    id: '04',
    name: 'Project Four',
    description: 'A short one-line description that explains what the project is about.',
    tags: ['Tag', 'Tag', 'Tag'],
    year: '2023',
    image: null,
    path: '/work/project-four',
  },
]

const tileVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function ProjectCard({ project, index }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!videoRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) videoRef.current.play()
        else videoRef.current.pause()
      },
      { threshold: 0.3 }
    )
    observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: (index % 2) * 0.08 }}
    >
      <Link to={project.path} className="project-card cursor-hover">
        <div className="tile-visual">
          {project.media && project.type === 'video' ? (
            <video
              ref={videoRef}
              src={project.media}
              className="project-image"
              loop
              muted
              playsInline
            />
          ) : project.media ? (
            <img src={project.media} alt={project.name} className="project-image" />
          ) : (
            <span className="project-placeholder">{project.name}</span>
          )}
        </div>
        <div className="tile-info">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" className="work-section">
      <style>{`
        .work-section {
          padding: 8rem 4rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }
        .tile-visual {
          background: var(--surface-secondary);
          border-radius: 24px;
          aspect-ratio: 4 / 3;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .project-card:hover .tile-visual {
          transform: translateY(-6px);
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .project-card:hover .project-image {
          transform: scale(1.04);
        }
        .project-placeholder {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.022em;
          color: var(--text-tertiary);
          padding: 2rem;
          text-align: center;
        }
        .tile-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0 0.25rem;
        }
        .project-meta {
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }
        .project-name {
          font-size: clamp(1.25rem, 1.8vw, 1.625rem);
          font-weight: 600;
          letter-spacing: -0.014em;
          line-height: 1.2;
          color: var(--text);
          margin: 0;
        }
        .project-description {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.47;
          letter-spacing: -0.014em;
          margin: 0;
        }
        .project-tags {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .project-tag {
          font-size: 11px;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid var(--border);
          color: var(--text-muted);
          letter-spacing: 0.02em;
        }

        @media (max-width: 900px) {
          .work-section {
            padding: 5rem 2rem;
            gap: 1.5rem;
          }
        }
        @media (max-width: 720px) {
          .work-section {
            grid-template-columns: 1fr;
            padding: 4rem 1.5rem;
            gap: 2.5rem;
          }
          .tile-visual { aspect-ratio: 3 / 4; } 
        }
      `}</style>

      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  )
}