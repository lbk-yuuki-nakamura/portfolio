import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">制作物</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              {project.isPersonal && (
                <span className="self-start mb-4 px-2.5 py-0.5 rounded-full text-xs bg-slate-700/60 text-slate-400 border border-slate-600/50">
                  個人利用
                </span>
              )}

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1 whitespace-pre-line">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-300 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                サイトを見る
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
