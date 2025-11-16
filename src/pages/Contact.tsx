import { Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="h-screen bg-background text-white font-mono p-8 pt-32 md:p-16 md:pt-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full">
        <h1 className="text-xs uppercase tracking-wider mb-16 font-bold text-center">
          <span style={{ color: '#7FFFD4' }}>
            PLEASE SAY HI!
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Column */}
          <section>
            <h2 className="text-xs uppercase tracking-wider mb-8 text-white/70">
              GET IN TOUCH
            </h2>
            
            <div className="space-y-6 text-xs text-white leading-relaxed">
              <p className="text-white">
                feel free to reach out if you want to chat about interesting ideas, give me any recommendations or just say hello. i promise to answer as fast as i can!
              </p>

              <div className="flex items-center gap-2 pt-4">
                <Mail size={16} className="text-white" />
                <span className="text-white">
                  sophie [dot] ng [at] utoronto [dot] ca
                </span>
              </div>
            </div>
          </section>

          {/* Elsewhere Column */}
          <section>
            <h2 className="text-xs uppercase tracking-wider mb-8 text-white/70">
              ELSEWHERE
            </h2>
            
            <div className="space-y-6 text-xs text-white leading-relaxed">
              <div className="space-y-4">
                <a
                  href="https://github.com/sophianggan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-white/70 transition-colors"
                >
                  <Github size={16} />
                  <span>github</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sophia-ng-gan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-white/70 transition-colors"
                >
                  <Linkedin size={16} />
                  <span>linkedin</span>
                </a>
                
                <Link
                  to="/writing"
                  className="flex items-center gap-3 text-white hover:text-white/70 transition-colors"
                >
                  <span className="text-lg">↗</span>
                  <span>a list with my current favourites</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
