import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

const siteName = "婚活スタイル診断";
const siteDescription =
  "婚活の迷いや選択肢をやさしく整理する、婚活・結婚向け診断サイトです。";

export const metadata: Metadata = {
  title: {
    default: "あなたに合う婚活スタイル診断",
    template: `%s｜${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL("https://konkatsu-diagnosis-site.vercel.app"),
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
    locale: "ja_JP",
  },
};

const navigation = [
  { href: "/", label: "トップ" },
  { href: "/diagnosis", label: "診断" },
  { href: "/articles", label: "コラム" },
  { href: "/marriage-agencies", label: "相談所比較" },
  { href: "/marriage-apps", label: "婚活アプリ比較" },
  { href: "/privacy", label: "プライバシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <Link className="site-logo" href="/" aria-label="婚活スタイル診断 トップへ">
            婚活スタイル診断
          </Link>
          <nav className="site-nav" aria-label="メインナビゲーション">
            {navigation.map((item) =>
              item.href === "/diagnosis" ? (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} 婚活スタイル診断</p>
          <p>このサイトは、自己理解と選択肢整理を目的とした情報提供サイトです。</p>
        </footer>
      </body>
    </html>
  );
}
