"use client"

import { Canvas } from "@react-three/fiber";
import React from 'react'
import Car from "./Car";
import { ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function MainSection() {
  return (
    <section id="canvas-container" className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -10]} intensity={1} />
        <directionalLight position={[0, 10, 10]} intensity={1} />
        <directionalLight position={[-10, 0, 10]} intensity={1} />
        <directionalLight position={[-10, 0, -10]} intensity={1} />
        <directionalLight position={[10, 0, 10]} intensity={1} />
        <directionalLight position={[10, 0, -10]} intensity={1} />
        <directionalLight position={[0, 10, 10]} intensity={1} />
        <directionalLight position={[0, 10, -10]} intensity={1} />
        <directionalLight position={[0, -10, 10]} intensity={1} />
        <Car position={[8, 0, 2]} scale={20} rotation-y={-Math.PI / 4} />
        <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
        <OrbitControls enableZoom={true} enablePan={true} maxZoom={10} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault />
        <PerspectiveCamera zoom={1} makeDefault position={[15, 50, 90]} fov={100} />
        {/* <Perf /> */}
      </Canvas>
    </section>
  )
}