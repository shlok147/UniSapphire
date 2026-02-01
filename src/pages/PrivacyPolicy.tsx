import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Shield, Sparkles } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Legal</span>
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 md:p-12 space-y-8"
            >
              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At UniSapphire, we collect information you provide directly to us, such as when you 
                  contact us through our website, request a quote, or engage our services. This may 
                  include your name, email address, phone number, and project details.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you about projects and updates, send you technical notices and 
                  support messages, and respond to your inquiries.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third 
                  parties without your consent, except as necessary to provide our services or as 
                  required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no 
                  method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">5. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You 
                  may also opt out of receiving promotional communications from us at any time by 
                  contacting us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">6. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:unisapphire1@gmail.com" className="text-primary hover:underline">
                    unisapphire1@gmail.com
                  </a>
                </p>
              </section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
