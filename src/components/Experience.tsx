import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Aesthisia Datacenters Private Limited",
    location: "Gurgaon, India",
    period: "Feb 2024 – Nov 2025",
    highlights: [
      "Deployed and managed containerized applications on AWS EKS and GCP Kubernetes Engine using Helm, achieving high availability and scalability",
      "Built and maintained CI/CD pipelines using GitHub Actions, GitLab CI, Concourse CI, Jenkins and Argo CD, reducing release cycle time by ~25%",
      "Implemented HashiCorp Vault with AWS IAM for secure secrets management",
      "Provisioned and optimized multi-cloud infrastructure with Terraform, enhancing reliability and cost efficiency",
      "Achieved 20–30% cost reduction by migrating workloads to AWS Fargate and optimizing cloud resource allocation",
      "Monitored system health with Prometheus, Grafana, Fluent Bit, maintaining 99.99% uptime"
    ],
    current: false
  },
  {
    title: "DevOps Engineer (Intern)",
    company: "HelloTeam / Lalita Automation",
    location: "Bangalore, India",
    period: "Oct 2023 – Jan 2024",
    highlights: [
      "Created separate development and production environments",
      "Built containerized applications with Docker on cloud",
      "Deployed applications through Jenkins CI/CD pipeline",
      "Integrated EMQX and Kafka for real-time IoT data streaming",
      "Set up Prometheus and Grafana for monitoring with Slack alerts",
      "Optimized cloud resources, reducing infrastructure costs"
    ],
    current: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subheading">
            Building reliable infrastructure, one deployment at a time
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full ${exp.current ? 'bg-primary animate-glow-pulse' : 'bg-primary/50'}`} />

              <div className="glass rounded-2xl p-6 md:p-8 card-hover hover-lift ml-4">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-mono bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li 
                      key={hIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
