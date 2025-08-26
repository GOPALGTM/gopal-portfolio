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
  { name: "Python", icon: <SiPython size={38} />, color: "#C9452A" },
  { name: "AWS", icon: <SiAmazon size={38} />, color: "#FF9900" },
  { name: "Helm", icon: <SiHelm size={38} />, color: "#8B48A7" },
  { name: "Docker", icon: <SiDocker size={38} />, color: "#F99C1C" },
  { name: "Kubernetes", icon: <SiKubernetes size={38} />, color: "#2596D6" },
  { name: "Jenkins", icon: <SiJenkins size={38} />, color: "#3CBF91" },
  { name: "Githubactions", icon: <SiGithubactions size={38} />, color: "#3CBF91" },
  { name: "Prometheus", icon: <SiPrometheus size={38} />, color: "#25B375" },
  { name: "Postgresql", icon: <SiPostgresql size={38} />, color: "#FDBA36" },
  { name: "Terraform", icon: <SiTerraform size={38} />, color: "#EF8171" },
  { name: "Nginx", icon: <SiNginx size={38} />, color: "#FDBA36" },
  { name: "Mysql", icon: <SiMysql size={38} />, color: "#FDBA36" },
  { name: "Sonarqube", icon: <SiSonarqube size={38} />, color: "#FDBA36" },
];

export default function AnimatedSkillsRotatingCircle() {
  const size = 400;
  const radius = 175;
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Animate rotation angle for orbit effect
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.008) % (2 * Math.PI));
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="max-w-md mx-auto py-16 text-center select-none">
      <h2 className="text-3xl font-extrabold text-cyan mb-8 drop-shadow-lg">
        My Skills & Technologies
      </h2>
      <div className="relative mx-auto" style={{ width: size, height: size }}>
        {skills.map((skill, index) => {
          const baseAngle = (2 * Math.PI * index) / skills.length;
          const angle = baseAngle + rotation;
          const x = size / 2 + radius * Math.cos(angle) - 32;
          const y = size / 2 + radius * Math.sin(angle) - 32;
          return (
            <div
              key={skill.name}
              className="absolute flex flex-col items-center"
              style={{
                left: x,
                top: y,
                width: 64,
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
                {skill.icon}
              </div>
              <span
                className="text-xs font-mono mt-2 font-bold drop-shadow"
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
