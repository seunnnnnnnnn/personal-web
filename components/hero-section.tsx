import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        
        <p className="text-primary font-medium mb-6 tracking-[0.2em] uppercase text-sm">
          Infrastructure • Technology • Leadership
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-8 text-balance">
          Building systems,
          <br />
          infrastructure and technology
          <br />
          for long-term impact.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto text-pretty">
          I&apos;m <span className="text-foreground font-medium">Oluwaseun Ayegbusi</span>,
          a Project Manager at United Utilities with a background in
          Mechanical Engineering and Computer Science. I&apos;m passionate
          about operational transformation, AI, infrastructure and building
          scalable solutions that create meaningful impact across the UK and Africa.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm text-muted-foreground">
            Project Management
          </div>

          <div className="px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm text-muted-foreground">
            Infrastructure
          </div>

          <div className="px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm text-muted-foreground">
            AI & Technology
          </div>

          <div className="px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm text-muted-foreground">
            Operational Transformation
          </div>

          <div className="px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm text-muted-foreground">
            Engineering
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 h-12">
            <Link href="#contact">Get in Touch</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12"
          >
            <Link href="#experience">View Experience</Link>
          </Button>
        </div>

        <div className="mt-20 animate-bounce">
          <Link
            href="#about"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
