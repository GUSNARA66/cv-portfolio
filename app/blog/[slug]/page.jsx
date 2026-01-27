import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <article className="max-w-2xl">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-gray-400 text-sm mt-2">{blog.date}</p>

        <div className="mt-6 whitespace-pre-line text-gray-300 leading-relaxed">
          {blog.content}
        </div>
      </article>
    </main>
  );
}
