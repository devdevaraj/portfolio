import { useGLTF } from "@react-three/drei";
import csoon from "../../assets/csoon.glb";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Text_Text001: THREE.Mesh;
  };
  materials: {};
};

export function Model(props:any) {
  const { nodes } = useGLTF(csoon) as GLTFResult;
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text_Text001.geometry}
        // material={nodes.Text_Text001.material}
      >
        <meshStandardMaterial color={props.color}/>
      </mesh>
    </group>
  );
}

useGLTF.preload(csoon);
