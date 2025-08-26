import {
  FaGithub,
  FaLinkedin,
  FaBlog,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaWhatsapp size={28} />,
    href: "https://wa.me/917464859796",
    label: "WhatsApp",
  },
  {
    icon: <FaEnvelope size={28} />,
    href: "mailto:gopalgautam279@gmail.com",
    label: "Gmail",
  },
  {
    icon: <FaGithub size={28} />,
    href: "https://github.com/GOPALGTM",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={28} />,
    href: "https://www.linkedin.com/in/gopal-gautam-a9a4b722a/",
    label: "LinkedIn",
  },
  {
    icon: <FaBlog size={28} />,
    href: "https://gopalgtm.hashnode.dev/",
    label: "Blog",
  },
];

export default function ContactDock() {
  return (
    <div
      id="contact"
      className="fixed left-1/2 bottom-10 z-50 -translate-x-1/2 bg-black/60 backdrop-blur-md rounded-full px-6 py-3 flex gap-6 border border-cyan/60 shadow-neon"
    >
      {contacts.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:text-violet transition-all flex items-center justify-center rounded-full p-2"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
