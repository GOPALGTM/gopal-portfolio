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
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Animate rotation angle for orbit effect - slower on mobile for better performance
    const interval = setInterval(() => {
      setRotation((prev) => (prev + (isMobile ? 0.004 : 0.008)) % (2 * Math.PI));
    }, isMobile ? 32 : 16); // 30fps on mobile, 60fps on desktop
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isMobile]);

  // Responsive sizing
  const size = isMobile ? 300 : isTablet ? 350 : 400;
  const radius = isMobile ? 110 : isTablet ? 140 : 175;
  const iconSize = isMobile ? 24 : isTablet ? 32 : 38;

  return (
    <section id="skills" className="max-w-6xl mx-auto py-12 sm:py-16 text-center select-none px-4">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan mb-8 sm:mb-12 drop-shadow-lg">
        My Skills & Technologies
      </h2>
      
      {/* Mobile Grid Layout */}
      {isMobile ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 max-w-md mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-colors"
              title={skill.name}
            >
              <div
                className="rounded-full shadow-neon flex items-center justify-center mb-2"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 0 12px ${skill.color}cc, 0 0 6px #00e5ff88`,
                  color: "#fff",
                  width: 48,
                  height: 48,
                  padding: '8px'
                }}
              >
                <div style={{ fontSize: 24 }}>
                  {skill.icon}
                </div>
              </div>
              <span
                className="font-mono text-xs font-bold drop-shadow text-center leading-tight"
                style={{
                  color: skill.color,
                  textShadow: "0 0 8px black, 0 0 14px #00e5ff44",
                }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop Circular Layout */
        <div className="relative mx-auto overflow-hidden" style={{ width: size, height: size }}>
          {skills.map((skill, index) => {
            const baseAngle = (2 * Math.PI * index) / skills.length;
            const angle = baseAngle + rotation;
            const iconOffset = isTablet ? 20 : 32;
            const x = size / 2 + radius * Math.cos(angle) - iconOffset;
            const y = size / 2 + radius * Math.sin(angle) - iconOffset;
            return (
              <div
                key={skill.name}
                className="absolute flex flex-col items-center"
                style={{
                  left: x,
                  top: y,
                  width: isTablet ? 48 : 64,
                  height: isTablet ? 48 : 64,
                  zIndex: 2,
                  transition: "left 0.1s ease-out, top 0.1s ease-out"
                }}
                title={skill.name}
              >
                <div
                  className="rounded-full shadow-neon flex items-center justify-center"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 20px ${skill.color}cc, 0 0 8px #00e5ff88`,
                    color: "#fff",
                    width: isTablet ? 40 : 48,
                    height: isTablet ? 40 : 48,
                    padding: '8px'
                  }}
                >
                  <div style={{ fontSize: iconSize }}>
                    {skill.icon}
                  </div>
                </div>
                <span
                  className="font-mono mt-2 font-bold drop-shadow text-center leading-tight"
                  style={{
                    color: skill.color,
                    textShadow: "0 0 8px black, 0 0 14px #00e5ff44",
                    fontSize: isTablet ? '11px' : '12px',
                    maxWidth: '60px',
                    wordBreak: 'break-word'
                  }}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
