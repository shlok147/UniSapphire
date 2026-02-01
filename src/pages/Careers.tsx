import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Remote",
    description: "Build scalable web applications using modern technologies.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    description: "Create beautiful, intuitive user experiences for our clients.",
  },
  {
    title: "Mobile App Developer",
    type: "Full-time",
    location: "Remote",
    description: "Develop cross-platform mobile applications using React Native.",
  },
  {
    title: "WordPress Developer",
    type: "Contract",
    location: "Remote",
    description: "Build custom WordPress themes and plugins for enterprise clients.",
  },
];

const benefits = [
  "Flexible remote work",
  "Competitive salary",
  "Learning & development",
  "Health benefits",
  "Paid time off",
  "Team retreats",
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Join Our Team</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                Build the Future with <span className="gradient-text">UniSapphire</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a team of passionate innovators crafting exceptional digital experiences. 
                We're always looking for talented individuals who share our vision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container-padding mt-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-bold text-center mb-10"
            >
              Why Work With Us?
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <p className="text-sm font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="container-padding mt-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-bold text-center mb-10"
            >
              Open Positions
            </motion.h2>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-6 group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-display font-bold group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{position.description}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Briefcase className="w-3 h-3" /> {position.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" /> {position.location}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? Send us your resume anyway!
              </p>
              <HeroButton onClick={() => window.location.href = 'mailto:unisapphire1@gmail.com'}>
                Contact Us <ArrowRight className="w-4 h-4" />
              </HeroButton>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
