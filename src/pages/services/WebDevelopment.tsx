import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Globe, CheckCircle, ArrowRight } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { useNavigate } from "react-router-dom";

const features = [
  "Responsive Design",
  "SEO Optimization",
  "Fast Performance",
  "Modern UI/UX",
  "Custom CMS",
  "E-commerce Ready",
  "Analytics Integration",
  "Security First",
];

const WebDevelopment = () => {
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
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">Web Development</span>
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Stunning <span className="gradient-text">Websites</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From marketing sites to complex web applications, we build fast, responsive, 
                  and beautiful websites that convert visitors into customers.
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
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
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

export default WebDevelopment;
