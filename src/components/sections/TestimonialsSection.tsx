import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "UniSapphire transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations. The team delivered a stunning website that increased our conversions by 150%.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Working with UniSapphire was an absolute pleasure. They built our mobile app from scratch with exceptional quality. The 24/7 support and quick turnaround time made the entire process seamless.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthHub",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The Shopify store UniSapphire created for us is beautiful and highly functional. Sales have doubled since launch. Their expertise in e-commerce is unmatched!",
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "NextGen Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Exceptional WordPress development skills! UniSapphire delivered a custom theme that perfectly matches our brand. The site is fast, secure, and easy to manage.",
  },
  {
    id: 5,
    name: "Amanda Foster",
    role: "Creative Director",
    company: "DesignCraft",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The graphic designs from UniSapphire are stunning! They captured our vision perfectly and created a cohesive brand identity that our clients love.",
  },
];

const companyLogos = [
  { name: "TechStart", initial: "T" },
  { name: "InnovateLab", initial: "I" },
  { name: "GrowthHub", initial: "G" },
  { name: "NextGen", initial: "N" },
  { name: "DesignCraft", initial: "D" },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = useCallback(() => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Swipe handling for mobile
  const handleDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevTestimonial();
    } else if (info.offset.x < -threshold) {
      nextTestimonial();
    }
  }, [nextTestimonial, prevTestimonial]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-glow">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4">
            Don't just take our word for it. Here's what our clients have to say about working with UniSapphire.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative px-4 sm:px-0" ref={containerRef}>
            {/* Main Testimonial Card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="relative cursor-grab active:cursor-grabbing touch-pan-y"
              >
                <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 sm:-top-6 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-glow rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 sm:mb-6 pt-2 sm:pt-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 sm:mb-8 font-light italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-glow rounded-full blur-sm" />
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-background"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonials[currentIndex].name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Hidden on mobile, use swipe instead */}
            <button
              onClick={prevTestimonial}
              className="hidden sm:flex absolute left-0 sm:-left-4 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-card/80 backdrop-blur-sm border border-white/10 rounded-full items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 touch-manipulation"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="hidden sm:flex absolute right-0 sm:-right-4 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-card/80 backdrop-blur-sm border border-white/10 rounded-full items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 touch-manipulation"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator + Mobile Hint */}
          <div className="flex flex-col items-center gap-3 mt-6 sm:mt-8">
            <p className="text-xs text-muted-foreground sm:hidden">Swipe to see more</p>
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 touch-manipulation min-w-[32px] ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-primary to-glow"
                      : "w-2 bg-white/20 hover:bg-white/40 active:bg-white/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {companyLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary/70 to-glow/70 group-hover:from-primary group-hover:to-glow transition-all duration-300">
                    {logo.initial}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {logo.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
