import { Award } from "lucide-react";

const certifications = [
  {
    name: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "PowerBI for Beginners",
    issuer: "Professional Development",
  },
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
  },
];

export function Certifications() {
  return (
    <section className="py-16 md:py-24 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <Award size={28} className="text-primary" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-10 md:mb-12">
            Professional certifications and credentials earned through rigorous training and assessments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 md:p-6 border border-border/50 rounded-lg bg-card/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0 group-hover:bg-primary/20">
                    <Award size={18} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
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
