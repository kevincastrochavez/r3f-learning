import React, { useRef } from 'react';
import { OrbitControls, TransformControls } from '@react-three/drei';

function Experience() {
  const cubeRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      {/* makeDefault for TransformControls so that the camera does not move when playing around */}

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={0.5} />

      <group>
        <mesh position={[-2, -0.5, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial wireframe color='hotpink' />
        </mesh>

        <mesh ref={cubeRef} position={[2, -0.5, 0]}>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color='purple' />
        </mesh>
        <TransformControls object={cubeRef} />
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color='green' />
      </mesh>

      {/* <Custom /> */}
    </>
  );
}

export default Experience;
