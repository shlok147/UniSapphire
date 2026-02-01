import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  default:
    "Hello! I'm UniSapphire's AI assistant. How can I help you today? You can ask me about our services, pricing, or any other inquiries.",
  services:
    "We offer five main services:\n\n1. **Application Development** - Cross-platform mobile and desktop apps\n2. **Website Development** - Custom websites, e-commerce, and web applications\n3. **Graphics Designing** - Brand identity, UI/UX, and marketing materials\n4. **Shopify Development** - E-commerce stores and customization\n5. **WordPress Development** - Custom themes and plugins\n\nWhich service interests you?",
  pricing:
    "Our pricing varies based on project scope and complexity. We offer flexible packages for projects of all sizes. For a detailed quote, please share your project requirements through our contact form!",
  contact:
    "You can reach us at:\n📧 unisapphire1@gmail.com\n📞 +91 96387 90699\n\nOr fill out the contact form on this page, and we'll get back to you within 24 hours!",
  timeline:
    "Project timelines depend on complexity:\n• Simple websites: 2-4 weeks\n• Mobile apps: 6-12 weeks\n• Complex applications: 3-6 months\n\nWe'll provide a detailed timeline after understanding your requirements.",
};

const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("do")) {
    return botResponses.services;
  }
  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("quote")) {
    return botResponses.pricing;
  }
  if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
    return botResponses.contact;
  }
  if (lowerMessage.includes("time") || lowerMessage.includes("long") || lowerMessage.includes("deadline")) {
    return botResponses.timeline;
  }
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "Hello! 👋 Welcome to UniSapphire! How can I assist you today?";
  }
  return "Thanks for your message! For detailed information, I'd recommend reaching out to our team through the contact form. Is there anything specific about our services I can help with?";
};

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: botResponses.default,
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot thinking
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const botMessage: Message = {
      id: Date.now() + 1,
      text: getResponse(input),
      isBot: true,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 active:scale-95 transition-transform touch-manipulation ${
          isOpen ? "hidden" : ""
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 sm:inset-auto sm:bottom-6 sm:right-6 z-50 sm:w-[380px] glass-card overflow-hidden flex flex-col rounded-2xl"
            style={{ maxHeight: "calc(100vh - 2rem)", height: "auto" }}
          >
            {/* Header */}
            <div className="p-3 sm:p-4 border-b border-border flex items-center justify-between bg-card/80 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base">
                    UniSapphire AI
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Always here to help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 -mr-1 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0" style={{ maxHeight: "calc(100vh - 12rem)" }}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 sm:gap-3 ${message.isBot ? "" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      message.isBot ? "bg-primary/20" : "bg-accent/20"
                    }`}
                  >
                    {message.isBot ? (
                      <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    ) : (
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                    )}
                  </div>
                  <div
                    className={`max-w-[85%] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl ${
                      message.isBot
                        ? "bg-secondary text-foreground rounded-tl-none"
                        : "bg-primary text-primary-foreground rounded-tr-none"
                    }`}
                  >
                    <p className="text-xs sm:text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 sm:gap-3"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div className="bg-secondary p-2.5 sm:p-3 rounded-xl sm:rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-muted-foreground animate-bounce" />
                      <span
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-muted-foreground animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <span
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-muted-foreground animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-border bg-card/80 flex-shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="bg-secondary/50 border-border text-sm sm:text-base min-h-[44px]"
                />
                <HeroButton type="submit" size="icon" disabled={!input.trim()} className="min-w-[44px] min-h-[44px]">
                  <Send className="w-4 h-4" />
                </HeroButton>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};