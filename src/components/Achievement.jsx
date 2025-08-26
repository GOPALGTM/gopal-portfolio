import { FaCheckCircle, FaRocket, FaChartLine, FaDollarSign } from "react-icons/fa";

const achievements = [
  {
    icon: <FaRocket size={28} className="text-violet" />,
    title: "AWS Application Deployment",
    description: "Deployed 50+ applications on AWS achieving 99.99% uptime and high availability.",
  },
  {
    icon: <FaChartLine size={28} className="text-cyan" />,
    title: "Monitoring Efficiency",
    description: "Improved monitoring efficiency by 25% using Grafana, Prometheus, and Loki integration.",
  },
  {
    icon: <FaDollarSign size={28} className="text-green-400" />,
    title: "AWS Cost Optimization",
    description:
      "Cut cloud costs by 30-40% by migrating EKS workloads to serverless, optimizing CPU/memory allocation, and leveraging CloudFront caching to reduce latency and data transfer costs.",
  },
];

export default function KeyAchievements() {
  return (
    <section id="achievement" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-white">
      <h2 className="text-4xl font-extrabold text-cyan mb-12 drop-shadow-lg text-center">
        Key Achievements
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {achievements.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-cyan/50 rounded-3xl p-6 shadow-neon flex flex-col items-center text-center gap-4 hover:shadow-xl transition-shadow"
          >
            <div className="mb-2">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-white/80 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
