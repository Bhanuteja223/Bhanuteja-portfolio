import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Bhanuteja223",
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bhanutejathouti",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      href: "mailto:bhanutejathouti@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  return (
    <>
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
                  Bhanuteja Portfolio
                </h3>
                <p className="text-muted-foreground mb-4">
                  Building scalable solutions with modern web technology. 
                  Let's create something amazing together.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-110 animate-bounce-in ${social.color}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {/* <h4 className="text-lg font-semibold mb-4 text-card-foreground">Quick Links</h4>
                <nav className="space-y-2">
                  {["Home", "About", "Projects", "Contact"].map((link) => (
                    <button
                      key={link}
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1"
                    >
                      {link}
                    </button>
                  ))}
                </nav> */}
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-lg font-semibold mb-4 text-card-foreground">Get In Touch</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>📧 bhanutejathouti@gmail.com</p>
                  <p>📍 Hyderabad, India</p>
                  <p>💼 Open to new opportunities</p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Bhanuteja Portfolio. Built with React & Tailwind CSS.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Made with ❤️ for the developer community</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-portfolio-heavy bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300 animate-bounce-in z-40"
          size="icon"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default Footer;