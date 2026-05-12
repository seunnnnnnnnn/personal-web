import { 
  BarChart3, 
  Users, 
  Lightbulb, 
  Target, 
  MessageSquare, 
  Layers,
  TrendingUp,
  Workflow
} from "lucide-react"

const skills = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Leveraging analytics to drive product decisions and measure success"
  },
  {
    icon: Users,
    title: "User Research",
    description: "Conducting interviews, surveys, and usability testing to understand user needs"
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description: "Defining vision, setting goals, and creating roadmaps that deliver value"
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Establishing OKRs and KPIs to track progress and align teams"
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Management",
    description: "Building relationships and communicating effectively across all levels"
  },
  {
    icon: Layers,
    title: "Agile Methodologies",
    description: "Leading scrum teams and iterating quickly based on feedback"
  },
  {
    icon: TrendingUp,
    title: "Growth & Optimization",
    description: "Identifying opportunities for product growth and conversion optimization"
  },
  {
    icon: Workflow,
    title: "Cross-functional Leadership",
    description: "Collaborating with engineering, design, marketing, and sales teams"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Skills
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of strategic thinking, technical understanding, and people skills 
            that help me build products users love.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.title}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
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
