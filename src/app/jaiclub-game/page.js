import { blogs } from "@/lib/blogs";
import Link from "next/link";
import JaiClubOverlay from "../components/JaiClubOverlay";

export const metadata = {
  title: "JaiClub Blog - Gaming Guides & Tips",
  description: "Read latest guides, tips, and updates about JaiClub games."
};

export default function BlogPage() {
  return (
    <>
      <JaiClubOverlay />
      <main style={{ padding: "20px" }}>
        <h1>JaiClub Blog</h1>
        {blogs.map((blog) => (
          <div key={blog.id} style={{ marginBottom: "20px" }}>
            <h2><Link href={`/blog/${blog.slug}`}>{blog.title}</Link></h2>
            <p>{blog.excerpt}</p>
            <small>{blog.readTime} • {blog.date}</small>
          </div>
        ))}
      </main>
    </>
  );
}