// app/robots.js

export default function robots() {
  return {
    rules: [
      // 🔥 Google ke liye special rules
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/blog",
          "/blog/",
          "/blog/*",
          "/how-to-play",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
        ],
        crawlDelay: 1,
      },

      // 🔥 Baaki sab bots ke liye
      {
        userAgent: "*",
        allow: [
          "/",
          "/blog",
          "/blog/",
          "/blog/*",
          "/how-to-play",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/tmp/",
        ],
      },
    ],

    sitemap: "https://jaiclub.house/sitemap.xml",
    host: "https://jaiclub.house",
  };
}