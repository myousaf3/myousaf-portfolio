import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Let's discuss how we can work together on your next AI project
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-xl card-glow">
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:joseph.wayne99@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">joseph.wayne99@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/myousaf99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">linkedin.com/in/myousaf99</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/myousaf3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Github className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium">github.com/myousaf3</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-6 bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently open to new opportunities and interesting projects. 
                Whether you need help with AI/ML systems, want to discuss a potential 
                collaboration, or just want to say hello, I'd love to hear from you!
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Available for freelance work</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Open to full-time opportunities</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Remote-friendly</span>
                </div>
              </div>

              <a
                href="mailto:joseph.wayne99@gmail.com"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity glow-sm"
              >
                <Send size={18} />
                Send me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
