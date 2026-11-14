"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    if (!reducedMotion) {
      mesh.rotation.y += delta * 0.08;
      mesh.rotation.x += delta * 0.03;

      const targetX = state.pointer.y * 0.25;
      const targetY = state.pointer.x * 0.3;
      mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, mesh.rotation.x + targetX * 0.02, 0.02);
      mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, mesh.rotation.y + targetY * 0.02, 0.02);
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1} enabled={!reducedMotion}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#0d1420"
          roughness={0.12}
          metalness={0.4}
          clearcoat={1}
          clearcoatRoughness={0.08}
          distort={0.32}
          speed={1.1}
          emissive="#0a2a33"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function GlassOrb() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 42 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 4]} intensity={26} color="#00f5ff" />
      <pointLight position={[-4, -2, 3]} intensity={22} color="#8b5cf6" />
      <pointLight position={[0, -4, -3]} intensity={10} color="#00ffa3" />
      <Suspense fallback={null}>
        <Orb />
      </Suspense>
    </Canvas>
  );
}
