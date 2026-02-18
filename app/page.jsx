"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import AnimeBackground from "./components/AnimeBackground";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";

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

 const [showNav, setShowNav] = useState(true);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    setScrolled(currentScroll > 50);

    if (currentScroll > lastScroll) {
      setShowNav(false); // scroll down
    } else {
      setShowNav(true); // scroll up
    }

    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []); 

  // ===== INTRO TYPING EFFECT (BAGIAN ATAS) =====
 
 useEffect(() => {
  window.addEventListener("click", (e) => {
    const dot = document.createElement("div");
    dot.className = "click-particle";
    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
    document.body.appendChild(dot);

    setTimeout(() => dot.remove(), 600);
  });
}, []);

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
    <div className="scanline" />
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
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
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
<nav
  className={`
    fixed top-0 w-full z-50 transition-all duration-500
    ${showNav ? "translate-y-0" : "-translate-y-full"}
    ${scrolled ? "bg-black/90 backdrop-blur border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10" : "bg-transparent"}
  `}
>
  <div className="max-w-5xl mx-auto flex justify-center gap-8 py-4 text-sm">

    <a href="#about" className="nav-link">About</a>
    <a href="#skills" className="nav-link">Skills</a>
    <a href="#contact" className="nav-link">Contact</a>

  </div>
</nav>

{/* ================= PROFILE ================= */}
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="max-w-md mx-auto pt-28"
>
  <div className="bg-cyber cyber-hover rounded-2xl p-8 text-center transition duration-300">
    <motion.img
  variants={item}
  src="/profile.jpg"
  className="w-28 h-28 mx-auto rounded-full border-4 border-neutral-700
  animate-[pulse_3s_ease-in-out_infinite]"
/>


    <motion.h1 variants={item} className="text-2xl font-bold mt-4 glitch">
  Gus Nara
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
  <div className="bg-cyber cyber-grid rounded-xl p-8 md:p-10 leading-relaxed text-gray-300 space-y-4"> 
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

{/* ================= SKILLS ================= */}
<section id="skills" className="max-w-5xl mx-auto mt-24 px-4">

  <h2 className="text-3xl font-bold mb-6">Skills</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[
      { name: "HTML", icon: "html5/html5-original.svg" },
      { name: "CSS", icon: "css3/css3-original.svg" },
      { name: "Tailwind", icon: "tailwindcss/tailwindcss-original.svg" },

      // ICON NEXT YANG BENER
      { name: "Next.js", icon: "nextjs/nextjs-original.svg", invert: true },
    ].map((s) => (

      <div
        key={s.name}
        className="group bg-neutral-900 p-6 rounded-xl text-center relative hover:-translate-y-1 transition"
      >

        {/* efek glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-blue-500/20 transition" />

        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}`}
          className={`w-12 mx-auto mb-3 ${s.invert ? "invert" : ""}`}
          alt={s.name}
        />

        <p className="text-gray-200">{s.name}</p>

      </div>

    ))}

  </div>
</section>

{/* ================= JOURNEY ================= */}
<section className="max-w-5xl mx-auto mt-24 px-4">

<h2 className="text-3xl font-bold mb-6 cyber-text">My Journey</h2>

<div className="border-l border-cyan-500 pl-6 space-y-6">

<div>
  <h3 className="text-blue-400 font-semibold">2025 - Start Coding</h3>
  <p className="text-gray-400">Study HTML CSS base</p>
</div>

<div>
  <h3 className="text-blue-400 font-semibold">2 Month</h3>
  <p className="text-gray-400">React, Next.js, Tailwind</p>
</div>

<div>
  <h3 className="text-blue-400 font-semibold">Now</h3>
  <p className="text-gray-400">Focus Fullstack</p>
</div>

</div>
</section>

{/* ================= STACK LEVEL ================= */}
<section className="max-w-5xl mx-auto mt-24 px-4">

<h2 className="text-3xl font-bold mb-6 cyber-text">Stack Level</h2>

{[
  { name: "HTML", level: "40%" },
  { name: "CSS", level: "45%" },
  { name: "JavaScript", level: "40%" },
  { name: "React", level: "45%" },
  { name: "Next.js", level: "45%" },
].map((s) => (

<div key={s.name} className="mb-4">

<div className="flex justify-between text-sm">
  <span>{s.name}</span>
  <span>{s.level}</span>
</div>

<div className="w-full bg-neutral-800 h-2 rounded">
  <div
    className="bg-cyan-400 h-2 rounded"
    style={{ width: s.level }}
  />
</div>

</div>

))}

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

.scanline {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
  repeating-linear-gradient(
    to bottom,
    rgba(0,255,255,0.02) 0px,
    rgba(0,0,0,0.02) 2px
  );
.btn {
  background:#060b14;
  padding:10px;
  border-radius:10px;
  text-align:center;
  transition:.2s;
  border:1px solid rgba(0,242,255,0.2);
}

.btn:hover {
  transform: scale(1.05) rotate(-1deg);
  box-shadow: 0 0 15px rgba(0,242,255,0.6);
}
:root {
  --cyber-blue: #00f2ff;
  --cyber-purple: #7b2fff;
  --dark: #05090f;
}

/* BACKGROUND CARD CYBER */
.bg-cyber {
  background: linear-gradient(145deg, #0a0f1a, #05090f);
  border: 1px solid rgba(0,242,255,0.15);
  box-shadow: 0 0 20px rgba(0,242,255,0.08);
}

/* EFEK HOVER HOLOGRAM */
.cyber-hover:hover {
  transform: translateY(-3px);
  box-shadow:
    0 0 25px rgba(0,242,255,0.25),
    inset 0 0 10px rgba(0,242,255,0.1);
}

/* TEKS NEON */
.cyber-text {
  background: linear-gradient(to right,#00f2ff,#7b2fff);
  -webkit-background-clip: text;
  color: transparent;
}

/* GARIS GRID */
.cyber-grid {
  background-image:
    linear-gradient(rgba(0,242,255,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,242,255,.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: "GusNara";
  position: absolute;
  left: 0;
  opacity: 0.7;
}

.glitch::before {
  color: cyan;
  animation: glitch 2s infinite;
}

.glitch::after {
  color: magenta;
  animation: glitch 1.5s infinite;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-1px, 1px); }
  80% { transform: translate(1px, -1px); }
  100% { transform: translate(0); }
}
  .nav-link {
  position: relative;
  padding-bottom: 4px;
  transition: .3s;
}

.nav-link:hover {
  color: cyan;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0%;
  background: linear-gradient(to right, cyan, magenta);
  transition: .3s;
}

.nav-link:hover::after {
  width: 100%;
}
`}</style>
<button
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
className="fixed bottom-6 right-6 bg-cyber p-3 rounded-full"
>
↑
</button>

</main>
);
}
