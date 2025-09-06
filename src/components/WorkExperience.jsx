import { FaBriefcase } from "react-icons/fa";

export default function WorkExperience() {
  const experiences = [
    {
      company: "Aesthisia Datacenters Private Limited",
      role: "DevOps Engineer",
      period: "Feb 2024 - Present",
      location: "On-Site / Gurgaon, India",
      description: `Manage and deploy applications on AWS EKS using Kubernetes and Helm.
Automate CI/CD pipelines for streamlined deployments and faster release cycles.
Implement HashiCorp Vault for secure secret management.
Optimize cloud infrastructure using Terraform (IaC) to automate AWS resource provisioning.
Improve application performance using Amazon CloudFront caching and AWS Auto Scaling.
Monitor system performance and logs with Prometheus, Grafana, and Loki to ensure uptime.
Reduced AWS cloud costs by 30-40% by migrating over-provisioned workloads to AWS Fargate and optimizing resource allocation.`,
    },
    {
      company: "Lalita Automation",
      role: "DevOps Engineer (Intern)",
      period: "Oct 2023 - Jan 2024",
      location: "Remote / Bangalore, India",
      description: `Set up and managed development and production environments on separate servers.
Configured infrastructure with Jenkins, PostgreSQL, Kafka, Prometheus, and Grafana for deployment and monitoring.
Implemented EMQX for IoT data ingestion and integrated Kafka for real-time data streaming.
Deployed applications with Kubernetes and Docker, ensuring scalable and reliable operations.
Established Slack and email alerts for service downtimes using Prometheus and Loki monitoring.
Optimized cloud resource utilization, reducing infrastructure costs.`,
    },
  ];

  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan mb-12 drop-shadow-lg text-center">
        Work Experience
      </h2>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-1 bg-cyan/30 rounded" />
        <ul className="space-y-12 sm:space-y-16 pl-8 sm:pl-12">
          {experiences.map((exp, idx) => (
            <li key={idx} className="relative">
              {/* Icon Circle */}
              <div className="absolute -left-5 sm:-left-7 top-3 bg-cyan shadow-neon rounded-full p-2 sm:p-3">
                <FaBriefcase className="text-black w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              {/* Experience Card */}
              <div className="bg-white/5 border border-cyan/50 rounded-3xl p-4 sm:p-6 shadow-neon hover:shadow-xl transition-shadow cursor-default">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-cyan font-mono text-sm sm:text-base">{exp.period}</span>
                </div>
                <div className="text-white/70 font-mono mb-4 text-sm sm:text-base">{exp.company} &bull; {exp.location}</div>
                <p className="text-white/80 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
