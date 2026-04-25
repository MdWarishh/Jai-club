// app/robots.js
// Yeh file Next.js automatically /robots.txt generate kar deta hai

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jaiclub.house/sitemap.xml",
  };
}