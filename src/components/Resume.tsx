import { Briefcase, GraduationCap } from "lucide-react";

export const Resume = () => {
  const experience = [
    {
      title: "Data Analytics Intern",
      company: "Linkedin Corp",
      period: "Jan 2024 - Aug 2024",
      description: "utilized SQL (Trino) in extracting, manipulating, and analyzing large datasets to drive strategic insights and operational efficiency. created interactive dashboards and comprehensive reports to visualize key performance indicators and operational metrics. Successfully collaborated with various teams to build consolidated datasets and provide actionable insights, enhancing team efficiency and performance.Contributed to a 5% increase in LinkedIn's profitability by developing Csci Customer Engagement consolidated data-driven solutions to track and manage ticket statuses effectively. Provided critical agency recommendations insights and analysis",
    },
    {
      title: "Software Engineer Intern",
      company: "Mango Mentor",
      period: "June 2023 - Aug 2023",
      description: "Built and maintained Mango mentor websites and web applications. Collaborated with designers to create pixel-perfect user interfaces.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Hunter CUNY",
      period: "2023 - 2025",
      description: "Graduated with honors. Focus on software engineering and web technologies.",
    },
  ];

  const extraCurriculumn = [
    {
      program: "iOS and Android app development",
      instituition: "CodePath",
      period: "Sep 2022 - Nov 2022",
      description: "Participated in ios and Android app development learning program"
    },
    {
      program: "Software Development Training",
      instituition: "YearUp United",
      period: "Aug 2023 - Aug 2024",
      description: "One-year career development program that includes college-level courses, professional training, and a six-month internship. Relevant courses include Java, SQL, Business Communications Essentials, IT Essentials"
    },
    {
      program: "Break Through Tech AI",
      instituition: "Cornell University",
      period: "Jun 2023 - Jun 2024",
      description: ""
    },
    {
      program: "AI studio Project",
      instituition: "UNICC",
      period: "Aug 2023 - Jan 2024",
      description: "Working with UNICC and 4 other students in building AI model to detect misinformation about poliovirus in social media"
    },
     {
      program: "Basta X Google Software Engineering fellowship program",
      instituition: "Basta",
      period: "Jun 2023 - Jan 2024",
      description: "Selected as one of 66 participants, to participate in 10 weeks of rigorous, Attended 10 weeks 1:1 technical mentoring sessions with a Google SWE Attended workshops to enhance technical problem-solving and interview skills."
    },
  ]

  return (
    <section id="resume" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-gradient">Journey</span>
        </h2>
        
        <div className="space-y-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="border-l-2 border-primary pl-6 pb-6 relative hover:border-primary/70 transition-colors"
                >
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0" />
                  <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="border-l-2 border-primary pl-6 pb-6 relative hover:border-primary/70 transition-colors"
                >
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0" />
                  <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

           {/* Extracurriculumn */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Volunteer</h3>
            </div>
            <div className="space-y-6">
              {extraCurriculumn.map((extrac, index) => (
                <div 
                  key={index} 
                  className="border-l-2 border-primary pl-6 pb-6 relative hover:border-primary/70 transition-colors"
                >
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0" />
                  <h4 className="text-xl font-semibold mb-1">{extrac.program}</h4>
                  <p className="text-primary font-medium mb-2">{extrac.instituition}</p>
                  <p className="text-sm text-muted-foreground mb-3">{extrac.period}</p>
                  <p className="text-muted-foreground">{extrac.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};