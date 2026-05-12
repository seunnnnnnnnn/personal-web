const experiences = [
  {
    role: "Senior Product Manager",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading product strategy for a suite of B2B tools, driving 40% increase in user engagement through data-driven feature development and user research initiatives.",
    achievements: [
      "Launched 3 major product features with 95% positive user feedback",
      "Reduced customer churn by 25% through improved onboarding",
      "Led a cross-functional team of 12 engineers and designers"
    ]
  },
  {
    role: "Product Manager",
    company: "Growth Startup",
    period: "2020 - 2022",
    description: "Managed the full product lifecycle for a consumer mobile app, from ideation to launch, scaling the user base from 10K to 500K active users.",
    achievements: [
      "Increased daily active users by 300% in 18 months",
      "Implemented A/B testing framework improving conversion by 45%",
      "Built and mentored a product team of 4"
    ]
  },
  {
    role: "Associate Product Manager",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Collaborated with clients to define product requirements and worked with development teams to deliver custom web and mobile solutions.",
    achievements: [
      "Successfully delivered 15+ client projects on time and budget",
      "Introduced agile methodologies reducing delivery time by 30%",
      "Received Client Excellence Award for outstanding service"
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Experience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            My Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful products and leading high-performing teams.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.role + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-[5px] md:-translate-x-1.5 mt-2" />
                
                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="font-semibold text-xl text-foreground mt-1">{exp.role}</h3>
                    <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
