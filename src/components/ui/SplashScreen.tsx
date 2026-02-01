import { motion, AnimatePresence } from "framer-motion";
import { memo, useMemo } from "react";
import unisapphireLogo from "@/assets/Unisapphire_17_page2.png";

interface SplashScreenProps {
  isLoading: boolean;
}

const logoColors = [
  "hsl(217, 91%, 60%)",   // U - Blue
  "hsl(262, 83%, 58%)",   // n - Purple  
  "hsl(217, 91%, 60%)",   // i - Blue
  "hsl(210, 100%, 60%)",  // S - Light Blue
  "hsl(217, 91%, 60%)",   // a - Blue
  "hsl(262, 83%, 58%)",   // p - Purple
  "hsl(210, 100%, 50%)",  // p - Bright Blue
  "hsl(217, 91%, 60%)",   // h - Blue
  "hsl(262, 83%, 58%)",   // i - Purple
  "hsl(210, 100%, 55%)",  // r - Light Blue
  "hsl(217, 91%, 60%)",   // e - Blue
];

// Memoized particle component to prevent re-renders
const FloatingParticle = memo(({ index }: { index: number }) => {
  const randomX = useMemo(() => Math.random() * 100, []);
  const randomY = useMemo(() => Math.random() * 100, []);
  const randomDuration = useMemo(() => 3 + Math.random() * 2, []);
  const randomDelay = useMemo(() => Math.random() * 2, []);

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/40"
      style={{ left: `${randomX}%`, top: `${randomY}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        y: [-20, -80],
        scale: [0, 1, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "easeOut",
      }}
    />
  );
});

FloatingParticle.displayName = "FloatingParticle";

// Memoized animated letter component
const AnimatedLetter = memo(({ letter, index, color }: { letter: string; index: number; color: string }) => (
  <motion.span
    className="inline-block"
    initial={{ 
      opacity: 0, 
      y: 50,
      rotateY: -90,
      scale: 0,
    }}
    animate={{ 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      scale: 1,
    }}
    transition={{
      type: "spring",
      damping: 12,
      stiffness: 200,
      delay: 0.4 + index * 0.08,
    }}
    style={{ 
      color,
      textShadow: `0 0 30px ${color}60`,
      transformStyle: "preserve-3d",
    }}
  >
    <motion.span
      className="inline-block"
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
    >
      {letter}
    </motion.span>
  </motion.span>
));

AnimatedLetter.displayName = "AnimatedLetter";

export const SplashScreen = memo(({ isLoading }: SplashScreenProps) => {
  const letters = "UniSapphire".split("");
  const particles = useMemo(() => Array.from({ length: 15 }, (_, i) => i), []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden will-change-transform"
        >
          {/* Optimized floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((i) => (
              <FloatingParticle key={i} index={i} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-6 sm:gap-8 relative z-10 px-4">
            {/* Logo with professional animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-[-15px] rounded-2xl bg-primary/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Rotating border */}
              <motion.div
                className="absolute inset-[-3px] rounded-2xl bg-gradient-to-r from-primary via-accent to-primary"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ padding: "2px" }}
              />
              
              {/* Logo container */}
              <motion.div
                className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-background border-2 border-primary/20 overflow-hidden flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    "0 0 20px hsla(217, 91%, 60%, 0.3)",
                    "0 0 40px hsla(217, 91%, 60%, 0.5)",
                    "0 0 20px hsla(217, 91%, 60%, 0.3)",
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={unisapphireLogo}
                  alt="UniSapphire"
                  className="w-full h-full object-contain p-2"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Google-style animated letter-by-letter logo text */}
            <div 
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold flex"
              style={{ perspective: "1000px" }}
            >
              {letters.map((letter, i) => (
                <AnimatedLetter 
                  key={i} 
                  letter={letter} 
                  index={i} 
                  color={logoColors[i]} 
                />
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-muted-foreground text-sm sm:text-base"
            >
              Innovative IT Solutions
            </motion.p>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-3"
            >
              {/* Progress bar */}
              <div className="w-40 sm:w-48 h-1 bg-muted/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              </div>
              
              {/* Animated dots */}
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

SplashScreen.displayName = "SplashScreen";
