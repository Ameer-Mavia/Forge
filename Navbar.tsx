import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Work", id: "work" },
    { name: "About", id: "about" },
    { name: "Process", id: "process" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-white/5 py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div 
            className="text-2xl font-bold font-display tracking-tighter cursor-pointer text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="link-home"
          >
            FORGE.
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors uppercase tracking-wider"
                data-testid={`link-${link.id}`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-white text-black font-semibold text-sm hover:bg-primary hover:text-white transition-colors uppercase tracking-wider"
              data-testid="btn-contact-nav"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="btn-mobile-menu"
          >
            <div className="space-y-1.5 w-6">
              <span className={`block h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-3xl font-display font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-8 px-8 py-4 bg-white text-black font-display text-xl w-full max-w-sm font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
