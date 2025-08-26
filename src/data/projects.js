import helloTeamImg from '../assets/hello-team.png';

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
  }
];
