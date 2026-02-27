import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import HeaderImage from "./assets/header.svg"
import ResumePdf from "./assets/M Ibraheem Rehman Qazi - CV.pdf"
import BaadeSaba from "./assets/BaadeSaba.png"
import Server from "./assets/Server-1.png"
import SpamDetection from "./assets/Spam-Detect.jpeg"

type Experience = {
  period: string
  year: string
  company: string
  location: string
  role: string
  mode: string
  summary: string
}

type SkillCard = {
  title: string
  category: string
  level: number
}

type Project = {
  title: string
  timeline: string
  client: string
  description: string
  link?: string
  image?: string
}

const experience: Experience[] = [
  {
    period: "September 2025 - Present",
    year: "2025+",
    company: "VECTOR",
    location: "Islamabad, Pakistan",
    role: "Full Stack Software, Cloud & Java Engineer",
    mode: "Full-time",
    summary:
      "Architected AWS EKS + Karpenter infrastructure for a Generative AI platform with Redis-backed event-driven workers and 99.9% availability observability.",
  },
  {
    period: "June 2025 - August 2025",
    year: "2025",
    company: "HEXLER TECH",
    location: "Islamabad, Pakistan",
    role: "Full Stack Engineer (Web & App)",
    mode: "Full-time",
    summary:
      "Built NSTP incubator operations platform for 100+ startups and delivered AI-powered React Native workflows with Supabase real-time sync.",
  },
  {
    period: "June 2024 - April 2025",
    year: "2024-2025",
    company: "XFLOW RESEARCH",
    location: "Islamabad, Pakistan",
    role: "Software Engineer",
    mode: "Apprenticeship",
    summary:
      "Containerized legacy VoIP systems, reduced setup time by 40%, and contributed to open-source SIP/RTP protocol integrations at telecom scale.",
  },
  {
    period: "June 2023 - August 2023",
    year: "2023",
    company: "SALESFLO",
    location: "Karachi, Pakistan",
    role: "Web Developer",
    mode: "Internship",
    summary:
      "Contributed 30+ UI features to the SalesFlo core product redesign and improved internal product usability for 50+ team members.",
  },
]

const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "National University of Computer and Emerging Sciences",
    location: "Islamabad, Pakistan",
    years: "2021 - 2025",
  },
]

const skillCards: SkillCard[] = [
  { title: "AWS + Kubernetes", category: "Cloud & DevOps", level: 5 },
  { title: "Node.js + Redis", category: "Backend & Data", level: 5 },
  { title: "Java + Spring Boot", category: "Backend APIs", level: 4 },
  { title: "MLOps Pipelines", category: "AI Engineering", level: 5 },
  { title: "LLM Integrations", category: "Applied AI", level: 4 },
  { title: "React + TypeScript", category: "Frontend", level: 4 },
]

const leadership = [
  "Coordinator, NASCON 2023 (FAST University): managed SE Quiz logistics for 200+ participants with 95% satisfaction.",
  "Member, IEEE (FAST University): maintained standards across 50+ CS publications and flagged 15+ discrepancies.",
  "Member, FAST Data Science Society (2022 - 2023): organized 5+ seminars and represented the institution at NASCON.",
]

const projects: Project[] = [
  {
    title: "AI Spam Detection System",
    timeline: "Dec 2025 - Jan 2026",
    client: "End-to-End MLOps",
    description:
      "Browser extension + API for Fiverr spam detection with automated retraining and Dockerized CI/CD on Hugging Face Spaces.",
    link: "https://github.com/ibraheem15/Spam-detection-api",
    image: SpamDetection,
  },
  {
    title: "Self-Hosted Homelab Ecosystem",
    timeline: "Always Ongoing",
    client: "Infrastructure",
    description:
      "Private cloud stack with Immich, FileBrowser, Pi-hole, secure Tailscale VPN, and redundant automated backup architecture.",
    link: "https://github.com/ibraheem15/Ibraheem-HomeLab-Server",
    image: Server,
  },
  {
    title: "BaadeSaba Web App",
    timeline: "Nov 2023 - Dec 2023",
    client: "E-commerce",
    description:
      "Scaled to 5,000+ monthly users, then containerized and deployed on AWS for improved portability, uptime, and autoscaling.",
    link: "https://www.baadesaba.org",
    image: BaadeSaba,
  },
  {
    title: "BaadeSaba Backend Migration (Java)",
    timeline: "Recent Update",
    client: "E-commerce Platform Modernization",
    description:
      "Migrated BaadeSaba backend from Node.js to Java, improving API structure, maintainability, and long-term scalability for future service growth.",
    link: "https://github.com/ibraheem15/BaadeSaba-Java-Backend",
    // image: BaadeSaba,
  },
]

const langs = ["English", "Urdu", "German (Basic)"]

const technicalGroups = [
  {
    title: "Cloud & DevOps",
    stack: "AWS (EKS, EC2, IAM, CloudWatch, S3), Kubernetes, Karpenter, Docker, Terraform, CI/CD, Tailscale",
  },
  {
    title: "Backend & Data",
    stack: "Java, Spring Boot, Node.js, Redis Queues/PubSub, PostgreSQL, MongoDB, Supabase, REST APIs",
  },
  {
    title: "MLOps & AI",
    stack: "Model Training Pipelines, Hugging Face, Automated Retraining, AI Spam Detection, LLM Integration",
  },
  {
    title: "Frontend",
    stack: "React, TypeScript, TanStack Query, Vite, Tailwind CSS",
  },
]

function SectionHeading({ title, index }: { title: string; index: string }) {
  return (
    <header className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
        <p className="text-lg font-medium text-[#4A70A9]">({index})</p>
      </div>
      <Separator className="bg-black/25" />
    </header>
  )
}

function levelDots(level: number) {
  return Array.from({ length: 5 }).map((_, i) => (
    <span
      key={`dot-${i}`}
      className={`size-2 rounded-full ${i < level ? "bg-[#4A70A9]" : "bg-[#8FABD4]/60"}`}
    />
  ))
}

export function App() {
  return (
    <main className="bg-[#EFECE3] text-[#000000]">
      <section className="mx-auto grid min-h-[92vh] max-w-[1200px] border-x border-black/10 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col border-b border-black/10 px-6 py-8 md:px-12 lg:border-b-0 lg:border-r lg:border-black/10 lg:px-16">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="grid size-12 place-content-center rounded-full bg-[#4A70A9] text-2xl font-bold text-[#EFECE3]">
                I
              </div>
              <a href={ResumePdf} download="M-Ibraheem-Rehman-Qazi-CV.pdf">
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-[#4A70A9] bg-transparent px-7 text-base hover:bg-[#4A70A9]/10"
                >
                  <Download />
                  Download PDF Resume
                </Button>
              </a>
            </div>
          </div>

          <div className="my-auto max-w-xl space-y-6 py-14 lg:py-0">
            <h1 className="rise-in text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
              I&apos;m Ibraheem
              <span className="text-[#4A70A9]">.</span>
              <br />
              Full Stack AI,
              <br />
              Cloud & Java Engineer
            </h1>
            <p
              className="rise-in text-base leading-7 text-black/55 md:text-lg"
              style={{ animationDelay: "120ms" }}
            >
              Software Engineer specializing in Cloud Infrastructure (AWS), Java backend
              systems, MLOps, and high-performance architecture. I build scalable SaaS
              platforms with Kubernetes, Redis-driven event workflows, and production-grade AI
              deployments.
            </p>
          </div>

          <div className="grid gap-3 border-t border-black/10 pt-6 text-sm md:grid-cols-2 md:text-base">
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-[#4A70A9]"
              href="mailto:ibraheemwork15@gmail.com"
            >
              <Mail className="size-4" />
              ibraheemwork15@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-[#4A70A9]"
              href="https://github.com/ibraheem15"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4" />
              github.com/ibraheem15
            </a>
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-[#4A70A9]"
              href="https://linkedin.com/in/ibraheem-rehman"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="size-4" />
              linkedin.com/in/ibraheem-rehman
            </a>
            <p className="inline-flex items-center gap-2 text-black/70">
              <Phone className="size-4" />
              Available for remote opportunities
            </p>
          </div>
        </div>

        <div className="relative isolate hidden overflow-hidden lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(140deg,#EFECE3_0%,#8FABD4_58%,#4A70A9_100%)]" />
          <div className="pointer-events-none absolute -top-28 -left-20 size-72 rounded-full bg-[#4A70A9]/14 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-8 size-64 rounded-full bg-[#8FABD4]/35 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(239,236,227,0.58)_0%,rgba(239,236,227,0)_54%)]" />

          <div className="relative z-10 flex h-full min-h-[360px] items-center justify-center p-8 md:p-10">
            <div className="w-full max-w-[540px] rounded-[30px] border border-[#EFECE3]/70 bg-[#EFECE3]/55 p-4 shadow-[0_30px_75px_rgba(74,112,169,0.24)] backdrop-blur-md">
              <img
                src={HeaderImage}
                alt="Header showcase illustration"
                className="h-auto w-full rounded-[22px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] border-x border-t border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="relative">
          <SectionHeading title="About Me" index="01" />
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[340px_1fr] ">
          <div className="relative mx-auto size-[280px] md:size-[320px] hidden rounded-full lg:block">
            <div className="absolute inset-x-0 top-0 h-3/4 rounded-full bg-[linear-gradient(180deg,#4A70A9_0%,#8FABD4_80%)]" />
            <div className="absolute inset-x-0 bottom-0 h-3/4 rounded-full bg-black" />
            <div className="absolute inset-0 m-auto size-[55%] rounded-full bg-[#EFECE3]" />
          </div>

          <div className="space-y-8">
            <p className="max-w-3xl text-base leading-8 text-black/55 md:text-lg">
              Proven track record of bridging application engineering and infrastructure
              automation. I build systems that are cost-aware, observable, and production-ready,
              from backend queue architecture to AI model deployment workflows.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-5xl font-semibold">03+</p>
                <p className="text-black/65">Years building production software</p>
              </div>
              <div>
                <p className="text-5xl font-semibold">15+</p>
                <p className="text-black/65">Cloud and AI projects delivered</p>
              </div>
              <div>
                <p className="text-5xl font-semibold">99.9%</p>
                <p className="text-black/65">Target availability mindset</p>
              </div>
            </div>

            <Separator className="bg-black/15" />

            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xl font-semibold">Languages</p>
              {langs.map((item) => (
                <Badge key={item} variant="outline" className="h-10 rounded-full px-4 text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] border-x border-t border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <SectionHeading title="Experience" index="02" />

        <div className="mt-10 md:mt-14">
          {experience.map((item, idx) => (
            <article
              key={`${item.company}-${item.year}`}
              className="grid gap-6 px-2 py-8 md:grid-cols-[minmax(180px,1.1fr)_42px_minmax(170px,1fr)_minmax(0,1.35fr)] md:items-start"
            >
              <div className="min-w-0">
                <p className="text-5xl font-semibold tracking-tight">{item.year}</p>
                <p className="mt-2 text-xl">{item.role}</p>
                <p className="mt-1 text-sm text-black/60">{item.period}</p>
              </div>

              <div className="relative hidden h-full justify-center md:flex">
                <span
                  className={`absolute left-1/2 w-px -translate-x-1/2 bg-black/12 ${
                    idx === 0
                      ? "top-6 bottom-0"
                      : idx === experience.length - 1
                        ? "top-0 bottom-6"
                        : "inset-y-0"
                  }`}
                />
                <span
                  className={`relative z-10 mt-3 size-3 rounded-full border border-black ${
                    idx === 0 ? "bg-[#4A70A9] ring-6 ring-[#4A70A9]/20" : "bg-[#EFECE3]"
                  }`}
                />
              </div>

              <div className="min-w-0 border-l border-black/12 pl-6">
                <p className="text-3xl font-medium">{item.company}</p>
                <p className="text-base text-black/60">{item.location}</p>
                <p className="mt-1 text-base">{item.mode}</p>
              </div>

              <p className="min-w-0 text-base leading-8 text-black/55">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] border-x border-t border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <SectionHeading title="Education & Skills" index="03" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-9">
            {education.map((item) => (
              <article key={item.degree} className="space-y-2">
                <p className="inline-flex items-center gap-3 text-3xl font-medium">
                  {item.degree}
                </p>
                <p className="text-lg">{item.school}</p>
                <p className="text-black/60">
                  {item.location} | {item.years}
                </p>
              </article>
            ))}

            <div className="space-y-3">
              <p className="text-xl font-semibold">Core Coursework</p>
              <p className="max-w-2xl text-black/60">
                OOP, Data Structures, Operating Systems, Web Engineering, Software
                Architecture, Information Security, DevOps, MLOps, Software Quality.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xl font-semibold">Leadership & Engagement</p>
              <div className="space-y-3 text-black/60">
                {leadership.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <p className="pt-2 text-black/70">
                <span className="font-medium text-black">Certification:</span> AWS Cloud
                Practitioner
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillCards.map((skill) => (
              <Card key={skill.title} className="gap-4 rounded-2xl border border-[#4A70A9]/20 bg-[#EFECE3]/70 p-6">
                <div className="grid size-12 place-content-center rounded-xl bg-[#4A70A9]/15 text-xl font-semibold text-[#4A70A9]">
                  {skill.title.charAt(0)}
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-medium">{skill.title}</p>
                  <p className="text-sm text-black/55">{skill.category}</p>
                </div>
                <div className="flex gap-2">{levelDots(skill.level)}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {technicalGroups.map((group) => (
            <div
              key={group.title}
              className="relative overflow-hidden rounded-2xl border border-[#4A70A9]/20 bg-[#EFECE3]/75 p-5"
            >
              <span className="absolute inset-y-0 left-0 w-1 bg-[#4A70A9]/70" />
              <p className="text-xs font-semibold tracking-[0.16em] text-black/50 uppercase">
                {group.title}
              </p>
              <p className="mt-2 text-lg leading-8 text-black/80">{group.stack}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] border-x border-t border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <SectionHeading title="Latest Works" index="04" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card
              key={project.title}
              className="overflow-hidden rounded-2xl border border-[#4A70A9]/20 bg-[#EFECE3]/75 p-0"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-56 w-full object-cover"
                />
              ) : (
                <div
                  className={`h-56 ${
                    i % 2 === 0
                      ? "bg-[radial-gradient(circle_at_20%_15%,#EFECE3_0%,#8FABD4_45%,#4A70A9_100%)]"
                      : "bg-[radial-gradient(circle_at_20%_15%,#EFECE3_0%,#4A70A9_45%,#8FABD4_100%)]"
                  }`}
                />
              )}
              <div className="space-y-4 p-6">
                <p className="text-3xl font-medium">{project.title}</p>
                <p className="text-base text-black/60">
                  {project.client} | {project.timeline}
                </p>
                <p className="text-base leading-7 text-black/55">{project.description}</p>
                <div className="pt-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-[#4A70A9]"
                    >
                      View Project
                      <ArrowRight className="size-4" />
                    </a>
                  ) : (
                    <p className="inline-flex items-center gap-2 text-base font-medium text-black/75">
                      Featured Case Study
                      <ExternalLink className="size-4" />
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] border-x border-y border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <SectionHeading title="Contact Me" index="05" />

        <div className="relative mt-12 overflow-hidden rounded-[34px] border border-black/10 bg-[linear-gradient(135deg,#EFECE3_0%,#8FABD4_100%)] p-8 md:p-12">
          <div className="pointer-events-none absolute -top-20 -left-16 size-64 rounded-full bg-[#4A70A9]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-[#8FABD4]/30 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-5">
              <h3 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Let&apos;s connect for
                <span className="text-[#4A70A9]"> impactful roles</span>.
              </h3>
              <p className="max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
                For opportunities and interview discussions, please contact me through
                LinkedIn or email.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                className="group rounded-2xl border border-[#4A70A9]/25 bg-[#EFECE3]/70 p-5 transition-all hover:-translate-y-1 hover:border-[#4A70A9]/45 hover:bg-[#EFECE3]/95"
                href="https://linkedin.com/in/ibraheem-rehman"
                target="_blank"
                rel="noreferrer"
              >
                <p className="inline-flex items-center gap-3 text-xl font-semibold md:text-2xl">
                  <Linkedin className="size-5 text-[#4A70A9]" />
                  Connect on LinkedIn
                </p>
                <p className="mt-2 text-sm text-black/55 group-hover:text-black/70">
                  linkedin.com/in/ibraheem-rehman
                </p>
              </a>

              <a
                className="group rounded-2xl border border-[#4A70A9]/25 bg-[#EFECE3]/70 p-5 transition-all hover:-translate-y-1 hover:border-[#4A70A9]/45 hover:bg-[#EFECE3]/95"
                href="mailto:ibraheemwork15@gmail.com"
              >
                <p className="inline-flex items-center gap-3 text-xl font-semibold md:text-2xl">
                  <Mail className="size-5 text-[#4A70A9]" />
                  Send an Email
                </p>
                <p className="mt-2 break-all text-sm text-black/55 group-hover:text-black/70">
                  ibraheemwork15@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
