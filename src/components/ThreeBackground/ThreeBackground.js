import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from '../../contexts/ThemeContext';
import './ThreeBackground.css';

function Stars(props) {
  const ref = useRef();
  const { theme } = useTheme();
  
  const sphere = useMemo(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.5 });
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={theme === 'dark' ? '#00d4ff' : '#667eea'}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingParticles() {
  const ref = useRef();
  const { theme } = useTheme();
  
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.05;
    
    // Animate individual particles
    const positions = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] = Math.sin(time + i) * 0.1;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={particlePositions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={theme === 'dark' ? '#764ba2' : '#f093fb'}
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function Waves() {
  const ref = useRef();
  const { theme } = useTheme();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    ref.current.rotation.y = time * 0.1;
    ref.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <mesh ref={ref} position={[0, 0, -5]}>
      <torusGeometry args={[3, 0.02, 16, 100]} />
      <meshBasicMaterial 
        color={theme === 'dark' ? '#00d4ff' : '#667eea'} 
        transparent 
        opacity={0.3} 
        wireframe
      />
    </mesh>
  );
}

export default function ThreeBackground({ variant = 'default' }) {
  return (
    <div className="three-background">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      >
        <Stars />
        {variant === 'hero' && (
          <>
            <FloatingParticles />
            <Waves />
          </>
        )}
      </Canvas>
    </div>
  );
}
