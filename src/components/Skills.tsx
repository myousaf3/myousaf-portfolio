import { Brain, Cloud, Code, Database, GitBranch, Plug } from "lucide-react";

const skillCategories = [
  {
    title: "AI/ML Frameworks",
    icon: Brain,
    skills: ["LangChain", "LlamaIndex", "PyTorch", "TensorFlow", "HuggingFace", "OpenCV"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS Bedrock", "Sagemaker", "EC2", "S3", "Lambda", "Docker", "CI/CD"],
  },
  {
    title: "Backend Development",
    icon: Code,
    skills: ["Django", "Flask", "FastAPI", "Python", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Weaviate", "Pinecone", "Vector DBs"],
  },
  {
    title: "Project Management",
    icon: GitBranch,
    skills: ["Jira", "GitHub", "GitLab", "Bitbucket", "Agile/Scrum"],
  },
  {
    title: "Integrations",
    icon: Plug,
    skills: ["Stripe", "Slack", "Salesforce", "HubSpot", "MailChimp"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building end-to-end AI solutions
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-background border border-border rounded-xl card-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Prometheus", "Grafana", "CloudWatch", "Pytest", "Jenkins", "React", "NumPy", "Pandas"].map((tool) => (
              <span key={tool} className="px-4 py-2 text-sm text-muted-foreground bg-secondary/50 rounded-full border border-border">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
