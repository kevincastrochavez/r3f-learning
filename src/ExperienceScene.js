import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

function ExperienceScene() {
  return (
    <>
      <OrbitControls makeDefault />

      <mesh scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default ExperienceScene;
