# portfolio

Nakamuraのポートフォリオサイト。

## 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## ビルド

```bash
npm run build
npm start
```

## 構成

```
src/
├── app/
│   ├── layout.tsx     # メタデータ・フォント
│   ├── page.tsx       # ページ
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Footer.tsx
└── data/
    ├── projects.ts    # 制作物データ
    └── skills.ts      # スキルデータ
```

## コンテンツの更新

制作物やスキルは `src/data/` 以下のファイルを編集します。

> **注意**: `src/data/` 内の Tailwind クラスを変更する場合、`tailwind.config.ts` の `content` に `"./src/data/**/*.{js,ts}"` が含まれていることを確認してください（スキャン対象外だとクラスが生成されません）。
