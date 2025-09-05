import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const education = {
  degree: "B.Tech in Computer Engineering (Minor: Data Science)",
  institution: "Ramrao Adik Institute of Technology, D. Y. Patil Deemed to be University",
  institutionUrl: "https://www.rait.ac.in/",
  period: "Sep 2022 - Present",
  description: "Currently pursuing B.Tech in Computer Engineering with a Minor in Data Science. Focusing on AI/ML, full-stack development, and data analytics.",
  previousEducation: [
    {
      institution: "New Bombay City School",
      degree: "12th Grade",
      period: "May 2020 – July 2022",
      percentage: "81%"
    },
    {
      institution: "Ryan International School",
      degree: "10th Grade",
      period: "April 2012 – April 2020",
      percentage: "93.4%"
    }
  ]
};

const certificates = [
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2024",
    url: "#",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2024",
    url: "#",
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    year: "2024",
    url: "#",
  },
  {
    title: "PowerBI for Beginners",
    issuer: "Simplilearn",
    year: "2024",
    url: "#",
  },
];

export default function EducationSection() {
  const fadeInRef = useScrollAnimation();

  return (
    <section id="education" className="relative py-12 sm:py-16 lg:py-20 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={fadeInRef} className="fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            Education & Certificates
          </h2>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Education */}
            <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl hover:glow-effect transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <GraduationCap className="w-8 h-8 mr-3" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {education.degree}
                  </h4>
                  <a 
                    href={education.institutionUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors text-lg font-semibold flex items-center"
                    data-testid="education-institution-link"
                  >
                    {education.institution}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <p className="text-muted-foreground mt-2">{education.period}</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    {education.description}
                  </p>
                </div>
                
                {education.previousEducation.map((edu, index) => (
                  <div key={index} className="border-l-4 border-muted pl-6">
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-accent font-semibold">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certificates */}
            <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl hover:glow-effect transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Award className="w-8 h-8 mr-3" />
                Certificates
              </h3>
              
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <div key={index} className="border-l-4 border-accent pl-6">
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition-colors flex items-start"
                        data-testid={`certificate-link-${index}`}
                      >
                        {cert.title}
                        <ExternalLink className="w-4 h-4 ml-1 mt-1 flex-shrink-0" />
                      </a>
                    </h4>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-muted-foreground text-sm">{cert.year}</p>
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
