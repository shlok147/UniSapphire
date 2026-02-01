import { motion } from "framer-motion";
import { Gem } from "lucide-react";

export const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[90] bg-background/80 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner with logo */}
        <div className="relative">
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary"
          />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Gem className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
        </div>

        {/* Loading text */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-sm text-muted-foreground font-medium"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};
