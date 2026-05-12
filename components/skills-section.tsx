"use client"

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
  BrainCircuit,
} from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const skills = [
  {
    icon: Workflow,
    title: "Project Delivery",
    description:
      "Leading projects from planning through execution across complex operational environments.",
  },
  {
    icon: Code2,
    title: "Python",
    description:
      "Using Python for analytics, automation and AI-focused problem solving.",
  },
  {
    icon: Database,
    title: "SQL & Data",
    description:
      "Working with structured data and reporting to support operational insights.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Innovation",
    description:
      "Exploring how AI and emerging technology can improve infrastructure systems.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Governance",
    description:
      "Supporting structured risk management and programme governance.",
  },
  {
    icon: Briefcase,
    title: "Commercial Awareness",
    description:
      "Understanding supplier strategy, procurement and operational value creation.",
  },
  {
    icon: Wrench,
    title: "Engineering Mindset",
    description:
      "Structured problem solving shaped by Mechanical Engineering.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Focused on scalable infrastructure and technology impact across Africa.",
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
            Combining engineering, technology, leadership and strategic thinking
            across infrastructure and digital transformation.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {skills.map((skill) => (
              <CarouselItem
                key={skill.title}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {skill.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {skill.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
