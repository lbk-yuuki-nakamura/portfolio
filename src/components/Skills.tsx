import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">スキル</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div key={category.label} className="space-y-4">
              <h3 className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm ${category.colorClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
