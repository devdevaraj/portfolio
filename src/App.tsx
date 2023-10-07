import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from "three";
import { Model } from "./model";
import './App.scss';

function App() {

  return (
    <Canvas
    camera={{ fov: 50, position: [5, 0, 5] }}
    >
      <color
      attach="background"
      args={[0.01,0.01,0.01]}
      />
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    {/* <Box position={[-1.2, 0, 0]} /> */}
    <Box position={[0, 0, 0]} />
  </Canvas>
  )
}

export default App



function Box(props:any) {
  const meshRef = useRef<Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
 
  useFrame((_stt:any, delta:any) => (meshRef.current.rotation.y += delta))
 
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <Model />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}