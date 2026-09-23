import type { ReactNode } from "react"
import { ArrowDownRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react"

import ResumePdf from "./assets/M Ibraheem Rehman Qazi - CV.pdf"

const experience = [
  {
    company: "Vector",
    role: "Forward Deployed Engineer · Full Stack & AI",
    period: "Sep 2025 — Present",
    location: "Remote · International clients",
    details: [
      "Embedded with a US-based client to own discovery, solution design, implementation, and production rollout of agentic AI systems.",
      "Built Inhibitor, a policy-driven control layer that evaluates each step in an agent’s ReAct loop and blocks policy violations before tools run.",
      "Deployed services to GCP and Railway with Terraform; for a second client, operated event-driven services on AWS EKS with Karpenter and 98% uptime.",
    ],
  },
  {
    company: "Hexler Tech",
    role: "Full Stack Engineer",
    period: "Jun 2025 — Aug 2025",
    location: "Islamabad, Pakistan",
    details: [
      "Built backend services for an incubator platform supporting more than 100 startups, including authentication and role-based access.",
      "Integrated speech-to-text and LLM processing into mobile product workflows.",
    ],
  },
  {
    company: "xFlow Research",
    role: "Software Engineer · Apprenticeship",
    period: "Jun 2024 — Apr 2025",
    location: "Islamabad, Pakistan",
    details: [
      "Containerized backend systems with Docker, reducing deployment setup time by 40%.",
      "Contributed to SIP/RTP telecom backend implementations supporting more than 100K users.",
    ],
  },
]

const featuredProjects = [
  {
    name: "BehaviourLens API",
    type: "Java · Applied AI",
    description:
      "Turns short animal-behaviour videos into plain-English reports. The backend extracts frames, runs a two-stage vision and report pipeline, and exposes authenticated product actions to agents through MCP.",
    highlight:
      "Domain-driven design · Hexagonal architecture · Spring Security/JWT · PostgreSQL · S3",
    stack: "Java · Spring Boot · OpenAI Vision · MCP · ffmpeg · OpenAPI",
    links: [
      { label: "View repository", href: "https://github.com/ibraheem15/Behaviourlens-Api" },
    ],
  },
  {
    name: "E-commerce Backends",
    type: "Java · Commerce systems",
    description:
      "Two complementary Spring Boot backends: one adds reliable asynchronous order email with a PostgreSQL transactional outbox; the other replaces an existing Node API while preserving its route contract and frontend integration.",
    highlight:
      "Transactional outbox with SKIP LOCKED batch claiming and retries · API contract parity · Atomic stock reservation and rollback · jOOQ · MongoDB · S3/CloudFront",
    stack: "Java 25 · Spring Boot 4 · PostgreSQL · MongoDB · AWS S3",
    links: [
      { label: "Outbox backend", href: "https://github.com/ibraheem15/Ecommerce-B-JAVA-SQL" },
      { label: "BaadeSaba migration", href: "https://github.com/ibraheem15/BaadeSaba-Java-Backend" },
    ],
  },
  {
    name: "Home Lab Infrastructure",
    type: "Infrastructure · Operations",
    description:
      "A two-node self-hosted environment with Proxmox, Docker services, and a Debian storage server over iSCSI. The repository documents architecture decisions, runbooks, and incident recoveries.",
    highlight:
      "Tailscale · Cloudflare Tunnel/Caddy · Offline restic backups · Tested restores",
    stack: "Proxmox · Debian · Docker · iSCSI · Linux networking",
    links: [
      { label: "View repository", href: "https://github.com/ibraheem15/HomeLab-Server" },
    ],
  },
]

const supportingProjects = [
  {
    name: "Traffic Sign Recognition",
    type: "Team project · Computer vision",
    description:
      "A traffic-sign image classifier with training scripts, a test script, and a small web app for predictions.",
    stack: "Python · Deep learning · Image classification",
    links: [
      { label: "Repository", href: "https://github.com/ibraheem15/Traffic-Sign-Recongition-AI" },
    ],
  },
  {
    name: "AI Spam Detection",
    type: "Applied ML · Browser extension",
    description:
      "A fine-tuned BERT Tiny inference API paired with a browser extension that scans a Fiverr message only when the user requests it.",
    stack: "Python · FastAPI · PyTorch · Hugging Face · React · WXT",
    links: [
      { label: "API", href: "https://github.com/ibraheem15/Spam-Detection-API" },
      { label: "Extension", href: "https://github.com/ibraheem15/Spam-Detection-Extention" },
    ],
  },
  {
    name: "100 Days of DevOps",
    type: "Ongoing practice · Operations",
    description:
      "An ongoing hands-on operations log, with daily tasks documented through starting checks, a focused fix, verification, and automation notes.",
    stack: "Linux · Bash · Docker · Kubernetes · Jenkins · CI/CD",
    links: [
      { label: "Repository", href: "https://github.com/ibraheem15/100-Days-of-DevOps-KodeKloud" },
    ],
  },
]

const skillGroups = [
  {
    name: "Backend systems",
    items: "Java, Spring Boot, Spring Security, REST API design, microservices, event-driven architecture, DDD, hexagonal architecture, SQL",
  },
  {
    name: "Agentic AI",
    items: "LLM integration, AI agents, ReAct, multi-agent systems, LangChain, LangGraph, RAG, vector search, MCP, guardrails and evaluation",
  },
  {
    name: "Cloud & delivery",
    items: "GCP, AWS, Azure, Kubernetes, Docker, Terraform, CI/CD, technical discovery, requirements analysis, solution architecture, stakeholder management",
  },
]

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children}<ArrowUpRight aria-hidden="true" size={15} />
    </a>
  )
}

export default function App() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Ibraheem Rehman Qazi, home">IRQ<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="resume-link" href={ResumePdf} download="M-Ibraheem-Rehman-Qazi-CV.pdf">
          <Download aria-hidden="true" size={15} /> <span>Resume</span>
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="availability"><span aria-hidden="true" /> Open to relocation</p>
          <h1>I build AI systems<br />that hold up <em>in the real world.</em></h1>
          <p className="hero-summary">
            I’m Ibraheem. I work with client teams to take agentic AI from technical discovery to secure, production-ready systems.
          </p>
          <div className="hero-actions">
          <a className="button-primary" href="#work">See selected work <ArrowDownRight aria-hidden="true" size={17} /></a>
            <a className="text-link" href="mailto:ibraheemwork15@gmail.com">Get in touch <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin aria-hidden="true" size={15} /> Islamabad, Pakistan</span>
            <span>Working across time zones</span>
          </div>
        </div>
        <aside className="role-note" aria-label="Professional focus">
          <h2>Forward Deployed<br />Engineer</h2>
          <p>Client discovery · Agentic AI · Cloud delivery</p>
        </aside>
      </section>

      <section className="intro-band">
        <div className="shell intro-inner">
          <h2>Close to the problem.<br />Accountable for what ships.</h2>
          <p>
            I work directly with client leadership and engineering teams: asking the hard questions early, translating constraints into system design, and staying through deployment. My focus is Java/Spring backends, agent safeguards, and cloud infrastructure that teams can operate with confidence.
          </p>
        </div>
      </section>

      <section className="content-section shell" id="work">
        <div className="section-heading">
          <h2>Selected work</h2>
          <p>Systems built around real operating constraints.</p>
        </div>
        <h3 className="work-tier-title">Featured projects</h3>
        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <article className="featured-project" key={project.name}>
              <h4>{project.name}</h4>
              <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}</p>
              <p className="project-highlight">{project.highlight}</p>
              <p className="project-stack">{project.stack}</p>
              <div className="featured-links">
                {project.links.map((link) => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}
              </div>
            </article>
          ))}
        </div>
        <div className="supporting-heading">
          <h3 className="work-tier-title">Supporting work</h3>
          <p>Applied ML and ongoing infrastructure practice.</p>
        </div>
        <div className="supporting-projects">
          {supportingProjects.map((project) => (
            <article className="supporting-project" key={project.name}>
              <h4>{project.name}</h4>
              <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}</p>
              <p className="project-stack">{project.stack}</p>
              <div className="supporting-links">
                {project.links.map((link) => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="shell content-section">
          <div className="section-heading">
            <h2>Experience</h2>
            <p>From first conversation to production.</p>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article className="experience-entry" key={job.company}>
                <div className="experience-heading">
                  <div><h3>{job.company}</h3><p>{job.role}</p></div>
                  <div className="experience-meta"><span>{job.period}</span><span>{job.location}</span></div>
                </div>
                <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section shell skills-section" id="approach">
        <div className="section-heading">
          <h2>Tools I work with</h2>
          <p>Chosen to solve the problem at hand.</p>
        </div>
        <div className="skill-list">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.name}>
              <h3>{group.name}</h3><p>{group.items}</p>
            </div>
          ))}
        </div>
        <div className="education-line">
          <span>B.S. Software Engineering</span>
          <span>FAST-NUCES · 2021–2025</span>
          <span>AWS Certified Cloud Practitioner</span>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div>
            <p className="contact-location">Islamabad, Pakistan · Open to relocation</p>
            <h2>Have a hard problem<br />worth solving?</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:ibraheemwork15@gmail.com"><Mail aria-hidden="true" size={17} />ibraheemwork15@gmail.com<ArrowUpRight aria-hidden="true" size={16} /></a>
            <ExternalLink href="https://linkedin.com/in/ibraheem-rehman">LinkedIn</ExternalLink>
            <ExternalLink href="https://github.com/ibraheem15">GitHub</ExternalLink>
          </div>
        </div>
        <div className="shell footer-bottom"><span>Ibraheem Rehman Qazi</span><span>Forward Deployed Engineer</span></div>
      </footer>
    </main>
  )
}
