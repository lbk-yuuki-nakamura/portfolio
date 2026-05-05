# CLAUDE.md

## プロジェクト概要

中村 勇希のポートフォリオサイト。Next.js 15 + TypeScript + Tailwind CSS 3 で構成されたシングルページアプリ。

## コマンド

```bash
npm run dev    # 開発サーバー (http://localhost:3000)
npm run build  # プロダクションビルド
npm run lint   # ESLint
```

## 構成

- **ページ**: `src/app/page.tsx` が唯一のページ。Header / Hero / Projects / Skills / Footer を並べるだけ。
- **コンポーネント**: `src/components/` — 各セクション1ファイル。サーバーコンポーネントのみ（useState 等は使っていない）。
- **データ**: `src/data/projects.ts` と `src/data/skills.ts` にハードコード。

## 重要な注意点

`src/data/` 内でも Tailwind クラスを直接文字列として持っている（`skills.ts` の `colorClass`）。
`tailwind.config.ts` の `content` に `"./src/data/**/*.{js,ts,jsx,tsx,mdx}"` を含めないとクラスが CSS に生成されないため、**削除しないこと**。

## デザイン

- 背景: `bg-slate-950`（ダーク）
- アクセント: cyan / blue グラデーション
- カード: `bg-white/[0.03] border border-white/[0.08]`
- スキルタグ: カテゴリ別に blue / purple / emerald / orange で色分け
