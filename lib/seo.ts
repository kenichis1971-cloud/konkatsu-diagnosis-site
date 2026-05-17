import type { Metadata } from "next";

export const siteName = "婚活診断サイト";
export const siteUrl = "https://konkatsu-diagnosis-site.vercel.app";
export const defaultTitle = "あなたに合う婚活スタイル診断 | 婚活診断サイト";
export const defaultDescription =
  "10問の婚活スタイル診断を通して、結婚相談所・婚活アプリ・占い鑑定などの選択肢をやさしく整理する情報サイトです。";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

function toAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const url = toAbsoluteUrl(path);
  const socialTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: title.includes(siteName) ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName,
      type: "website",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
