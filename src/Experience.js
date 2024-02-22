import React, { useRef } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Custom from './Custom';

function Experience() {
  const cubeRef = useRef(null);
  const groupRef = useRef(null);
  const { camera, gl } = useThree(); // Used to get the camera and other stuff

  extend({ OrbitControls }); // Since OrbitControls is a class not built in we extend it

  useFrame((state, delta) => {
    // console.log(delta);
    // cubeRef.current.rotation.x += delta;
    // cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
    // console.log(state.clock.elapsedTime);

    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle) * 8;
    state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh position={[-2, -0.5, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial wireframe color='hotpink' />
        </mesh>

        <mesh ref={cubeRef} position={[2, -0.5, 0]}>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color='purple' />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color='green' />
      </mesh>

      <Custom />
    </>
  );
}

export default Experience;
