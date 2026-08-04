import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { MeshDistortMaterial } from "@react-three/drei";

interface ShapeProps {
  position: [number, number, number];
  color: string;
  speed: number;
}

function FloatingShape({ position, color, speed }: ShapeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * speed) * 0.2;
    meshRef.current.rotation.y = Math.cos(time * speed * 0.7) * 0.2;
    meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.5) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function FloatingShapes() {
  const shapes = [
    { position: [-2, 0, 0], color: "#38bdf8", speed: 0.5 },
    { position: [2, -1, -2], color: "#22d3ee", speed: 0.7 },
    { position: [0, 1.5, -1], color: "#7c3aed", speed: 0.6 },
    { position: [1.5, -0.5, 1], color: "#0066ff", speed: 0.8 },
  ];

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position as [number, number, number]}
          color={shape.color}
          speed={shape.speed}
        />
      ))}
    </>
  );
}
