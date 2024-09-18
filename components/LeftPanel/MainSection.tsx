"use client"

import { Canvas } from "@react-three/fiber";
import React from 'react'
import Car from "./Car";
import { ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function MainSection() {
  return (
    <section id="canvas-container" className="w-full h-full p-4">
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
      <Carousel className="absolute bottom-24 h-40 w-[670px] bg-white">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="shadow-md h-40 bg-gray-50">
                <CardContent className="flex items-center justify-center p-2">
                  <p className="text-black">Card Content</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}