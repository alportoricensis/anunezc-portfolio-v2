'use client';

import { useEffect, useRef } from 'react';

export default function Sign({ xpos, zpos, ypos, height, width, link, cameraRef, triggerFade, rotation="0 0 0" }) {
  const bgWidth = width ?? 1.5;
  const bgHeight = height ?? 2.5;
  const fgWidth = bgWidth - 0.1;
  const fgHeight = bgHeight - 0.1;

  const frontRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const handleClick = () => {
      if (!cameraRef.current) return;

      // Rotate and zoom camera toward this sign
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

      // Trigger fade after move
      triggerFade();

      // Route change after delay
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
        material="shader: flat;"
        class="clickable"
      />

      {/* Back Plane */}
      <a-plane
        width={bgWidth}
        height={bgHeight}
        color="white"
        position={`${xpos} ${zpos} ${ypos - 0.04}`}
        rotation={rotation}
        material="shader: flat;"
      />

      {/* Text */}
      <a-text
        ref={textRef}
        value={link.replace("/", "").toUpperCase()}
        align="center"
        position={`${xpos} ${zpos} ${ypos + 0.01}`}
        color="white"
        rotation={rotation}
        event-set__enter="color: #00ffff"
        event-set__leave="color: white"
        class="clickable"
      />
    </a-entity>
  );
}
