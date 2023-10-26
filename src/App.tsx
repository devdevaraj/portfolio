import { Fragment } from 'react';
import { Canvas } from '@react-three/fiber';

// import Body from "@/pages/home/home"
import Box from '@/components/coming-soon/coming-soon';
import '@/App.scss';



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

export default App;