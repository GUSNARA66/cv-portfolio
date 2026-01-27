"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      {/* CV UTAMA */}
      <section className="max-w-xl mx-auto">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-3xl font-bold"
        >
          Hi, I’m Gus Nara 👋
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-gray-400 mt-3"
        >
          Junior Web Developer focused on modern UI and clean code.
        </motion.p>

        <motion.a
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          href="mailto:emailkamu@gmail.com"
          className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
        >
          Email Me
        </motion.a>
      </section>

      {/* PROJECT */}
      <section className="max-w-xl mx-auto mt-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-2xl font-semibold"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 space-y-4"
        >
          <div className="p-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition">
            <h3 className="font-medium">CV Website</h3>
            <p className="text-sm text-gray-400">
              Personal CV built with Next.js & Tailwind CSS
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition">
            <h3 className="font-medium">Landing Page</h3>
            <p className="text-sm text-gray-400">
              Simple landing page with smooth animation
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
