import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm mb-4 opacity-0 animate-fade-in">
              &lt;hello world /&gt;
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in animation-delay-200">
              I'm <span className="text-gradient">Muhammad Yousaf</span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-in animation-delay-400">
              <span className="font-mono text-primary">AI/ML Engineer</span>
              <span className="mx-3 text-border">|</span>
              <span>Building Intelligent Systems</span>
            </div>
            
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in animation-delay-600">Specializing in GenAI, Computer Vision, and NLP. Transforming complex problems into elegant AI-powered solutions with 6+ years of experience.</p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in animation-delay-600">
              <a href="https://github.com/myousaf3" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 rounded-lg transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/myousaf99" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 rounded-lg transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:joseph.wayne99@gmail.com" className="p-3 bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 rounded-lg transition-all duration-300">
                <Mail size={20} />
              </a>
              <a href="#contact" className="ml-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity glow-sm">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-right animation-delay-400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-primary/50 overflow-hidden glow">
                <img src={profileImage} alt="Muhammad Yousaf" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;