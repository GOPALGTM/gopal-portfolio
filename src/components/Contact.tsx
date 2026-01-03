import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gopaldevops12@gmail.com",
    href: "mailto:gopaldevops12@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7464859796",
    href: "tel:+917464859796"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sector 48, Gurgaon, India",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/GOPALGTM"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/gopal-gautam-a9a4b722a"
  },
  {
    icon: Globe,
    label: "Portfolio",
    href: "https://gopal-portfolio-topaz.vercel.app/"
  }
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subheading">
            Open to new opportunities and collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Message */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow font-semibold"
                    disabled={loading}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                  {success && <p className="text-green-600 text-sm text-center mt-2">{success}</p>}
                  {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Or email me directly at{" "}
                  <a 
                    href="mailto:gopaldevops12@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    gopaldevops12@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
