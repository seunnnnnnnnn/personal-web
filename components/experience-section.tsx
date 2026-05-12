const experiences = [
  {
    role: "Graduate Project Manager",
    company: "United Utilities",
    period: "2024 - Present",
    description:
      "Delivering operational transformation, infrastructure and risk initiatives across one of the UK’s largest utilities organisations, with experience spanning commercial strategy, governance and process optimisation.",
    achievements: [
      "Redesigned a legacy asset recovery process reducing cycle time from 500 days to 90 days (82% improvement)",
      "Helped increase revenue recovery capacity from £600k to £1.1M through scalable operational redesign",
      "Supported infrastructure delivery programmes alongside major contractors including Costain, Jacobs and Mott MacDonald",
    ],
  },

  {
    role: "Operational Transformation Lead",
    company: "Asset Recovery Programme",
    period: "2025",
    description:
      "Led transformation work focused on improving operational efficiency, process ownership and revenue recovery across a complex legacy process.",
    achievements: [
      "Designed improved operational workflows across cross-functional teams",
      "Improved coordination and visibility across operational stakeholders",
      "Delivered measurable commercial and operational improvements",
    ],
  },

  {
    role: "Risk Manager",
    company: "Bio Assets Consolidation Programme",
    period: "2025",
    description:
      "Supporting risk governance for a multi-billion-pound infrastructure consolidation programme transitioning 13 operational centres into 6 strategic hubs.",
    achievements: [
      "Managed programme risk frameworks across infrastructure transformation activity",
      "Delivered executive-level risk reporting supporting strategic decisions",
      "Supported governance and long-term operational planning",
    ],
  },

  {
    role: "Supply Chain Strategy Analyst",
    company: "Commercial Indirects",
    period: "2025",
    description:
      "Worked on supplier visibility and commercial risk initiatives across a £2.5B procurement environment.",
    achievements: [
      "Designed supply chain mapping framework across Tier 1–4 suppliers",
      "Improved supplier visibility and proactive risk identification",
      "Strengthened understanding of procurement, contractor ecosystems and commercial operations",
    ],
  },

  {
    role: "Software Engineer Intern",
    company: "IBM",
    period: "2024",
    description:
      "Worked on a sustainability-focused mobile application integrating AI image classification and behavioural incentive systems.",
    achievements: [
      "Developed mobile recycling app integrating AI image classification",
      "Built functionality to categorise waste into recycling streams from user-submitted photos",
      "Designed gamified rewards system encouraging sustainable behaviour",
    ],
  },

  {
    role: "MSc Computer Science",
    company: "University College London",
    period: "2023 - 2024",
    description:
      "Completed postgraduate studies focused on software systems, programming, data and emerging technologies.",
    achievements: [
      "Built technical skills across Python, SQL and software systems",
      "Strengthened analytical and computational problem-solving abilities",
      "Developed strong understanding of technology-driven transformation",
    ],
  },

  {
    role: "BEng Mechanical Engineering",
    company: "Northumbria University",
    period: "2018 - 2021",
    description:
      "Graduated with First Class honours in Mechanical Engineering, developing strong analytical, technical and systems-thinking foundations.",
    achievements: [
      "Graduated with First Class honours",
      "Developed engineering design and structured problem-solving skills",
      "Built strong foundations in systems and operational thinking",
    ],
  },
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
            A journey shaped by engineering, technology, infrastructure and
            leadership across operational transformation and digital innovation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-[5px] md:-translate-x-1.5 mt-2" />

                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="font-semibold text-xl text-foreground mt-1">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground font-medium mb-3">
                      {exp.company}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
