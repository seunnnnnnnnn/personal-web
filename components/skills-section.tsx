import {
  BarChart3,
  Users,
  Lightbulb,
  Target,
  MessageSquare,
  Layers,
  TrendingUp,
  Workflow,
  ShieldCheck,
  Database,
  Cpu,
  Briefcase,
  LineChart,
  Wrench,
  Globe,
  Building2,
  Code2,
  FileCode,
  BrainCircuit,
  MonitorCog,
} from "lucide-react"

const skills = [
  {
    icon: Workflow,
    title: "Project Delivery",
    description:
      "Leading projects from planning through execution while balancing timelines, stakeholders and operational priorities.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    description:
      "Using data, reporting and analytics to improve processes, reduce inefficiencies and support strategic decisions.",
  },
  {
    icon: TrendingUp,
    title: "Process Improvement",
    description:
      "Identifying operational bottlenecks and redesigning systems to improve performance, efficiency and long-term value.",
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Management",
    description:
      "Building strong relationships and communicating effectively across technical teams, leadership and external partners.",
  },
  {
    icon: Layers,
    title: "Risk & Governance",
    description:
      "Supporting structured risk management, governance frameworks and programme assurance within complex environments.",
  },
  {
    icon: Lightbulb,
    title: "Technology & Innovation",
    description:
      "Passionate about AI, infrastructure and emerging technologies that can transform organisations and communities.",
  },
  {
    icon: Users,
    title: "Leadership & Collaboration",
    description:
      "Working across multidisciplinary teams to align people, priorities and delivery towards shared outcomes.",
  },
  {
    icon: Target,
    title: "Strategic Thinking",
    description:
      "Focused on long-term impact, scalable systems and building solutions that combine commercial and social value.",
  },
  {
    icon: Database,
    title: "SQL & Databases",
    description:
      "Experience working with structured data, querying databases and supporting data-led operational insights.",
  },
  {
    icon: Code2,
    title: "Python",
    description:
      "Using Python for automation, analytics, problem solving and exploring AI and machine learning applications.",
  },
  {
    icon: FileCode,
    title: "Technical Understanding",
    description:
      "Background in Computer Science with exposure to software systems, coding principles and digital technologies.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Interested in applying artificial intelligence and machine learning to operational efficiency and infrastructure challenges.",
  },
  {
    icon: MonitorCog,
    title: "Digital Transformation",
    description:
      "Supporting modernisation initiatives through technology, process redesign and systems thinking.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Risk",
    description:
      "Supporting risk identification, mitigation and governance across large-scale operational and infrastructure environments.",
  },
  {
    icon: Briefcase,
    title: "Commercial Awareness",
    description:
      "Understanding how operational decisions, procurement and supplier relationships influence business performance.",
  },
  {
    icon: LineChart,
    title: "Continuous Improvement",
    description:
      "Focused on delivering measurable outcomes through optimisation, efficiency improvements and smarter systems.",
  },
  {
    icon: Wrench,
    title: "Engineering Mindset",
    description:
      "Applying structured problem solving and systems thinking from a background in Mechanical Engineering.",
  },
  {
    icon: Globe,
    title: "Global Impact Vision",
    description:
      "Driven by a long-term ambition to improve infrastructure, energy access and technology adoption across Africa.",
  },
  {
    icon: Building2,
    title: "Infrastructure & Utilities",
    description:
      "Experience working within complex infrastructure environments supporting operational delivery and transformation.",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Skills
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What I Bring to the Table
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            A combination of engineering, technology, project leadership and
            strategic thinking developed through experience across
            infrastructure, operational improvement and digital transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-semibold text-foreground mb-2">
                {skill.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
