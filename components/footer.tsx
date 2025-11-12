import { LinkedInIcon, GitHubIcon, EmailIcon, TwitterIcon } from "./social-icons"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-foreground font-bold text-lg mb-2">Shahnawaz Attar</p>
            <p className="text-muted-foreground text-sm">Full Stack Developer & Technical Lead</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/shahnawaz-attar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/shahnawaz-attar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-black transition-all duration-300 hover:scale-110"
              title="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="mailto:shahnawazattar55@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <EmailIcon />
            </a>
          </div>

          <p className="text-muted-foreground text-xs">© 2025 Shahnawaz Attar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
