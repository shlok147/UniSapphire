import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, Loader2, Globe } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact_Email = import.meta.env.VITE_Contact_Email;
const Contact_Phone = import.meta.env.VITE_Contact_Phone;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: Contact_Email,
    href: `mailto:${Contact_Email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: Contact_Phone,
    href: `tel:${Contact_Phone}`,
  },
  {
    icon: Globe,
    label: "Work Mode",
    value: "We Work Remotely Only",
    href: "#",
  },
];

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-3 sm:mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Ready to start your next project? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-8 space-y-5 sm:space-y-6">
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border focus:border-primary min-h-[48px] text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                  Your Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border focus:border-primary min-h-[48px] text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                  Your Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-secondary/50 border-border focus:border-primary resize-none text-sm sm:text-base"
                />
              </div>
              <HeroButton type="submit" className="w-full min-h-[52px] touch-manipulation" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </HeroButton>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="glass-card p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-display font-bold mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 sm:gap-4 group touch-manipulation py-1"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-active:bg-primary/20 transition-colors flex-shrink-0">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary group-active:text-primary transition-colors text-sm sm:text-base truncate">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-display font-bold mb-3 sm:mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 sm:space-y-3 text-muted-foreground">
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Monday - Sunday</span>
                  <span className="text-primary font-semibold">24/7</span>
                </div>
                <p className="text-xs sm:text-sm pt-2">
                  We're always available to assist you with your projects and inquiries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};