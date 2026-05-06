type Props = {
  skillSheetUrl?: string;
};

export default function Footer({ skillSheetUrl }: Props) {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} 中村 勇希
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          {skillSheetUrl && (
            <a
              href={skillSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              スキルシート
            </a>
          )}
          <a
            href="https://tech-note.tech-yn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            テックノート
          </a>
        </div>
      </div>
    </footer>
  );
}
