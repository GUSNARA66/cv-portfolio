"use client";

import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import AnimeBackground from "@/app/components/AnimeBackground";
import ThemeToggle from "@/app/components/ThemeToggle";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";

export default function BlogDetail({ params }) {

  const { slug } = use(params);
  const blog = blogs.find((item) => item.slug === slug);

  const [progress, setProgress] = useState(0);

  // ===== SCROLL PROGRESS =====
  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;

      setProgress((current / total) * 100);
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

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

      {/* ===== PROGRESS BAR ===== */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-neutral-800 z-[100]">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto flex justify-center gap-6 py-4 text-sm">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/blog" className="hover:text-blue-400">Blog</Link>
          <Link href="/#contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </nav>

      <article className="px-6 py-16 pt-28">
        <div className="max-w-3xl mx-auto">

          {/* ===== BACK BUTTON ===== */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <Link href="/blog" className="hover:text-white transition">
              ← Back to Blog
            </Link>

            <Link href="/" className="hover:text-white transition">
              ⌂ Back to Home
            </Link>
          </div>

          {/* ===== TITLE ===== */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mt-10 leading-tight"
          >
            {blog.title}
          </motion.h1>

          <p className="text-gray-500 text-sm mt-3">
            {blog.date} · {blog.readTime} · selesai ± 3 menit
          </p>

          {/* ===== CONTENT CARD ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 space-y-6 text-gray-200 leading-relaxed text-[17px]
                       bg-neutral-900 p-6 md:p-8 rounded-2xl border border-neutral-800 relative"
          >

            <div className="absolute inset-0 opacity-20 blur-xl bg-blue-500/10" />

            {/* ===== PARAGRAPH ANIMATION ===== */}
            {blog.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* ===== QUOTE SECTION ===== */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border-l-4 border-blue-500 pl-4 italic text-gray-400"
            >
              “Coding itu bukan soal cepat selesai,  
              tapi soal konsisten untuk terus tumbuh.”
            </motion.blockquote>

          </motion.div>

          {/* ===== SHARE ===== */}
          <div className="mt-10 flex gap-4 text-sm">

            <button
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
              className="px-4 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition"
            >
              Copy Link
            </button>

            <a
              href={`https://wa.me/?text=${blog.title} - ${typeof window !== "undefined" && window.location.href}`}
              target="_blank"
              className="px-4 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition"
            >
              Share WA
            </a>

          </div>

        </div>
      </article>
    </main>
  );
}
