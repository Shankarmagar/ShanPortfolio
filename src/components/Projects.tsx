import { useQuery } from "@tanstack/react-query";
import { supabase } from "../integrations/supabase/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Skeleton } from "../components/ui/skeleton";

// // Define the project type
// interface Project {
//   id: number;
//   title: string;
//   description?: string;
//   image_url?: string;
//   technologies?: string[];
//   project_url?: string;
//   github_url?: string;
//   display_order?: number;
// }

// export const Projects = () => {
//   const dummyProjects: Project[] = [
//     {
//       id: 1,
//       title: "Portfolio Website",
//       description: "A modern portfolio built with React, Javascript, and Framer Motion.",
//       image_url: "https://via.placeholder.com/600x350?text=Project+1",
//       technologies: ["React", "Javascript", "Framer Motion"],
//       project_url: "https://portfolio-63453.web.app",
//       github_url: "https://github.com/Shankarmagar/personal-web-portfolio/tree/main/personal-web-portfolio",
//     },
//     {
//       id: 2,
//       title: "EasyShop Ecommerce",
//       description: "Full-stack e-commerce platform with cart, checkout, and admin dashboard.",
//       image_url: "https://github.com/Shankarmagar/EasyShop/blob/main/screenshots/Screenshot%202024-01-05%20at%201.27.07%E2%80%AFAM.png",
//       technologies: ["Java", "Springboot", "SQL"],
//       project_url: "https://example.com/demo2",
//       github_url: "https://github.com/Shankarmagar/EasyShop",
//     },
//     {
//       id: 3,
//       title: "HunterGuesser",
//       description: "HunterGuessr is fan project based off of GeoGuessr using CUNY-Hunter College as the main point of the game ",
//       image_url: "https://via.placeholder.com/600x350?text=Project+3",
//       technologies: ["React", "OpenAI", "React Query"],
//       project_url: "https://hunter-guessr.vercel.app",
//       github_url: "https://github.com/evanlin-dev/HunterGuessr",
//     },
//     {
//       id: 4,
//       title: "AcountingLedger App",
//       description: "Accounting Ledger is a fully functional ledger website with a Spring Boot API backend and MySQL database for data storage, and ReactJS/HTML/CSS for the frontend.",
//       image_url: "https://via.placeholder.com/600x350?text=Project+3",
//       technologies: ["React", "java", "Springboot", "SQL server", "SQL"],
//       project_url: "https://hunter-guessr.vercel.app",
//       github_url: "https://github.com/Capstsone2-0/DragonSquad",
//     },
//   ];

//   // Type the useQuery properly
//   const { data: projects, isLoading } = useQuery<Project[]>({
//     queryKey: ["projects"],
//     queryFn: async () =>
//       new Promise<Project[]>((resolve) => {
//         setTimeout(() => resolve(dummyProjects), 1000);
//       }),
//   });

export const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

   return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card border-border">
                <CardHeader>
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-40 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : projects && projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="bg-card border-border hover:card-glow transition-all duration-300 hover:-translate-y-1"
              >
                {project.image_url && (
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image_url} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  {project.description && (
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-secondary/80">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.project_url && (
                    <Button asChild variant="outline" size="sm" className="border-primary hover:bg-primary/10">
                      <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.github_url && (
                    <Button asChild variant="outline" size="sm" className="border-primary hover:bg-primary/10">
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects to display yet. Add some from your backend!</p>
          </div>
        )}
      </div>
    </section>
  );
};
