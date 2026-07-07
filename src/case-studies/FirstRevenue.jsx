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
  subhead: "Turning a community app that wouldn't monetize into a profitable housing business.",
}

const atAGlance = {
  role: ROLE,
  responsibilities:
    'Ran the user research, designed the UX flows and screens, and owned product strategy and feature definition. Managed interns and partnered with the founder on company direction.',
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
    learned: 'Became networking again. Still no pay.',
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
    'We set out to help international students settle into a new country, beginning with a community app. I designed it end to end: the user flows, the information hierarchy, and the screens.',
    'The catch: networking is something Instagram and Facebook already do for free, so willingness to pay was near zero. We killed it.',
  ],
}

const housing = {
  label: 'Following the pain',
  headline: 'The founder called the pivot: housing.',
  body: [
    'Housing is the hardest part of moving countries, so the founder narrowed the company to it. The first idea was the simplest one: help students find flatmates.',
    'I redesigned the app around compatibility matching. People liked it, but it behaved like one more networking platform, and again there was no real way to make money. Two products, one wall.',
  ],
}

const reframe = {
  label: 'The insight',
  headline: 'Instead of helping them solve the problem, we solved it for them.',
  body: [
    "After two kills, I saw what we'd been doing wrong: building the solution first, then hunting for users to fit it. So I flipped the process. I started from scratch, interviewed 10+ international students and early immigrants, and mapped the whole renting journey to find a pain they'd actually pay to remove.",
    "The research showed why students were stuck. The normal rental market wants income proof and a rental history, and most of them have neither. The fallback, student housing, will take them, but it's expensive, the rooms are tiny and shared, and it sits right by campus, which pushes the price higher still. Students take it for one semester and get out. Underneath it all sat two blockers: no rental history, and no flatmates.",
    "My recommendation: stop building tools to help students fight through those blockers, and remove them instead. If Rekro takes the lease itself and subleases to the student, filling the flatmates from its own pool, the student gets what they actually wanted: the normal rental market, with bigger, better-located homes at better value than student housing. I took it to the founder.",
  ],
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
  headline: 'Then I proved demand by going where the users already were.',
  body: [
    'Burned twice on willingness to pay, I refused to build before validating. The plan I pitched: test the model in market with real listings before writing a line of code.',
    'To fill the renter pool, instead of launching an Instagram page and waiting, I went where the users already were: WhatsApp and Facebook groups.',
  ],
}

const result = {
  label: 'The result',
  headline: 'A profitable housing business.',
  body: [
    `I identified the model and designed the validation; the founder executed the legals and ran the community operations. That split earned Rekro's first revenue, commission from both landlords and renters, reaching around $800 a week in profit across ${PROPERTY_COUNT} properties. The founder was impressed enough to offer me a cofounder role off the back of the strategy work.`,
    'And nothing about the fix is student-specific. No rental history and no easy way to find flatmates are blockers for anyone new to a city, so it works for any renter, not just students.',
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
  "Two pivots taught me I'd had the process backwards: building a solution, then searching for users to fit it. Starting from a validated pain, found through 10+ interviews, is what finally produced revenue.",
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
const navNext = { sublabel: 'Next case study', label: 'Qrew', path: '/work/qrew' }

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
      <ol className="bets-list">
        {threeBets.map((b, i) => {
          const kept = b.state === 'kept'
          return (
            <motion.li key={b.num} className={`bet-row ${b.state}`} {...stageMotion(i)}>
              <span className="bet-num" aria-hidden="true">{b.num}</span>
              <div className="bet-main">
                <h3 className="bet-name">{b.bet}</h3>
                <p className="bet-learned">{b.learned}</p>
              </div>
              <span className={`bet-decision ${b.state}`}>
                {kept ? <TbCheck size={13} aria-hidden="true" /> : <TbX size={12} aria-hidden="true" />}
                {b.decision}
              </span>
            </motion.li>
          )
        })}
      </ol>
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
        </div>
      </div>
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

        /* AT A GLANCE - the recruiter's 10-second read, de-boxed under a strong rule */
        .glance-card {
          margin: 3.5rem 0 0;
          padding: 1.75rem 0 0;
          border-top: 2px solid var(--text);
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
          padding: 1.25rem 0;
          border-top: 1px solid var(--border);
        }
        .takeaway:last-child { border-bottom: 1px solid var(--border); }
        .takeaway-text {
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          line-height: 1.6;
          letter-spacing: -0.01em;
          color: var(--text);
          margin: 0;
        }

        /* INFOGRAPHIC 1 - THREE BETS: editorial ledger. Type does the work;
           the two dead ends are struck through, the survivor stands. */
        .bets-figure { margin: 4rem 0 0; }
        .bets-list { list-style: none; margin: 0; padding: 0; }
        .bet-row {
          display: grid;
          grid-template-columns: 3.25rem 1fr auto;
          align-items: baseline;
          gap: 0.25rem 1.25rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border);
        }
        /* the surviving bet earns the strong rule */
        .bet-row.kept { border-top: 2px solid var(--text); }
        .bet-num {
          font-size: 13px;
          color: var(--text-muted);
          opacity: 0.55;
          font-variant-numeric: tabular-nums;
        }
        .bet-main { min-width: 0; }
        .bet-name {
          font-size: clamp(1.375rem, 2.6vw, 2rem);
          font-weight: 600;
          letter-spacing: -0.022em;
          line-height: 1.15;
          color: var(--text);
          margin: 0 0 0.3rem;
        }
        .bet-row.killed .bet-name {
          color: var(--text-muted);
          opacity: 0.55;
          text-decoration: line-through;
          text-decoration-thickness: 1.5px;
        }
        .bet-row.killed .bet-learned { opacity: 0.7; }
        .bet-learned { font-size: 14px; color: var(--text-muted); line-height: 1.5; margin: 0; }
        .bet-decision {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          text-transform: uppercase;
          white-space: nowrap;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
        }
        .bet-decision svg { flex-shrink: 0; }
        .bet-decision.killed { color: var(--danger); }
        .bet-decision.kept { color: var(--success); }

        @media (max-width: 720px) {
          /* match Qrew/reMind: page-rhythm top padding on the first section (4rem = inter-section gap) */
          .cs-section.first { padding-top: 4rem; }
          .bet-row { grid-template-columns: 2.25rem 1fr; }
          .bet-decision { grid-column: 2; justify-self: start; margin-top: 0.5rem; }
        }

        /* INFOGRAPHIC 3 - HOW THE MODEL WORKS (company as hub) */
        .model-figure { margin: 2.5rem 0 0; }
        .model-flow {
          display: grid;
          grid-template-columns: 1fr auto 1.3fr auto 1fr;
          align-items: center;
          gap: 0.75rem;
        }
        /* de-boxed: endpoints are plain type; only the hub is a subtle node */
        .model-node {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.3rem;
          padding: 0;
        }
        /* the hub is the one emphasized element: the company in the middle */
        .model-node.hub {
          background: var(--surface-secondary);
          align-self: stretch;
          padding: 1.1rem 1.25rem;
          border-radius: 12px;
        }
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
          gap: 0.4rem;
          padding: 1.1rem 0 0;
          border-top: 1px solid var(--text);
        }
        .outcome-value {
          font-size: clamp(1.5rem, 2.6vw, 2.125rem);
          font-weight: 600;
          letter-spacing: -0.025em;
          line-height: 1.05;
          color: var(--text);
          font-variant-numeric: tabular-nums;
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
          <p className="glance-role-value">{atAGlance.role}</p>
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
              <p className="takeaway-text">{t}</p>
            </motion.li>
          ))}
        </ul>
      </section>
    </CaseStudyShell>
  )
}
