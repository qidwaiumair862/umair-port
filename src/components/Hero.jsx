function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6
      bg-gradient-to-br from-[#0b0617] via-[#1a0033] to-[#2a0a3a]"
    >
      <div>
        
        <img
          src="/umair.jpg"
          alt="Umair"
          className="w-52 h-52 rounded-full mx-auto border-4 border-purple-500 shadow-2xl shadow-purple-500/50 object-cover"
        />

        <h1 className="text-5xl md:text-7xl font-bold mt-6">
          Umair Qidwai
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mt-4">
          Full Stack Developer | PHP | Python | MySQL
        </p>

        <a
          href="#projects"
          className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;