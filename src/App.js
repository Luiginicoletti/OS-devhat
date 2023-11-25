import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Center, OrbitControls, Environment, Lightformer, Float, Billboard } from '@react-three/drei'
import SkyBox from './Skybox'
import { easing } from 'maath'
import CustomEffects from './Effects'
import DevHavModel from './DevHavModel'
import Overlay from './Overlay'
import { state } from './state'

export default function App() {
  return (
    <>
      <valtioProvider value={state}>
        <Overlay />

        <Canvas shadows camera={{ position: [3, 0.8, 5], fov: 60 }}>
          {/* <color attach="background" args={['#a6abb3']} /> */}
          <directionalLight position={[4, 7, 2]} intensity={3} />

          <CameraRig>
            <group position={[0, 0.1, 0]} rotation={[0, -0.5, 0.25]}>
              <Center top>
                <Float rotationIntensity={1}>
                  <DevHavModel position={[0, 0.5, 0]} />
                </Float>
              </Center>
            </group>
          </CameraRig>
          <OrbitControls
            maxDistance={10}
            minDistance={1}
            enablePan={false}
            target={[0, 0.3, 0]}
            minPolarAngle={Math.PI / 2.33}
            maxPolarAngle={Math.PI / 1.76}
          />
          <Environment preset={'city'}>
            <Lightformer intensity={40} color={'#5b4182'} rotation-y={Math.PI / 2} position={[-5, 1, 1]} scale={[20, 1, 1]} />
            <Lightformer intensity={10} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} />
            <Lightformer intensity={60} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} />
          </Environment>

          <SkyBox />

          <CustomEffects />
        </Canvas>
      </valtioProvider>
    </>
  )
}

function CameraRig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [0, -state.pointer.x / 4, 0], 0.25, delta)
  })
  return <group ref={group}>{children}</group>
}

function EnvironmentShere() {
  const ref = useRef()
  const { viewport, size } = useThree()
  useFrame((state, delta) => {
    ref.current.time += delta
    easing.damp3(ref.current.pointer, state.pointer, 0.8, delta)
  })
  return (
    <Billboard>
      <mesh scale={[viewport.width * 2, viewport.height * 2, 1]} position={[0, 0, -10]}>
        <planeGeometry args={[2, 2, 1, 1]} />
        <waveMaterial ref={ref} key={WaveMaterial.key} resolution={[size.width * viewport.dpr, size.height * viewport.dpr]} />
      </mesh>
    </Billboard>
  )
}
