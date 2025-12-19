interface RippleContainerProps {
  ripples: Array<{ x: number; y: number; id: number }>;
}

export const RippleContainer = ({ ripples }: RippleContainerProps) => {
  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, rgba(0, 255, 255, 0) 70%)',
            animation: 'ripple-expand 600ms ease-out forwards',
          }}
        />
      ))}
    </>
  );
};
