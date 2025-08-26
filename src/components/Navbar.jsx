import resumePDF from '../assets/Gopal-DevOps.pdf';
import { useState } from "react";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "home", href: "home" },
    { label: "about", href: "about" },
    { label: "experience", href: "experience" },
    { label: "skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "achievement", href: "achievement" },
    { label: "Resume", href: resumePDF, isResume: true },
  ];

  const handleNavClick = (section) => {
    if (section === "home") {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setOpen(false);
      return;
    }

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        <button
          onClick={() => handleNavClick("home")}
          className="text-cyan font-mono text-lg font-bold tracking-widest select-none cursor-pointer flex items-center gap-1"
          aria-label="Go to homepage"
        >
          <span>devops&lt;&gt;_</span>
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) =>
            item.isResume ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-violet/90 text-white font-bold px-4 py-2 rounded-full shadow-neon hover:bg-cyan transition"
              >
                Resume
              </a>
            ) : (
              <button
                key={item.label}
                className="hover:text-cyan transition font-semibold bg-transparent border-none cursor-pointer flex items-center gap-1"
                onClick={() => handleNavClick(item.href)}
                aria-label={`Go to ${item.label} section`}
              >
                {item.icon || null}
                {item.label}
              </button>
            )
          )}
        </div>

        <button
          className="md:hidden text-cyan text-2xl focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center gap-10 text-xl md:hidden transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setOpen(false)}
      >
        {navItems.map((item) =>
          item.isResume ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-violet/90 text-white font-bold px-4 py-2 rounded-full shadow-neon hover:bg-cyan transition"
              onClick={(e) => e.stopPropagation()}
            >
              Resume
            </a>
          ) : (
            <button
              key={item.label}
              className="hover:text-cyan transition font-semibold bg-transparent border-none cursor-pointer flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                handleNavClick(item.href);
              }}
              aria-label={`Go to ${item.label} section`}
            >
              {item.icon || null}
              {item.label}
            </button>
          )
        )}
      </div>
    </nav>
  );
}
