interface MeshGradientProps {
  className?: string;
  opacity?: number;
}

export default function MeshGradient({ className = "", opacity = 0.4 }: MeshGradientProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      <div className="absolute inset-0 mesh-gradient" />
    </div>
  );
}
