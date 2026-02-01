import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
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
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Legal</span>
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
                Terms of <span className="gradient-text">Service</span>
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
                <h2 className="text-xl font-display font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using UniSapphire's services, you agree to be bound by these Terms 
                  of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  UniSapphire provides IT services including but not limited to application development, 
                  website development, graphic design, Shopify development, and WordPress development. 
                  The scope of each project will be defined in a separate agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">3. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms will be specified in the project agreement. Unless otherwise stated, 
                  invoices are due within 30 days of receipt. Late payments may incur additional charges.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, clients receive full ownership of the deliverables created 
                  specifically for their project. UniSapphire retains the right to use non-confidential 
                  work in our portfolio.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">5. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality regarding all client information and project 
                  details. We will not disclose confidential information to third parties without 
                  explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  UniSapphire's liability is limited to the amount paid for the services. We are not 
                  liable for any indirect, incidental, or consequential damages arising from the 
                  use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">7. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of our 
                  services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-bold mb-4 text-primary">8. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, contact us at{" "}
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

export default TermsOfService;
