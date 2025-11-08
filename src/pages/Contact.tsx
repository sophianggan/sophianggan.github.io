import { ScrambleText } from '@/components/ScrambleText';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono p-8 md:p-16">
      <div className="max-w-4xl">
        <h1 className="text-xs uppercase tracking-wider mb-12 text-secondary">
          <ScrambleText text="GET IN TOUCH" />
        </h1>
        
        <div className="space-y-8 text-sm md:text-base">
          <p className="text-muted-foreground leading-relaxed">
            feel free to reach out if you want to collaborate, chat about interesting ideas, or just say hello.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <Mail size={18} />
              <span className="group-hover:translate-x-1 transition-transform">
                <ScrambleText text="your.email@example.com" />
              </span>
            </a>
          </div>

          <div className="pt-8">
            <h2 className="text-xs uppercase tracking-wider mb-6 text-secondary">
              <ScrambleText text="ELSEWHERE" />
            </h2>
            
            <div className="flex flex-col gap-4">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Twitter size={18} />
                <span className="group-hover:translate-x-1 transition-transform">
                  <ScrambleText text="twitter" />
                </span>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Github size={18} />
                <span className="group-hover:translate-x-1 transition-transform">
                  <ScrambleText text="github" />
                </span>
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Linkedin size={18} />
                <span className="group-hover:translate-x-1 transition-transform">
                  <ScrambleText text="linkedin" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
