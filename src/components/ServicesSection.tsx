import { motion } from 'framer-motion';
import { Globe, TrendingUp, Shield } from 'lucide-react';
import { useRipple } from '@/hooks/useRipple';
import { RippleContainer } from '@/components/RippleContainer';

const services = [
  {
    icon: Globe,
    title: '24/7 Global Coverage',
    description: 'Round-the-clock community management across all time zones. Your community never sleeps, and neither do I.',
  },
  {
    icon: TrendingUp,
    title: 'Organic Engagement',
    description: 'Authentic conversations that build trust. No bots, no fake hype—just real community growth.',
  },
  {
    icon: Shield,
    title: 'Bot/Spam Elimination',
    description: 'Advanced filtering and moderation to keep your community clean, safe, and professional.',
  },
];

export const ServicesSection = () => {
  const { createRipple, ripples } = useRipple();

  return (
    <section id="services" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Why Hire Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onMouseDown={createRipple}
              onTouchStart={createRipple}
              className="relative ripple-container tactile-press glass-card rounded-lg p-8 transition-all duration-300 hover:border-primary group cursor-pointer"
            >
              <RippleContainer ripples={ripples} />
              <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4 sm:mb-6 group-hover:glow-cyan transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
