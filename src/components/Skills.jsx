import React, { useEffect, useState } from "react";
import {
  SiPython,
  SiHelm,
  SiDocker,
  SiGithubactions,
  SiTerraform,
  SiKubernetes,
  SiNginx,
  SiPrometheus,
  SiJenkins,
  SiPostgresql,
  SiMysql,
  SiSonarqube,
  SiAmazon,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython />, color: "#C9452A" },
  { name: "AWS", icon: <SiAmazon />, color: "#FF9900" },
  { name: "Helm", icon: <SiHelm />, color: "#8B48A7" },
  { name: "Docker", icon: <SiDocker />, color: "#F99C1C" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#2596D6" },
  { name: "Jenkins", icon: <SiJenkins />, color: "#3CBF91" },
  { name: "Githubactions", icon: <SiGithubactions />, color: "#3CBF91" },
  { name: "Prometheus", icon: <SiPrometheus />, color: "#25B375" },
  { name: "Postgresql", icon: <SiPostgresql />, color: "#FDBA36" },
  { name: "Terraform", icon: <SiTerraform />, color: "#EF8171" },
  { name: "Nginx", icon: <SiNginx />, color: "#FDBA36" },
  { name: "Mysql", icon: <SiMysql />, color: "#FDBA36" },
  { name: "Sonarqube", icon: <SiSonarqube />, color: "#FDBA36" },
];

export default function AnimatedSkillsRotatingCircle() {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Animate rotation angle for orbit effect
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.008) % (2 * Math.PI));
    }, 16); // ~60fps
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const size = isMobile ? 280 : 400;
  const radius = isMobile ? 120 : 175;
  const iconSize = isMobile ? 28 : 38;

  return (
    <section id="skills" className="max-w-md mx-auto py-16 text-center select-none px-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan mb-8 drop-shadow-lg">
        My Skills & Technologies
      </h2>
      <div className="relative mx-auto" style={{ width: size, height: size }}>
        {skills.map((skill, index) => {
          const baseAngle = (2 * Math.PI * index) / skills.length;
          const angle = baseAngle + rotation;
          const iconOffset = isMobile ? 20 : 32;
          const x = size / 2 + radius * Math.cos(angle) - iconOffset;
          const y = size / 2 + radius * Math.sin(angle) - iconOffset;
          return (
            <div
              key={skill.name}
              className="absolute flex flex-col items-center"
              style={{
                left: x,
                top: y,
                width: isMobile ? 40 : 64,
                zIndex: 2,
                transition: "left 0.05s linear, top 0.05s linear"
              }}
              title={skill.name}
            >
              <div
                className="rounded-full p-2 shadow-neon"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 0 20px ${skill.color}cc, 0 0 8px #00e5ff88`,
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: iconSize }}>
                  {skill.icon}
                </div>
              </div>
              <span
                className={`font-mono mt-2 font-bold drop-shadow ${isMobile ? 'text-xs' : 'text-xs'}`}
                style={{
                  color: skill.color,
                  textShadow: "0 0 8px black, 0 0 14px #00e5ff44",
                }}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
