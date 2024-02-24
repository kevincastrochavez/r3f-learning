import React, { useRef } from 'react';
import {
  Html,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
  Float,
  MeshReflectorMaterial,
  useHelper,
  BakeShadows,
  SoftShadows,
  RandomizedLight,
  AccumulativeShadows,
  Sky,
  Environment,
  Stage,
} from '@react-three/drei';
import { useControls, button } from 'leva';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';

function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();
  const directionalLightRef = useRef();
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  // const { perfVisible } = useControls({
  //   perfVisible: true,
  // });

  // // Every time a value change, it will rerender this component
  // const { position, color, visible } = useControls('cube', {
  //   // color: '#ff0000',
  //   position: {
  //     // value: 3,
  //     value: { x: 2, y: 0, z: 0 },
  //     // min: -4,
  //     // max: 4,
  //     step: 0.01,
  //     joystick: 'invertY',
  //   },
  //   color: 'red',
  //   visible: true,
  //   myInterval: {
  //     min: 0,
  //     max: 100,
  //     value: [4, 30],
  //   },
  //   clickMe: button(() => {
  //     console.log('clicked');
  //   }),
  //   choice: {
  //     options: ['a', 'b', 'c'],
  //   },
  //   // rotation: { x: 0, y: 0, z: 0 },
  //   // scale: 1,
  // });

  // const { scale } = useControls('sphere', {
  //   scale: 1,
  // });

  return (
    <>
      {/* <Environment
        // files={[
        //   './environmentMaps/2/px.jpg',
        //   './environmentMaps/2/nx.jpg',
        //   './environmentMaps/2/py.jpg',
        //   './environmentMaps/2/ny.jpg',
        //   './environmentMaps/2/pz.jpg',
        //   './environmentMaps/2/nz.jpg',
        // ]}
        // files={'./environmentMaps/the_sky_is_on_fire_2k.hdr'}
        background
        // preset='sunset'
      >
        <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[1, 0, 0]} />
        </mesh>
      </Environment> */}

      {/* {perfVisible && <Perf position='top-left' />} */}
      {/* <BakeShadows /> */}
      {/* <SoftShadows size={50} samples={10} frustum={3.75} rings={11} near={9} /> */}
      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color='#316d39'
        opacity={0.8}
        frames={100}
        temporal
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          bias={0.001}
          intensity={1}
        />
      </AccumulativeShadows> */}

      {/* makeDefault for TransformControls so that the camera does not move when playing  around */}

      {/* <directionalLight
        ref={directionalLightRef}
        position={[1, 2, 3]}
        intensity={4.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-far={10}
        shadow-camera-near={1}
        />
      <ambientLight intensity={0.5} /> */}

      {/* <Sky sunPosition={[1, 2, 3]} /> */}

      {/* <group> */}
      {/* <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={2}
          axisColors={[0xff0000, 0x00ff00, 0x0000ff]}
          scale={2}
        > */}
      {/* <mesh castShadow ref={sphereRef} position={[-2, -0.5, 0]} scale={1}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color='hotpink' envMapIntensity={3.5} />
          <Html
          wrapperClass='label'
          position={[0, 1, 0]}
          center
          distanceFactor={6}
          occlude={[sphereRef, cubeRef]} // the sphere and cube will be occluded by the HTML
          >
          This is a Sphere
          </Html>
        </mesh> */}
      {/* </PivotControls> */}
      {/* <TransformControls object={sphereRef} mode='translate' /> */}
      {/* 
        <mesh ref={cubeRef} position={[1, 1, 1]} castShadow>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial color={'red'} envMapIntensity={3.5} />
      </mesh> */}
      {/* <TransformControls object={cubeRef} mode='rotate' /> */}
      {/* </group> */}

      {/* <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} envMapIntensity={3.5} />
      <meshStandardMaterial color={'greenyellow'} /> */}
      {/* <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={1}
          color={'greenyellow'}
        /> */}
      {/* </mesh> */}

      {/* <Float speed={5} floatIntensity={2}>
        <Text color={'salmon'} position-y={2} maxWidth={2} textAlign='center'>
        Hello There
        </Text>
      </Float> */}

      <OrbitControls makeDefault />

      <Stage>
        <mesh castShadow ref={sphereRef} position={[-2, 0.1, 0]} scale={1}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color='hotpink' envMapIntensity={3.5} />
        </mesh>

        <mesh ref={cubeRef} position={[1, 0.1, 0]} castShadow>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color={'red'} envMapIntensity={3.5} />
        </mesh>
      </Stage>
    </>
  );
}

export default Experience;
