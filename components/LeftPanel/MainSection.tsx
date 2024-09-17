"use client"

import { Canvas } from "@react-three/fiber";
import React from 'react'
import RotatingCube from "./RotatingCube";

export default function MainSection() {  
  return (
    <section id="canvas-container" className="w-full h-full">
      <Canvas>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <RotatingCube />
      </Canvas>
    </section>
  )
}