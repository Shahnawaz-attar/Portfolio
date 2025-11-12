export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-foreground font-bold text-lg mb-2">Shahnawaz Attar</p>
            <p className="text-muted-foreground text-sm">Full Stack Developer & Technical Lead</p>
          </div>

          <div className="flex gap-6">
            {[
              { name: "LinkedIn", href: "https://linkedin.com" },
              { name: "GitHub", href: "https://github.com" },
              { name: "Email", href: "mailto:shahnawazattar55@gmail.com" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-xs">© 2025 Shahnawaz Attar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
