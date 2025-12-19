import helloTeamImg from '../assets/hello-team.png';
import gaugeRoImg from '../assets/gauge.ro.jpg';
import sabaHospitalityImg from '../assets/saba-hospitality.png';

export const projects = [
  {
    slug: "helloteam",
    year: "08/2024 – 09/2025",
    title: "HelloTeam – A True Employee Retention Platform",
    image: helloTeamImg,
    summary: "Enterprise project with autoscaling, CI/CD, Terraform, Vault, and more.",
    overview: `
      HelloTeam combines essential performance management and employee engagement tools so you can drive results, keep your best talent, and build a strong culture on-site or remote.
      This all-in-one platform empowers seamless collaboration and growth for a modern workforce.
    `,
    myRoleImpact: [
      "Provisioned and automated AWS infrastructure with Terraform, covering EKS, VPC, RDS, ElastiCache, Amazon MQ, and CloudFront.",
      "Deployed microservices on EKS Fargate with Helm charts, HPA, and health probes to ensure reliability, scalability, and self-healing.",
      "Built CI/CD pipelines with Concourse CI for automated deployments.",
      "Secured application data using HashiCorp Vault for secrets management.",
      "Integrated logging with the EFK stack (Elasticsearch, Fluentd, Kibana) for comprehensive log management.",
      "Managed traffic and application routing with CloudFront, Route 53, and Network Load Balancers (NLB) to ensure low latency and high availability.",
      "Implemented secure remote access to the entire infrastructure using OpenVPN, enabling private access to internal applications such as Concourse CI, JRepo, and Hashicorp Vault."
    ],
    techStack: [
      "AWS (EKS, Fargate, EC2, IAM, VPC, RDS, ElastiCache, Amazon MQ, S3, CloudFront, Route 53, Auto Scaling, NLB)",
      "Kubernetes",
      "Helm",
      "HPA",
      "Terraform",
      "HashiCorp Vault",
      "EFK Stack",
      "Concourse CI",
      "OpenVPN",
      "Health Probes",
      "Bash Scripting"
    ],
    description: `
      <strong>Overview:</strong> HelloTeam is a scalable AWS microservice platform deployed on EKS using Kubernetes and Helm.<br/>
      <strong>My Role & Impact:</strong>
      <ul>
        <li>Provisioned and automated AWS infrastructure with Terraform, covering EKS, VPC, RDS, ElastiCache, Amazon MQ, and CloudFront.</li>
        <li>Deployed microservices on EKS Fargate with Helm charts, HPA, and health probes to ensure reliability, scalability, and self-healing.</li>
        <li>Built CI/CD pipelines with Concourse CI for automated deployments.</li>
        <li>Secured application data using HashiCorp Vault for secrets management.</li>
        <li>Integrated logging with the EFK stack (Elasticsearch, Fluentd, Kibana) for comprehensive log management.</li>
        <li>Managed traffic and application routing with CloudFront, Route 53, and Network Load Balancers (NLB) to ensure low latency and high availability.</li>
        <li>Implemented secure remote access to the entire infrastructure using OpenVPN, enabling private access to internal applications such as Concourse CI, JRepo, and Hashicorp Vault.</li>
      </ul>
      <strong>Tech Stack:</strong> AWS (EKS, Fargate, VPC, RDS, ElastiCache, Amazon MQ, CloudFront, Route 53, NLB), Kubernetes, Helm, HPA, Terraform, HashiCorp Vault, EFK Stack, Concourse CI, OpenVPN
    `,
    ctas: [
      { label: "Visit Website", href: "https://www.helloteam.com/" }
    ]
  },
  {
    slug: "gauge-ro",
    year: "2024",
    title: "Gauge.ro - Water Purifier",
    image: gaugeRoImg,
    summary: "IoT water purifier monitoring platform with real-time data processing, notifications, and comprehensive monitoring.",
    overview: `
      Gauge.ro is an water purifier platform that puts an end to RO service pain by providing real-time monitoring and management of water purifier systems.
      The platform enables users to track water quality, service status, and receive proactive notifications for maintenance and downtime alerts.
    `,
    myRoleImpact: [
      "Implemented IoT setup using EMQX to fetch data from devices and route it to Node.js application for real-time processing.",
      "Deployed application architecture that sent data to Kafka, where it was saved to PostgreSQL via topics for reliable data storage.",
      "Ensured all services were secure and set up notifications via Slack and email for service downtimes and maintenance alerts.",
      "Established comprehensive monitoring with Grafana, Prometheus, and Loki, including alerts for server load and memory usage.",
      "Enabled users to view logs in Grafana and configured email alerts for any service downtime.",
      "Employed Git branching strategies for version control and created Bash scripts for data backups to bunny.net.",
      "Deployed all applications to separate servers for development and production environments using Jenkins CI/CD.",
      "Optimized costs and resource usage across all services for efficient operations."
    ],
    techStack: [
      "AWS",
      "Docker",
      "Jenkins",
      "Bash Scripting",
      "bunny.net",
      "EMQX",
      "Kafka",
      "PostgreSQL",
      "Grafana",
      "Prometheus",
      "Loki",
      "Git",
      "postgresql"
    ],
    description: `
      <strong>Overview:</strong> Gauge.ro is an innovative IoT platform that puts an end to RO service pain by providing real-time monitoring and management of water purifier systems.<br/>
      <strong>My Role & Impact:</strong>
      <ul>
        <li>Implemented IoT setup using EMQX to fetch data from devices and route it to Node.js application for real-time processing.</li>
        <li>Deployed application architecture that sent data to Kafka, where it was saved to PostgreSQL via topics for reliable data storage.</li>
        <li>Ensured all services were secure and set up notifications via Slack and email for service downtimes and maintenance alerts.</li>
        <li>Established comprehensive monitoring with Grafana, Prometheus, and Loki, including alerts for server load and memory usage.</li>
        <li>Enabled users to view logs in Grafana and configured email alerts for any service downtime.</li>
        <li>Employed Git branching strategies for version control and created Bash scripts for data backups to bunny.net.</li>
        <li>Deployed all applications to separate servers for development and production environments using Jenkins CI/CD.</li>
        <li>Optimized costs and resource usage across all services for efficient operations.</li>
      </ul>
      <strong>Tech Stack:</strong>  AWS, Docker, Jenkins, Bash Scripting, bunny.net, EMQX, Kafka, PostgreSQL, Grafana, Prometheus, Loki, Git, postgresql`,
    ctas: [
      { label: "Visit Website", href: "https://gauge.ro" }
    ]
  },
  {
    slug: "saba-hospitality",
    year: "07/2025 – 11/2025",
    title: "Saba Hospitality",
    image: sabaHospitalityImg,
    summary: "Hospitality platform with GCP infrastructure, automated CI/CD, and comprehensive DevOps practices.",
    overview: `
      Saba Hospitality is a comprehensive hospitality management platform built on Google Cloud Platform.
      The platform leverages modern DevOps practices including containerized deployments, automated CI/CD pipelines, and infrastructure as code for seamless operations and scalability.
    `,
    myRoleImpact: [
      "Designed and managed GCP infrastructure using GKE, Cloud DNS, Compute Engine, Artifact Registry, Secret Manager, Certificate Manager, Cloud Storage, Service Accounts, and Load Balancing.",
      "Built GitHub Actions CI/CD pipelines to automate multi-stage Docker builds, image pushes, and GKE deployments using Helm across dev and prod environments.",
      "Implemented ExternalDNS for automated DNS management and provisioned complete infrastructure using Terraform (IaC)."
    ],
    techStack: [
      "GCP",
      "GKE",
      "Cloud DNS",
      "Compute Engine",
      "Artifact Registry",
      "Secret Manager",
      "Certificate Manager",
      "Cloud Storage",
      "Service Accounts",
      "Load Balancing",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Helm",
      "ExternalDNS",
      "Terraform",
      "CI/CD"
    ],
    description: `
      <strong>Overview:</strong> Saba Hospitality is a comprehensive hospitality management platform built on Google Cloud Platform with modern DevOps practices.<br/>
      <strong>My Role & Impact:</strong>
      <ul>
        <li>Designed and managed GCP infrastructure using GKE, Cloud DNS, Compute Engine, Artifact Registry, Secret Manager, Certificate Manager, Cloud Storage, Service Accounts, and Load Balancing.</li>
        <li>Built GitHub Actions CI/CD pipelines to automate multi-stage Docker builds, image pushes, and GKE deployments using Helm across dev and prod environments.</li>
        <li>Implemented ExternalDNS for automated DNS management and provisioned complete infrastructure using Terraform (IaC).</li>
      </ul>
      <strong>Tech Stack:</strong> GCP, GKE, Cloud DNS, Compute Engine, Artifact Registry, Secret Manager, Certificate Manager, Cloud Storage, Service Accounts, Load Balancing, GitHub Actions, Docker, Kubernetes, Helm, ExternalDNS, Terraform, CI/CD
    `,
    ctas: [
      { label: "View Platform", href: "https://saba-hospitality.com" }
    ]
  },
];
