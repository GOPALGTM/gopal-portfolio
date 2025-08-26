import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-white/5 border border-white/10 rounded-2xl shadow-lg flex flex-col transition-all hover:shadow-xl hover:border-green-500/50 group"
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-top" />
              <span className="absolute top-3 right-4 bg-black/70 text-green-300 text-xs font-mono px-3 py-0.5 rounded-full shadow">
                {project.year}
              </span>
            </div>
            <div className="flex flex-col flex-1 p-5">
              <h4 className="font-extrabold text-lg text-white mb-1">{project.title}</h4>
              <p className="text-white/70 text-sm mb-4">{project.summary}</p>
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
