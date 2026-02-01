import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Smartphone, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { useNavigate } from "react-router-dom";

const features = [
  "iOS & Android Development",
  "Cross-platform Solutions",
  "Native Performance",
  "Cloud Integration",
  "Push Notifications",
  "Offline Functionality",
  "API Development",
  "App Store Optimization",
];

const process = [
  { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
  { step: "02", title: "Design", description: "Creating intuitive user experiences" },
  { step: "03", title: "Development", description: "Building robust, scalable applications" },
  { step: "04", title: "Launch", description: "Deploying and optimizing for success" },
];

const ServiceAppDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-400 font-medium">App Development</span>
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Cross-Platform <span className="gradient-text">Applications</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Build powerful, scalable mobile and desktop applications that work seamlessly 
                  across all platforms. We deliver native performance with cross-platform efficiency.
                </p>
                <HeroButton onClick={() => navigate('/#contact')}>
                  Start Your Project <ArrowRight className="w-4 h-4" />
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
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="container-padding mt-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-center mb-12"
            >
              Our <span className="gradient-text">Process</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-6 text-center"
                >
                  <span className="text-4xl font-display font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-lg font-display font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAppDevelopment;
