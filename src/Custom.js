import React, { useEffect, useMemo, useRef } from 'react';
import { extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

function Custom() {
  const verticesCount = 10 * 3;
  const geometryRef = useRef();

  useEffect(() => {
    // Included it here since it need to render the JSX first
    geometryRef.current.computeVertexNormals();
  }, []);

  const { camera, gl } = useThree(); // Used to get the camera and other stuff
  extend({ OrbitControls }); // Since OrbitControls is a class not built in we extend it

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3); // 3 because x, y, z for each vertice

    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <mesh>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach='attributes-position'
            count={verticesCount}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <meshBasicMaterial color='red' side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

export default Custom;
