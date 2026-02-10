"use client";

import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import { motion } from "framer-motion";
import AnimeBackground from "../components/AnimeBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function BlogPage() {
  return (
    <main className="min-h-screen text-white relative">

      {/* BACKGROUND SAMA KAYA PORTFOLIO */}
      <AnimeBackground />
      <ThemeToggle />

      {/* NAVBAR SAMA */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto flex justify-center gap-6 py-4 text-sm">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/#about" className="hover:text-blue-400">About</Link>
          <Link href="/#skills" className="hover:text-blue-400">Skills</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto pt-28 px-4">

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
                className="
                  block p-6 rounded-2xl 
                  bg-neutral-900 
                  hover:-translate-y-1 
                  transition group relative
                  border border-neutral-800
                "
              >

                {/* EFEK NEON */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-blue-500/20 transition" />

                <h2 className="text-2xl font-semibold group-hover:underline">
                  {blog.title}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  {blog.date} · {blog.readTime}
                </p>

                <p className="text-gray-300 mt-4">
                  {blog.excerpt}
                </p>

                <span className="inline-block mt-4 text-sm text-blue-400">
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
