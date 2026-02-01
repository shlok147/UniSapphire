import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { FloatingCube } from "@/components/3d/FloatingCube";
import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Complete Shopify store with custom theme and integrations",
  },
  {
    title: "Mobile Banking App",
    category: "App Development",
    description: "Cross-platform fintech solution with secure transactions",
  },
  {
    title: "Brand Identity Suite",
    category: "Graphics Design",
    description: "Full branding package including logo and marketing materials",
  },
  {
    title: "Corporate Website",
    category: "WordPress Development",
    description: "Custom WordPress theme with advanced CMS features",
  },
];

export const HeroSection = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const handleScrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6">
        {/* Background Effects */}
        <div className="hero-glow w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/40 top-0 left-1/4 -translate-x-1/2" />
        <div className="hero-glow w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-accent/30 bottom-0 right-1/4 translate-x-1/2" style={{ animationDelay: "3s" }} />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary icon-float" />
                <span className="text-xs sm:text-sm text-primary font-medium">
                  Innovative IT Solutions
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Transform Your Vision Into{" "}
                <span className="gradient-text text-glow">Digital Reality</span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* We craft exceptional digital experiences through cutting-edge application development, 
                stunning web solutions, and creative graphic design that sets your brand apart. */}
                <span className="text-foreground font-semibold">UniSapphire</span> delivers <span className="text-foreground font-semibold">innovative application development</span>, <span className="text-foreground font-semibold">high-quality web solutions</span>, and <span className="text-foreground font-semibold">creative design</span> tailored to your brand. Our platform is open for you to <span className="text-foreground font-semibold">explore, connect, and collaborate</span> with us effortlessly. Let's work together to <span className="text-foreground font-semibold">turn your vision into reality</span>.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <HeroButton
                  size="lg"
                  onClick={handleScrollToContact}
                  className="w-full sm:w-auto min-h-[52px] touch-manipulation"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </HeroButton>
                <HeroButton
                  variant="secondary"
                  size="lg"
                  onClick={() => setPortfolioOpen(true)}
                  className="w-full sm:w-auto min-h-[52px] touch-manipulation"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Our Work
                </HeroButton>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-14 justify-center lg:justify-start"
              >
                {[
                  { value: "5+", label: "Core Services" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden lg:flex justify-center items-center"
            >
              <FloatingCube />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <Dialog open={portfolioOpen} onOpenChange={setPortfolioOpen}>
        <DialogContent className="max-w-2xl bg-card border-white/10">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-display font-bold gradient-text">
              Our Recent Projects
            </DialogTitle>
          </DialogHeader>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4 max-h-[60vh] overflow-y-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-5 rounded-xl bg-secondary/50 border border-white/5 hover:border-primary/30 active:border-primary/50 transition-all duration-300 cursor-pointer group touch-manipulation"
              >
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-base sm:text-lg font-display font-bold mt-2 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Contact us for detailed case studies and more examples
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};