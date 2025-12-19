import { motion } from 'framer-motion';
import { useRipple } from '@/hooks/useRipple';
import { RippleContainer } from '@/components/RippleContainer';
const tools = {
  moderation: ['Miss Rose', 'Combot', 'Shieldy'],
  analytics: ['LunarCrush', 'Twitter Analytics', 'Etherscan'],
  workflow: ['Notion', 'Trello'],
};

export const ToolsSection = () => {
  const { createRipple, ripples } = useRipple();

  return (
    <section id="tools" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Tools of the Trade</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(tools).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold capitalize mb-4 text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {items.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.15 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onMouseDown={createRipple}
                    onTouchStart={createRipple}
                    className="relative ripple-container tactile-press glass-card px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-primary/50 hover:border-primary transition-all cursor-pointer"
                  >
                    <RippleContainer ripples={ripples} />
                    <span className="font-mono text-xs sm:text-sm">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
