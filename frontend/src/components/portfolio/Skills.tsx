const topSkills = [
  "Computer Engineering",
  "Data Science",
  "AI Technologies",
];

const technologies = [
  "Python", "JavaScript/TypeScript", "Java", "C", "React", "Next.js", "Node.js", "Flask", 
  "TensorFlow", "PyTorch", "Scikit-learn", "XLM-RoBERTa",
  "PostgreSQL", "MongoDB", "MySQL", "Firebase",
  "Tailwind CSS", "Docker", "Git", "REST APIs", "NLP", "Computer Vision"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-black/40 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Top Skills
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground mb-16 md:mb-20 font-light leading-relaxed">
            Core competencies and technical expertise areas.
          </p>

          {/* Top Skills */}
          <div className="mb-20 md:mb-28">
            <div className="flex flex-wrap gap-4 md:gap-6">
              {topSkills.map((skill) => (
                <div
                  key={skill}
                  className="group relative px-8 py-5 rounded-2xl backdrop-blur-xl bg-primary/10 border border-primary/20 text-xl md:text-2xl font-bold text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* All Technologies */}
          <div className="pt-16 md:pt-20 border-t border-white/5">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-white">Experienced In</h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-base md:text-lg font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
