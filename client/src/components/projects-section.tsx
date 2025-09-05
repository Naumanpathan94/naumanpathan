import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Github, ExternalLink, Zap, Brain, Cog, CheckSquare, Bot } from "lucide-react";

const projects = [
  {
    title: "WATERMENON: University Portal",
    description: "Web-based admission portal to streamline university admissions with dedicated pages for applications, fee details, and meeting scheduling.",
    image: "https://via.placeholder.com/400x300/1e293b/6366f1?text=WATERMENON",
    githubUrl: "https://github.com/Naumanpathan94/Admission-Portal.git",
    features: [
      { icon: "🎓", text: "Developed comprehensive admission portal for university applications" },
      { icon: "📱", text: "Responsive design using Bootstrap4 and modern web technologies" },
      { icon: "⚡", text: "Interactive UI elements including filters, sliders, and video popups" },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap4"],
  },
  {
    title: "RecipeSense: Recipe Recommendation System",
    description: "ML-powered recipe recommendation engine using TF-IDF vectorization and cosine similarity on 7,000+ recipes dataset.",
    image: "https://via.placeholder.com/400x300/1e293b/3b82f6?text=RecipeSense",
    githubUrl: "https://github.com/Naumanpathan94/RecipeSense.git",
    features: [
      { icon: "🤖", text: "Built ML-powered recommendation engine with TF-IDF vectorization" },
      { icon: "📊", text: "Processed 7,000+ recipes dataset with cosine similarity algorithms" },
      { icon: "⚡", text: "Full-stack React-Flask web app deployed on circuit platform" },
    ],
    technologies: ["Python", "React", "TailwindCSS", "Sci-kit Learn", "Flask"],
  },
  {
    title: "Multilingual Toxicity Classification",
    description: "A multilingual toxicity detection system using XLM-RoBERTa and PyTorch, achieving 93% accuracy across 6 toxicity categories.",
    image: "https://via.placeholder.com/400x300/1e293b/10b981?text=Toxicity+Detection",
    githubUrl: "https://github.com/Naumanpathan94/Toxic-Comment-Classification-using-Deep-Learning.git",
    features: [
      { icon: "🌐", text: "Multilingual toxicity detection using XLM-RoBERTa transformer" },
      { icon: "📈", text: "Achieved 93% accuracy processing 360K+ comments across 6 categories" },
      { icon: "🚀", text: "Deployed on college GPU server with Streamlit interface" },
    ],
    technologies: ["Python", "XLM-RoBERTa", "PyTorch", "Streamlit", "TensorFlow"],
  },
  {
    title: "BuyWise: AI-Powered Product Insights",
    description: "Full-stack analytics platform processing 6,950+ Amazon reviews with multilingual sentiment analysis and AI recommendations.",
    image: "https://via.placeholder.com/400x300/1e293b/f59e0b?text=BuyWise",
    githubUrl: "https://github.com/Naumanpathan94/Buywise-Product-Analysis.git",
    features: [
      { icon: "📊", text: "Processed 6,950+ Amazon reviews with sentiment analysis" },
      { icon: "🤖", text: "AI-powered recommendation engine using TextBlob and Google Translate" },
      { icon: "📱", text: "Responsive dashboards with interactive charts and mobile optimization" },
    ],
    technologies: ["Python", "Flask", "NLTK", "TextBlob", "GoogleTrans"],
  },
];

export default function ProjectsSection() {
  const fadeInRef = useScrollAnimation();

  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-20 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={fadeInRef} className="fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            Featured Projects
          </h2>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl overflow-hidden hover:glow-effect transition-all duration-300 hover:scale-105 group"
                data-testid={`project-card-${index}`}
              >
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-muted-foreground">
                        <span className="text-accent mr-3 text-lg">{feature.icon}</span>
                        {feature.text}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                        data-testid={`project-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center"
                      data-testid={`project-github-link-${index}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Repository
                    </a>
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
