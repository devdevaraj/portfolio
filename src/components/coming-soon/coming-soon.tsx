import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber"
import { Mesh } from "three";

import { Model } from "@/components/models/model";

const pi = Math.PI;

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

  export default Box;