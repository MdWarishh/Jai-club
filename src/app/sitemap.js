// app/sitemap.js

import { blogs } from "@/lib/blogs";

export default function sitemap() {
  const baseUrl = "https://jaiclub.house";

  // 🔥 Static + SEO Pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    // 🔥 BRAND PAGES
    {
      url: `${baseUrl}/jaiclub`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/jai-club`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },

    // 🔥 MAIN MONEY PAGES
    {
      url: `${baseUrl}/jai-club-game`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jaiclub-game`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    // 🔥 AUTHORITY PAGE
    {
      url: `${baseUrl}/jai-club-official`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // 🔥 CONTENT HUB
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    // 🔥 SUPPORT PAGES
    {
      url: `${baseUrl}/how-to-play`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // 🔥 TRUST PAGES
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 🔥 Dynamic Blog Pages
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}