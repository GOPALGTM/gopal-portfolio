import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const roles = ["DevOps Engineer", "Cloud Engineer", "MLOps Engineer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-slide-up delay-100">
            <span className="gradient-text glow-text">Gopal Gautam</span>
          </h1>

          {/* Animated Role */}
          <div className="h-12 md:h-14 mb-8 animate-slide-up delay-200 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-mono text-primary">
              &lt; {displayText}<span className="animate-pulse">|</span> /&gt;
            </p>
          </div>

          {/* Summary */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up delay-300">
            Results-driven DevOps Engineer with expertise in cloud infrastructure, 
            Kubernetes orchestration, and CI/CD automation. Passionate about building 
            scalable, secure systems that drive operational excellence.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-slide-up delay-400">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Sector 48, Gurgaon, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up delay-500">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow font-semibold px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:border-primary/50 hover:bg-primary/10"
              onClick={() => window.open('https://github.com/GOPALGTM', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:border-primary/50 hover:bg-primary/10"
              onClick={() => window.open('https://linkedin.com/in/gopal-gautam-a9a4b722a', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-slide-up delay-500">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "30%", label: "Cost Reduction" },
              { value: "99.99%", label: "Uptime Achieved" },
              { value: "25%", label: "Faster Releases" },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-4 hover-lift">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
