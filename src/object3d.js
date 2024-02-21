import React from 'react';
import { Canvas } from '@react-three/fiber';

function Object3d() {
  return (
    <Canvas>
      <mesh scale={0.5} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color={'red'} />
      </mesh>
    </Canvas>
  );
}

export default Object3d;
