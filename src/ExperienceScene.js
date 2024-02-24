import React, { useRef } from 'react';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';

function ExperienceScene() {
  const { nodes } = useGLTF('./model/portal.glb');
  const bakedTexture = useTexture('./model/baked.jpg');
  bakedTexture.flipY = false;

  return (
    <>
      <OrbitControls makeDefault />

      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  );
}

export default ExperienceScene;
