import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { Link, useNavigate, useLocation } from "react-router-dom";
import unisapphireLogo from "@/assets/Unisapphire_17_page2.png";

const logoColors = [
  "hsl(217, 91%, 60%)",   // U
  "hsl(262, 83%, 58%)",   // n
  "hsl(217, 91%, 60%)",   // i
  "hsl(210, 100%, 60%)",  // S
  "hsl(217, 91%, 60%)",   // a
  "hsl(262, 83%, 58%)",   // p
  "hsl(210, 100%, 50%)",  // p
  "hsl(217, 91%, 60%)",   // h
  "hsl(262, 83%, 58%)",   // i
  "hsl(210, 100%, 55%)",  // r
  "hsl(217, 91%, 60%)",   // e
];

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  // { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const moreLinks = [
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
];

// Memoized animated letter for logo
const AnimatedLogoLetter = memo(({ letter, index, color }: { letter: string; index: number; color: string }) => (
  <motion.span
    className="inline-block"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      damping: 15,
      stiffness: 300,
      delay: 0.5 + index * 0.05,
    }}
    whileHover={{
      y: -3,
      scale: 1.1,
      transition: { type: "spring", damping: 10, stiffness: 400 }
    }}
    style={{ color }}
  >
    {letter}
  </motion.span>
));

AnimatedLogoLetter.displayName = "AnimatedLogoLetter";

export const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const letters = "UniSapphire".split("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.pathname, navigate]);

  const handleContactClick = useCallback(() => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.pathname, navigate]);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4"
    >
      <div 
        className={`max-w-6xl mx-auto nav-glass rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 ${
          scrolled ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 group touch-manipulation"
            onClick={handleLinkClick}
          >
            <motion.div 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors flex-shrink-0"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={unisapphireLogo} 
                alt="UniSapphire" 
                className="w-full h-full object-contain"
                loading="eager"
              />
            </motion.div>
            {/* Animated letter-by-letter logo text */}
            <span className="text-lg sm:text-xl font-display font-bold flex">
              {letters.map((letter, i) => (
                <AnimatedLogoLetter 
                  key={i} 
                  letter={letter} 
                  index={i} 
                  color={logoColors[i]} 
                />
              ))}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium text-sm group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300" />
              </motion.button>
            ))}
            {moreLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + navLinks.length) + 0.3 }}
              >
                <Link
                  to={link.href}
                  className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium text-sm group block"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="ml-4"
            >
              <HeroButton 
                size="sm"
                onClick={handleContactClick}
              >
                Get Started
              </HeroButton>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-3 -mr-2 hover:bg-white/5 active:bg-white/10 rounded-lg transition-colors touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-1 max-h-[60vh] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between text-muted-foreground hover:text-foreground active:text-foreground active:bg-primary/10 hover:bg-white/5 transition-all duration-200 font-medium py-4 px-4 rounded-xl touch-manipulation text-left min-h-[56px]"
                  >
                    <span className="text-base">{link.name}</span>
                    <ChevronRight className="w-5 h-5 opacity-50" />
                  </motion.button>
                ))}
                
                <div className="h-px bg-white/10 my-2" />
                
                {moreLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + index) * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between text-muted-foreground hover:text-foreground active:text-foreground active:bg-primary/10 hover:bg-white/5 transition-all duration-200 font-medium py-4 px-4 rounded-xl touch-manipulation text-left min-h-[56px]"
                    >
                      <span className="text-base">{link.name}</span>
                      <ChevronRight className="w-5 h-5 opacity-50" />
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="pt-4 pb-2"
                >
                  <HeroButton 
                    className="w-full min-h-[56px] text-base"
                    onClick={handleContactClick}
                  >
                    Get Started
                  </HeroButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
});

Navbar.displayName = "Navbar";