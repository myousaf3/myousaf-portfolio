import { ExternalLink, Github, Bot, Video, Shield, Calendar } from "lucide-react";

const projects = [
  {
    title: "AI-Powered E-Commerce Platform",
    description: "AI-driven video commerce platform analyzing user-generated videos to boost conversions. Features deep in-video search across audio, text, and visuals, reducing discovery time by up to 90%.",
    icon: Video,
    tags: ["GenAI", "Computer Vision", "NLP", "Video Analytics"],
    highlights: ["90% faster content discovery", "Multi-modal search", "Production scale"],
  },
  {
    title: "LeadCompete",
    description: "Slack bot integrating with Salesloft, Outreach, Hubspot, and Salesforce for gamified sales competitions and real-time performance tracking.",
    icon: Bot,
    tags: ["Python", "Flask", "Slack API", "WebSockets", "CI/CD"],
    highlights: ["Multi-platform integration", "Real-time tracking", "Jenkins CI/CD"],
  },
  {
    title: "Email Spoofing Security",
    description: "Scalable solutions for DMARC compliance through reporting, monitoring, and validation tools with user-facing dashboards for actionable insights.",
    icon: Shield,
    tags: ["Security", "DMARC", "Backend", "Dashboards"],
    highlights: ["Enhanced email security", "Cross-functional collaboration", "Compliance tools"],
  },
  {
    title: "Event Management System",
    description: "Comprehensive event management platform with scheduling, registration, and analytics capabilities.",
    icon: Calendar,
    tags: ["Full Stack", "Django", "React", "PostgreSQL"],
    highlights: ["End-to-end solution", "User management", "Analytics dashboard"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Real-world AI solutions driving measurable business impact
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 bg-background border border-border rounded-xl card-glow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <project.icon className="text-primary" size={24} />
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4 space-y-1">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/myousaf3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 border border-border rounded-lg transition-colors"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
