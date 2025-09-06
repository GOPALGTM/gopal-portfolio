import helloTeamImg from '../assets/hello-team.png';
import gaugeRoImg from '../assets/gauge.ro.jpg';

export const projects = [
  {
    slug: "helloteam",
    year: "2024-2025",
    title: "HelloTeam – A True Employee Retention Platform",
    image: helloTeamImg,
    summary: "Enterprise project with autoscaling, CI/CD, Terraform, Vault, and more.",
    overview: `
      HelloTeam combines essential performance management and employee engagement tools so you can drive results, keep your best talent, and build a strong culture on-site or remote.
      This all-in-one platform empowers seamless collaboration and growth for a modern workforce.
    `,
    myRoleImpact: [
      "Designed and implemented automated CI/CD pipelines using Concourse and Bash, reducing release cycle times by 20%.",
      "Secured infrastructure with HashiCorp Vault integrating IAM and secrets management.",
      "Provisioned scalable AWS infrastructure with Terraform optimizing network and load balancing.",
      "Led migration to Kubernetes and Helm charts for container orchestration.",
      "Enhanced application observability with Prometheus & Grafana dashboards, reducing issue detection times."
    ],
    techStack: [
      "AWS (EKS, IAM, VPC)",
      "Kubernetes",
      "Helm",
      "Terraform",
      "HashiCorp Vault",
      "Prometheus & Grafana",
      "Concourse CI",
      "Bash Scripting",
      "Nginx"
    ],
    description: `
      <strong>Overview:</strong> HelloTeam is a scalable AWS microservice platform deployed on EKS using Kubernetes and Helm.<br/>
      <strong>My Role & Impact:</strong>
      <ul>
        <li>Designed and implemented automated CI/CD pipelines using Concourse and Bash, reducing release cycle times by 20%.</li>
        <li>Secured infrastructure with HashiCorp Vault integrating IAM and secrets management.</li>
        <li>Provisioned scalable AWS infrastructure with Terraform optimizing network and load balancing.</li>
        <li>Led migration to Kubernetes and Helm charts for container orchestration.</li>
        <li>Enhanced application observability with Prometheus & Grafana dashboards, reducing issue detection times.</li>
      </ul>
      <strong>Tech Stack:</strong> AWS (EKS, IAM, VPC), Kubernetes, Helm, Terraform, HashiCorp Vault, Prometheus & Grafana, Concourse CI, Bash Scripting, Nginx
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
      "EMQX",
      "Node.js",
      "Kafka",
      "PostgreSQL",
      "Grafana",
      "Prometheus",
      "Loki",
      "Jenkins",
      "Bash Scripting",
      "Slack API",
      "Email Notifications",
      "bunny.net",
      "IoT Devices",
      "Git",
      "Docker"
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
      <strong>Tech Stack:</strong> EMQX, Node.js, Kafka, PostgreSQL, Grafana, Prometheus, Loki, Jenkins, Bash Scripting, Slack API, Email Notifications, bunny.net, IoT Devices, Git, Docker
    `,
    ctas: [
      { label: "Visit Website", href: "https://gauge.ro" }
    ]
  },
];
