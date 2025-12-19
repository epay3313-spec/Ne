import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Radio } from 'lucide-react';

const crisisItems = [
  {
    icon: AlertTriangle,
    title: 'FUD Mitigation',
    description: 'Strategies to de-escalate panic during market dips.',
  },
  {
    icon: ShieldAlert,
    title: 'Scam Defense',
    description: 'Impersonator detection and user safety protocols.',
  },
  {
    icon: Radio,
    title: 'Incident Response',
    description: 'Professional communication during maintenance/outages.',
  },
];

export const CrisisSection = () => {
  return (
    <section id="crisis" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            Crisis Management
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Serious. Secure. Authoritative.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {crisisItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-lg p-6 flex items-start gap-6 hover:border-secondary transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-secondary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
