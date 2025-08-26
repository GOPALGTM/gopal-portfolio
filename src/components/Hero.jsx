import terminalVideo from '../assets/devops-terminal.mp4';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-[82vh] px-2 sm:px-6 py-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="font-mono text-base sm:text-lg text-cyan mb-3 sm:mb-5 tracking-wide">
          Intro
        </div>
        <h1
          className="font-extrabold leading-tight mb-4 drop-shadow-lg font-sans"
          style={{ fontSize: "clamp(2.2rem, 7vw, 3.2rem)" }}
        >
          <span className="block text-cyan">Hi, I’m Gopal</span>
          <span className="block text-cyan">A DevOps Engineer</span>
          <span className="block text-white">
            building <span className="text-violet">reliable, automated</span>
          </span>
          <span className="block text-white">cloud systems</span>
        </h1>
        <p className="mt-2 mb-7 text-white/80 text-base sm:text-lg font-mono">
          Kubernetes • AWS • CI/CD • IaC • Observability
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="max-w-xs sm:max-w-sm md:max-w-[380px] w-full drop-shadow-[0_0_40px_#00e5ffcc] rounded-[2.2rem] border-2 border-cyan/60"
        >
          <source src={terminalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
