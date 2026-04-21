import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

function RotatingMesh() {
  const meshRef = useRef(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial color="#00E5FF" metalness={0.35} roughness={0.2} wireframe />
      </mesh>
    </Float>
  );
}

export function SceneCanvas() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 55 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 2]} intensity={1} />
        <Stars radius={50} depth={30} count={1500} factor={2} fade speed={0.7} />
        <RotatingMesh />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
