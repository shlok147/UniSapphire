import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = memo(() => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, y: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
});

ScrollToTopButton.displayName = "ScrollToTopButton";

export const ScrollToTop = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && <ScrollToTopButton key="scroll-to-top" />}
    </AnimatePresence>
  );
});

ScrollToTop.displayName = "ScrollToTop";
