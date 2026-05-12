export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            About Me
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Getting to Know Me
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="font-serif text-5xl text-primary font-semibold">OA</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-xl -z-10" />
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a results-driven Product Manager with a passion for creating products that 
              users love. With experience across the product lifecycle, I specialize in translating 
              complex business requirements into clear, actionable roadmaps.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines data-driven decision making with deep empathy for users. 
              I believe that the best products come from truly understanding the problems 
              people face and working collaboratively to solve them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not shaping product strategy, you can find me exploring new technologies, 
              mentoring aspiring product managers, or enjoying a good book on design thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
