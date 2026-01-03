import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gopal Gautam | DevOps Engineer - AWS, Kubernetes, CI/CD Expert</title>
        <meta 
          name="description" 
          content="Results-driven DevOps Engineer with expertise in AWS, Kubernetes, Terraform, and CI/CD automation. Proven success in optimizing costs and boosting deployment efficiency." 
        />
        <meta name="keywords" content="DevOps Engineer, AWS, Kubernetes, Docker, Terraform, CI/CD, Cloud Infrastructure, Gopal Gautam" />
        <meta property="og:title" content="Gopal Gautam | DevOps Engineer" />
        <meta property="og:description" content="DevOps Engineer specializing in cloud infrastructure, Kubernetes orchestration, and CI/CD automation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://gopal-portfolio-topaz.vercel.app/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
