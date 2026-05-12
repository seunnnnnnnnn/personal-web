import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
          Welcome
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 text-balance">
          Hi, I&apos;m Oluwaseun Ayegbusi
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto text-pretty">
          A passionate <span className="text-foreground font-medium">Product Manager</span> dedicated to 
          building user-centric products that make a real difference. I love turning ideas into 
          impactful solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link href="#about">Learn More About Me</Link>
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <Link 
            href="#about" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
