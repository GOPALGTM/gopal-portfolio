import terminalVideo from '../assets/devops-terminal.mp4';

export default function Hero() {
  return (
  <section
    id="home"
    className="min-h-[85vh] sm:min-h-[82vh] px-4 sm:px-6 pt-20 sm:pt-24 py-8 sm:py-12 flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-10 md:gap-14 max-w-7xl mx-auto"
  >
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
      <div className="font-mono text-sm sm:text-base md:text-lg text-cyan mb-3 sm:mb-4 tracking-wide select-none">
        Intro
      </div>
      <h1
        className="font-extrabold leading-tight mb-4 sm:mb-6 drop-shadow-lg font-sans text-[1.8rem] sm:text-[2.2rem] md:text-[2.7rem] lg:text-[3.2rem]"
        style={{ wordBreak: "break-word" }}
      >
        <span className="block text-cyan">Hi, I'm Gopal</span>
        <span className="block text-cyan">A DevOps Engineer</span>
        <span className="block text-white">
          building <span className="text-violet">reliable, automated</span>
        </span>
        <span className="block text-white">cloud systems</span>
      </h1>
      <p className="mt-2 mb-6 sm:mb-10 text-white/80 text-sm sm:text-base md:text-lg font-mono select-none max-w-md md:max-w-none">
        Kubernetes • AWS • CI/CD • IaC • Observability
      </p>
    </div>
    <div className="w-full md:w-1/2 flex justify-center items-center mb-6 sm:mb-10 md:mb-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[85vw] max-w-[200px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px] mx-auto drop-shadow-[0_0_40px_#00e5ffcc] rounded-[2.2rem] border-2 border-cyan/60"
        style={{ objectFit: "cover" }}
      >
        <source src={terminalVideo} type="video/mp4" />
      </video>
    </div>
  </section>
  );
}
