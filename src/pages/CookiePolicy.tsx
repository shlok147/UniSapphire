import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Cookie } from "lucide-react";

const CookiePolicy = () => {
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
                <Cookie className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Legal</span>
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
                Cookie <span className="gradient-text">Policy</span>
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
                <h2 className="text-xl font-display font-bold mb-4 text-primary">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit a 
                  website. They help websites remember your preferences and improve your browsing 
                  experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  UniSapphire uses cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Analytics cookies: Help us understand how visitors use our website</li>
                  <li>Preference cookies: Remember your settings and preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h3 className="font-bold mb-2">Essential Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      These cookies are necessary for the website to function and cannot be 
                      switched off in our systems.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h3 className="font-bold mb-2">Performance Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      These cookies allow us to count visits and traffic sources to measure and 
                      improve the performance of our site.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h3 className="font-bold mb-2">Functional Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      These cookies enable the website to provide enhanced functionality and 
                      personalization.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You can control and manage cookies through your browser settings. Please note 
                  that disabling certain cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our use of cookies, please contact us at{" "}
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

export default CookiePolicy;
