import { Canvas } from "@react-three/fiber"
import { Environment, Bounds } from "@react-three/drei"
import { Model } from "./Model"
import type React from "react"

interface ViewerProps {
  url: string;
  speed: number;
  horizontal: number;
  vertical: number;
  deep: number;
}

export const Viewer: React.FC<ViewerProps> = ({ url, speed, horizontal, vertical, deep}) => {
  return (
    <Canvas 
      className="w-full h-full"
      camera={{ position: [horizontal, vertical, deep], fov: 45 }}>
      <Environment preset="sunset" />
      <Bounds fit clip observe>
        <Model url={url} scale={1} speed={speed}/>
      </Bounds>
    </Canvas>
  )
}
