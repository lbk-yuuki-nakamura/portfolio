export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-md bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-lg tracking-tight">NY</span>
        <nav className="flex gap-8 text-sm text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors">
            制作物
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            スキル
          </a>
          <a
            href="https://skill-sheet.tech-yn.com/s2EJp5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            スキルシート
          </a>
        </nav>
      </div>
    </header>
  );
}
