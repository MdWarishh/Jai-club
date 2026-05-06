// app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",

        // ✅ Allow everything important
        allow: ["/"],

        // ❌ Block only unnecessary/system paths
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