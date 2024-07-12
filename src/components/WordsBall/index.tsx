import * as THREE from 'three';
import React, {
  useId,
  useRef,
  useState,
  useMemo,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import { Vector3 } from 'three';
import { ThemeContext } from '../../contexts/ThemeContext';
// import randomWord from 'random-words';

interface IWordsBall {
  children: ReactNode;
  position?: Vector3;
}

const WordsBall = ({ children, ...props }: IWordsBall) => {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };
  const ref = useRef();
  const { theme, setTheme } = useContext(ThemeContext);
  const [hovered, setHovered] = useState(false);
  const over = (e: ThreeEvent<PointerEvent>) => (
    e.stopPropagation(), setHovered(true)
  );
  const out = () => setHovered(false);

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);

  // Tie component to the render-loop
  useFrame(({ camera }: { camera: any }) => {
    // Make text face the camera
    // @ts-ignore
    ref.current?.quaternion.copy(camera.quaternion);
    // Animate font color
    // @ts-ignore
    ref.current?.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'white'),
      0.1,
    );
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
};

function Cloud({ count = 6, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const key = useId();
  const words = useMemo(() => {
    const temp = [];

    const skils = [
      ['MaterialUI', '', '', '', '', '', '', ''],
      ['Node', 'MongoDB', 'Express', 'JavaScript', 'SSR', '', '', ''],
      ['Webpack', 'Docker', 'React', 'Next.js', 'Chart.js', 'jQuery', '', ''],
      [
        'HighCharts.js',
        'Git',
        'Passport.js',
        'OOP',
        'LESS',
        'Redux Toolkit',
        'HTML',
        'Styled Components',
      ],
      [
        'SCSS',
        'TypeScript',
        'Bootstrap',
        'CSS',
        'Structured data',
        'SEO',
        '',
        '',
      ],
      ['Redux', 'SASS', 'Figma', 'AntDesign', 'AdobeXD', 'ES5', '', ''],
      ['GA4', 'GTag', 'Context API', 'ES6', 'Server Components', '', '', ''],
      ['JSON', '', '', '', '', '', '', ''],
    ];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 0; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j),
          ),
          skils[i][j],
        ]);
    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map(([pos, word], idx) => (
        <React.Fragment key={`${key}-${idx}`}>
          <WordsBall position={pos as Vector3} children={word as ReactNode} />
        </React.Fragment>
      ))}
    </>
  );
}

export default function SkillsGlobe() {
  return (
    <Canvas
      style={{ height: 350 }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 65], fov: 90 }}
    >
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud count={6} radius={45} />
      <TrackballControls
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
      />
    </Canvas>
  );
}
