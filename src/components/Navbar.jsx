export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Nexlora Logo" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold text-gray-900">Nexlora</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#services" className="hover:text-indigo-600 transition">Services</a>
          <a href="#work" className="hover:text-indigo-600 transition">Work</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
