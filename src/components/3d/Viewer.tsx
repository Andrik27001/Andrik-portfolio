import { Canvas } from "@react-three/fiber"
import { Environment, Bounds } from "@react-three/drei"
import { Model } from "./Model"
import type React from "react"

interface ViewerProps {
  url: string;
  speed: number;
}

export const Viewer: React.FC<ViewerProps> = ({ url, speed }) => {
  return (
    <Canvas 
      className="w-full h-full"
      camera={{ position: [2, 0, 5], fov: 45 }}>
      <Environment preset="sunset" />
      <Bounds fit clip observe>
        <Model url={url} scale={1} speed={speed}/>
      </Bounds>
    </Canvas>
  )
}
