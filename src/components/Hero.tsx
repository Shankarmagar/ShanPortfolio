import { Button } from "../components/ui/button";
import { ArrowDown } from "lucide-react";
import Headshot from "../assets/headshot.jpeg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left max-w-xl">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="w-full flex justify-center mb-8">
              <img
                src={Headshot}
                alt="Shankar Ale Magar"
                className="h-40 w-40 border-4 border-primary shadow-elegant rounded-full"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Shankar Ale Magar</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Aspiring Software Engineer, Ex Data Analytics Intern @ LinkedIn, Ex Software Engineer @ Mangomentor
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
              >
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-foreground hover:bg-primary/10"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT GIF */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/refs/heads/master/code.gif"
            alt="Coding animation"
            className="max-w-md w-full object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};
