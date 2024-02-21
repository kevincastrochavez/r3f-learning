import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Experience() {
  const cubeRef = useRef(null);

  useFrame((state, delta) => {
    // console.log(delta);
    cubeRef.current.rotation.x += delta;
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <mesh position={[-2, -0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial wireframe color='hotpink' />
      </mesh>

      <mesh ref={cubeRef} position={[2, -0.5, 0]}>
        <boxGeometry scale={1.5} />
        <meshBasicMaterial wireframe color='purple' />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color='green' />
      </mesh>
    </>
  );
}

export default Experience;
