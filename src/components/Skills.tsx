import { Cloud, Container, GitBranch, Shield, Database, Terminal, Server, Activity } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["AWS", "Azure", "GCP"],
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Container,
    title: "Containerization",
    skills: ["Kubernetes", "Docker", "Helm"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Server,
    title: "Networking",
    skills: ["Ingress", "Istio", "Nginx", "Load Balancer"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: GitBranch,
    title: "CI/CD Tools",
    skills: ["GitHub Actions", "GitLab CI", "Concourse CI", "Argo CD", "Jenkins"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Terminal,
    title: "Infrastructure as Code",
    skills: ["Terraform"],
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Activity,
    title: "Monitoring & Logging",
    skills: ["Prometheus", "Grafana", "Loki", "CloudWatch", "EFK Stack"],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["HashiCorp Vault", "SonarQube"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Database,
    title: "Databases & Messaging",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Kafka", "EMQX"],
    color: "from-cyan-500 to-blue-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I work with daily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 card-hover hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5 mb-4`}>
                <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-foreground" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-16">
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
              <h3 className="text-xl font-semibold text-foreground">Currently Learning</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "MLOps", desc: "Machine Learning Operations" },
                { name: "MLflow", desc: "ML Lifecycle Management" },
                { name: "DVC", desc: "Data Version Control" },
                { name: "AWS SageMaker", desc: "AI/ML Cloud Service" },
                { name: "Azure ML", desc: "Cloud AI Platform" },
                { name: "Kubeflow", desc: "ML on Kubernetes" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group relative px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 hover:border-yellow-500/50 transition-all cursor-default"
                >
                  <span className="font-medium text-yellow-500">{item.name}</span>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
