import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/Card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
        
        <Card className="bg-card border-border card-glow">
          <CardContent className="p-8">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all mb-8"
              asChild
            >
              <a href="mailto:shankaralemagar91@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                shankaralemagar91@gmail.com
              </a>
            </Button>
            
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors hover:scale-110 transform duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};