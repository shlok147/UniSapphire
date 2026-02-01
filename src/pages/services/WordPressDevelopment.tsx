import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FileCode, CheckCircle, ArrowRight } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { useNavigate } from "react-router-dom";

const features = [
  "Custom Themes",
  "Plugin Development",
  "Speed Optimization",
  "Security Hardening",
  "SEO Ready",
  "WooCommerce",
  "Multisite Setup",
  "Migration Services",
];

const WordPressDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                  <FileCode className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm text-indigo-400 font-medium">WordPress Development</span>
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Powerful <span className="gradient-text">WordPress</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Professional WordPress websites with custom themes, powerful plugins, 
                  and enterprise-grade performance and security.
                </p>
                <HeroButton onClick={() => navigate('/#contact')}>
                  Get Started <ArrowRight className="w-4 h-4" />
                </HeroButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 p-3 glass-card"
                  >
                    <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WordPressDevelopment;
