import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ShoppingBag, CheckCircle, ArrowRight } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { useNavigate } from "react-router-dom";

const features = [
  "Custom Themes",
  "Store Setup",
  "Payment Integration",
  "Inventory Management",
  "SEO Optimization",
  "Mobile Responsive",
  "App Integration",
  "Analytics Dashboard",
];

const ShopifyDevelopment = () => {
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
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                  <ShoppingBag className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Shopify Development</span>
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                  E-commerce <span className="gradient-text">Excellence</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Custom Shopify stores that drive conversions and provide exceptional 
                  shopping experiences. From setup to scaling.
                </p>
                <HeroButton onClick={() => navigate('/#contact')}>
                  Start Selling <ArrowRight className="w-4 h-4" />
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
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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

export default ShopifyDevelopment;
