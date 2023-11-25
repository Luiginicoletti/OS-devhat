import { useTexture } from '@react-three/drei'
import { BackSide } from 'three'

export default function SkyBox() {
  const texture = useTexture('ambient2.jpg')

  return (
    <mesh scale={[-2, 1, 1]}>
      <sphereGeometry castShadow={false} receiveShadow={false} args={[70, 50, 40]} />
      <meshBasicMaterial toneMapped={false} map={texture} side={BackSide} />
    </mesh>
  )
}
