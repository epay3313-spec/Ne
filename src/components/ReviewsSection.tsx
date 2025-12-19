import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    author: 'Exchange Leadership',
    role: 'Icrypex',
    content: 'Transformed our Telegram from chaos into a professional community. Response times are lightning fast, and user satisfaction has never been higher.',
  },
  {
    author: 'Community Director',
    role: 'Fmfw',
    content: 'Handled a major FUD attack with incredible professionalism. Turned a potential disaster into an opportunity to strengthen community trust. Absolutely reliable.',
  },
  {
    author: 'Operations Manager',
    role: 'Emirex',
    content: 'Outstanding 24/7 moderation and crisis management. The community engagement has increased significantly, and our users feel safer and more informed than ever.',
  },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-6 sm:p-8 relative group"
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 h-6 w-6 sm:h-8 sm:w-8 text-primary/30 transition-all duration-300 group-hover:text-primary/50 group-hover:scale-110 group-hover:rotate-12" />
              <p className="text-base sm:text-lg mb-6 leading-relaxed">{review.content}</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-sm sm:text-base">{review.author}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
