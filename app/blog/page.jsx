import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-6 max-w-2xl">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="block p-5 rounded-xl bg-[#151515] hover:bg-[#1f1f1f]"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-400 text-sm">{blog.date}</p>
            <p className="text-gray-500 mt-2">{blog.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
