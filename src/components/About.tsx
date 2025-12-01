import { Code2, Database, GitBranch, Globe, Layers, Server, Zap, Cloud, Smartphone, Package, BarChart3, Brain } from "lucide-react";


const skillCategories = [
  {
    category: "Frontend & UI",
    icon: Layers,
    skills: [
      { name: "React", icon: Code2, color: "from-blue-500 to-cyan-500" },
      { name: "javascript", icon: Code2, color: "from-yellow-500 to-yellow-400" },
      { name: "UI/UX", icon: Layers, color: "from-pink-500 to-rose-500" },
    ]
  },
  {
    category: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server, color: "from-green-600 to-green-400" },
      { name: "Express.js", icon: Server, color: "from-gray-600 to-gray-400" },
      { name: "Springboot", icon: Server, color: "from-green-500 to-emerald-500" },
      { name: "REST APIs", icon: Globe, color: "from-purple-500 to-pink-500" },
    ]
  },
  {
    category: "Database & Data",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database, color: "from-blue-500 to-indigo-500" },
      { name: "SQL", icon: Database, color: "from-orange-500 to-red-500" },
      { name: "Trino", icon: Database, color: "from-purple-600 to-purple-400" },
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Google Cloud Platform", icon: Cloud, color: "from-blue-600 to-blue-400" },
      { name: "Cloud Run", icon: Cloud, color: "from-indigo-500 to-blue-500" },
      { name: "Docker", icon: Package, color: "from-blue-500 to-blue-600" },
      { name: "Git", icon: GitBranch, color: "from-orange-600 to-red-500" },
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: Smartphone, color: "from-blue-400 to-cyan-400" },
      { name: "Dart", icon: Code2, color: "from-blue-600 to-indigo-500" },
    ]
  },
  {
    category: "Data & Analytics",
    icon: Brain,
    skills: [
      { name: "Python", icon: Code2, color: "from-blue-500 to-yellow-500" },
      { name: "Tableau", icon: BarChart3, color: "from-orange-500 to-blue-500" },
      { name: "Machine Learning", icon: Brain, color: "from-purple-500 to-pink-500" },
    ]
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            I’m a software developer and data enthusiast with hands-on experience building full-stack applications, analyzing large datasets,
             and deploying scalable solutions across cloud platforms.
             I’ve worked with technologies including Java, React, Python, SQL, Flutter, Spring Boot, Google Cloud Platform, and more.
          </p>
          
          <p>
            Most recently, I completed a Data Analytics Internship at LinkedIn, 
            where I contributed to a 5% increase in company profitability by developing data-driven solutions that improved ticket management and operational efficiency. 
            I also built interactive dashboards and reports that helped teams visualize KPIs and make insight-driven decisions.
          </p>

          <p>
            Through programs like Year Up, Cornell’s Machine Learning Foundations, Break Through Tech AI, and the Google SWE Program, 
            I’ve strengthened my technical foundation in software engineering, machine learning, and problem-solving. 
            I love creating products—from budgeting apps to social platforms—that make life easier, smarter, and more connected.
          </p>
          
          <p>
            I’m driven by continuous learning, real-world impact, and building tech that solves meaningful problems.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              <Zap className="inline-block w-6 h-6 mr-2 text-primary" />
              Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                return (
                  <div 
                    key={category.category}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${categoryIndex * 100}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <CategoryIcon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">{category.category}</h4>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="group relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 rounded-lg" 
                                 style={{ background: `linear-gradient(to right, ${skill.color})` }} />
                            <div className="relative bg-card border border-border rounded-lg p-3 hover:border-primary/50 transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-primary/20">
                              <div className="flex items-center gap-3">
                                <div className={`p-1.5 rounded-md bg-gradient-to-br ${skill.color} bg-opacity-10 flex-shrink-0`}>
                                  <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};