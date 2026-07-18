'use client';

import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

const GLOBE_RADIUS = 2.2;
const CAMERA_ZOOM_DISTANCE = 5.5;

export function convertLatLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function CameraController({ activeLocation }) {
  const { camera } = useThree();
  const targetPositionRef = useRef(null);

  useEffect(() => {
    if (activeLocation?.country) {
      const baseVector = convertLatLngToVector3(activeLocation.country.lat, activeLocation.country.lng, GLOBE_RADIUS);
      const targetCameraPos = baseVector.clone().normalize().multiplyScalar(CAMERA_ZOOM_DISTANCE);
      targetPositionRef.current = targetCameraPos;
    }
  }, [activeLocation]);

  useFrame(() => {
    if (targetPositionRef.current) {
      camera.position.lerp(targetPositionRef.current, 0.05);
      camera.lookAt(0, 0, 0);

      if (camera.position.distanceTo(targetPositionRef.current) < 0.005) {
        targetPositionRef.current = null;
      }
    }
  });

  return null;
}

function RotatingSphere({ activeLocation }) {
  const colorMap = useTexture('/images/earth.jpg');

  return (
    <group>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshStandardMaterial map={colorMap} roughness={0.7} metalness={0.1} />
      </mesh>

      {activeLocation?.country && (
        <Html
          position={convertLatLngToVector3(activeLocation.country.lat, activeLocation.country.lng, GLOBE_RADIUS)}
          center
        >
          <div className="text-rose-500 w-8 h-8 pointer-events-none drop-shadow-md -translate-y-4">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
        </Html>
      )}
    </group>
  );
}

export default function Globe({ activeLocation }) {
  return (
    <div className="relative w-full h-100 lg:h-125 xl:h-150 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, CAMERA_ZOOM_DISTANCE], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />

        <Suspense fallback={null}>
          <RotatingSphere activeLocation={activeLocation} />
        </Suspense>

        <CameraController activeLocation={activeLocation} />
      </Canvas>
    </div>
  );
}
