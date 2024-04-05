import { useRef, useState, Fragment, Ref, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Group, Mesh } from "three";


import GlobalContext from "./context";
import { Model } from "./model";
import { Poem } from "./poem";
import './App.scss';

const pi = Math.PI;

function App() {
  const scrlRef = useRef<HTMLDivElement>(null!);
  const meshRef = useRef<Mesh>(null!);
  const poemRef = useRef<Group>(null!);
  // const [scroller, setScroller] = useState<Number>(0);
  useEffect(() => {
    scrlRef.current.addEventListener("scroll", (event: Event) => {
      let scrollTop = (event.target as HTMLDivElement).scrollTop;
      let scrollHeight = (event.target as HTMLDivElement).scrollHeight;
      let clientHeight = (event.target as HTMLDivElement).clientHeight;
      let scroll = scrollTop / (scrollHeight - clientHeight);
      console.log(scroll);
      meshRef.current.rotation.y = scroll * pi * 2;
      poemRef.current.rotation.x = scroll * pi;
      console.log(meshRef.current.rotation.y);

    })
  });

  return (

    <Fragment>
      <GlobalContext.Provider value={{poemRef}}>
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
            <Box meshRef={meshRef} />
            <Poem scale={0.5} rotation={[0, 0, 0]} />
          </Canvas>
        </div>
        <Body reference={scrlRef} />
      </GlobalContext.Provider>
    </Fragment>
  )
}

export default App



function Box({ meshRef }: { meshRef: Ref<Mesh> }) {
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // const [dir, setDir] = useState(true);

  // useFrame((_stt: any, delta: any) => {
  //   if (meshRef?.current.rotation.y > pi / 2) {
  //     setDir(false);
  //   }
  //   if (meshRef?.current.rotation.y < -pi / 2) {
  //     setDir(true);
  //   }
  //   return (meshRef.current.rotation.y += dir ? delta : -delta)
  // })

  return (
    <mesh
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


function Body({ reference }: { reference: Ref<HTMLDivElement> }) {
  return (
    <div className="body" id="body" ref={reference}>
      <div className="scroll">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo ea.
      </div>
    </div>
  );
}