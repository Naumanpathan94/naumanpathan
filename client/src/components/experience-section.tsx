import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircle, Trophy, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Web Applications Developer Intern",
    company: "Campus Credentials",
    companyUrl: "#",
    location: "Mumbai, India",
    period: "August 2025 - Present",
    summary: "Architecting AI-driven applications and enterprise solutions using SDLC principles while implementing innovative digital transformation technologies.",
    responsibilities: [
      "Architected AI-driven resume analysis platform automating candidate evaluation using SDLC principles",
      "Implementing authentication systems for enterprise security, ensuring innovation in digital solutions",
      "Developing intelligent database optimization using AI-driven query analysis by leveraging SQL and Oracle technologies",
      "Integrating large language models including Ollama for automated content analysis and intelligent document processing",
    ],
    achievements: [
      "Created responsive IntelQI Studios landing page demonstrating SDLC knowledge and innovative design solutions",
      "Successfully implemented AI-powered automation systems for enterprise applications",
      "Delivered scalable web applications with focus on user experience and performance optimization",
    ],
    skills: ["Python", "React", "Flask", "SQL", "Oracle", "AI/ML", "Ollama", "Authentication Systems"],
    current: true,
  },
];

export default function ExperienceSection() {
  const fadeInRef = useScrollAnimation();

  return (
    <section id="experience" className="relative py-12 sm:py-16 lg:py-20 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={fadeInRef} className="fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl hover:glow-effect transition-all duration-300"
                data-testid={`experience-card-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors text-lg font-semibold flex items-center"
                      data-testid={`company-link-${index}`}
                    >
                      {exp.company}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <p className="text-muted-foreground mt-1">{exp.location}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <span 
                      className={`${exp.current ? 'bg-primary/20 text-primary' : 'bg-secondary/50 text-foreground'} px-3 py-1 rounded-full text-sm font-semibold`}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-accent">Summary</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-accent">Responsibilities</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-accent">Achievements</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <Trophy className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        data-testid={`skill-tag-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
