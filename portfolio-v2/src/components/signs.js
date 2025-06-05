'use client';

import { useEffect, useRef } from 'react';

export default function Sign({
  xpos,
  zpos,
  ypos,
  height,
  width,
  link,
  label = '',
  rotation = '0 0 0',
  cameraRef,
  triggerFade,
}) {
  const bgWidth = width ?? 1.5;
  const bgHeight = height ?? 2.5;
  const fgWidth = bgWidth - 0.1;
  const fgHeight = bgHeight - 0.1;

  const frontRef = useRef();
  const textRef = useRef();

  const [rx, ry, rz] = rotation.split(" ").map(Number);
  const offset = 0.04;
  let offsetX = 0, offsetY = 0, offsetZ = 0;

  if (Math.abs(ry % 360) === 90) {
    offsetX = -offset;
  } else if (Math.abs(ry % 360) === 270) {
    offsetX = offset;
  } else if (Math.abs(ry % 360) === 0) {
    offsetZ = -offset;
  } else if (Math.abs(ry % 360) === 180) {
    offsetZ = offset;
  }

  useEffect(() => {
    const handleClick = () => {
      if (!cameraRef.current) return;

      const cam = cameraRef.current;
      cam.removeAttribute("animation__move");
      cam.removeAttribute("animation__look");

      cam.setAttribute("animation__move", {
        property: "position",
        to: `${xpos} ${zpos} ${ypos}`,
        dur: 800,
        easing: "easeInOutQuad",
      });

      cam.setAttribute("animation__look", {
        property: "rotation",
        to: `0 ${xpos < 0 ? 45 : xpos > 0 ? -45 : 0} 0`,
        dur: 800,
        easing: "easeInOutQuad",
      });

      triggerFade();

      setTimeout(() => {
        window.location.href = link;
      }, 1200);
    };

    const front = frontRef.current;
    const text = textRef.current;

    if (front) front.addEventListener('click', handleClick);
    if (text) text.addEventListener('click', handleClick);

    return () => {
      if (front) front.removeEventListener('click', handleClick);
      if (text) text.removeEventListener('click', handleClick);
    };
  }, [link]);

  return (
    <a-entity>
      {/* Front Plane */}
      <a-plane
        ref={frontRef}
        width={fgWidth}
        height={fgHeight}
        color="black"
        position={`${xpos} ${zpos} ${ypos}`}
        rotation={rotation}
        material="shader: standard;"
        class="clickable"
      />

      {/* Back Plane */}
      <a-plane
        width={bgWidth}
        height={bgHeight}
        color="white"
        position={`${xpos + offsetX} ${zpos} ${ypos + offsetZ}`}
        rotation={rotation}
        material="shader: flat;"
      />

      {/* Text */}
      <a-text
        ref={textRef}
        value={`${label || link.replace("/", "").toUpperCase()} ->`}
        align="center"
        position={`${xpos - offsetX} ${zpos} ${ypos - offsetZ}`}
        color="white"
        font="sourcecodepro"
        rotation={rotation}
        class="clickable"
      />
    </a-entity>
  );
}
