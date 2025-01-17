// @ts-nocheck
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF, CubeCamera } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/car/porsche-transformed.glb');

  useLayoutEffect(() => {
    materials.paint.color.set('#ffdf71')
    materials.paint.metalness = 0.2
    materials.paint.roughness = 0
    materials.paint.clearcoat = 1
    materials.paint.envMapIntensity = 1.5
    materials.paint.aoMapIntensity = 1.5
    materials.paint.roughnessMapIntensity = 2
    materials['930_chromes'].metalness = 1
    materials['930_chromes'].roughness = 0.3
    materials['930_chromes'].color = new THREE.Color('white')
    materials['glass'].color = new THREE.Color('white')
    materials['glass'].opacity = 0.6
    materials['930_plastics'].roughness = 0.8
    materials['930_lights'].emissiveMap = materials['930_lights'].map
    materials['930_lights'].emissiveIntensity = 50
    materials['930_tire'].color.set('black')
    materials['930_tire'].roughness = 0.7
  }, [materials])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <CubeCamera frames={1} position={[0, 1.5, 0]} near={0.1} resolution={128}>
        {(texture) => (
          <group position={[0, -1.5, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.mesh_1_instance_0.geometry}
                material={materials['930_plastics']}
                position={[-7.966238, -0.10155, -7.966238]}
                scale={0.000973}
              />
              <mesh
                geometry={nodes.mesh_1_instance_1.geometry}
                material={materials['930_plastics']}
                position={[-7.966238, -0.10155, -7.966238]}
                scale={0.000973}
              />
            </group>
            <group position={[-7.966238, -0.10155, -7.966238]} scale={0.000973}>
              <mesh geometry={nodes.mesh_0.geometry} material={materials.paint} material-envMap={texture} />
              <mesh geometry={nodes.mesh_0_1.geometry} material={materials['930_chromes']} />
              <mesh geometry={nodes.mesh_0_2.geometry} material={materials.black} />
              <mesh geometry={nodes.mesh_0_3.geometry} material={materials['930_lights']} />
              <mesh geometry={nodes.mesh_0_4.geometry} material={materials.glass} />
              <mesh geometry={nodes.mesh_0_5.geometry} material={materials['930_stickers']} />
              <mesh geometry={nodes.mesh_0_6.geometry} material={materials['930_plastics']} material-polygonOffset material-polygonOffsetFactor={-10} />
              <mesh geometry={nodes.mesh_0_7.geometry} material={materials['930_lights_refraction']} />
              <mesh geometry={nodes.mesh_0_8.geometry} material={materials['930_rim']} />
              <mesh geometry={nodes.mesh_0_9.geometry} material={materials['930_tire']} />
            </group>
          </group>
        )}
      </CubeCamera>
      <group position={[-7.966238, -0.10155, -7.966238]} scale={0.000973}>
        <mesh geometry={nodes.mesh_2.geometry} material={materials.plate} material-roughness={1} />
        <mesh geometry={nodes.mesh_2_1.geometry} material={materials.DefaultMaterial} />
        <mesh geometry={nodes.mesh_2_2.geometry} material={materials['Material.001']} material-depthWrite={false} material-opacity={0.6} />
      </group>
    </group>
  )
}

useGLTF.preload('/car/porsche-transformed.glb')