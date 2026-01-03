import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import helloteamLogo from "@/assets/helloteam-logo.png";
import gaugePreview from "@/assets/gauge-preview.png";
import sabaLogo from "@/assets/saba-logo.png";

const projects = [
  {
    title: "Saba Hospitality",
    period: "07/2025 – 11/2025",
    description: "Saba Hospitality is a comprehensive hospitality management platform built on Google Cloud Platform, leveraging modern DevOps practices including containerized deployments and infrastructure as code.",
    highlights: [
      "Designed and managed GCP infrastructure using GKE, Cloud DNS, Compute Engine, Artifact Registry, Secret Manager, and Load Balancing.",
      "Built GitHub Actions CI/CD pipelines to automate multi-stage Docker builds, image pushes, and GKE deployments using Helm.",
      "Implemented ExternalDNS for automated DNS management and provisioned complete infrastructure using Terraform (IaC).",
    ],
    tech: ["GCP", "GKE", "Cloud DNS", "Artifact Registry", "Secret Manager", "GitHub Actions", "Docker", "Kubernetes", "Helm", "Terraform"],
    image: sabaLogo,
    link: "https://sabahospitality.com/",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "HelloTeam – Employee Retention Platform",
    period: "08/2024 – 09/2025",
    description: "HelloTeam combines essential performance management and employee engagement tools so you can drive results, keep your best talent, and build a strong culture on-site or remote.",
    highlights: [
      "Provisioned and automated AWS infrastructure with Terraform, covering EKS, VPC, RDS, ElastiCache, Amazon MQ, and CloudFront.",
      "Built CI/CD pipelines with Concourse CI for automated deployments.",
      "Secured application data using HashiCorp Vault for secrets management.",
      "Integrated logging with the EFK stack (Elasticsearch, Fluentd, Kibana) for comprehensive log management.",
      "Managed traffic and application routing with CloudFront, Route 53, and Network Load Balancers (NLB).",
      "Implemented secure remote access using OpenVPN for internal applications.",
    ],
    tech: ["AWS", "EKS", "Fargate", "Terraform", "Kubernetes", "Helm", "HPA", "HashiCorp Vault", "EFK Stack", "Concourse CI", "OpenVPN"],
    image: helloteamLogo,
    link: "https://helloteam.com/",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Gauge.ro - Water Purifier Platform",
    period: "2024",
    description: "Gauge.ro is a water purifier platform that puts an end to RO service pain by providing real-time monitoring and management of water purifier systems.",
    highlights: [
      "Implemented IoT setup using EMQX to fetch data from devices and route it to Node.js for real-time processing.",
      "Deployed architecture sending data to Kafka, saved to PostgreSQL via topics for reliable storage.",
      "Established comprehensive monitoring with Grafana, Prometheus, and Loki with alerts.",
      "Employed Git branching strategies and created Bash scripts for data backups to bunny.net.",
      "Deployed applications to separate dev and production environments using Jenkins CI/CD.",
      "Optimized costs and resource usage across all services.",
    ],
    tech: ["AWS", "Docker", "Jenkins", "EMQX", "Kafka", "PostgreSQL", "Grafana", "Prometheus", "Loki", "Bash Scripting"],
    image: gaugePreview,
    link: "https://gauge.ro/",
    color: "from-blue-500 to-cyan-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Real-world projects showcasing my DevOps expertise
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden card-hover"
            >
              <div className="grid md:grid-cols-[280px_1fr] gap-0">
                {/* Project Image */}
                <div className={`relative bg-gradient-to-br ${project.color} p-1`}>
                  <div className="w-full h-full bg-card/95 flex items-center justify-center p-6 min-h-[200px]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-full max-h-40 object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary text-sm font-medium mt-1">{project.period}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* My Role & Impact */}
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-foreground mb-3">My Role & Impact</h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 4).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-badge text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
