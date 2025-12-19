import { motion } from 'framer-motion';
import { useRipple } from '@/hooks/useRipple';
import { RippleContainer } from '@/components/RippleContainer';
const skills = [
  'Crisis De-escalation',
  'Sentiment Analysis',
  'Viral Marketing / Shilling',
  'Technical Support (L1/L2)',
  'AMA Hosting',
  'Copywriting',
  'Raid Leading',
  'User Onboarding',
];

export const SkillsSection = () => {
  const { createRipple, ripples } = useRipple();

  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Core Competencies</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              onMouseDown={createRipple}
              onTouchStart={createRipple}
              className="relative ripple-container tactile-press px-6 py-3 rounded-full bg-background border border-foreground/30 hover:border-primary transition-all duration-300 hover:glow-cyan cursor-pointer"
            >
              <RippleContainer ripples={ripples} />
              <span className="text-sm md:text-base font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
