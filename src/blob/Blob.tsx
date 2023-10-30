import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import VertexShader from './VertexShader'
import FragmentShader from './FragmentShader'

export default function Blob () {

  const mesh = useRef(null)
  
  const hover = useRef(false)

  const uniforms = useMemo(() => {

    return {

      u_time: { value: 0 },

      u_intensity: { value: 0.3 },

    };

  }, [])

  useFrame((state) => {

    const { clock } = state;

    if (mesh.current) {

      mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(

        mesh.current.material.uniforms.u_intensity.value,

        hover.current ? 1 : 0.15, 0.02

      );

    }

  });

  return (

    <mesh 
    
    ref={mesh} 
    
    scale={1.5} 
    
    position={[0,0,0]} 
    
    onPointerOver={() => hover.current = true}
    
    onPointerOut={() => hover.current = false}>
      
      <icosahedronGeometry attach="geometry" args={[2,20]} />
      
      <shaderMaterial vertexShader={VertexShader} fragmentShader={FragmentShader} uniforms={uniforms} />

      {/* <meshStandardMaterial attach="material" /> */}
    
    </mesh>

  )

}
