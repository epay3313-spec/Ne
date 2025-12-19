import { motion } from 'framer-motion';

export const BioSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] mx-auto relative"
        >
          {/* Neon Cyan accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary glow-cyan" />
          
          <div className="pl-6 md:pl-8">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90">
              I am a crypto-native community architect. I don't just ban bots; I build culture. 
              With a deep understanding of market sentiment and exchange mechanics, I bridge the 
              gap between technical teams and retail traders, ensuring your community remains 
              bullish even when the market isn't.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
