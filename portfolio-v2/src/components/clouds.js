'use client';

import { useEffect, useRef } from 'react';

export default function Clouds({ cloudDefs }) {
  const refs = useRef([]);
  const frameId = useRef(null);

  useEffect(() => {
    const animate = () => {
      refs.current.forEach((cloud, i) => {
        if (!cloud || !cloudDefs[i]) return;

        const pos = cloud.object3D.position;
        const speed = cloudDefs[i].speed;

        pos.x += speed;

        if (pos.x > 30) {
          pos.x = -30;
        }
      });

      frameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [cloudDefs]);

  return (
    <>
      {cloudDefs.map((cloud, i) => (
        <a-plane
          key={i}
          ref={(el) => (refs.current[i] = el)}
          position={`${cloud.pos[0]} ${cloud.pos[1]} ${cloud.pos[2]}`}
          width={cloud.size[0]}
          height={cloud.size[1]}
          color="white"
          material="shader: flat; side: double"
          rotation="-90 0 0"
          opacity="0.8"
        />
      ))}
    </>
  );
}
