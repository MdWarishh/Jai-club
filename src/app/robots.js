export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",

        // ✅ Allow all important rendering files
        allow: [
          "/",
          "/_next/static/",
          "/_next/image/",
        ],

        // ❌ Block only sensitive / useless areas
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/tmp/",
          
          // optional (agar future me use kare)
          "/dashboard/",
          "/settings/",
          
          // query-based junk URLs (duplicate content control)
          "/*?*utm_",
          "/*?*ref=",
        ],
      },
    ],

    sitemap: "https://jaiclub.house/sitemap.xml",
  };
}