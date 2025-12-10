import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Passionate about leveraging AI to solve real-world challenges
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="p-6 bg-card border border-border rounded-xl card-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Current Role</h3>
                  <p className="text-muted-foreground">AI/ML Engineer at Devsinc</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Building scalable AI systems for video intelligence and e-commerce
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl card-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Education</h3>
                  <p className="text-muted-foreground">BS Computer Science</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Government College University, Lahore
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl card-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Lahore, Pakistan</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open to remote opportunities worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As an AI/ML Engineer with <span className="text-foreground font-medium">4+ years of experience</span>, 
              I specialize in building intelligent systems that drive real business value. 
              My expertise spans across <span className="text-primary">Generative AI</span>, 
              <span className="text-primary"> Computer Vision</span>, and 
              <span className="text-primary"> Natural Language Processing</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've led multiple AI initiatives from prototype to production, improving system 
              reliability by ~30% and reducing query response times by ~25%. I thrive in 
              cross-functional environments where I can bridge the gap between cutting-edge 
              research and practical applications.
            </p>

            <div className="pt-4">
              <h4 className="text-sm font-mono text-primary mb-3">// What drives me</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Building AI solutions that scale
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Continuous learning and experimentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Clean code and robust architectures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
