import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import remindVideo from '../assets/remind/remind.webm'
import wishcakeVideo from '../assets/wishcake/wishcake.mp4'
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
    name: 'First Revenue',
    description: "Turning a community app that wouldn't monetize into a profitable student-housing business.",
    tags: ['Product Management', 'Product Market Fit', '0-1'],
    year: '2025',
    image: null,
    customThumb: 'rekro',
    path: '/work/first-revenue',
  },
  {
    id: '03',
    name: 'Wishcake',
    description: 'A vibecoded web-app, taken from ideation all the way to hosting.',
    tags: ['Claude Code', 'Face Tracking', 'Vercel'],
    year: '2025',
    media: wishcakeVideo,
    type: 'video',
    path: '/work/wishcake',
    externalUrl: 'https://wishcake.vercel.app', // temporary: links to the live app until the case study is built
  },
  // Temporarily hidden, uncomment to restore these tiles.
  // {
  //   id: '03',
  //   name: 'AI for Usability Testing',
  //   description: 'Leveraging artificial intelligence to streamline and enhance the usability testing process.',
  //   tags: ['AI', 'UX Research', 'Product Design'],
  //   year: '2024',
  //   image: null,
  //   path: '/work/ai-usability',
  // },
  // {
  //   id: '04',
  //   name: 'Project Four',
  //   description: 'A short one-line description that explains what the project is about.',
  //   tags: ['Tag', 'Tag', 'Tag'],
  //   year: '2023',
  //   image: null,
  //   path: '/work/project-four',
  // },
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

/* Rekro logo mark, themed from tokens so it inverts cleanly in both modes. */
function RekroMark() {
  return (
    <svg className="rekro-mark-svg" viewBox="0 0 848 848" fill="none" aria-hidden="true">
      <path
        className="rekro-disc"
        strokeWidth="41"
        d="M423.778 20.5C478.258 20.5 531.041 31.166 580.752 52.1914C628.774 72.5031 671.885 101.564 708.938 138.617C745.413 175.093 774.143 217.436 794.406 264.558L795.364 266.805C816.391 316.515 827.056 369.299 827.056 423.779C827.056 478.26 816.391 531.042 795.364 580.753C775.053 628.775 745.992 671.886 708.938 708.939C671.884 745.993 628.774 775.054 580.752 795.365C531.041 816.391 478.259 827.057 423.778 827.057C369.298 827.057 316.515 816.392 266.804 795.365C218.782 775.054 175.671 745.992 138.618 708.939C101.565 671.886 72.5031 628.775 52.1914 580.753C31.1652 531.042 20.5 478.26 20.5 423.779C20.5 370.15 30.8349 318.166 51.2139 269.138L52.1914 266.805C72.503 218.782 101.565 175.671 138.618 138.617C175.671 101.564 218.782 72.503 266.804 52.1914C316.514 31.166 369.298 20.5 423.778 20.5Z"
      />
      <path
        className="rekro-glyph"
        d="M534.779 330.904C525.639 331.505 517.144 325.871 514.406 317.13C512.04 309.58 508.361 302.66 503.306 296.211C494.939 285.546 483.708 277.017 469.929 270.865C461.477 267.094 452.175 264.434 442.149 262.916V402.711L451.671 404.923C491.755 414.129 519.759 426.28 537.25 442.061C555.72 458.731 565.085 482.13 565.085 511.61V511.879C565.085 534.803 559.092 555.183 547.271 572.454C535.555 589.564 518.882 602.918 497.711 612.146C481.495 619.217 462.852 623.537 442.149 625.033V650.685C442.149 661.514 433.37 670.292 422.541 670.292C411.712 670.292 402.934 661.513 402.934 650.685V624.506C384.817 622.612 368.068 618.332 352.999 611.733C331.468 602.312 314.042 588.788 301.211 571.538C293.016 560.528 287.009 548.267 283.244 534.899C279.746 522.479 288.619 510.007 301.506 509.342C310.952 508.855 319.371 515.057 321.903 524.171C324.379 533.084 328.383 541.158 333.988 548.582C342.739 560.178 354.904 569.385 370.148 575.951C379.975 580.184 390.958 583.119 402.933 584.716V434.557L400.655 434.024C362.143 424.976 334.841 412.722 317.177 396.559C298.575 379.547 289.143 356.44 289.143 327.879V327.341C289.143 306.424 295.026 287.708 306.631 271.712C317.946 256.116 333.803 243.732 353.762 234.904C368.423 228.422 384.914 224.339 402.934 222.721V196.873C402.934 186.044 411.713 177.266 422.541 177.266C433.37 177.266 442.149 186.045 442.149 196.873V223.089C458.482 224.955 473.706 229.068 487.549 235.364C507.427 244.413 523.71 257.087 535.949 273.036C543.308 282.629 548.85 293.165 552.532 304.537C556.582 317.041 547.927 330.041 534.811 330.902L534.779 330.904ZM442.149 585.45C456.765 584.18 469.712 581.171 480.77 576.466C495.341 570.267 506.103 561.85 513.668 550.732C521.153 539.727 524.793 527.105 524.793 512.148V511.879C524.793 493.872 519.501 480.443 508.615 470.827C496.57 460.193 474.206 451.073 442.15 443.724L442.149 585.45ZM402.934 262.381C391.018 263.708 380.296 266.394 370.934 270.407C357.545 276.144 347.097 284.034 339.878 293.86C332.852 303.419 329.436 314.369 329.436 327.34V327.878C329.436 345.188 334.785 358.364 345.787 368.158C356.973 378.12 376.178 386.635 402.934 393.508V262.381Z"
      />
    </svg>
  )
}

/* Rekro wordmark, themed from tokens to match the mark. */
function RekroWordmark() {
  return (
    <svg className="rekro-word-svg" viewBox="0 0 988 300" fill="none" aria-hidden="true">
      <g clipPath="url(#rekroWordClip)">
        <path d="M858.9 300C856.917 299.356 846.289 297.67 843.472 297.071C829.762 294.061 816.755 288.444 805.168 280.527C779.252 263.308 761.287 236.457 755.256 205.937C743.022 141.938 782.489 80.5873 847.187 67.2446C876.909 61.1153 910.466 67.2234 935.446 84.5447C957.608 99.9098 976.379 123.335 983.712 149.601C986.042 157.881 986.476 164.25 988.001 172.418V192.831C986.389 201.248 986.061 207.243 983.591 215.837C975.906 242.565 957.893 265.471 935.055 280.994C923.385 288.917 910.283 294.488 896.48 297.396C891.796 298.374 886.123 298.944 881.82 300H858.9ZM876.31 247.337C912.227 244.164 938.755 212.467 935.547 176.564C932.339 140.66 900.61 114.167 864.699 117.41C828.84 120.648 802.389 152.319 805.592 188.173C808.795 224.026 840.447 250.505 876.31 247.337Z" />
        <path d="M229.884 299.999C221.587 298.023 215.294 297.57 206.591 294.92C179.305 286.324 156.05 268.15 141.115 243.754C124.761 217.194 120.492 184.531 127.478 154.241C134.317 124.587 154.898 97.8092 180.737 81.9266C207.502 65.8318 239.529 60.9194 269.889 68.252C313.748 78.7973 350.632 117.517 357.804 162.218C359.617 173.513 360.22 187.122 358.267 198.439C340.444 198.845 321.526 198.527 303.638 198.522L178.506 198.557C180.339 204.597 181.979 209.321 185.1 214.796C200.116 241.135 231.316 253.713 260.386 244.947C270.002 242.048 275.851 238.047 283.948 232.289C290.147 231.773 299.489 232.047 305.897 232.051L348.114 232.049C329.964 267.032 301.904 291.452 261.963 298.366C259.45 298.801 255.076 299.307 252.725 299.999H229.884ZM180.751 159.284L247.725 159.273L302.608 159.248C298.626 150.343 295.3 144.287 288.517 137.158C275.111 123.069 256.195 115.381 236.674 117.39C209.697 119.668 191.303 134.937 180.751 159.284Z" />
        <path d="M386.432 0H438.617C438.652 40.5885 439.469 84.6989 438.492 125.006L530.312 0H594.956L525.709 94.7055C514.45 110.096 501.473 127.016 490.763 142.541C518.671 180.019 546.864 220.406 574.14 258.536L594.353 286.809C596.158 289.332 602.27 298.207 604.19 300H539.512C530.867 286.831 518.251 270.242 508.83 257.12L438.513 159.068C439.239 173.045 438.648 192.54 438.643 206.859L438.668 300H386.427C385.34 228.93 387.052 157.331 386.341 86.2119C386.056 57.7452 385.916 28.4518 386.432 0Z" />
        <path d="M0 182.467C0.651477 179.511 0.73854 174.09 0.951601 170.774C1.24477 166.141 1.85539 161.534 2.77917 156.984C8.80738 127.042 28.8284 99.5595 54.4157 83.1835C73.4145 71.0788 95.5316 64.7759 118.059 65.0475L118.034 117.393C97.2234 118.518 82.993 124.01 68.7398 139.901C61.6019 147.727 56.6576 157.299 54.4071 167.648C52.0205 178.642 52.9733 204.566 52.9911 217.261L52.9844 299.999H0V182.467Z" />
        <path d="M628.102 300L628.048 224.729C628.048 202.279 626.341 171.39 631.966 150.519C637.345 131.148 647.712 113.524 662.025 99.4074C683.672 77.4447 713.225 65.0762 744.066 65.0685C744.664 65.0675 745.267 65.0728 745.866 65.0844C745.431 82.4246 745.87 100.033 745.706 117.405C724.374 118.482 711.44 123.979 696.62 139.588C676.064 161.232 680.555 190.086 680.589 217.642L680.608 300H628.102Z" />
      </g>
      <defs>
        <clipPath id="rekroWordClip"><rect width="988" height="300" /></clipPath>
      </defs>
    </svg>
  )
}

/* Animated thumbnail: wordmark rises from the bottom and drops back,
   then the $ mark rises from the bottom and exits the top, looping. */
function RekroThumb() {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className="rekro-thumb" role="img" aria-label="Rekro">
        <div className="rekro-layer"><RekroMark /></div>
      </div>
    )
  }

  // real double-bounce: shoot up past center, bounce back, settle; hold; slide out
  const ease = ['easeOut', 'easeInOut', 'easeInOut', 'linear', 'easeIn']
  const times = [0, 0.16, 0.3, 0.42, 0.66, 1]
  const duration = 1.7
  const repeatDelay = 1.3
  const halfCycle = (duration + repeatDelay) / 2

  return (
    <div className="rekro-thumb" role="img" aria-label="Rekro">
      <motion.div
        className="rekro-layer"
        initial={{ y: '115%' }}
        animate={{ y: ['115%', '-18%', '7%', '0%', '0%', '115%'] }}
        transition={{ duration, times, ease, repeat: Infinity, repeatDelay }}
      >
        <RekroWordmark />
      </motion.div>
      <motion.div
        className="rekro-layer"
        initial={{ y: '115%' }}
        animate={{ y: ['115%', '-18%', '7%', '0%', '0%', '-115%'] }}
        transition={{ duration, times, ease, repeat: Infinity, repeatDelay, delay: halfCycle }}
      >
        <RekroMark />
      </motion.div>
    </div>
  )
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

  // external links open in a new tab; internal ones use the router
  const Wrapper = project.externalUrl ? 'a' : Link
  const wrapperProps = project.externalUrl
    ? { href: project.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
    : { to: project.path }

  return (
    <motion.div
      className="project-tile"
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: (index % 2) * 0.08 }}
    >
      <Wrapper className="project-card cursor-hover" {...wrapperProps}>
        <div className="tile-visual">
          {project.customThumb === 'rekro' ? (
            <RekroThumb />
          ) : project.media && project.type === 'video' ? (
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
      </Wrapper>
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
        /* "more coming soon" placeholder, sits as the 4th cell in the 2x2 */
        .work-soon {
          border: 1px dashed var(--border);
          border-radius: 24px;
          min-height: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          text-align: center;
        }
        .work-soon-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.6;
        }
        .work-soon-text {
          font-size: clamp(1.125rem, 1.8vw, 1.5rem);
          font-weight: 500;
          letter-spacing: -0.014em;
          color: var(--text-muted);
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
        /* Rekro animated thumbnail */
        .rekro-thumb {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .rekro-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }
        .rekro-mark-svg { width: 36%; max-width: 200px; height: auto; }
        .rekro-word-svg { width: 60%; max-width: 320px; height: auto; }
        /* token-driven so the logo inverts cleanly per theme */
        .rekro-word-svg path { fill: var(--text); }
        .rekro-disc { fill: var(--text); stroke: var(--text); }
        .rekro-glyph { fill: var(--bg-face); }
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

      <motion.div
        className="work-soon"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="work-soon-label">In the works</span>
        <span className="work-soon-text">More case studies coming soon</span>
      </motion.div>
    </section>
  )
}