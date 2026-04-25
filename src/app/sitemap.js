// app/sitemap.js
// Yeh file Next.js automatically /sitemap.xml generate kar deta hai

export default function sitemap() {
  return [
    {
      url: "https://jaiclub.house",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}