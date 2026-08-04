import { Suspense, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

interface Scene3DProps {
  children: ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
  controls?: boolean;
  className?: string;
}

export default function Scene3D({
  children,
  camera = { position: [0, 0, 5], fov: 75 },
  controls = false,
  className = "",
}: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <PerspectiveCamera
          makeDefault
          position={camera.position || [0, 0, 5]}
          fov={camera.fov || 75}
        />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />

        <Suspense fallback={null}>{children}</Suspense>

        {controls && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  );
}
