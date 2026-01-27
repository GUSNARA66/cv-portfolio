"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2200); // durasi intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
      <AnimatePresence>
        {showIntro ? (
          /* INTRO TEXT */
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Hi, welcome to my portfolio 👋
            </h1>
            <p className="text-gray-400 mt-2">
              I’m Gusnara, Junior Web Developer
            </p>
          </motion.div>
        ) : (
          /* MAIN CONTENT */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <div className="relative bg-[#151515] rounded-2xl p-8 text-center shadow-xl">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-700"
              />

              <h1 className="text-2xl font-bold text-white mt-4">
                Gusnara
              </h1>

              <p className="text-gray-400 mt-1">
                Junior Web Developer
              </p>

              <div className="flex justify-center gap-5 mt-5">
                <a
                  href="https://instagram.com/gussnarraa_"
                  target="_blank"
                  className="text-pink-500 text-xl hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/GUSNARA66"
                  target="_blank"
                  className="text-white text-xl hover:scale-110 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://wa.me/6285810564284"
                  target="_blank"
                  className="text-green-500 text-xl hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </a>
              </div>

              <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                I am a junior web developer who enjoys building clean and modern websites.
                I am currently learning and improving my skills in Next.js, React, and Tailwind CSS.
                I like turning simple ideas into functional and responsive web interfaces.
                I am eager to learn new technologies and grow as a web developer.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="py-2 rounded-lg bg-white text-black font-semibold"
                >
                  View CV
                </a>

                <a
                  href="mailto:gnara8817@gmail.com"
                  className="py-2 rounded-lg border border-gray-700 text-white"
                >
                  Email Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
