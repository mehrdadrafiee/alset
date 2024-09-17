import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function RotatingCube() { 
  const meshRef = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  
  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'yellow'} />
    </mesh>
  )
}