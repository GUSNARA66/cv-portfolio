"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

/* ANIMATION CONFIG */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeInOut" },
  },
};

export default function Home() {
  const fullText = "Hi, welcome to my portfolio 👋";
  const [typedText, setTypedText] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  /* TYPEWRITER EFFECT (FIXED) */
  useEffect(() => {
  let index = 0;
  setTypedText("");

  const typing = setInterval(() => {
    if (index <= fullText.length) {
      setTypedText(fullText.slice(0, index));
      index++;
    } else {
      clearInterval(typing);
    }
  }, 70);

  const timer = setTimeout(() => {
    setShowIntro(false);
  }, 2600);

  return () => {
    clearInterval(typing);
    clearTimeout(timer);
  };
}, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          /* INTRO */
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-gray-400 mt-2">
              I’m Gusnara, Junior Web Developer
            </p>
          </motion.div>
        ) : (
          /* MAIN CARD */
          <motion.div
            key="content"
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-md"
          >
            <div className="bg-[#151515] rounded-2xl p-8 text-center shadow-xl">

              <motion.img
                variants={item}
                src="/profile.jpg"
                alt="Profile"
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-700"
              />

              <motion.h1 variants={item} className="text-2xl font-bold text-white mt-4">
                Gusnara
              </motion.h1>

              <motion.p variants={item} className="text-gray-400 mt-1">
                Junior Web Developer
              </motion.p>

              <motion.div variants={item} className="flex justify-center gap-5 mt-5">
                <a href="https://instagram.com/gussnarraa_" target="_blank" className="text-pink-500 text-xl hover:scale-110 transition">
                  <FaInstagram />
                </a>
                <a href="https://github.com/GUSNARA66" target="_blank" className="text-white text-xl hover:scale-110 transition">
                  <FaGithub />
                </a>
                <a href="https://wa.me/6285810564284" target="_blank" className="text-green-500 text-xl hover:scale-110 transition">
                  <FaWhatsapp />
                </a>
              </motion.div>

              <motion.p variants={item} className="text-gray-500 text-sm mt-5 leading-relaxed">
                I am a junior web developer who enjoys building clean and modern websites.
                I am currently learning and improving my skills in Next.js, React, and Tailwind CSS.
                I like turning simple ideas into functional and responsive web interfaces.
                I am eager to learn new technologies and grow as a web developer.
              </motion.p>

              <motion.div variants={item} className="mt-6 flex flex-col gap-3">
                <a href="/cv.pdf" target="_blank" className="py-2 rounded-lg bg-white text-black font-semibold">
                  View CV
                </a>

                <a href="/cv.pdf" download className="py-2 rounded-lg border border-gray-700 text-white">
                  Download CV
                </a>

                <a href="mailto:gnara8817@gmail.com" className="py-2 rounded-lg border border-gray-700 text-white">
                  Email Me
                </a>

                <a href="/blog" className="py-2 rounded-lg border border-gray-700 text-white">
                  Blog
                </a>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
