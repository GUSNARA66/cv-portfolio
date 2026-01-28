import Link from "next/link";
import { blogs } from "@/app/data/blogs";

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Blog not found.
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">

        {/* NAVIGATION */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <Link
            href="/blog"
            className="hover:text-white transition"
          >
            ← Back to Blog
          </Link>

          <Link
            href="/"
            className="hover:text-white transition"
          >
            ⌂ Back to Home
          </Link>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold mt-10 leading-tight">
          {blog.title}
        </h1>

        {/* META */}
        <p className="text-gray-500 text-sm mt-3">
          {blog.date} · {blog.readTime}
        </p>

        {/* CONTENT */}
        <div className="mt-10 space-y-6 text-gray-200 leading-relaxed text-[17px]">
          {blog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </article>
  );
}
