import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import * as THREE from 'three';

function Object3d() {
  const cameraSettings = {
    fov: 75,
    near: 0.1,
    far: 100,
    position: [3, 2, 6],
  };

  return (
    <Canvas
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={cameraSettings}
    >
      <color attach='background' args={['#ff0000']} />
      <Experience />
    </Canvas>
  );
}

export default Object3d;
