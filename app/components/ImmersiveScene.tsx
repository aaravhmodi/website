"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type PanelProps = {
  position: [number, number, number];
  label: string;
  index: number;
};

function FloatingPanel({ position, label, index }: PanelProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const textMesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = Math.sin(t * 0.4 + index) * 0.12;
    mesh.current.rotation.x = Math.cos(t * 0.3 + index) * 0.06;
  });

  return (
    <Float speed={1.2 + index * 0.15} rotationIntensity={0.2} floatIntensity={0.6}>
      <group position={position}>
        <mesh ref={mesh}>
          <boxGeometry args={[2.6, 0.9, 0.05]} />
          <meshStandardMaterial
            color="#a0c4ff"
            transparent
            opacity={0.09}
            roughness={0.1}
            metalness={0.8}
            envMapIntensity={1}
          />
        </mesh>
        {/* border lines via edge geometry */}
        <lineSegments ref={textMesh as React.RefObject<THREE.LineSegments>}>
          <edgesGeometry args={[new THREE.BoxGeometry(2.6, 0.9, 0.05)]} />
          <lineBasicMaterial color="#7eb8ff" transparent opacity={0.28} />
        </lineSegments>
      </group>
    </Float>
  );
}

function SceneLabels({ labels }: { labels: string[] }) {
  return (
    <>
      {labels.map((label, i) => (
        <FloatingPanel
          key={label}
          label={label}
          index={i}
          position={[
            i % 2 === 0 ? 2.2 : 3.8,
            1.6 - i * 1.05,
            -i * 0.2,
          ]}
        />
      ))}
    </>
  );
}

function CursorParallax({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const { camera } = useThree();

  useFrame(() => {
    const [mx, my] = mouse.current;
    camera.position.x += (mx * 0.35 - camera.position.x) * 0.04;
    camera.position.y += (-my * 0.2 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

type Props = {
  activeSection: string;
};

const SECTION_LABELS: Record<string, string[]> = {
  home: ["Systems Design", "AI / ML", "Software", "Music"],
  experience: ["CIBC", "Upside Robotics", "Data Systems"],
  projects: ["LockerLink", "CRAI", "Spotify Wrapped", "NASA"],
  music: ["Daydream", "Live Shows", "Songwriting"],
};

export default function ImmersiveScene({ activeSection }: Props) {
  const mouse = useRef<[number, number]>([0, 0]);
  const [labels, setLabels] = useState(SECTION_LABELS[activeSection] ?? SECTION_LABELS.home);

  useEffect(() => {
    setLabels(SECTION_LABELS[activeSection] ?? SECTION_LABELS.home);
  }, [activeSection]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        (e.clientY / window.innerHeight) * 2 - 1,
      ];
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="immersive-scene">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 5, 5]} intensity={1.4} color="#c8d8ff" />
        <pointLight position={[-4, -3, 2]} intensity={0.5} color="#ffd0a0" />

        <Stars radius={80} depth={40} count={1400} factor={2.5} fade speed={0.4} />

        <SceneLabels labels={labels} />
        <CursorParallax mouse={mouse} />
      </Canvas>
    </div>
  );
}
