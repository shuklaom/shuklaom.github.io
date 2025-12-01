import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import { useTheme } from '../../contexts/ThemeContext';
import './ParticleField.css';

function ParticleNetwork() {
  const ref = useRef();
  const { theme } = useTheme();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const velocities = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Velocity
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      // Update position based on velocity
      positions[i] += particles.velocities[i] * Math.sin(time * 0.5);
      positions[i + 1] += particles.velocities[i + 1] * Math.cos(time * 0.5);
      positions[i + 2] += particles.velocities[i + 2] * Math.sin(time * 0.3);
      
      // Boundary check - wrap around
      if (Math.abs(positions[i]) > 10) positions[i] *= -0.9;
      if (Math.abs(positions[i + 1]) > 10) positions[i + 1] *= -0.9;
      if (Math.abs(positions[i + 2]) > 10) positions[i + 2] *= -0.9;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = time * 0.05;
  });

  return (
    <Points ref={ref} positions={particles.positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={theme === 'dark' ? '#00d4ff' : '#667eea'}
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={2}
      />
    </Points>
  );
}

function AnimatedSphere() {
  const ref = useRef();
  const { theme } = useTheme();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    ref.current.rotation.y = time * 0.2;
    ref.current.scale.x = 1 + Math.sin(time * 0.5) * 0.1;
    ref.current.scale.y = 1 + Math.cos(time * 0.5) * 0.1;
    ref.current.scale.z = 1 + Math.sin(time * 0.7) * 0.1;
  });

  return (
    <mesh ref={ref} position={[0, 0, -3]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial 
        color={theme === 'dark' ? '#764ba2' : '#f093fb'}
        transparent 
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

function FloatingRings() {
  const group = useRef();
  const { theme } = useTheme();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.rotation.x = time * 0.15;
    group.current.rotation.y = time * 0.1;
  });

  return (
    <group ref={group}>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} rotation={[0, 0, (Math.PI / 3) * i]}>
          <torusGeometry args={[2 + i * 0.5, 0.02, 16, 100]} />
          <meshBasicMaterial 
            color={theme === 'dark' ? '#00d4ff' : '#667eea'}
            transparent 
            opacity={0.4 - i * 0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleField({ interactive = false }) {
  return (
    <div className="particle-field">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      >
        <ParticleNetwork />
        <AnimatedSphere />
        <FloatingRings />
        {interactive && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>
    </div>
  );
}
