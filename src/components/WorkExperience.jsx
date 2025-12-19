import { FaBriefcase } from "react-icons/fa";

export default function WorkExperience() {
  const experiences = [
    {
      company: "Aesthisia Datacenters Private Limited",
      role: "DevOps Engineer",
      period: "02/2024 – 11/2025",
      location: "Gurgaon, India",
      description: `Deployed and managed containerized applications on AWS EKS and GCP Kubernetes Engine using Helm, achieving high availability and scalability.
Built and maintained CI/CD pipelines using GitHub Actions, GitLab CI, Concourse CI, Jenkins and Argo CD, automating build, test, deployment, and Kubernetes delivery workflows, and reducing release cycle time by ~25%.
Implemented and maintained HashiCorp Vault with AWS IAM for secure secrets management.
Provisioned and optimized multi-cloud infrastructure with Terraform, enhancing reliability, scalability, and cost efficiency.
Achieved 20–30% cost reduction by migrating workloads to AWS Fargate and optimizing cloud resource allocation.
Enhanced performance and uptime using AWS CloudFront, Auto Scaling, and network optimizations.
Monitored system health with Prometheus, Grafana, Fluent Bit, and proactively maintained 99.99% uptime.`,
    },
    {
      company: "Lalita Automation",
      role: "DevOps Engineer (Intern)",
      period: "10/2023 – 01/2024",
      location: "Bangalore, India",
      description: `Created separate development and production environments.
Built containerized applications with Docker on cloud.
Deployed application through Jenkins CI/CD pipeline.
Integrated EMQX and Kafka for real-time IoT data streaming.
Set up Prometheus and Grafana for monitoring with Slack alerts for downtimes.
Used PostgreSQL database and utilized Bash script to take DB backup and cleanup.
Optimized cloud resources, reducing infrastructure costs.`,
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
