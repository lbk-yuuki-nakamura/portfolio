export type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
  isPersonal: boolean;
};

export const projects: Project[] = [
  {
    title: "スキルシートサービス",
    description:
      "エンジニアのスキルシートを作成・管理できるWebサービス。スキルや職務経歴を入力し、PDFとして出力することができます。",
    url: "http://skill-sheet.tech-yn.com",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    isPersonal: false,
  },
  {
    title: "テックノート",
    description:
      "技術情報を発信するブログサービス。Markdownで記事を管理し、タグ検索やシンタックスハイライトに対応しています。",
    url: "https://tech-note.tech-yn.com",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Markdown"],
    isPersonal: false,
  },
  {
    title: "サブスクリプション管理サービス",
    description:
      "サブスクリプションサービスを一元管理するための個人用Webサービス。複数通貨・複数課金サイクルに対応し、月次費用を自動集計します。",
    url: "https://subscription-manager.tech-yn.com/login",
    tags: ["Next.js", "TypeScript", "Tailwind CSS v4", "JWT"],
    isPersonal: true,
  },
  {
    title: "キャッシュノート",
    description:
      "収支を記録・管理する家計簿アプリ。カレンダーや月次グラフで収支を可視化し、予算管理・サブスクリプション管理にも対応しています。\n決済システムを導入してサブスクリプションの実装も行なっています。",
    url: "https://cash-note.tech-yn.com/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS v4", "Supabase", "Stripe"],
    isPersonal: false,
  },
];
