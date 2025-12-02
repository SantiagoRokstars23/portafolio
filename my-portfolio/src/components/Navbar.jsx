import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mí", href: "#about" },
    { name: "Tecnologías", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-neutral-900/40 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-semibold">SG.</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-neutral-300">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-neutral-300 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-neutral-900/80 p-4 rounded-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block text-neutral-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
