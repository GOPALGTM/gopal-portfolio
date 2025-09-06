import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-white/5 border border-white/10 rounded-2xl shadow-lg flex flex-col transition-all hover:shadow-xl hover:border-green-500/50 group"
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover object-top" />
              <span className="absolute top-2 right-3 bg-black/70 text-green-300 text-xs font-mono px-2 py-0.5 rounded-full shadow">
                {project.year}
              </span>
            </div>
            <div className="flex flex-col flex-1 p-4 sm:p-5">
              <h4 className="font-extrabold text-base sm:text-lg text-white mb-1">{project.title}</h4>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.summary}</p>
              <div className="mt-auto pt-2">
                <Link to={`/projects/${project.slug}`} className="inline-flex items-center font-bold text-green-300 hover:underline hover:text-green-400 text-sm gap-2 transition">
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
