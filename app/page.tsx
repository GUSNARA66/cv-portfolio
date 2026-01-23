import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-black flex items-center justify-center px-4">
      <div className="relative w-full max-w-md">

        {/* GLOW */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur"></div>

        <div className="relative bg-[#151515] rounded-2xl p-8 text-center shadow-xl">

          {/* FOTO */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-700 hover:scale-105 transition"
          />

          {/* NAMA */}
          <h1 className="text-2xl font-bold mt-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Gusnara
          </h1>

          {/* ROLE */}
          <p className="text-gray-400 mt-1">Junior Web Developer</p>

          {/* STATUS */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-400">Available for work</span>
          </div>

          {/* ABOUT ME */}
          <p className="text-gray-400 text-sm mt-5 leading-relaxed">
            I am a junior web developer who enjoys building clean and modern
            websites. I am currently learning and improving my skills in
            Next.js, React, and Tailwind CSS. I like turning simple ideas into
            functional and responsive web interfaces. I am eager to learn new
            technologies and grow as a web developer.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["Next.js", "React", "Tailwind CSS", "JavaScript", "Git"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-[#1f1f1f] text-gray-300 border border-gray-700"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* DIVIDER */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* SOSIAL */}
          <div className="flex justify-center gap-5">
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
          </div>

          {/* BUTTON CV */}
          <div className="mt-6 flex flex-col gap-3">
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
              href="https://instagram.com/gussnarraa_"
              target="_blank"
              className="w-full py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition"
            >
              Contact via Instagram
            </a>

            <p className="text-xs text-gray-600 mt-2">
              Open for freelance & collaboration
            </p>
          </div>

          {/* PROJECT */}
          <div className="mt-6">
            <a
              href="https://github.com/GUSNARA66"
              target="_blank"
              className="block p-4 rounded-xl bg-[#1c1c1c] hover:bg-[#232323] hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/10 transition"
            >
              <h3 className="text-white font-medium">
                Portfolio Website
              </h3>
              <p className="text-gray-500 text-sm">
                Personal portfolio with Next.js & Tailwind CSS
              </p>
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
