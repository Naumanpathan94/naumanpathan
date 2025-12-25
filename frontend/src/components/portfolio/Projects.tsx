import { ExternalLink, Github, Folder, TrendingUp, Zap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Intelligent Bank Customer Churn Prediction",
    description: "ANN-TabPFN ensemble model on 10K Kaggle dataset achieving 91.3% accuracy. Implemented α = 0.3 weighted ensemble with preprocessing & 5-fold CV, delivering 0.924 AUC and 89.7% precision. Built interactive Streamlit dashboard enabling 15-25% better retention and ~$50K-$100K savings per 10K customers.",
    tags: ["Python", "PyTorch", "TabPFN", "Streamlit", "Scikit-learn"],
    icon: TrendingUp,
    github: "#",
    live: "#",
  },
  {
    title: "WATERMENON: University Portal",
    description: "Web-based admission portal to streamline university admissions with dedicated pages for applications, fee details, and meeting scheduling. Responsive design with interactive UI elements.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap4"],
    icon: Folder,
    github: "#",
    live: "#",
  },
  {
    title: "RecipeSense: Recommendation System",
    description: "ML-powered recipe recommendation engine using TF-IDF vectorization and cosine similarity on 7,000+ recipes dataset. Full-stack React-Flask web app deployed on circuit platform.",
    tags: ["Python", "React", "Flask", "Tailwind CSS", "Sci-kit Learn"],
    icon: Zap,
    github: "#",
    live: "#",
  },
  {
    title: "Multilingual Toxicity Classification",
    description: "Multilingual toxicity detection system using XLM-RoBERTa and PyTorch. Achieved 93% accuracy processing 360K+ comments across 6 toxicity categories. Deployed on college GPU server with Streamlit.",
    tags: ["Python", "XLM-RoBERTa", "PyTorch", "Streamlit", "TensorFlow"],
    icon: Award,
    github: "#",
    live: "#",
  },
  {
    title: "BuyWise: AI-Powered Product Insights",
    description: "Full-stack analytics platform processing 6,950+ Amazon reviews with multilingual sentiment analysis. AI-powered recommendation engine with responsive dashboards and mobile optimization.",
    tags: ["Python", "Flask", "NLTK", "TextBlob", "GoogleTrans"],
    icon: TrendingUp,
    github: "#",
    live: "#",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-14 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 flex items-center gap-2 md:gap-3">
              <Folder size={24} className="text-primary" strokeWidth={1.5} />
              Featured Projects
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">Selection of projects showcasing AI, ML, and full-stack development.</p>
          </div>
          <Button variant="outline" className="gap-2 w-full md:w-auto">
            <Github size={16} /> View GitHub
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="h-full border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
                <CardHeader>
                  <div className="flex justify-between items-start gap-3">
                    <div className="p-2 bg-primary/5 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0">
                      <IconComponent size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                          <Github size={18} />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Project">
                          <ExternalLink size={18} />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="mt-3 text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 mt-auto pt-0">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
