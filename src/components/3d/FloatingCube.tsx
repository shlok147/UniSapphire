import { motion } from "framer-motion";

export const FloatingCube = () => {
  return (
    <div className="relative w-80 h-80 perspective-1000">
      {/* Animated 3D Shapes Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-72 h-72 rounded-full border border-primary/20"
          style={{ transformStyle: "preserve-3d" }}
        />
        
        {/* Middle rotating ring - opposite direction */}
        <motion.div
          animate={{ rotateZ: -360, rotateX: 60 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-56 h-56 rounded-full border border-accent/30"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Inner rotating ring */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-40 h-40 rounded-full border-2 border-primary/40"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      {/* Central glowing orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/60 to-accent/40 blur-sm" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-accent" />
        <div className="absolute inset-4 rounded-full bg-background/20 backdrop-blur-sm" />
      </motion.div>

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={i}
            initial={{ x, y, opacity: 0 }}
            animate={{
              x: [x, x + 10, x],
              y: [y, y - 15, y],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute top-1/2 left-1/2 w-4 h-4"
            style={{ transform: `translate(-50%, -50%)` }}
          >
            <div 
              className={`w-full h-full ${i % 2 === 0 ? 'rounded-full' : 'rounded-sm rotate-45'} 
                bg-gradient-to-br ${i % 3 === 0 ? 'from-primary/60 to-primary/20' : 'from-accent/60 to-accent/20'}`}
              style={{
                boxShadow: `0 0 20px hsl(var(--${i % 2 === 0 ? 'primary' : 'accent'}) / 0.5)`,
              }}
            />
          </motion.div>
        );
      })}

      {/* Orbital particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 120 + i * 20,
            height: 120 + i * 20,
          }}
        >
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-primary/60"
            style={{
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px hsl(var(--primary) / 0.5)',
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        </motion.div>
      ))}

      {/* Glowing backdrop */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-2xl" />
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent rounded-full blur-3xl" />
    </div>
  );
};
