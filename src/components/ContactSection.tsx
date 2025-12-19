import { motion } from 'framer-motion';
import { Send, Twitter, MessageCircle, Mail, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { RippleContainer } from '@/components/RippleContainer';
import { ResumeDownload } from '@/components/ResumeDownload';

const contactLinks = [
  {
    icon: Send,
    label: 'Telegram',
    href: 'https://t.me/PhilipAnschutz0',
    primary: true,
    glowClass: 'hover:glow-cyan',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    href: 'https://x.com/MirRiyad',
    glowClass: 'hover:glow-blue',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://bd.linkedin.com/in/riyad-hasan-897276187',
    glowClass: 'hover:glow-linkedin',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:riyadhasan826@gmail.com',
    glowClass: 'hover:glow-email',
  },
];

export const ContactSection = () => {
  const { createRipple, ripples } = useRipple();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="contact" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Scale? Let's Talk.
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect with me on your preferred platform
          </p>
        </motion.div>

        <ResumeDownload />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onMouseDown={createRipple}
              onTouchStart={createRipple}
              className={`group relative ripple-container tactile-press glass-card rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 sm:gap-4 transition-all duration-300 cursor-pointer ${
                link.primary ? 'border-2 border-primary' : 'border border-border'
              } ${hoveredIndex === index ? link.glowClass : ''}`}
            >
              <RippleContainer ripples={ripples} />
              <link.icon className="h-10 w-10 sm:h-12 sm:w-12 text-light-blue transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="font-mono text-xs sm:text-sm">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
