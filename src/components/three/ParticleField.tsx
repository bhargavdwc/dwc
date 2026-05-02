import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const meshRef = useRef<THREE.Points>(null)
  const { viewport } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  const count = window.innerWidth < 640 ? 500 : 2000

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      // Mix between primary and cyan
      const t = Math.random()
      colors[i * 3] = t * (13/255) + (1-t) * (4/255)
      colors[i * 3 + 1] = t * (94/255) + (1-t) * (185/255)
      colors[i * 3 + 2] = t * (246/255) + (1-t) * (202/255)
    }
    return { positions, colors }
  }, [count])

  const velocities = useMemo(() => {
    const v = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      v[i * 3] = (Math.random() - 0.5) * 0.002
      v[i * 3 + 1] = (Math.random() - 0.5) * 0.002
      v[i * 3 + 2] = (Math.random() - 0.5) * 0.001
    }
    return v
  }, [count])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const pos = meshRef.current.geometry.attributes.position.array as Float32Array
    const time = state.clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1] + Math.sin(time * 0.3 + i) * 0.0003
      pos[i * 3 + 2] += velocities[i * 3 + 2]

      // Mouse attraction
      const mx = mouse.current.x * viewport.width * 0.5
      const my = mouse.current.y * viewport.height * 0.5
      const dx = mx - pos[i * 3]
      const dy = my - pos[i * 3 + 1]
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 3) {
        pos[i * 3] += dx * 0.001
        pos[i * 3 + 1] += dy * 0.001
      }

      // Wrap
      if (pos[i * 3] > 10) pos[i * 3] = -10
      if (pos[i * 3] < -10) pos[i * 3] = 10
      if (pos[i * 3 + 1] > 6) pos[i * 3 + 1] = -6
      if (pos[i * 3 + 1] < -6) pos[i * 3 + 1] = 6
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y = time * 0.03
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      gl={{ powerPreference: 'high-performance', antialias: false, alpha: true }}
    >
      <color attach="background" args={['#FFFFFF']} />
      <Particles />
    </Canvas>
  )
}
