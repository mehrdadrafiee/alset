import { useRef } from "react";
import * as THREE from "three";

export default function RotatingCube() { 
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </mesh>
  )
}