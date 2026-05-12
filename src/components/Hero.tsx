type Props = {
  skillSheetUrl?: string;
};

export default function Hero({ skillSheetUrl }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(56,189,248,0.08),transparent)]" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-6 font-medium">
          Frontend Engineer
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Nakamura
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          TypeScript / React / Next.js を中心とした
          <br className="hidden sm:block" />
          フロントエンド開発を得意としています。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            制作物を見る
          </a>
          {skillSheetUrl && (
            <a
              href={skillSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-medium text-sm hover:border-slate-400 hover:text-white transition-colors"
            >
              スキルシートを見る
            </a>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
