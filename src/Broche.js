import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { state } from './state'

export default function Broche(props) {
  const { nodes, materials } = useGLTF('/lol.glb')

  const handleHover = () => {
    state.isBrocheHovered = true
  }

  const handleUnhover = () => {
    state.isBrocheHovered = false
  }

  return (
    <group {...props} dispose={null} onPointerOver={handleHover} onPointerOut={handleUnhover}>
      <group rotation={[Math.PI / 2, 0, -1.561]}>
        <group rotation={[Math.PI, 0, 0]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Object_3_Material_2_0.geometry} material={materials.Material_2} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_4_Material_2_0.geometry} material={materials.Material_2} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_5_Material_2_0.geometry} material={materials.Material_2} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_6_Material_2_0.geometry} material={materials.Material_2} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_8_Material_2_0.geometry} material={materials.Material_2} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_9_Material_2_0.geometry} material={materials.Material_2} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_10_Material_2_0.geometry} material={materials.Material_2} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_7_Material_2_0.geometry} material={materials.Material_2} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_11_Material_12_0.geometry} material={materials.Material_12} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_13_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_15_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_16_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_17_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_18_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_19_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_20_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_21_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_22_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_23_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_24_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_25_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_26_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_27_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_28_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_29_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_30_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_31_Material_14_0.geometry} material={materials.Material_14} scale={19.85} />
          <mesh castShadow receiveShadow geometry={nodes.Object_32_Material_33_0.geometry} material={materials.Material_33} scale={19.85} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/lol2.glb')
