function Navbar() {
  return (
    <nav className="fixed w-full bg-black/40 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-2xl font-bold text-purple-400">
          Umair
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li><a href="#home" className="hover:text-purple-400">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400">About</a></li>
          <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;