import type { MetadataRoute } from "next";

const baseUrl = "https://konkatsu-diagnosis-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/diagnosis", "/articles", "/privacy", "/terms", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
