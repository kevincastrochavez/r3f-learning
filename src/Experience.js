import React, { useRef } from 'react';
import {
  Html,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
  Float,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { useControls, button } from 'leva';
import { Perf } from 'r3f-perf';

function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  const { perfVisible } = useControls({
    perfVisible: true,
  });

  // Every time a value change, it will rerender this component
  const { position, color, visible } = useControls('cube', {
    // color: '#ff0000',
    position: {
      // value: 3,
      value: { x: -2, y: 0, z: 0 },
      // min: -4,
      // max: 4,
      step: 0.01,
      joystick: 'invertY',
    },
    color: 'red',
    visible: true,
    myInterval: {
      min: 0,
      max: 100,
      value: [4, 30],
    },
    clickMe: button(() => {
      console.log('clicked');
    }),
    choice: {
      options: ['a', 'b', 'c'],
    },
    // rotation: { x: 0, y: 0, z: 0 },
    // scale: 1,
  });

  const { scale } = useControls('sphere', {
    scale: 1,
  });

  return (
    <>
      {perfVisible && <Perf position='top-left' />}

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
        >
          <mesh ref={sphereRef} position={[-2, -0.5, 0]} scale={scale}>
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

        <mesh
          ref={cubeRef}
          position={[position.x, position.y, position.z]}
          visible={visible}
        >
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color={color} />
        </mesh>
        <TransformControls object={cubeRef} mode='rotate' />
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={1}
          color={'greenyellow'}
        />
      </mesh>

      {/* <Float speed={5} floatIntensity={2}>
        <Text color={'salmon'} position-y={2} maxWidth={2} textAlign='center'>
          Hello There
        </Text>
      </Float> */}
    </>
  );
}

export default Experience;
