import React, { useRef } from 'react';
import {
  Html,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from '@react-three/drei';

function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      {/* makeDefault for TransformControls so that the camera does not move when playing  around */}

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={0.5} />

      <group>
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={2}
          axisColors={[0xff0000, 0x00ff00, 0x0000ff]}
          scale={2}
          // fixed
        >
          <mesh ref={sphereRef} position={[-2, -0.5, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial wireframe color='hotpink' />
            <Html
              wrapperClass='label'
              position={[0, 1, 0]}
              center
              distanceFactor={6}
              occlude={[sphereRef, cubeRef]} // the sphere and cube will be occluded by the HTML
            >
              This is a Sphere
            </Html>
          </mesh>
        </PivotControls>
        {/* <TransformControls object={sphereRef} mode='translate' /> */}

        <mesh ref={cubeRef} position={[2, -0.5, 0]}>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color='purple' />
        </mesh>
        <TransformControls object={cubeRef} mode='rotate' />
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color='green' />
      </mesh>

      <Text color={'salmon'} position-y={2} maxWidth={2} textAlign='center'>
        Hello There
      </Text>
      {/* <Custom /> */}
    </>
  );
}

export default Experience;
