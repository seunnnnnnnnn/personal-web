export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            About Me
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Engineer. Project Manager. Builder.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/284C5964-C4FE-4F59-B922-184E27735FB3.png"
                alt="Oluwaseun Ayegbusi"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-xl -z-10" />
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm Oluwaseun Ayegbusi, a Project Manager at United Utilities with a
              background in Mechanical Engineering and Computer Science. My work
              sits at the intersection of infrastructure, technology,
              operational improvement and long-term impact.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I've worked across project delivery, process improvement, risk,
              commercial strategy and data-led decision making. I'm particularly
              interested in how strong systems, clear governance and emerging
              technology can improve the way organisations deliver value.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond my current role, I'm building towards a career in senior
              leadership, with a focus on infrastructure, AI, energy,
              technology and scalable solutions for the UK, Nigeria and wider
              Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
