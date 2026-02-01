import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Cross-Platform Development in 2024",
    excerpt: "Explore how modern frameworks are revolutionizing the way we build applications for multiple platforms.",
    category: "Development",
    date: "Jan 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "Why Your Business Needs a Professional Website",
    excerpt: "Discover the key benefits of having a well-designed, fast, and responsive website for your business.",
    category: "Web Design",
    date: "Jan 10, 2024",
    readTime: "4 min read",
  },
  {
    title: "E-commerce Trends: Shopify vs Custom Solutions",
    excerpt: "A comprehensive comparison to help you choose the right e-commerce platform for your business.",
    category: "E-commerce",
    date: "Jan 5, 2024",
    readTime: "6 min read",
  },
  {
    title: "The Art of Effective Brand Design",
    excerpt: "Learn how consistent branding can transform your business identity and customer perception.",
    category: "Design",
    date: "Dec 28, 2023",
    readTime: "4 min read",
  },
  {
    title: "Optimizing WordPress for Maximum Performance",
    excerpt: "Tips and tricks to make your WordPress website lightning fast and SEO-friendly.",
    category: "WordPress",
    date: "Dec 20, 2023",
    readTime: "7 min read",
  },
  {
    title: "Building Scalable Applications: Best Practices",
    excerpt: "Essential strategies for creating applications that grow with your business needs.",
    category: "Development",
    date: "Dec 15, 2023",
    readTime: "8 min read",
  },
];

const Blog = () => {
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
                <span className="text-sm text-primary font-medium">Our Blog</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                Insights & <span className="gradient-text">Ideas</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest trends, tips, and insights from the world of 
                technology, design, and digital innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="container-padding mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-6 group cursor-pointer flex flex-col"
                >
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-display font-bold mt-3 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 container-padding"
        >
          <p className="text-muted-foreground">
            More articles coming soon. Stay tuned!
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
