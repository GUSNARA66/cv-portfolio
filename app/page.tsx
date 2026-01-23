export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
        />
        <h1 className="text-3xl font-bold">Gusnara</h1>
        <p className="text-gray-400 mt-2">Junior Web Developer</p>
      </div>
    </main>
  )
}

