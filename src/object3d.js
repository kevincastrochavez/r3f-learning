import React from 'react';
import { Canvas } from '@react-three/fiber';

function Object3d() {
  return (
    <Canvas>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default Object3d;
