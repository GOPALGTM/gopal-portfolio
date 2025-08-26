import { useEffect } from "react";

export default function Resume() {
  // Optionally use AOS (Animate on Scroll) for animations
  useEffect(() => {
    import("aos").then(AOS => {
      AOS.init({ duration: 800, once: true });
    });
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-8 text-text font-sans space-y-12">

      <h1 className="text-4xl font-bold text-cyan mb-6">Resume</h1>

      <div data-aos="fade-up" className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-neon">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>
          Results-driven DevOps Engineer with expertise in application deployment,
          infrastructure automation, and CI/CD pipeline management. Proficient in AWS, Kubernetes, Terraform, and Prometheus...
        </p>
      </div>

      <div data-aos="fade-up" className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-neon">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <article className="mb-4">
          <h3 className="text-xl font-semibold text-cyan">DevOps Engineer - Aesthisia Datacenters Private Limited</h3>
          <span className="text-white/70">02/2024 – present | Gurgaon, India</span>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Deploy containerized applications on AWS EKS using Kubernetes and Helm for high availability.</li>
            <li>Automate CI/CD pipelines with Jenkins, reducing release cycles by 25%.</li>
            <li>Implement HashiCorp Vault to secure sensitive data and manage secrets.</li>
            {/* More points */}
          </ul>
        </article>
        {/* Add other experiences similarly */}
      </div>

      <div data-aos="fade-up" className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-neon">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>Bachelor of Computer Applications (BCA), Bon Maharaj Institute of Management and Technology (09/2019 – 07/2022)</p>
      </div>

      <div data-aos="fade-up" className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-neon">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-3 text-sm text-cyan font-mono">
          <span className="badge">AWS</span>
          <span className="badge">Kubernetes</span>
          <span className="badge">Terraform</span>
          {/* More badges as per your list */}
        </div>
      </div>

      <div data-aos="fade-up" className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-neon">
        <h2 className="text-2xl font-semibold mb-2">Key Achievements</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Deployed 30+ applications on AWS with 99.99% uptime.</li>
          <li>Cut cloud costs by 30-40% via optimization strategies.</li>
          {/* Add others */}
        </ul>
      </div>

      <div data-aos="fade-up" className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-neon">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <article className="mb-4">
          <h3 className="text-lg font-semibold">HelloTeam</h3>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Deploy containerized applications on AWS EKS using Kubernetes and Helm.</li>
            <li>Automated CI/CD pipelines with Concourse and Bash scripts.</li>
          </ul>
        </article>
        {/* More project articles */}
      </div>
    </section>
  );
}
