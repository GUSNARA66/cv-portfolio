"use client";

import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-gray-400 mt-2">
            Thoughts, experiences, and lessons from my web development journey.
          </p>
        </motion.div>

        {/* BLOG LIST */}
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="block p-6 rounded-2xl bg-[#151515] hover:bg-[#1f1f1f] transition group"
              >
                <h2 className="text-2xl font-semibold group-hover:underline">
                  {blog.title}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  {blog.date} · {blog.readTime}
                </p>

                <p className="text-gray-300 mt-4">
                  {blog.excerpt}
                </p>

                <span className="inline-block mt-4 text-sm text-gray-400 group-hover:text-white transition">
                  Read article →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BACK HOME */}
        <div className="mt-12">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
