export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#151515] rounded-2xl p-8 text-center shadow-lg">
        
        {/* FOTO */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-700"
        />

        {/* NAMA */}
        <h1 className="text-2xl font-bold text-white mt-4">
          Gusnara
        </h1>

        {/* ROLE */}
        <p className="text-gray-400 mt-1">
          Junior Web Developer
        </p>

        {/* DESKRIPSI */}
        <p className="text-gray-500 text-sm mt-4">
          I build simple, clean, and modern websites using
          Next.js and Tailwind CSS.
        </p>

        {/* BUTTON */}
        <div className="mt-6 flex flex-col gap-3">
          <a
            href="#"
            className="w-full py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            View Projects
          </a>

          <a
            href="#"
            className="w-full py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </main>
  )
}
