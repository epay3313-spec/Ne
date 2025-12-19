import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRipple } from '@/hooks/useRipple';
import { RippleContainer } from '@/components/RippleContainer';

export const ResumeDownload = () => {
  const { createRipple, ripples } = useRipple();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Riyad_Resume.pdf';
    link.download = 'Riyad_Hasan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-12"
    >
      <Button
        onClick={handleDownload}
        onMouseDown={createRipple}
        onTouchStart={createRipple}
        size="lg"
        className="group relative ripple-container tactile-press bg-destructive/20 border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all glow-red text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6"
      >
        <RippleContainer ripples={ripples} />
        <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
        Download Resume
      </Button>
    </motion.div>
  );
};
