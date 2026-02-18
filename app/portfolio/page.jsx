"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Website CV Modern",
    desc: "CV online responsive menggunakan Next.js & Tailwind.",
    tech: "Next.js • Tailwind",
  },
  {
    title: "UI Blog Clean",
    desc: "Tampilan blog minimalis dengan dark mode.",
    tech: "React • CSS",
  },
  {
    title: "Landing Page Product",
    desc: "Landing page aesthetic dengan animasi smooth.",
    tech: "Next.js • Framer Motion",
  },
  {
    title: "E-Commerce UI",
    desc: "UI toko online mirip marketplace.",
    tech: "React • Tailwind",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-20">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-14"
      >
        My Creative Projects 🚀
      </motion.h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-purple-500/40 duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {item.title}
            </h2>
            <p className="text-gray-300 mb-4">
              {item.desc}
            </p>
            <span className="text-sm text-purple-400">
              {item.tech}
            </span>
          </motion.div>
        ))}
      </div>

    </main>
  );
}
