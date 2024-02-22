import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

function Object3d() {
  const cameraSettings = {
    fov: 75,
    near: 0.1,
    far: 100,
    position: [3, 2, 6],
  };

  return (
    <Canvas camera={cameraSettings}>
      <Experience />
    </Canvas>
  );
}

export default Object3d;
