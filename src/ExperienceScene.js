import React, { useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

function ExperienceScene() {
  const { nodes } = useGLTF('./model/portal.glb');
  console.log(nodes);

  return (
    <>
      <OrbitControls makeDefault />

      <mesh geometry={nodes.baked.geometry} />
    </>
  );
}

export default ExperienceScene;
