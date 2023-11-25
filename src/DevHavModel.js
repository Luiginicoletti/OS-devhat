import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import Broche from './Broche'

export default function DevHavModel(props) {
  const { nodes, materials } = useGLTF('/devhat.glb')

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Material.002']} scale={[0.914, 0.783, 1]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['Material.001']}
        position={[0, 0.042, 0]}
        scale={[0.89, 0.762, 0.974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['Material.003']}
        position={[0.843, -0.638, 0.063]}
        rotation={[1.597, 0.194, -1.56]}
        scale={0.132}
      />

      <Broche rotation={[0, -0.3, 0.3]} scale={0.35} position={[0.48, -2.04, 3.1]} />
    </group>
  )
}

useGLTF.preload('/devhat.glb')
