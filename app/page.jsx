"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import AnimeBackground from "./components/AnimeBackground";
import ThemeToggle from "./components/ThemeToggle";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const fullText =
    "Hi, I'm a Junior Web Developer, You can call me GusNara 👋";

  const [typedText, setTypedText] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  // ===== INTRO TYPING EFFECT (BAGIAN ATAS) =====
  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 70);

    const timer = setTimeout(() => setShowIntro(false), 4500);

    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, []);

  return (
  <main className="min-h-screen text-white relative">

    <AnimeBackground/>
    <ThemeToggle />

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
          <div className="pb-20">

{/* ================= NAVBAR ================= */}
<nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50 border-b border-neutral-800">
  <div className="max-w-5xl mx-auto flex justify-center gap-6 py-4 text-sm">
    <a href="#about" className="hover:text-blue-400">About</a>
    <a href="#skills" className="hover:text-blue-400">Skills</a>
    <a href="#contact" className="hover:text-blue-400">Contact</a>
  </div>
</nav>

{/* ================= PROFILE ================= */}
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="max-w-md mx-auto pt-28"
>
  <div className="bg-[#111] rounded-2xl p-8 text-center shadow-xl border border-neutral-800">

    <motion.img
      variants={item}
      src="/profile.jpg"
      className="w-28 h-28 mx-auto rounded-full border-4 border-neutral-700"
    />

    <motion.h1 variants={item} className="text-2xl font-bold mt-4">
      GusNara
    </motion.h1>

    <motion.p variants={item} className="text-gray-400">
      Junior Web Developer
    </motion.p>

{/* ===== DESKRIPSI ANIMASI MUNCUL BIASA ===== */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="mt-2 text-sm text-gray-400"
>
Hi! My name is GusNara, I'm a student and a Junior Web Developer who has been learning programming for about 2 months. I’m interested in all parts of web development, from designing interfaces, creating animations, writing frontend logic, until understanding how the backend works. I enjoy exploring Next.js, React, Tailwind CSS, and slowly moving toward fullstack development. Even though I'm still at school and just starting my journey, I always try to code every day, build small projects, fix errors, and learn from them. My dream is to become a professional fullstack developer who can create useful applications, solve real problems, and work with amazing teams in the future 🚀
</motion.p>

    <motion.div variants={item} className="grid grid-cols-2 gap-3 mt-6">
      <a href="/blog" className="btn">Blog</a>
      <a href="/cv.pdf" target="_blank" className="btn">View CV</a>
      <a href="/cv.pdf" download className="btn col-span-2 mx-auto w-1/2">
        Download CV
      </a>
    </motion.div>
  </div>
</motion.div>

{/* ================= ABOUT ================= */} 
<p className="text-gray-300 font-semibold leading-loose tracking-wide text-[15px] text-justify"> </p>
<section id="about" className="max-w-5xl mx-auto mt-24 px-4"> 
  <h2 className="text-3xl font-bold mb-4">About Me</h2> 
  <div className="bg-neutral-900 rounded-xl p-8 md:p-10 leading-relaxed text-gray-300 space-y-4"> 
   <p className="mb-4 text-gray-300 leading-loose tracking-wide">
  Hello! I’m{" "}
  <span className="text-white font-semibold">
    Igusti Ngurah Prayatna Rasendriya Kadwastana
  </span>,{" "}
  You can call Me{" "}
  <span className="text-white font-semibold">GusNara</span>.  
  I am a passionate Junior Web Developer who is currently still at school  
  and has been learning programming for around two months.  
  Even in a short time, I have discovered that coding is not just about  
  writing lines of code, but about creating something meaningful from ideas.
</p>

<p className="mb-4 text-gray-300 leading-loose tracking-wide">
  My journey began from simple curiosity — I often asked myself  
  how websites could look beautiful, move smoothly, and respond to user actions.  
  That curiosity pushed me to start learning HTML, CSS, and JavaScript,  
  and later exploring modern technologies like{" "}
  <span className="text-white font-semibold">
    React, Next.js, and Tailwind CSS
  </span>.  
  Step by step, I started to understand how frontend and backend  
  work together to build complete applications.
</p>

<p className="mb-4 text-gray-300 leading-loose tracking-wide">
  I enjoy designing user interfaces, creating small animations,  
  structuring components, and solving errors that appear during development.  
  Sometimes bugs make me confused, but solving them gives me a strong feeling  
  of achievement. For me, every error is a lesson,  
  and every project — no matter how small — is progress.
</p>

<p className="mb-4 text-gray-300 leading-loose tracking-wide">
  Right now I am focusing on improving my frontend skills,  
  learning clean code structure, responsive design, and basic backend logic  
  so that in the future I can become a{" "}
  <span className="text-white font-semibold">
    Fullstack Developer
  </span>.  
  I love exploring new tools, watching tutorials, reading documentation,  
  and practicing by building personal projects.
</p>

<p className="mb-4 text-gray-300 leading-loose tracking-wide">
  My goal is not only to be able to code,  
  but to create applications that are useful for other people,  
  comfortable to use, and visually attractive.  
  I believe consistency is more important than speed,  
  and I try to code a little bit every day to get better than yesterday.
</p>

<p className="text-gray-300 leading-loose tracking-wide">
  I am open to internships, freelance projects,  
  mentoring opportunities, and collaboration with other developers.  
  Let’s learn, grow, and build something amazing together 🚀
</p>
</div>
  </section>

{/* ================= CONTACT ================= */}
<section id="contact" className="max-w-5xl mx-auto mt-24 px-4">

<h2 className="text-3xl font-bold mb-2">Contact</h2>

<div className="grid md:grid-cols-3 gap-6">

<a
  href="https://instagram.com/gussnarraa_"
  target="_blank"
  className="group relative bg-neutral-900 p-6 rounded-xl hover:-translate-y-1 transition flex items-center gap-4"
>
  <FaInstagram className="text-pink-500 text-3xl" />
  <div>
    <h3 className="font-semibold mb-1">Instagram</h3>
    <p className="text-gray-400 text-sm">@gussnarraa_</p>
  </div>
</a>

<a
  href="https://wa.me/6285810564284"
  target="_blank"
  className="group relative bg-neutral-900 p-6 rounded-xl hover:-translate-y-1 transition flex items-center gap-4"
>
  <FaWhatsapp className="text-green-500 text-3xl" />
  <div>
    <h3 className="font-semibold mb-1">WhatsApp</h3>
  </div>
</a>

<a
  href="mailto:gnara8817@gmail.com"
  className="group relative bg-neutral-900 p-6 rounded-xl hover:-translate-y-1 transition flex items-center gap-4"
>
  <FaEnvelope className="text-blue-400 text-3xl" />
  <div>
    <h3 className="font-semibold mb-1">Email</h3>
  </div>
</a>

</div>
</section>

<footer className="max-w-5xl mx-auto mt-24 px-4 text-center pb-10">
<p className="text-gray-500 text-sm">
© 2025 GusNara — Junior Web Developer 
</p>
</footer>

</div>
)}
</AnimatePresence>

<style jsx>{`
.btn {
  background:#181818;
  padding:10px;
  border-radius:10px;
  text-align:center;
  transition:.2s;
}
.btn:hover {
  background:#222;
}
`}</style>

</main>
);
}
