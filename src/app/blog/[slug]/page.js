export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main style={{ padding: "20px" }}>
      <h1>{blog.h1}</h1>
      <p>{blog.readTime} • {blog.date}</p>

      {blog.sections.map((section, index) => (
        <div key={index}>
          <h2>{section.h2}</h2>
          <p>{section.content}</p>
        </div>
      ))}

      <h3>FAQs</h3>
      {blog.faqs.map((faq, index) => (
        <div key={index}>
          <p><strong>{faq.q}</strong></p>
          <p>{faq.a}</p>
        </div>
      ))}

      {/* 🔥 YAHAN ADD KARNA HAI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": blog.faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}