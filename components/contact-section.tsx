import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter, MapPin } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seun-ayegbusi-238946195/",
    username: "@oluwaseun"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/",
    username: "@oluwaseun"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@oluwaseun.com",
    username: "hello@oluwaseun.com"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a friendly chat about product management.
          </p>
        </div>
        
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-xl text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out. I&apos;ll get back to you as soon as possible.
              </p>
              
              <div className="flex items-center gap-3 text-muted-foreground mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Lagos, Nigeria</span>
              </div>
              
              <Button asChild size="lg" className="rounded-full">
                <Link href="mailto:hello@oluwaseun.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send me an email
                </Link>
              </Button>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-foreground mb-4">
                Find Me Online
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-accent/50 transition-all group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.username}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
