import { motion } from "framer-motion";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Delivering solutions that make a real difference for your business.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. Building lasting partnerships.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Bringing the latest technologies to every project we deliver.",
  },
];

const highlights = [
  "Award-winning design team",
  "Agile development methodology",
  "24/7 dedicated support",
  "Transparent communication",
  "Scalable solutions",
  "Data-driven decisions",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-accent/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block text-primary font-medium text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About Us
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 sm:mb-8">
              Crafting Digital Excellence Since{" "}
              <span className="gradient-text">2019</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
              UniSapphire is a forward-thinking IT company dedicated to transforming businesses 
              through innovative technology solutions. Our team of passionate developers, 
              designers, and strategists work together to create exceptional digital experiences.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
              From startups to enterprises, we've helped clients across industries 
              achieve their digital transformation goals. Our commitment to quality, 
              innovation, and client satisfaction sets us apart in the competitive IT landscape.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-2 sm:gap-3 group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-xs sm:text-sm">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-5"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover p-4 sm:p-6 flex gap-4 sm:gap-5"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/10">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-display font-bold mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};