import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef, useState } from "react";
import { Code, Bot, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "AI & Data Science",
    icon: Bot,
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "XLM-RoBERTa", level: 80 },
      { name: "Sci-kit Learn", level: 85 },
    ],
  },
  {
    title: "Web & Cloud",
    icon: Wrench,
    skills: [
      { name: "React", level: 90 },
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Docker", level: 75 },
    ],
  },
];

const additionalSkills = [
  "Express", "PostgreSQL", "MongoDB", "MySQL", "Firebase", "Git", 
  "Kubernetes", "Jenkins", "GCP", "REST APIs", "Microservices", 
  "Kafka", "System Design", "Streamlit", "NLTK", "TextBlob"
];

export default function SkillsSection() {
  const fadeInRef = useScrollAnimation();
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const skillRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setAnimatedSkills(prev => new Set(Array.from(prev).concat(skillName)));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSkillRef = (skillName: string, el: HTMLDivElement | null) => {
    if (el) {
      skillRefs.current.set(skillName, el);
    } else {
      skillRefs.current.delete(skillName);
    }
  };

  return (
    <section id="skills" className="relative py-12 sm:py-16 lg:py-20 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={fadeInRef} className="fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            Technical Skills
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300"
                data-testid={`skill-category-${categoryIndex}`}
              >
                <h3 className="text-xl font-bold mb-6 text-accent flex items-center">
                  <category.icon className="w-6 h-6 mr-3" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const skillKey = `${category.title}-${skill.name}`;
                    const isAnimated = animatedSkills.has(skillKey);
                    
                    return (
                      <div 
                        key={skill.name}
                        ref={(el) => setSkillRef(skillKey, el)}
                        data-skill={skillKey}
                        className="skill-item"
                        data-testid={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground">{skill.name}</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ 
                              width: isAnimated ? `${skill.level}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-6 text-primary">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-primary/20 text-primary rounded-full transition-all duration-300 hover:bg-primary/30"
                  data-testid={`additional-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
