"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import AnimeBackground from "./components/AnimeBackground";



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
 const typeText =
"Hi! My name is GusNara, I'm a student and a Junior Web Developer who has been learning programming for about 2 months. I’m interested in all parts of web development, from designing interfaces, creating animations, writing frontend logic, until understanding how the backend works. I enjoy exploring Next.js, React, Tailwind CSS, and slowly moving toward fullstack development. Even though I'm still at school and just starting my journey, I always try to code every day, build small projects, fix errors, and learn from them. My dream is to become a professional fullstack developer who can create useful applications, solve real problems, and work with amazing teams in the future 🚀";



const [runningText, setRunningText] = useState("");

  useEffect(() => {
  // INTRO TEXT
  let index = 0;
  const typing = setInterval(() => {
    setTypedText(fullText.slice(0, index));
    index++;
    if (index > fullText.length) clearInterval(typing);
  }, 70);

  const timer = setTimeout(() => setShowIntro(false), 4500);

  // TYPEWRITER BENERAN
  let i = 0;
  const typeInterval = setInterval(() => {
    setRunningText(typeText.slice(0, i));
    i++;

    if (i > typeText.length) {
      clearInterval(typeInterval);
    }
  }, 60);

  return () => {
    clearInterval(typing);
    clearTimeout(timer);
    clearInterval(typeInterval);
  };
}, []);


  return (
  <main className="min-h-screen text-white relative">
    <AnimeBackground/>
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
    <motion.div variants={item} className="mt-2 text-sm text-gray-400">
  {runningText}
  <span className="animate-pulse">|</span>
</motion.div>

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
<section id="about" className="max-w-5xl mx-auto mt-24 px-4">

<h2 className="text-3xl font-bold mb-4">About Me</h2>

<div className="bg-neutral-900 rounded-xl p-8 md:p-10 leading-relaxed text-gray-300 space-y-4">

<p className="mb-4">
Hello! I’m <span className="text-white font-semibold">Igusti Ngurah Prayatna Rasendriya Kadwastana</span>, 
You can call Me <span className="text-white font-semibold">GusNara</span>.  
A passionate Junior Web Developer focused on building modern, responsive,  
and visually appealing web applications using  
<span className="text-white"> Next.js, React, and Tailwind CSS</span>.
</p>


<p className="mb-4">
My journey in programming started from simple curiosity —  
I wondered how websites could be interactive and beautiful at the same time.  
Since then, I have been learning every day, experimenting with UI design,  
animations, and frontend logic.
</p>

<p className="mb-4">
I enjoy transforming ideas into real digital products,  
paying attention to detail, performance, and user experience.  
For me, coding is not only about writing syntax,  
but about solving problems creatively.
</p>

<p className="mb-4">
Right now I’m focusing on mastering Frontend Development,  
especially React ecosystem, component architecture,  
and clean code structure.
</p>

<p>
I am open to internships, freelance projects,  
and collaboration opportunities.  
Let’s build something amazing together 🚀
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
  { name: "Next.js", icon: "nextjs/nextjs-original.svg", invert: true },
].map((s) => (

<div key={s.name}
className="group bg-neutral-900 p-6 rounded-xl text-center relative hover:-translate-y-1 transition">

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-blue-500/20" />

<img
src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}`}
className={`w-12 mx-auto mb-3 ${s.invert ? "invert" : ""}`}
/>

<p>{s.name}</p>
</div>

))}
</div>
</section>

{/* ===== CONTACT ===== */}
  <section id="contact" className="max-w-5xl mx-auto mt-24 px-4">

  <h2 className="text-3xl font-bold mb-2">Contact</h2>

  <p className="text-gray-400 mb-6">
    Feel free to reach me anytime — let's connect!
  </p>

  <div className="grid md:grid-cols-3 gap-6">

    {/* INSTAGRAM */}
    <a
      href="https://instagram.com/gussnarraa_"
      target="_blank"
      className="group relative bg-neutral-900 p-6 rounded-xl hover:-translate-y-1 transition flex items-center gap-4"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-pink-500/20 transition" />

      <FaInstagram className="text-pink-500 text-3xl" />

      <div>
        <h3 className="font-semibold mb-1">Instagram</h3>
        <p className="text-gray-400 text-sm">@gussnarraa_</p>
      </div>
    </a>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/6285810564284"
      target="_blank"
      className="group relative bg-neutral-900 p-6 rounded-xl hover:-translate-y-1 transition flex items-center gap-4"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-green-500/20 transition" />

      <FaWhatsapp className="text-green-500 text-3xl" />

      <div>
        <h3 className="font-semibold mb-1">WhatsApp</h3>
        <p className="text-gray-400 text-sm">Chat me directly</p>
      </div>
    </a>

    {/* EMAIL */}
    <a
      href="mailto:gnara8817@gmail.com"
      className="group relative bg-neutral-900 p-6 rounded-xl hover:-translate-y-1 transition flex items-center gap-4"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-blue-500/20 transition" />

      <FaEnvelope className="text-blue-400 text-3xl" />

      <div>
        <h3 className="font-semibold mb-1">Email</h3>
        <p className="text-gray-400 text-sm">gnara8817@gmail.com</p>
      </div>
    </a>

  </div>
</section>


{/* ===== WHAT I DO ===== */}
<section className="max-w-5xl mx-auto mt-24 px-4">
  <h2 className="text-3xl font-bold mb-6">What I Do</h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        title: "Frontend Development",
        desc: "Building responsive and interactive interfaces using React, Next.js and Tailwind."
      },
      {
        title: "UI Design",
        desc: "Designing clean, modern and user friendly layouts with good UX principles."
      },
      {
        title: "Web Performance",
        desc: "Optimizing website speed, SEO and accessibility for better experience."
      },
    ].map((i) => (

      <div
        key={i.title}
        className="group relative bg-neutral-900 p-6 rounded-xl hover:-translate-y-1 transition"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-purple-500/20 transition" />

        <h3 className="font-semibold mb-2">{i.title}</h3>
        <p className="text-gray-400 text-sm">{i.desc}</p>
      </div>

    ))}

  </div>
</section>

{/* ===== STATS ===== */}
<section className="max-w-5xl mx-auto mt-20 px-4">

<div className="grid grid-cols-3 gap-4 text-center">

<div className="bg-neutral-900 p-4 rounded-xl">
  <h3 className="text-2xl font-bold text-blue-400">3</h3>
  <p className="text-gray-400 text-sm">Months Learning</p>
</div>

<div className="bg-neutral-900 p-4 rounded-xl">
  <h3 className="text-2xl font-bold text-blue-400">0</h3>
  <p className="text-gray-400 text-sm">Projects</p>
</div>

<div className="bg-neutral-900 p-4 rounded-xl">
  <h3 className="text-2xl font-bold text-blue-400">∞</h3>
  <p className="text-gray-400 text-sm">Motivation</p>
</div>

</div>
</section>

{/* ===== FOOTER ===== */}
<footer className="max-w-5xl mx-auto mt-24 px-4 text-center pb-10">

<p className="text-gray-500 text-sm">
© 2025 GusNara — Built with Next.js & Tailwind
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

/* ANIMASI TEKS BERJALAN */
.animate-marquee {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 18s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
`}</style>
    </main>
  );
}
