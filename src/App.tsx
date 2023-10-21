import { useRef, useState, Fragment } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from "three";
import { Model } from "@/components/models/model";
// import Body from "@/pages/home/home"
import '@/App.scss';

const pi = Math.PI;

function App() {

  return (
    <Fragment>
      <div className="canvas">
        <Canvas
          camera={{ fov: 50, position: [0, 0, 5] }}
        >
          <color
            attach="background"
            args={[0.01, 0.01, 0.01]}
          />
          {/* <ambientLight /> */}
          <pointLight position={[10, 100, 10]} />
          <directionalLight position={[5, 0, 50]} />
          {/* <Box position={[-1.2, 0, 0]} /> */}
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
      {/* <Body/> */}
    </Fragment>
  )
}

export default App



function Box(props: any) {
  const meshRef = useRef<Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [dir, setDir] = useState(true);

  useFrame((_stt: any, delta: any) => {
    if (meshRef.current.rotation.y > pi / 2) {
      setDir(false);
    }
    if (meshRef.current.rotation.y < -pi / 2) {
      setDir(true);
    }
    return (meshRef.current.rotation.y += dir ? delta : -delta)
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <Model scale={0.5} color={!hovered ? 'hotpink' : 'orange'} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}