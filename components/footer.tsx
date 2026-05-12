import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {currentYear} Oluwaseun Ayegbusi. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <Link 
            href="#about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link 
            href="#skills" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </Link>
          <Link 
            href="#experience" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </Link>
          <Link 
            href="#contact" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
