import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-white/70 mb-8">The project you're looking for doesn't exist.</p>
          <HashLink
            to="/#projects"
            smooth
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-3 font-semibold transition"
          >
            Back to Projects
          </HashLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <section className="max-w-4xl mx-auto pt-20 pb-16 px-4 sm:px-6">
        {/* Back Button */}
        <HashLink
          to="/#projects"
          smooth
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-mono text-sm mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to projects
        </HashLink>

        {/* Project Header */}
        <div className="text-center mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="mx-auto w-full max-w-md h-48 sm:h-56 object-contain rounded-2xl shadow-2xl mb-8 bg-white/5 border border-white/10"
          />
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {project.title}
          </h1>
          
          <div className="inline-block bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-mono mb-6">
            {project.year}
          </div>
          
          <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* My Role & Impact */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-cyan mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              My Role & Impact
            </h2>
            <ul className="space-y-4">
              {project.myRoleImpact.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-cyan mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-cyan-500/20 text-cyan-300 font-mono text-sm rounded-full border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {project.ctas && project.ctas.length > 0 && (
            <a
              href={project.ctas[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-4 font-semibold transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {project.ctas[0].label}
            </a>
          )}
          
          <HashLink
            to="/#projects"
            smooth
            className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-full px-8 py-4 font-semibold transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            More Projects
          </HashLink>
        </div>
      </section>
    </div>
  );
}
