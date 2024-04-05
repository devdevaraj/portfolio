
import { useContext } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ContextType } from "../ppoem";

import poem from "./poem.glb";
import GlobalContext from "../context";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Curve: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};

export function Poem(props: JSX.IntrinsicElements["group"]) {
 let { poemRef } = useContext(GlobalContext) as ContextType;
 // console.log(poemRef);
 
  const { nodes, materials } = useGLTF(poem) as GLTFResult;
  return (
    <group {...props} dispose={null} ref={poemRef}>
      <mesh
        name="Cube"
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        rotation={[0, 0, -Math.PI]}
        scale={[-8.225, -1, -4.466]}
      />
      <mesh
        name="Curve"
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.Material}
        position={[-0.16, 0.986, -0.908]}
        scale={60.189}
      />
    </group>
  );
}

useGLTF.preload(poem);
