import resumePDF from '../assets/Gopal-DevOps.pdf';
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Add/remove class to body when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [open]);

  const navItems = [

    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Achievement", href: "achievement" },
    { label: "Resume", href: resumePDF, isResume: true },
  ];

  const handleNavClick = (section, isHome = false) => {
    // Close mobile menu first
    setOpen(false);
    
    if (isHome || section === "home") {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    
    // Handle navigation to sections
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-8 py-3 sm:py-4">
        <button
          onClick={() => handleNavClick("home", true)}
          className="text-cyan font-mono text-base sm:text-lg md:text-xl font-bold tracking-widest select-none cursor-pointer flex items-center gap-1 sm:gap-2"
          aria-label="Go to homepage"
        >
          <FaHome className="text-base sm:text-lg md:text-xl" />
          <span className="hidden sm:inline">devops&lt;&gt;_</span>
          <span className="sm:hidden">devops</span>
        </button>
        <div className="hidden md:flex gap-4 lg:gap-8 items-center flex-wrap">
          {navItems.map(item =>
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
                key={typeof item.label === 'string' ? item.label : 'home'}
                className="hover:text-cyan transition font-semibold bg-transparent border-none cursor-pointer flex items-center gap-1 text-base md:text-lg"
                onClick={() => handleNavClick(item.href, item.isHome)}
                aria-label={`Go to ${typeof item.label === 'string' ? item.label : 'home'} section`}
              >
                {item.label}
              </button>
            )
          )}
        </div>
        <button
          className="md:hidden text-cyan text-2xl focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`fixed inset-0 z-50 flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ 
          backgroundColor: '#ffffff',
          opacity: 1,
          backdropFilter: 'none'
        }}
        onClick={() => setOpen(false)}
      >
        {/* Header with logo and close button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200" style={{ backgroundColor: '#ffffff' }}>
          <div className="text-cyan font-mono text-lg font-bold tracking-widest" style={{ color: '#00E5FF' }}>
            devops&lt;&gt;_
          </div>
          <button
            className="text-gray-600 hover:text-gray-800 text-2xl p-2"
            style={{ color: '#374151' }}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        
        {/* Navigation Items */}
        <div className="flex-1 flex flex-col justify-start items-start px-6 pt-8 pb-20" style={{ backgroundColor: '#ffffff' }}>
          {navItems.map((item, index) => {
            const isLastItem = index === navItems.length - 1;
            return (
              <div key={typeof item.label === 'string' ? item.label : 'home'} className="w-full">
                {item.isResume ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-violet text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-cyan transition text-lg"
                    style={{ backgroundColor: '#7C4DFF' }}
                    onClick={e => e.stopPropagation()}
                  >
                    Resume
                  </a>
                ) : (
                  <button
                    className="hover:text-violet transition font-semibold bg-transparent border-none cursor-pointer flex items-center justify-between text-xl text-black py-3 px-0 rounded-lg hover:bg-gray-100 w-full font-bold"
                    style={{ 
                      color: '#000000',
                      backgroundColor: 'transparent'
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      handleNavClick(item.href, item.isHome);
                    }}
                    aria-label={`Go to ${typeof item.label === 'string' ? item.label : 'home'} section`}
                  >
                    <span>{item.label}</span>
                    <FaChevronRight className="text-gray-400 text-lg" />
                  </button>
                )}
                {/* Separator line - show after each item except the last one */}
                {!isLastItem && (
                  <div 
                    className="w-full h-px mt-3 mb-3"
                    style={{ backgroundColor: '#E5E7EB' }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
