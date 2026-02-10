"use client";

import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import AnimeBackground from "@/app/components/AnimeBackground";
import ThemeToggle from "@/app/components/ThemeToggle";
import { motion } from "framer-motion";
import { use } from "react";

export default function BlogDetail({ params }) {

  // ✅ INI FIX UTAMANYA
  const { slug } = use(params);

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen text-white relative">
        <AnimeBackground />

        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold">Blog not found.</h1>

          <Link href="/blog" className="text-blue-400 mt-4 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white relative">

      <AnimeBackground />
      <ThemeToggle />

      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto flex justify-center gap-6 py-4 text-sm">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/blog" className="hover:text-blue-400">Blog</Link>
          <Link href="/#contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </nav>

      <article className="px-6 py-16 pt-28">
        <div className="max-w-3xl mx-auto">

          <div className="flex items-center justify-between text-sm text-gray-400">
            <Link href="/blog" className="hover:text-white transition">
              ← Back to Blog
            </Link>

            <Link href="/" className="hover:text-white transition">
              ⌂ Back to Home
            </Link>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mt-10 leading-tight"
          >
            {blog.title}
          </motion.h1>

          <p className="text-gray-500 text-sm mt-3">
            {blog.date} · {blog.readTime}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 space-y-6 text-gray-200 leading-relaxed text-[17px] bg-neutral-900 p-6 md:p-8 rounded-2xl border border-neutral-800 relative"
          >
            <div className="absolute inset-0 opacity-20 blur-xl bg-blue-500/10" />

            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

        </div>
      </article>
    </main>
  );
}
