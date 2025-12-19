import { useCallback, useState } from 'react';

interface RippleEffect {
  x: number;
  y: number;
  id: number;
}

export const useRipple = () => {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);

  const createRipple = useCallback((event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    
    let x: number, y: number;
    
    if ('touches' in event) {
      // Touch event
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    } else {
      // Mouse event
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }

    const newRipple: RippleEffect = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  }, []);

  return { createRipple, ripples };
};
