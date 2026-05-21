import type { MetadataRoute } from "next";

const baseUrl = "https://konkatsu-diagnosis-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/diagnosis",
    "/articles",
    "/articles/before-start",
    "/articles/compare-marriage-agencies",
    "/marriage-agencies",
    "/marriage-apps",
    "/fortune",
    "/privacy",
    "/terms",
    "/contact",
    "/advertising",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
