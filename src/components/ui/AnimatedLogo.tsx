import { motion } from "framer-motion";
import { memo } from "react";

interface AnimatedLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  animate?: boolean;
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

const sizeClasses = {
  sm: "text-lg sm:text-xl",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
  xl: "text-4xl sm:text-5xl md:text-6xl",
};

const AnimatedLetter = memo(({ 
  letter, 
  index, 
  color, 
  animate 
}: { 
  letter: string; 
  index: number; 
  color: string;
  animate: boolean;
}) => (
  <motion.span
    className="inline-block cursor-default"
    initial={animate ? { opacity: 0, y: 20, rotateX: -90, scale: 0.5 } : undefined}
    animate={animate ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : undefined}
    transition={{
      type: "spring",
      damping: 12,
      stiffness: 200,
      delay: index * 0.05,
    }}
    whileHover={animate ? {
      y: -8,
      scale: 1.2,
      textShadow: `0 0 30px ${color}80`,
      transition: { type: "spring", damping: 10, stiffness: 400 }
    } : undefined}
    style={{ 
      color,
      textShadow: `0 0 20px ${color}40`,
      transformStyle: "preserve-3d",
    }}
  >
    {letter}
  </motion.span>
));

AnimatedLetter.displayName = "AnimatedLetter";

export const AnimatedLogo = memo(({ 
  className = "", 
  size = "md", 
  showTagline = false,
  animate = true 
}: AnimatedLogoProps) => {
  const letters = "UniSapphire".split("");

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <motion.div
        className={`font-display font-bold flex ${sizeClasses[size]}`}
        initial={animate ? { opacity: 0 } : undefined}
        animate={animate ? { opacity: 1 } : undefined}
        transition={{ duration: 0.3 }}
        style={{ perspective: "1000px" }}
      >
        {letters.map((letter, i) => (
          <AnimatedLetter 
            key={i}
            letter={letter}
            index={i}
            color={logoColors[i]}
            animate={animate}
          />
        ))}
      </motion.div>
      
      {showTagline && (
        <motion.p
          initial={animate ? { opacity: 0, y: 10 } : undefined}
          animate={animate ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-muted-foreground text-sm sm:text-base mt-2"
        >
          Innovative IT Solutions
        </motion.p>
      )}
    </div>
  );
});

AnimatedLogo.displayName = "AnimatedLogo";