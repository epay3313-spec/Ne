import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useRipple } from '@/hooks/useRipple';
import { RippleContainer } from '@/components/RippleContainer';

export const HeroSection = () => {
  const { createRipple, ripples } = useRipple();

  const scrollToResults = () => {
    const element = document.querySelector('#stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-cyan leading-tight px-4">
            Building Strong Communities
            <br />
            for Top Tier Exchanges.
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl mb-6 max-w-4xl mx-auto px-4"
            style={{ color: '#B0B0B0' }}
          >
            Turning passive members into active traders through strategic engagement, 24/7 security, and hype management.
          </motion.p>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto px-4">
            Telegram Moderation | Twitter Hype | Crisis Management
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={scrollToResults}
              onMouseDown={createRipple}
              onTouchStart={createRipple}
              className="relative ripple-container tactile-press bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all glow-cyan text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6"
            >
              <RippleContainer ripples={ripples} />
              View My Results
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce-subtle" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
