"use client";

import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        {/* GLOW */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur"></div>

        <div className="relative bg-[#151515] rounded-2xl p-8 text-center shadow-xl">

          {/* FOTO */}
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
            className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-700 hover:scale-105 transition"
          />

          {/* NAMA */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold mt-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Gusnara
          </motion.h1>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 mt-1"
          >
            Junior Web Developer
          </motion.p>

          {/* ABOUT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-sm mt-5 leading-relaxed"
          >
            I am a junior web developer who enjoys building clean and modern
            websites. I am currently learning and improving my skills in
            Next.js, React, and Tailwind CSS. I like turning simple ideas into
            functional and responsive web interfaces. I am eager to learn new
            technologies and grow as a web developer.
          </motion.p>

          {/* SOSIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-5 mt-6"
          >
            <a
              href="https://instagram.com/gussnarraa_"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-pink-500 hover:bg-pink-500 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/GUSNARA66"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-white hover:bg-white hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/6285810564284"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-green-500 hover:bg-green-500 hover:text-black transition"
            >
              <FaWhatsapp />
            </a>
          </motion.div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 flex flex-col gap-3"
          >
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
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}
