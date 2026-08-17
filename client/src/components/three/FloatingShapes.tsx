import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { MeshDistortMaterial, Float, Sphere, Box, Torus } from "@react-three/drei";

function NeuralNode({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[0.6, 1]} />
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function GlassCube({ position }: { position: [number, number, number] }) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.25;
  });

  return (
    <group ref={ref} position={position}>
      <Box args={[1.2, 1.2, 1.2]}>
        <meshPhysicalMaterial
          color="#0066ff"
          transparent
          opacity={0.15}
          roughness={0}
          metalness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </Box>
      <Box args={[1.22, 1.22, 1.22]}>
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.3} />
      </Box>
    </group>
  );
}

function WireframeSphere() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <Sphere args={[2.5, 32, 32]}>
        <meshBasicMaterial color="#0066ff" wireframe transparent opacity={0.08} />
      </Sphere>
    </mesh>
  );
}

function OrbitRing({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={ref} position={position}>
      <Torus args={[1.8, 0.02, 16, 100]}>
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </Torus>
    </mesh>
  );
}

export default function FloatingShapes() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0066ff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22d3ee" />
      <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={0.8} color="#8b5cf6" />

      <WireframeSphere />
      <OrbitRing position={[0, 0, 0]} color="#22d3ee" />

      <NeuralNode position={[-1.5, 0.5, 0]} color="#0066ff" scale={1.1} />
      <NeuralNode position={[1.8, -0.3, -0.5]} color="#22d3ee" scale={0.9} />
      <NeuralNode position={[0.5, 1.2, -1]} color="#8b5cf6" scale={0.7} />
      <NeuralNode position={[-0.8, -1, 0.5]} color="#0066ff" scale={0.8} />

      <GlassCube position={[0, 0, 0.5]} />
    </>
  );
}
