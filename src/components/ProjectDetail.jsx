import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-white p-12 text-2xl text-center">
        Project not found
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto pt-12 pb-16 px-6">
      <HashLink
        to="/#projects"
        smooth
        className="text-cyan-400 hover:underline font-mono text-sm mb-6 inline-block"
      >
        &larr; Back to projects
      </HashLink>

      <img
        src={project.image}
        alt={project.title}
        className="mx-auto w-full max-w-lg h-56 sm:h-64 object-contain rounded-lg shadow mb-8 bg-[#181926]"
      />

      <h1 className="text-4xl font-extrabold text-cyan mb-4 text-center font-sans">
        {project.title}
      </h1>

      <p className="text-white/80 text-lg mb-6 text-center font-sans">
        {project.overview}
      </p>

      <h2 className="text-2xl text-white font-semibold mb-3">My Role & Impact</h2>
      <ul className="list-disc list-inside text-white/70 mb-6 space-y-1 max-w-prose mx-auto px-4">
        {project.myRoleImpact.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl text-white font-semibold mb-3">Tech Stack</h2>
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-cyan-900 text-cyan-300 font-mono text-xs rounded-full shadow-neon"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.ctas && project.ctas.length > 0 && (
        <a
          href={project.ctas[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-3 font-semibold max-w-xs mx-auto transition-shadow shadow-neon"
        >
          {project.ctas[0].label}
        </a>
      )}

      <HashLink
        to="/#projects"
        smooth
        className="mt-10 block mx-auto px-7 py-3 border border-cyan-400 text-cyan-400 rounded-full font-bold hover:bg-cyan-600 hover:text-white transition text-center max-w-xs"
      >
        More Projects
      </HashLink>
    </section>
  );
}
