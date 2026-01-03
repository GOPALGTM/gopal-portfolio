import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-lg font-bold font-mono">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Gopal Gautam</span>
            <span className="text-primary">/&gt;</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with using React
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-muted-foreground">Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
