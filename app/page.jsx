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
              <p className="text-gray-400 mt-2">Junior Web Developer</p>
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
                  Junior Web Developer
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
                  I am a Junior Web Developer passionate about creating modern,
                  responsive, and accessible websites. I enjoy turning ideas into
                  real digital products using Next.js, React, and Tailwind CSS.
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

                  <a
                    href="#skills"
                    className="rounded-lg bg-neutral-800 py-2 text-sm hover:bg-neutral-700 transition text-center"
                  >
                    Skills
                  </a>

                  <a
                    href="#about"
                    className="rounded-lg bg-neutral-800 py-2 text-sm hover:bg-neutral-700 transition text-center"
                  >
                    About Me
                  </a>
                </motion.div>
              </div>
            </motion.div>
            {/* ABOUT ME */}
<motion.section
  id="about"
  className="max-w-5xl mx-auto mt-24 px-4"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold mb-2">About Me</h2>

  <p className="text-gray-400 mb-6">
    Get to know me better as a developer and learner.
  </p>

  <motion.div
    className="bg-neutral-900 rounded-xl p-6 leading-relaxed text-gray-300"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
   <p className="mb-4">
  Hello! My name is <span className="text-white font-semibold">Gusnara</span>,  
  and I am a passionate <span className="text-white">Junior Web Developer</span>  
  who loves exploring the world of technology and web development.  
  I am currently focusing on building modern, responsive, and user-friendly websites  
  using technologies like <span className="text-white">Next.js, React, and Tailwind CSS</span>.
</p>

<p className="mb-4">
  My journey in programming started with simple curiosity about how websites work.  
  I was amazed by how a collection of code could turn into interactive interfaces  
  that people use every day. Since then, I have been continuously learning, practicing,  
  and improving my skills to become a better developer.
</p>

<p className="mb-4">
  I enjoy the process of transforming ideas into real digital products —  
  from designing clean layouts, writing structured code, to solving problems  
  that appear along the way. For me, coding is not only about making things work,  
  but also about creating experiences that are comfortable and meaningful for users.
</p>

<p className="mb-4">
  As a beginner in this industry, I always try to keep an open mind and stay curious.  
  I like learning new frameworks, following the latest web trends, and improving  
  my understanding of best practices such as clean architecture, reusable components,  
  and responsive design.
</p>

<p className="mb-4">
  My goal is to grow into a professional  
  <span className="text-white">Frontend Developer</span>  
  who can contribute to real projects, work with a team, and build applications  
  that provide real value. I believe that discipline, consistency, and willingness  
  to learn are the keys to becoming a great developer.
</p>

<p>
  I am open to collaboration, freelance projects, internships, and any opportunity  
  that allows me to develop my skills further.  
  Feel free to reach out to me anytime — let’s learn, grow, and build something awesome together 🚀
</p>
  </motion.div>
</motion.section>

   
            {/* SKILLS */}
            <motion.section
              id="skills"
              className="max-w-5xl mx-auto mt-24 px-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-2">Skills</h2>

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
                    className="group relative bg-neutral-900 rounded-xl p-6 text-center"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                      className="w-12 mx-auto mb-4"
                    />
                    <p>{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
