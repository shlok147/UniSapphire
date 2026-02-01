import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Smartphone, Globe, Palette, ShoppingBag, FileCode, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Cross-platform mobile and desktop apps. iOS, Android, and beyond.",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    href: "/services/app-development",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "From stunning marketing sites to complex web applications.",
    gradient: "from-blue-500/20 to-purple-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    href: "/services/web-development",
  },
  {
    icon: Palette,
    title: "Graphics Designing",
    description: "Visual storytelling that resonates with your audience.",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    href: "/services/graphics-designing",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description: "Custom e-commerce solutions that drive conversions.",
    gradient: "from-green-500/20 to-teal-500/20",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    href: "/services/shopify-development",
  },
  {
    icon: FileCode,
    title: "WordPress Development",
    description: "Professional websites with powerful content management.",
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    href: "/services/wordpress-development",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span 
            className="inline-block text-primary font-medium text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What We Do
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Comprehensive IT solutions tailored to transform your business
            and elevate your digital presence.
          </p>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <Link
                to={service.href}
                className={`service-card group block h-full touch-manipulation ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl`} />
                
                <div className="relative z-10">
                  {/* Icon with 3D effect */}
                  <motion.div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${service.iconBg} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-active:scale-105 transition-transform duration-300`}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${service.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
