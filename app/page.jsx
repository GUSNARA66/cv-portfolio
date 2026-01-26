"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

/* ANIMATION SETTING */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-black flex items-center justify-center px-4">
      <div className="relative w-full max-w-md">

        {/* GLOW */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative bg-[#151515] rounded-2xl p-8 text-center shadow-xl"
        >

          {/* FOTO */}
          <motion.img
            variants={item}
            src="/profile.jpg"
            alt="Profile"
            className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-700"
          />

          {/* NAMA */}
          <motion.h1 variants={item} className="text-2xl font-bold text-white mt-4">
            Gusnara
          </motion.h1>

          {/* ROLE */}
          <motion.p variants={item} className="text-gray-400 mt-1">
            Junior Web Developer
          </motion.p>

          {/* SOSIAL ICON */}
          <motion.div variants={item} className="flex justify-center gap-5 mt-5">
            <a
              href="https://instagram.com/gussnarraa_"
              target="_blank"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1f1f1f] text-pink-500 hover:bg-pink-500 hover:text-black hover:scale-110 transition text-xl"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/GUSNARA66"
              target="_blank"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1f1f1f] text-white hover:bg-white hover:text-black hover:scale-110 transition text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/6285810564284"
              target="_blank"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1f1f1f] text-green-500 hover:bg-green-500 hover:text-black hover:scale-110 transition text-xl"
            >
              <FaWhatsapp />
            </a>
          </motion.div>

          {/* ABOUT ME */}
          <motion.div variants={item} className="text-gray-500 text-sm mt-5 leading-relaxed space-y-2">
            <p>I am a junior web developer who enjoys building clean and modern websites.</p>
            <p>I am currently learning and improving my skills in Next.js, React, and Tailwind CSS.</p>
            <p>I like turning simple ideas into functional and responsive web interfaces.</p>
            <p>I am eager to learn new technologies and grow as a web developer.</p>
          </motion.div>

          {/* BUTTON */}
          <motion.div variants={item} className="mt-6 flex flex-col gap-3">
            <a
              href="/cv.pdf"
              target="_blank"
              className="w-full py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              View CV
            </a>

            <a
              href="/cv.pdf"
              download
              className="w-full py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition"
            >
              Download CV
            </a>

            <a
              href="mailto:gnara8817@gmail.com?subject=Portfolio%20Contact"
              className="w-full py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition"
            >
              Email Me
            </a>
          </motion.div>

          {/* PROJECT */}
          <motion.div variants={item} className="mt-8 text-left">
            <h2 className="text-white font-semibold mb-3">Project</h2>

            <a
              href="https://github.com/GUSNARA66"
              target="_blank"
              className="block p-4 rounded-xl bg-[#1c1c1c] hover:bg-[#232323] hover:scale-[1.03] transition"
            >
              <h3 className="text-white font-medium">Portfolio Website</h3>
              <p className="text-gray-500 text-sm">
                Built with Next.js & Tailwind CSS.
              </p>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}
