export type SkillCategory = {
  label: string;
  skills: string[];
  colorClass: string;
};

export const skillCategories: SkillCategory[] = [
  {
    label: "フロントエンド",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML / CSS"],
    colorClass: "bg-blue-900/40 text-blue-300 border border-blue-700/50",
  },
  {
    label: "バックエンド / API",
    skills: ["tRPC", "REST API", "Node.js"],
    colorClass: "bg-purple-900/40 text-purple-300 border border-purple-700/50",
  },
  {
    label: "クラウド / インフラ",
    skills: ["Google Cloud Platform", "Firebase", "BigQuery", "Vercel", "Docker"],
    colorClass: "bg-emerald-900/40 text-emerald-300 border border-emerald-700/50",
  },
  {
    label: "ツール / その他",
    skills: ["Git", "GitHub", "GitHub Actions", "Playwright", "ESLint"],
    colorClass: "bg-orange-900/40 text-orange-300 border border-orange-700/50",
  },
];
