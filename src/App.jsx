import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function SpinningBox() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <SpinningBox />
    </Canvas>
  );
}


export default App;
