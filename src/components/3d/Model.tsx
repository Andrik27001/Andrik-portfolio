import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useEffect, useState } from "react"
import * as THREE from "three"

interface ModelProps{
  url: string;
  scale: number;
  speed: number;
}

export const Model: React.FC<ModelProps> = ({url, scale, speed}) => {
  const { scene } = useGLTF(url)
  const ref = useRef<any>(null)
  const [height, setHeight] = useState(1)

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    box.getSize(size)
    setHeight(size.y) // altura real del modelo
  }, [scene])

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()

      // Normalizar flotación según tamaño del modelo
      const amplitude = height * 0.05 // 5% de su altura
      ref.current.position.y = Math.sin(t * 2) * amplitude
    }
  })

  return <primitive ref={ref} object={scene} scale={scale}/>
}
