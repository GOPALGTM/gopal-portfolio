import {
  FaGithub,
  FaLinkedin,
  FaBlog,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaWhatsapp size={18} />,
    href: "https://wa.me/917464859796",
    label: "WhatsApp",
  },
  {
    icon: <FaEnvelope size={18} />,
    href: "mailto:gopalgautam279@gmail.com",
    label: "Gmail",
  },
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/GOPALGTM",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/gopal-gautam-a9a4b722a/",
    label: "LinkedIn",
  },
  {
    icon: <FaBlog size={18} />,
    href: "https://gopalgtm.hashnode.dev/",
    label: "Blog",
  },
];

export default function ContactDock() {
  return (
    <div
      id="contact"
      className="fixed left-1/2 bottom-4 sm:bottom-10 z-30 -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-3 flex gap-2 sm:gap-4 border border-cyan/60 shadow-neon"
      style={{ boxShadow: "0 0 12px #00e5ff44" }}
    >
      {contacts.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-cyan/10 transition-colors"
          style={{ background: "transparent", border: "none", padding: 0 }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
