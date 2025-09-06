import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Bot, Car, Brain, Code } from "lucide-react";

const colorTags = [
  { name: "AI & Machine Learning", color: "bg-red-500/20 text-red-400" },
  { name: "Full-Stack Development", color: "bg-pink-500/20 text-pink-400" },
  { name: "Data Science & Analytics", color: "bg-orange-500/20 text-orange-400" },
  { name: "Cloud Computing & DevOps", color: "bg-purple-500/20 text-purple-400" },
  { name: "Database Design & Management", color: "bg-green-500/20 text-green-400" },
  { name: "Natural Language Processing & Computer Vision", color: "bg-blue-500/20 text-blue-400" },
];

const specializations = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Developing transformer models, recommendation systems, and intelligent analytics platforms.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web applications using React, Flask, Node.js, and modern frameworks.",
  },
  {
    icon: Car,
    title: "Data Science & Analytics",
    description: "Leveraging data science techniques for insights, predictions, and automated decision-making.",
  },
];

export default function AboutSection() {
  const fadeInRef = useScrollAnimation();

  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={fadeInRef} className="fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            About Me
          </h2>
          
          <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <Bot className="w-8 h-8 mr-3" />
                  Full-Stack Developer & AI Enthusiast
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Currently pursuing B.Tech in Computer Engineering with a Minor in Data Science at Ramrao Adik Institute of Technology. I specialize in building AI-driven applications and full-stack web solutions with a strong focus on machine learning and data analytics.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My passion lies in developing intelligent systems that solve real-world problems. From multilingual toxicity detection using transformer models to AI-powered recommendation engines, I combine cutting-edge technology with practical applications to create innovative digital solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {colorTags.map((tag) => (
                    <span 
                      key={tag.name} 
                      className={`px-3 py-1 ${tag.color} rounded-full text-sm`}
                      data-testid={`color-tag-${tag.name.toLowerCase()}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {specializations.map((spec, index) => (
                  <div 
                    key={spec.title} 
                    className="glass-card p-4 sm:p-6 rounded-lg hover:glow-effect transition-all duration-300"
                    data-testid={`specialization-card-${index}`}
                  >
                    <div className="flex items-center mb-4">
                      <spec.icon className="w-8 h-8 text-accent mr-4" />
                      <h4 className="text-lg font-semibold">{spec.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
