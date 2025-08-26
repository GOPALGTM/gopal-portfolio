import { Github, Linkedin, Mail, Phone, Whatsapp, FileText } from "lucide-react";

// Update these with your own details and links!
const icons = [
  {
    icon: <Github size={32} />,
    href: "https://github.com/YOUR_USERNAME",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={32} />,
    href: "https://linkedin.com/in/YOUR_PROFILE",
    label: "LinkedIn",
  },
  {
    icon: <Whatsapp size={32} />,
    href: "https://wa.me/YOUR_PHONE",
    label: "WhatsApp",
  },
  {
    icon: <Mail size={32} />,
    href: "mailto:your@email.com",
    label: "Email",
  },
  {
    icon: <Phone size={32} />,
    href: "tel:+91YOURPHONENUMBER",
    label: "Call",
  },
  {
    icon: <FileText size={32} />,
    href: "/resume.pdf",
    label: "Resume",
  },
];

export default function ContactIcons() {
  return (
    <div className="flex justify-center mt-10 gap-6">
      {icons.map((item, i) => (
        <a
          key={i}
          href={item.href}
          aria-label={item.label}
          className="flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-cyan/10 hover:border-cyan transition-all shadow-lg group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white group-hover:text-cyan transition-colors">{item.icon}</span>
        </a>
      ))}
    </div>
  );
}
