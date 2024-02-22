import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import Custom from './Custom';

function Object3d() {
  return (
    <Canvas>
      {/* <Experience /> */}
      <Custom />
    </Canvas>
  );
}

export default Object3d;
