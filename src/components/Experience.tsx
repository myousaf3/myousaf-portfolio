const experiences = [
  {
    title: "AI/ML Engineer",
    company: "Devsinc",
    location: "Lahore",
    period: "Current",
    description: [
      "Integrated AI/ML models into production systems ensuring alignment between backend, frontend, and data pipelines",
      "Designed scalable, fault-tolerant architectures for video intelligence features, improving system reliability by ~30%",
      "Drove multiple AI/ML initiatives end-to-end from prototyping to deployment and monitoring",
      "Optimized ML workflows within Dockerized environments using Django and React",
    ],
    current: true,
  },
  {
    title: "Senior Software Engineer",
    company: "Devsinc",
    location: "Lahore",
    period: "Previous",
    description: [
      "Collaborated with experienced developers across the entire project lifecycle",
      "Designed resilient architectures addressing complex challenges",
      "Guided multiple projects from inception to completion",
      "Ensured cohesive approach throughout software development lifecycle",
    ],
    current: false,
  },
  {
    title: "Software Engineer",
    company: "Consoli Ads",
    location: "Lahore",
    period: "Previous",
    description: [
      "Demonstrated expertise in Dockerization, deployment, and full-stack development",
      "Developed features for ConsoliAds Digital Marketing projects",
      "Created one-page applications across multiple technology stacks",
      "Maintained comprehensive technical documentation and codebase optimization",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A journey of building impactful solutions across industries
        </p>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
              )}
              
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 ${
                exp.current 
                  ? "bg-primary border-primary glow-sm" 
                  : "bg-background border-border"
              }`}>
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                )}
              </div>

              {/* Content */}
              <div className="bg-card border border-border rounded-xl p-6 ml-4 card-glow">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 text-xs font-mono rounded-full ${
                      exp.current 
                        ? "bg-primary/20 text-primary" 
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {exp.period}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
