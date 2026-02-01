import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import unisapphireLogo from "@/assets/Unisapphire_17_page2.png";

const footerLinks = {
  services: [
    { name: "Application Development", href: "/services/app-development" },
    { name: "Website Development", href: "/services/web-development" },
    { name: "Graphics Designing", href: "/services/graphics-designing" },
    { name: "Shopify Development", href: "/services/shopify-development" },
    { name: "WordPress Development", href: "/services/wordpress-development" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-4 touch-manipulation">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden border border-primary/20">
                <img
                  src={unisapphireLogo}
                  alt="UniSapphire"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-display font-bold text-foreground">
                UniSapphire
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm text-sm sm:text-base">
              Transforming visions into digital reality. We're your partner in
              innovation, delivering cutting-edge IT solutions for the modern world.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary active:text-primary hover:bg-secondary/80 transition-colors touch-manipulation min-w-[44px] min-h-[44px]"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors text-xs sm:text-sm touch-manipulation inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors text-xs sm:text-sm touch-manipulation inline-block py-1"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors text-xs sm:text-sm touch-manipulation inline-block py-1"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground active:text-foreground transition-colors text-xs sm:text-sm touch-manipulation inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} UniSapphire. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Crafted with ❤️ by UniSapphire Team
          </p>
        </div>
      </div>
    </footer>
  );
};
