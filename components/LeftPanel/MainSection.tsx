"use client"

import { Canvas } from "@react-three/fiber";
import React from 'react'
import RotatingCube from "./RotatingCube";

export default function MainSection() {  
  return (
    <section id="canvas-container" className="w-full h-full">
      <Canvas>
        <RotatingCube />
      </Canvas>
    </section>
  )
}