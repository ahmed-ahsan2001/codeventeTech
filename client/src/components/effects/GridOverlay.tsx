interface GridOverlayProps {
  className?: string;
  opacity?: number;
  size?: number;
}

export default function GridOverlay({
  className = "",
  opacity = 0.03,
  size = 48,
}: GridOverlayProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, ${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}
