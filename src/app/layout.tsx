import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "NY | フロントエンドエンジニア",
  description:
    "TypeScript / React / Next.js を中心としたフロントエンド開発を得意とするエンジニアのポートフォリオです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${geist.variable} font-sans antialiased bg-slate-950`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
