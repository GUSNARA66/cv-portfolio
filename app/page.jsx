"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

/* ANIMATION CONFIG */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
  const fullText = "Hi, I'm a Junior Web Developer, You can call me GusNara 👋";
  const [typedText, setTypedText] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 70);

    const timer = setTimeout(() => setShowIntro(false), 5000);
    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex items-center justify-center text-center"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {typedText}
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-gray-400 mt-2">
               Junior Web Developer
              </p>
            </div>
          </motion.div>
        ) : (
          <>
            {/* PROFILE CARD */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-md mx-auto mt-20"
            >
              <div className="bg-[#151515] rounded-2xl p-8 text-center shadow-xl">
                <motion.img
                  variants={item}
                  src="/profile.jpg"
                  className="w-28 h-28 mx-auto rounded-full border-4 border-gray-700"
                />

                <motion.h1 variants={item} className="text-2xl font-bold mt-4">
                  GusNara
                </motion.h1>

                <motion.p variants={item} className="text-gray-400">
                  Junior Web Developer • Next.js • Tailwind CSS
                </motion.p>

                <motion.div
                  variants={item}
                  className="flex justify-center gap-5 mt-5"
                >
                  <a href="https://instagram.com/gussnarraa_" target="_blank">
                    <FaInstagram className="text-pink-500 text-xl hover:scale-110 transition" />
                  </a>
                  <a href="https://github.com/GUSNARA66" target="_blank">
                    <FaGithub className="text-xl hover:scale-110 transition" />
                  </a>
                  <a href="https://wa.me/6285810564284" target="_blank">
                    <FaWhatsapp className="text-green-500 text-xl hover:scale-110 transition" />
                  </a>
                </motion.div>

                <motion.p
                  variants={item}
                  className="text-gray-500 text-sm mt-5 leading-relaxed"
                >
                  I am a junior web developer who enjoys building clean and modern
                  websites. I am currently learning and improving my skills in
                  Next.js, React, and Tailwind CSS.
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                 variants={item}
                   className="mt-6 grid grid-cols-2 gap-3"
                  >

                  <a
                   href="/blog"
                      className="bg-white/10 hover:bg-white/20 transition rounded-xl p-3 text-center"
                      >
                         Blog
                          </a>

                           <a
                        href="/cv.pdf"
                        target="_blank"
                        className="bg-white/10 hover:bg-white/20 transition rounded-xl p-3 text-center"
                         >
                         View CV
                          </a>

                     <a
                     href="/cv.pdf"
                     download
                     className="bg-white/10 hover:bg-white/20 transition rounded-xl p-3 text-center"
                      >
                       Download CV
                        </a>

                     <a
                    href="mailto:gnara8817@gmail.com"
                      className="bg-white/10 hover:bg-white/20 transition rounded-xl p-3 text-center"
                     >
                         Email Me
                    </a>

                     </motion.div>

              </div>
            </motion.div>

            {/* SKILLS */}
            <section className="max-w-5xl mx-auto mt-24 px-4">
              <h2 className="text-3xl font-bold mb-2">Skills</h2>
              <p className="text-gray-400 mb-8">
                Technologies I use to build modern web applications.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "HTML", icon: "html5/html5-original.svg" },
                  { name: "CSS", icon: "css3/css3-original.svg" },
                  { name: "Tailwind", icon: "tailwindcss/tailwindcss-original.svg" },
                  {
                    name: "Next.js",
                    icon: "nextjs/nextjs-original.svg",
                    invert: true,
                  },
                ].map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="group relative bg-neutral-900 rounded-xl p-6 text-center hover:-translate-y-1 transition"
                  >
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-br from-blue-500/30 to-cyan-400/20 -z-10" />

                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                      className={`w-12 mx-auto mb-4 transition group-hover:scale-110 ${
                        skill.invert ? "invert" : ""
                      }`}
                      alt={skill.name}
                    />

                    <p className="font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
