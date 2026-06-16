import { motion, useReducedMotion } from 'framer-motion'
import { TbX, TbCheck, TbArrowRight } from 'react-icons/tb'
import CaseStudyShell from './shared/CaseStudyShell'

/* ------------------------------------------------------------------ *
 * EDITABLE COPY
 * Everything Tanvi might want to tweak lives in these objects/arrays,
 * not buried in JSX. This page is built for skimming: keep bodies to
 * two or three sentences and let the headings + graphics carry it.
 * ------------------------------------------------------------------ */

const COMPANY = 'Rekro'
const ROLE = 'Product Manager'
const DURATION = 'Feb 2025 – Dec 2025'
const PROPERTY_COUNT = '4'

const hero = {
  title: 'First Revenue',
  subhead: "Turning a community app that wouldn't monetize into a profitable student-housing business.",
}

const atAGlance = {
  role: ROLE,
  responsibilities:
    'Owned product strategy, feature definition, and UX flows. Managed interns and partnered with the founder on company direction.',
  company: `${COMPANY}, early-stage proptech for international students`,
  duration: DURATION,
  outcome: `0 to 1, to around $800 a week in profit across ${PROPERTY_COUNT} properties`,
}

const moveThatWorked =
  'Stop helping students through the hardest parts of renting, and remove those parts entirely.'

// [[ INFOGRAPHIC 1, "The three bets" ]] - rendered by <ThreeBets /> below.
const threeBets = [
  {
    num: '01',
    bet: 'Networking app',
    learned: "Won't pay for what social media does free.",
    decision: 'Killed',
    state: 'killed',
  },
  {
    num: '02',
    bet: 'Flatmate-finder',
    learned: "Liked it, still won't pay.",
    decision: 'Killed',
    state: 'killed',
  },
  {
    num: '03',
    bet: 'Master-lease model',
    learned: 'Generated our first revenue.',
    decision: 'Kept',
    state: 'kept',
  },
]

const networking = {
  label: 'Where we started',
  headline: 'We started with a networking app no one would pay for.',
  body: [
    'We set out to help international students settle into a new country, beginning with a community app. I led the user flows and information hierarchy.',
    'The catch: networking is something Instagram and Facebook already do for free, so willingness to pay was near zero. We killed it.',
  ],
}

const housing = {
  label: 'Following the pain',
  headline: "The real pain was housing, and matching flatmates didn't fix it.",
  body: [
    'In interviews, the expensive, acute pain was clear: money burned on temporary stays, endless inspections, no local rental history, and the scramble to find flatmates.',
    "So we tried the obvious fix and grouped people to rent together. They liked it. They still wouldn't pay. Two products, one wall.",
  ],
}

const reframe = {
  label: 'The insight',
  headline: 'So we removed the problem instead of solving it.',
  body: [
    'The two real blockers were finding flatmates and having no rental history. Instead of building tools to fight through them, we made them disappear: the company background-checks a renter, leases the property itself, and subleases it to them, carrying the rental history and filling the flatmates from its own pool.',
    'Riskier on paper, but a deep enough renter pool keeps that risk in check, and for the student it solves almost everything at once.',
  ],
}

// [[ INFOGRAPHIC 2, "Solve vs Remove" ]] - rendered by <SolveRemove /> below.
const solveRemove = {
  left: {
    eyebrow: 'The old way',
    title: 'Help them solve it',
    sub: 'A tangled, multi-step path, and the student carries every step.',
    steps: [
      'Hunt for flatmates',
      'Book inspection after inspection',
      'Get knocked back, no rental history',
      'Slowly earn a rental history',
    ],
    burden: 'On the student',
  },
  right: {
    eyebrow: 'The reframe',
    title: 'Remove it for them',
    sub: 'One move by the company, and the hardest parts are gone.',
    step: 'Background-check, master-lease, sublease.',
    removedLabel: 'Gone for the student',
    removed: ['Finding flatmates', 'Rental history'],
    burden: 'On the company',
  },
}

// [[ INFOGRAPHIC 3, "How the model works" ]] rendered by <ModelFlow /> below.
const model = {
  landlord: { role: 'Owns the property', name: 'Landlord' },
  hub: {
    role: 'The hub',
    name: COMPANY,
    notes: 'Background-checks renters, fills the property from its pool, and carries the risk.',
  },
  student: {
    role: 'The renter',
    name: 'Student',
    notes: 'No rental history needed, no roommate hunt.',
  },
  lease: 'Master-leases',
  sublease: 'Subleases',
  commission: 'Commission',
}

const demand = {
  label: 'Proving demand',
  headline: 'Then we proved demand and went where the users already were.',
  body: [
    'Burned twice on willingness to pay, I pushed to validate that people would actually pay before we built anything else.',
    'To fill the renter pool, instead of launching an Instagram page and waiting, we went where students already gather: WhatsApp and Facebook groups.',
  ],
}

const result = {
  label: 'The result',
  headline: 'A profitable housing business.',
  body: [
    "The founder ran the community, handled the legalities, and earned the company's first revenue on commission from both landlords and renters.",
    `From a standing start, that reached around $800 a week in profit across ${PROPERTY_COUNT} properties in the first stage, and the strategy work led to a cofounder offer. Next step is scale, and it all hinges on the renter pool: deepen it, systematize the background checks, and the model compounds.`,
  ],
}

// [[ INFOGRAPHIC 4, "Outcomes" ]] rendered by <Outcomes /> below.
const outcomes = [
  { value: '~$800 / week', label: `profit across ${PROPERTY_COUNT} properties` },
  { value: 'Both sides', label: 'commission from landlord and renter' },
  { value: '0 to 1', label: 'first revenue from a standing start' },
  { value: 'Cofounder offer', label: 'earned off the strategy work' },
]

const takeaways = [
  'Confirm people will actually pay during discovery, before committing to a build.',
  'Positive feedback is a weak signal on its own; people liked the early versions in interviews and still would not pay.',
  'A lot of the progress came from redefining the problem we were solving, which made the hardest parts fall away.',
  'The solution that worked was an operational model that never had to become an app.',
  'We reached users far more easily by going into the groups where they already spent time.',
]

/* ------------------------------------------------------------------ *
 * TOC / SECTION MAP
 * ------------------------------------------------------------------ */
const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'networking', label: 'The networking app' },
  { id: 'housing', label: 'The real pain' },
  { id: 'reframe', label: 'The reframe' },
  { id: 'demand', label: 'Proving demand' },
  { id: 'result', label: 'The result' },
  { id: 'takeaways', label: 'Takeaways' },
]

const navPrev = { sublabel: 'Previous case study', label: 'reMind', path: '/work/remind' }
const navNext = { sublabel: 'Next case study', label: 'Wishcake', path: '/work/wishcake' }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

/* Skim-friendly prose block: short label + headline + 1–2 tight paragraphs. */
function Prose({ label, headline, body, delayBase = 0 }) {
  return (
    <>
      <motion.span className="cs-section-label" {...fadeUp(delayBase)}>
        {label}
      </motion.span>
      <motion.h2 className="cs-headline" {...fadeUp(delayBase + 0.05)}>
        {headline}
      </motion.h2>
      {body.map((para, i) => (
        <motion.p key={i} className="cs-body" {...fadeUp(delayBase + 0.1 + i * 0.05)}>
          {para}
        </motion.p>
      ))}
    </>
  )
}

/* ------------------------------------------------------------------ *
 * INFOGRAPHIC 1 - The three bets
 * Semantic <ol> timeline. Horizontal on desktop, stacks at ~380px.
 * Killed/Kept shown by label + icon + fill, never color alone.
 * ------------------------------------------------------------------ */
function ThreeBets() {
  const reduce = useReducedMotion()
  const stageMotion = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <figure
      className="bets-figure"
      role="group"
      aria-label="The three bets: how the product evolved from a killed networking app, through a killed flatmate-finder, to a kept master-lease model that earned first revenue."
    >
      <ol className="bets-track">
        {threeBets.map((b, i) => {
          const kept = b.state === 'kept'
          return (
            <motion.li key={b.num} className={`bet-stage ${b.state}`} {...stageMotion(i)}>
              <div className="bet-rail">
                <span className={`bet-dot ${b.state}`} aria-hidden="true">{b.num}</span>
              </div>
              <div className={`bet-card ${b.state}`}>
                <div className="bet-card-head">
                  <h3 className="bet-name">{b.bet}</h3>
                  <span className={`bet-decision ${b.state}`}>
                    {kept ? <TbCheck size={13} aria-hidden="true" /> : <TbX size={12} aria-hidden="true" />}
                    {b.decision}
                  </span>
                </div>
                <div className="bet-learned-block">
                  {kept ? (
                    <span className="bet-learned-label">Outcome</span>
                  ) : (
                    <span className="bet-learned-label">Why we pivoted</span>
                  )}
                  <p className="bet-learned">{b.learned}</p>
                </div>
              </div>
            </motion.li>
          )
        })}
      </ol>
      <figcaption className="bets-caption">
        Each bet was tested against one question: will people pay? Two were killed; the third was kept and earned first revenue.
      </figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------------ *
 * INFOGRAPHIC 2 - Solve vs Remove (the reframe; the page's bold beat)
 * Busy/effortful left vs calm/singular right, arrow driving left→right.
 * Removed blockers read via strikethrough + ✕ icon + a label, not color.
 * ------------------------------------------------------------------ */
function SolveRemove() {
  const reduce = useReducedMotion()
  const colMotion = (x) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, x },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }
  const { left, right } = solveRemove

  return (
    <figure
      className="solve-figure"
      role="group"
      aria-label="The reframe. The old way: help students solve renting's hardest parts through a tangled multi-step path they carry themselves. The new way: the company background-checks, master-leases, and subleases in one step, so finding flatmates and rental history are gone for the student and the burden shifts to the company."
    >
      <div className="solve-grid">
        <motion.section className="solve-col solve-left" {...colMotion(-16)}>
          <header className="solve-head">
            <span className="solve-eyebrow">{left.eyebrow}</span>
            <h3 className="solve-title">{left.title}</h3>
            <p className="solve-sub">{left.sub}</p>
          </header>
          <ul className="solve-steps">
            {left.steps.map((s) => (
              <li key={s} className="solve-step">
                <span className="solve-step-dot" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
          <footer className="solve-burden">
            <span className="solve-burden-key">Burden</span>
            <span className="solve-burden-val">{left.burden}</span>
          </footer>
        </motion.section>

        <div className="solve-arrow" aria-hidden="true">
          <TbArrowRight size={20} />
        </div>

        <motion.section className="solve-col solve-right" {...colMotion(16)}>
          <header className="solve-head">
            <span className="solve-eyebrow">{right.eyebrow}</span>
            <h3 className="solve-title">{right.title}</h3>
            <p className="solve-sub">{right.sub}</p>
          </header>
          <div className="solve-onestep">
            <span className="solve-step-dot filled" aria-hidden="true">
              <TbCheck size={17} />
            </span>
            {right.step}
          </div>
          <div className="solve-removed">
            <span className="solve-removed-label">{right.removedLabel}</span>
            <ul className="solve-chips">
              {right.removed.map((c) => (
                <li key={c} className="solve-chip">
                  <TbX size={13} aria-hidden="true" />
                  <s>{c}</s>
                </li>
              ))}
            </ul>
          </div>
          <footer className="solve-burden">
            <span className="solve-burden-key">Burden</span>
            <span className="solve-burden-val">{right.burden}</span>
          </footer>
        </motion.section>
      </div>
      <figcaption className="solve-caption">
        Same problem, opposite strategy: stop helping the student through the blockers, and take the blockers away.
      </figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------------ *
 * INFOGRAPHIC 3 - How the model works
 * Three-node flow with the company as the hub. Lease chain runs
 * left to right; commission flows inward to the hub from both sides.
 * Student-side blocker chips echo graphic 2.
 * ------------------------------------------------------------------ */
function ModelFlow() {
  const reduce = useReducedMotion()
  const figMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }
  const { landlord, hub, student } = model

  return (
    <motion.figure
      className="model-figure"
      role="group"
      aria-label={`How the model works. The landlord owns the property. ${hub.name} master-leases it from the landlord, ${hub.notes.toLowerCase()} ${hub.name} subleases to the student, who needs no rental history and no roommate hunt. ${hub.name} earns commission from both the landlord and the renter.`}
      {...figMotion}
    >
      <div className="model-flow">
        <div className="model-node">
          <span className="model-node-role">{landlord.role}</span>
          <span className="model-node-name">{landlord.name}</span>
        </div>

        <div className="model-link left">
          <span className="model-link-main">
            {model.lease}
            <TbArrowRight size={15} className="model-link-arrow" aria-hidden="true" />
          </span>
          <span className="model-link-fee">
            <TbArrowRight size={12} className="model-link-fee-arrow" aria-hidden="true" />
            {model.commission}
          </span>
        </div>

        <div className="model-node hub">
          <span className="model-node-role">{hub.role}</span>
          <span className="model-node-name">{hub.name}</span>
          <p className="model-node-notes">{hub.notes}</p>
        </div>

        <div className="model-link right">
          <span className="model-link-main">
            {model.sublease}
            <TbArrowRight size={15} className="model-link-arrow" aria-hidden="true" />
          </span>
          <span className="model-link-fee">
            <TbArrowRight size={12} className="model-link-fee-arrow" aria-hidden="true" />
            {model.commission}
          </span>
        </div>

        <div className="model-node">
          <span className="model-node-role">{student.role}</span>
          <span className="model-node-name">{student.name}</span>
          <p className="model-node-notes">{student.notes}</p>
        </div>
      </div>
      <figcaption className="model-caption">
        {hub.name} sits in the middle, taking on the background checks and the risk, and earns commission from both the landlord and the renter.
      </figcaption>
    </motion.figure>
  )
}

/* ------------------------------------------------------------------ *
 * INFOGRAPHIC 4 - Outcomes
 * A row of stat cards, 2 by 2 on mobile. Numbers stay honest.
 * ------------------------------------------------------------------ */
function Outcomes() {
  const reduce = useReducedMotion()
  const cardMotion = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
        }
  return (
    <ul className="outcomes-grid" aria-label="Outcomes in the first stage">
      {outcomes.map((o, i) => (
        <motion.li key={o.value + o.label} className="outcome-card" {...cardMotion(i)}>
          <span className="outcome-value">{o.value}</span>
          <span className="outcome-label">{o.label}</span>
        </motion.li>
      ))}
    </ul>
  )
}

export default function FirstRevenue() {
  return (
    <CaseStudyShell sections={sections} prev={navPrev} next={navNext}>
      <style>{`
        .cs-section {
          padding-bottom: 4rem;
          border-bottom: 1px solid var(--border);
        }
        .cs-section.first { padding-top: 0; }
        .cs-section.last { border-bottom: none; }
        .cs-section + .cs-section { padding-top: 4rem; }

        /* HERO */
        .fr-hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.02;
          margin: 0 0 1.25rem;
        }
        .fr-hero-subhead {
          font-size: clamp(1.125rem, 1.6vw, 1.375rem);
          color: var(--text-muted);
          letter-spacing: -0.014em;
          line-height: 1.4;
          margin: 0;
        }

        /* AT A GLANCE CARD - the recruiter's 10-second read */
        .glance-card {
          margin: 3rem 0 0;
          background: var(--surface-secondary);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .glance-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.6;
          margin: 0 0 1.5rem;
          display: block;
        }
        /* Role gets the visual prominence - scope of ownership is the first check */
        .glance-role-key {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
          display: block;
          margin: 0 0 0.4rem;
        }
        .glance-role-value {
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          letter-spacing: -0.022em;
          line-height: 1.1;
          color: var(--text);
          margin: 0 0 0.75rem;
        }
        .glance-responsibilities {
          font-size: clamp(1rem, 1.3vw, 1.0625rem);
          color: var(--text);
          line-height: 1.5;
          letter-spacing: -0.01em;
          margin: 0 0 1.75rem;
        }
        .glance-divider { height: 1px; background: var(--border); margin: 0 0 1.5rem; }
        .glance-rows { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem 2rem; }
        .glance-cell { display: flex; flex-direction: column; gap: 0.45rem; }
        .glance-key {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .glance-value {
          font-size: 15px;
          line-height: 1.5;
          letter-spacing: -0.01em;
          color: var(--text);
        }

        /* THE MOVE THAT WORKED - callout under the card */
        .glance-callout {
          margin: 3rem 0 0;
          padding-left: 1.5rem;
          border-left: 2px solid var(--text);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .glance-callout-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .glance-callout-text {
          font-size: clamp(1.125rem, 1.7vw, 1.375rem);
          font-weight: 400;
          letter-spacing: -0.014em;
          line-height: 1.45;
          color: var(--text);
          margin: 0;
        }

        /* SECTION PRIMITIVES (mirrors reMind) */
        .cs-section-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
          margin: 0 0 1.5rem;
          display: block;
        }
        .cs-headline {
          font-size: clamp(1.875rem, 3.5vw, 2.75rem);
          font-weight: 600;
          letter-spacing: -0.022em;
          line-height: 1.2;
          margin: 0 0 2rem;
        }
        .cs-body {
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          color: var(--text-muted);
          line-height: 1.65;
          letter-spacing: -0.01em;
          margin: 0 0 1.25rem;
        }
        .cs-body:last-child { margin-bottom: 0; }

        /* REFRAME - the signature moment, oversized */
        .reframe-section .cs-headline {
          font-size: clamp(2.25rem, 5.5vw, 4rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin: 0 0 2.5rem;
        }

        /* TAKEAWAYS LIST */
        .takeaways-list { list-style: none; margin: 2.5rem 0 0; padding: 0; }
        .takeaway {
          display: flex;
          gap: 0.9rem;
          padding: 1.25rem 0;
          border-top: 1px solid var(--border);
        }
        .takeaway:last-child { border-bottom: 1px solid var(--border); }
        .takeaway-dot {
          flex-shrink: 0;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: var(--text);
          margin-top: 0.6rem;
        }
        .takeaway-text {
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          line-height: 1.6;
          letter-spacing: -0.01em;
          color: var(--text);
          margin: 0;
        }

        /* INFOGRAPHIC 1 - THREE BETS: one story, conviction building toward the survivor */
        .bets-figure { margin: 4rem 0 0; }
        .bets-track {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          position: relative;
          align-items: stretch;
        }
        /* connecting line: uniform thickness, darkening gently toward stage 3 */
        .bets-track::before {
          content: '';
          position: absolute;
          top: 1.375rem;
          left: 16.667%;
          right: 16.667%;
          height: 2px;
          transform: translateY(-50%);
          background: linear-gradient(to right, var(--text-tertiary) 0%, var(--text-muted) 55%, var(--text) 100%);
          z-index: 0;
        }
        .bet-stage {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .bet-rail { display: flex; justify-content: center; }
        .bet-dot {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          font-variant-numeric: tabular-nums;
          border: 1px solid var(--border);
          background: var(--bg-face);
          color: var(--text-muted);
        }
        /* the one that landed: hollow → filled node */
        .bet-dot.kept {
          background: var(--text);
          color: var(--bg-face);
          border-color: var(--text);
        }
        .bet-card {
          flex: 1;
          min-height: 11rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1.5rem;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: transparent;
        }
        /* recede the two dead ends */
        .bet-card.killed { border-color: var(--hairline); }
        .bet-card.killed .bet-name { opacity: 0.7; }
        .bet-card.killed .bet-learned { opacity: 0.85; }
        /* hero: emphasized with a filled surface + subtle lift (not the CTA inversion) */
        .bet-card.kept {
          background: var(--surface-secondary);
          border-color: var(--border);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
        }

        /* title + badge share a row again; badge sits top-right of the card */
        .bet-card-head {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem 0.75rem;
          flex-wrap: wrap;
        }
        .bet-name {
          font-size: 1.0625rem;
          font-weight: 600;
          letter-spacing: -0.014em;
          color: var(--text);
          margin: 0;
        }
        .bet-decision {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          flex-shrink: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .bet-decision svg { flex-shrink: 0; }
        /* killed badge: quiet, muted, and borderless */
        .bet-decision.killed {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          opacity: 0.7;
        }
        /* kept badge: same quiet treatment as killed, but full-strength (white) */
        .bet-decision.kept {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--text);
        }
        .bet-learned-block {
          width: 100%;
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .bet-learned-label {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .bet-learned-label svg { flex-shrink: 0; }
        .bet-learned { font-size: 14px; color: var(--text-muted); line-height: 1.5; margin: 0; min-height: 3em; }
        .bets-caption {
          margin-top: 1.25rem;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          letter-spacing: -0.005em;
        }

        @media (max-width: 720px) {
          .bets-track { grid-template-columns: 1fr; gap: 0; }
          .bets-track::before { display: none; }
          .bet-stage { flex-direction: row; gap: 1.25rem; padding-bottom: 1.25rem; }
          .bet-stage:last-child { padding-bottom: 0; }
          .bet-rail { flex: 0 0 2.75rem; position: relative; }
          /* vertical connector through the dots when stacked */
          .bet-stage:not(:last-child) .bet-rail::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 2.75rem;
            bottom: -1.25rem;
            width: 2px;
            background: var(--border);
          }
        }

        /* INFOGRAPHIC 2 - SOLVE vs REMOVE (the reframe; the bold beat) */
        .solve-figure { margin: 3rem 0 0; }
        .solve-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 1.25rem;
          align-items: stretch;
        }
        .solve-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.75rem;
          border: 1px solid var(--border);
          border-radius: 18px;
        }
        /* the calm, emphasized side */
        .solve-right { background: var(--surface-secondary); }
        .solve-head { display: flex; flex-direction: column; gap: 0.5rem; }
        .solve-eyebrow {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .solve-title {
          font-size: clamp(1.375rem, 2.4vw, 1.875rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: var(--text);
          margin: 0;
        }
        .solve-sub { font-size: 14px; color: var(--text-muted); line-height: 1.5; margin: 0; }

        /* LEFT: a busy, multi-step path */
        .solve-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.75rem; }
        .solve-step {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.3rem 0;
          font-size: 13px;
          line-height: 1.4;
          color: var(--text);
        }
        .solve-step-dot {
          flex-shrink: 0;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          border: 1px solid var(--text-muted);
        }
        /* RIGHT: one clean step, emphasized */
        .solve-onestep {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.4;
          color: var(--text);
        }
        /* plain white tick, no fill, no circle */
        .solve-step-dot.filled {
          width: auto;
          height: auto;
          border: 0;
          background: transparent;
          color: var(--text);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .solve-removed { display: flex; flex-direction: column; gap: 0.6rem; }
        .solve-removed-label {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .solve-chips { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .solve-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.75rem;
          border: 1px dashed var(--border);
          border-radius: 9999px;
          font-size: 13px;
          color: var(--text-muted);
        }
        .solve-chip svg { flex-shrink: 0; opacity: 0.85; }
        .solve-chip s { text-decoration-thickness: 1.5px; }
        /* burden line, pinned to the bottom of each column so they align */
        .solve-burden {
          margin-top: auto;
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          padding-top: 0.25rem;
        }
        .solve-burden-key {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.6;
        }
        .solve-burden-val { font-size: 14px; font-weight: 500; color: var(--text); }
        /* the arrow driving the reframe left → right */
        .solve-arrow {
          align-self: center;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          color: var(--text);
        }
        .solve-caption {
          margin-top: 1.25rem;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          letter-spacing: -0.005em;
        }
        @media (max-width: 760px) {
          .solve-grid { grid-template-columns: 1fr; gap: 0.85rem; }
          .solve-arrow { transform: rotate(90deg); margin: 0.25rem auto; }
        }

        /* INFOGRAPHIC 3 - HOW THE MODEL WORKS (company as hub) */
        .model-figure { margin: 2.5rem 0 0; }
        .model-flow {
          display: grid;
          grid-template-columns: 1fr auto 1.3fr auto 1fr;
          align-items: center;
          gap: 0.75rem;
        }
        .model-node {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.35rem;
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 14px;
        }
        /* the hub absorbs the risk and the burden */
        .model-node.hub { background: var(--surface-secondary); align-self: stretch; }
        .model-node-role {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .model-node-name {
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: -0.014em;
          color: var(--text);
        }
        .model-node-notes { font-size: 13px; color: var(--text-muted); line-height: 1.5; margin: 0.15rem 0 0; }
        /* connectors: lease chain out, commission in toward the hub */
        .model-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.45rem;
          min-width: 5.5rem;
        }
        .model-link-main {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--text);
          white-space: nowrap;
        }
        .model-link-arrow { color: var(--text); flex-shrink: 0; }
        .model-link-fee {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.75;
          white-space: nowrap;
        }
        .model-link-fee-arrow { flex-shrink: 0; }
        /* commission points into the hub: rightward from landlord, leftward from student */
        .model-link.right .model-link-fee-arrow { transform: rotate(180deg); }
        .model-caption {
          margin-top: 1.25rem;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          letter-spacing: -0.005em;
        }
        @media (max-width: 640px) {
          .model-flow { grid-template-columns: 1fr; gap: 0.5rem; }
          .model-link { min-width: 0; padding: 0.35rem 0; flex-direction: row; gap: 1rem; }
          /* arrows turn to follow the vertical flow; commission still points at the hub */
          .model-link .model-link-arrow,
          .model-link .model-link-fee-arrow { transform: rotate(90deg); }
          .model-link.right .model-link-fee-arrow { transform: rotate(270deg); }
        }

        /* INFOGRAPHIC 4 - OUTCOMES STAT CARDS */
        .outcomes-grid {
          list-style: none;
          margin: 2.5rem 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 0.75rem;
        }
        .outcome-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.5rem 1.25rem;
          border: 1px solid var(--border);
          border-radius: 14px;
        }
        .outcome-value {
          font-size: clamp(1.0625rem, 1.5vw, 1.25rem);
          font-weight: 600;
          letter-spacing: -0.018em;
          line-height: 1.15;
          color: var(--text);
        }
        .outcome-label { font-size: 13px; color: var(--text-muted); line-height: 1.4; }
        @media (max-width: 560px) {
          .outcomes-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .glance-rows { grid-template-columns: 1fr; gap: 1.25rem; }
        }
      `}</style>

      {/* 01 - OVERVIEW: hero + at a glance */}
      <section id="overview" className="cs-section first">
        <motion.h1 className="fr-hero-title" {...fadeUp(0)}>
          {hero.title}
        </motion.h1>
        <motion.p className="fr-hero-subhead" {...fadeUp(0.1)}>
          {hero.subhead}
        </motion.p>

        <motion.div className="glance-card" {...fadeUp(0.2)}>
          <span className="glance-label">At a glance</span>

          <span className="glance-role-key">Role</span>
          <h2 className="glance-role-value">{atAGlance.role}</h2>
          <p className="glance-responsibilities">{atAGlance.responsibilities}</p>

          <div className="glance-divider" />

          <div className="glance-rows">
            <div className="glance-cell">
              <span className="glance-key">Company</span>
              <span className="glance-value">
                {atAGlance.company} · {atAGlance.duration}
              </span>
            </div>
            <div className="glance-cell">
              <span className="glance-key">Outcome</span>
              <span className="glance-value">{atAGlance.outcome}</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="glance-callout" {...fadeUp(0.3)}>
          <span className="glance-callout-label">The move that worked</span>
          <p className="glance-callout-text">{moveThatWorked}</p>
        </motion.div>

        <ThreeBets />
      </section>

      {/* 02 - THE NETWORKING APP */}
      <section id="networking" className="cs-section">
        <Prose {...networking} />
      </section>

      {/* 03 - THE REAL PAIN */}
      <section id="housing" className="cs-section">
        <Prose {...housing} />
      </section>

      {/* 04 - THE REFRAME (signature moment) */}
      <section id="reframe" className="cs-section reframe-section">
        <Prose {...reframe} />
        <SolveRemove />
        <ModelFlow />
      </section>

      {/* 05 - PROVING DEMAND */}
      <section id="demand" className="cs-section">
        <Prose {...demand} />
      </section>

      {/* 06 - THE RESULT */}
      <section id="result" className="cs-section">
        <Prose {...result} />
        <Outcomes />
      </section>

      {/* 07 - TAKEAWAYS */}
      <section id="takeaways" className="cs-section last">
        <motion.h2 className="cs-headline" {...fadeUp(0)}>Takeaways</motion.h2>
        <ul className="takeaways-list">
          {takeaways.map((t, i) => (
            <motion.li key={t} className="takeaway" {...fadeUp(0.05 + i * 0.05)}>
              <span className="takeaway-dot" aria-hidden="true" />
              <p className="takeaway-text">{t}</p>
            </motion.li>
          ))}
        </ul>
      </section>
    </CaseStudyShell>
  )
}
