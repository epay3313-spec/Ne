import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

const StatCounter = ({ value, suffix, label }: StatCounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-cyan mb-3 sm:mb-4">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="text-lg sm:text-xl text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section id="stats" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            The Track Record
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">High-Impact Data</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <StatCounter value={45} suffix="k+" label="Members Managed" />
          <StatCounter value={250} suffix="+" label="AMAs Hosted" />
          <StatCounter value={0} suffix="" label="Unresolved Incidents" />
        </div>
      </div>
    </section>
  );
};
