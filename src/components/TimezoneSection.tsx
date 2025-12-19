import { motion } from 'framer-motion';
import { Clock, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export const TimezoneSection = () => {
  const [newYorkTime, setNewYorkTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nyTime = toZonedTime(now, 'America/New_York');
      const formatted = format(nyTime, 'h:mm:ss a');
      setNewYorkTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Global Coverage</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Available across all timezones</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto glass-card rounded-2xl p-8 border-2 border-primary"
        >
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
            <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary animate-pulse-glow" />
            <h3 className="text-xl sm:text-2xl font-bold">New York</h3>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-secondary animate-bounce-subtle" />
            <div className="text-3xl sm:text-4xl font-mono font-bold text-gradient-cyan">
              {newYorkTime || 'Loading...'}
            </div>
          </div>

          <div className="text-center text-muted-foreground text-sm">
            EST/EDT (UTC-5/UTC-4)
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              Providing 24/7 support across all global markets
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
