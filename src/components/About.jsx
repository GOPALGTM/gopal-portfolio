import myPhoto from '../assets/gopal-gtm.jpeg';  // Replace with your actual photo path

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Image Section */}
      <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-cyan/80 shadow-neon">
        <img
          src={myPhoto}
          alt="My Photo"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-4xl font-extrabold text-cyan mb-4 drop-shadow-md">About Me</h2>
        <p className="text-white/80 mb-4 leading-relaxed font-sans text-lg">
          Hello! I’m Gopal, a passionate DevOps Engineer focused on building <span className="text-violet font-bold">reliable, scalable cloud systems.</span> I automate workflows, optimize cloud infrastructure, and bring seamless CI/CD pipelines to life.
        </p>
        <p className="text-white/70 leading-relaxed font-mono text-base">
          I specialize in Kubernetes, AWS, Terraform, Prometheus, and monitoring to ensure system reliability and efficiency. I love contributing to open source and sharing knowledge through blogs and talks. Let’s innovate and build together!
        </p>
      </div>
    </section>
  );
}
