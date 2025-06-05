import { useRef, useState } from "react";
import Building from "./building";
import Sign from "./signs";
import Clouds from "./clouds";
import Car from './car';


function generateBuildings() {
  return [
    { height: 9, width: 0.119, depth: 0.9, position: "-5 0 17", color: "#00FFFF" },
    { height: 7, width: 0.395, depth: 0.56, position: "-3 0 17", color: "#39FF14" },
    { height: 7, width: 1.0, depth: 0.56, position: "3.5 0 17", color: "#39FF14" },
    { height: 9, width: 0.853, depth: 0.9, position: "5 0 17", color: "#9d00ff" },
    { height: 5, width: 0.322, depth: 0.971, position: "-5 0 15", color: "#39FF14" },
    { height: 6, width: 0.405, depth: 0.628, position: "-3 0 15", color: "#00FFFF" },
    { height: 9, width: 0.003, depth: 0.628, position: "3.1 0 15", color: "#9d00ff" },
    { height: 10, width: 0.589, depth: 0.971, position: "5 0 15", color: "#39FF14" },
    { height: 8, width: 0.964, depth: 0.892, position: "-5 0 13", color: "#FF073A" },
    { height: 10, width: 0.253, depth: 0.763, position: "-3 0 13", color: "#FF073A" },
    { height: 5, width: 0.412, depth: 0.763, position: "3 0 13", color: "#9d00ff" },
    { height: 9, width: 0.577, depth: 0.892, position: "5 0 13", color: "#00FFFF" },
    { height: 6, width: 0.264, depth: 0.106, position: "-5 0 11", color: "#00FFFF" },
    { height: 4, width: 0.085, depth: 0.274, position: "-3 0 11", color: "#39FF14" },
    { height: 10, width: 0.374, depth: 0.274, position: "3 0 11", color: "#9d00ff" },
    { height: 10, width: 0.126, depth: 0.106, position: "5 0 11", color: "#39FF14" },
    { height: 10, width: 0.688, depth: 0.683, position: "-5 0 9", color: "#FF073A" },
    { height: 8, width: 0.397, depth: 0.946, position: "-3 0 9", color: "#39FF14" },
    { height: 6, width: 0.189, depth: 0.946, position: "3 0 9", color: "#9d00ff" },
    { height: 6, width: 0.583, depth: 0.683, position: "5 0 9", color: "#39FF14" },
    { height: 9, width: 0.711, depth: 0.823, position: "-5 0 7", color: "#9d00ff" },
    { height: 5, width: 0.645, depth: 0.654, position: "-3 0 7", color: "#9d00ff" },
    { height: 6, width: 0.878, depth: 0.654, position: "3 0 7", color: "#39FF14" },
    { height: 9, width: 0.864, depth: 0.823, position: "5 0 7", color: "#9d00ff" },
    { height: 10, width: 0.194, depth: 0.952, position: "-5 0 5", color: "#9d00ff" },
    { height: 10, width: 0.464, depth: 0.699, position: "-3 0 5", color: "#00FFFF" },
    { height: 4, width: 0.093, depth: 0.699, position: "3 0 5", color: "#9d00ff" },
    { height: 9, width: 0.556, depth: 0.952, position: "5 0 5", color: "#9d00ff" },
    { height: 5, width: 0.388, depth: 0.71, position: "-5 0 3", color: "#9d00ff" },
    { height: 6, width: 0.491, depth: 0.254, position: "-3 0 3", color: "#00FFFF" },
    { height: 6, width: 0.509, depth: 0.254, position: "3 0 3", color: "#00FFFF" },
    { height: 10, width: 0.123, depth: 0.71, position: "5 0 3", color: "#9d00ff" },
    { height: 10, width: 0.143, depth: 0.301, position: "-5 0 1", color: "#9d00ff" },
    { height: 6, width: 0.246, depth: 0.802, position: "-3 0 1", color: "#00FFFF" },
    { height: 6, width: 0.754, depth: 0.802, position: "3 0 1", color: "#9d00ff" },
    { height: 7, width: 0.087, depth: 0.301, position: "5 0 1", color: "#FF073A" },
    { height: 9, width: 0.711, depth: 0.823, position: "-5 0 0", color: "#9d00ff" },
    { height: 5, width: 0.645, depth: 0.654, position: "-3 0 0", color: "#9d00ff" },
    { height: 6, width: 0.878, depth: 0.654, position: "3 0 0", color: "#39FF14" },
    { height: 9, width: 0.864, depth: 0.823, position: "5 0 0", color: "#9d00ff" },
    { height: 10, width: 0.194, depth: 0.952, position: "-5 0 -1", color: "#9d00ff" },
    { height: 10, width: 0.464, depth: 0.699, position: "-3 0 -1", color: "#00FFFF" },
    { height: 4, width: 0.093, depth: 0.699, position: "3 0 -1", color: "#9d00ff" },
    { height: 9, width: 0.556, depth: 0.952, position: "5 0 -1", color: "#9d00ff" },
    { height: 5, width: 0.388, depth: 0.71, position: "-5 0 -3", color: "#9d00ff" },
    { height: 6, width: 0.491, depth: 0.254, position: "-3 0 -3", color: "#00FFFF" },
    { height: 6, width: 0.509, depth: 0.254, position: "3 0 -3", color: "#00FFFF" },
    { height: 10, width: 0.123, depth: 0.71, position: "5 0 -3", color: "#9d00ff" },
    { height: 10, width: 0.143, depth: 0.301, position: "-5 0 -5", color: "#9d00ff" },
    { height: 6, width: 0.246, depth: 0.802, position: "-3 0 -5", color: "#00FFFF" },
    { height: 6, width: 0.754, depth: 0.802, position: "3 0 -5", color: "#9d00ff" },
    { height: 7, width: 0.087, depth: 0.301, position: "5 0 -5", color: "#FF073A" },
    ];
}


export default function Scene() {
  const buildings = generateBuildings()
  const signs = [
    { z: 3.5, x: -1.9, y: 17, height: 0.75, width: 1.5, label: "Resume", link: "/resume" },
    { z: 3.5, x: 1.9, y: 17, height: 0.75, width: 1.5, label: "Projects", link: "/projects" },
    { z: 2.85, x: 1.65, y: 16, height: 0.75, width: 1.5, label: "Education", link: "/education" },
    { z: 2.85, x: -1.65, y: 16, height: 0.75, width: 1.5, label: "About", link: "/about" },
    { z: 2, x: 1.35, y: 15, height: 0.75, width: 1.5,  label: "Skills", link: "/skills" },
    { z: 2, x: -1.35, y: 15, height: 0.75, width: 1.5, label: "Contact", link: "/contact" },
  ];

  const cloudDefs = [
    { pos: [-20, 20, -5], size: [4, 1.5], speed: 0.01 },
    { pos: [-25, 19, -2], size: [3, 1], speed: 0.015 },
    { pos: [-15, 4, 4], size: [5, 1.5], speed: 0.05 },
    { pos: [-30, 3, 8], size: [2, 1], speed: 0.08 },
    { pos: [-18, 2, 10], size: [3.5, 1], speed: 0.06 },
  ];

  const cameraRef = useRef();
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-0">
      {fadeOut && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 animate-fadeout" />
      )}
      <a-scene vr-mode-ui="enabled: false" background="color: black">
        <a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable"></a-entity>
        <a-entity
          ref={cameraRef}
          camera
          wasd-controls
          fov="90"
          position="0 2 21"
          rotation="0 0 0"
        />
        <a-light type="ambient" color="ffffff" intensity="1"/>
        <a-plane
          position="0 -2 0"
          rotation="-90 0 0"
          width="40"
          height="40"
          material={"shader: standard; color: black;"}
        />
        <a-plane
          position="0 -1.9 10"
          rotation="-90 0 0"
          width="3"
          height="40"
          material={"shader: flat; color: white;"}
        />
        <a-plane
          position="0 -1.8 10"
          rotation="-90 0 0"
          width="2.5"
          height="40"
          material={"shader: standard; color: #000c19;"}
        />
        {buildings.map((b, i) => (
          <Building
            key={i}
            height={b.height}
            width={b.width}
            depth={b.depth}
            position={b.position}
            color={b.color}
          />
        ))}
        {signs.map((s, i) => (
          <Sign
            key={i}
            xpos={s.x}
            zpos={s.z}
            ypos={s.y}
            link={s.link}
            label={s.label}
            height={s.height}
            width={s.width}
            cameraRef={cameraRef}
            triggerFade={() => setFadeOut(true)}
          />
        ))}
        <a-sphere
            id="moon"
            color="orange"
            radius="5"
            position="0 13 -10"
            material="shader: flat;"
            animation__scale="property: scale; dir: alternate; dur: 3000; easing: easeInOutSine; loop: true; to: 1.05 1.05 1.05"
        />
        <Clouds cloudDefs={cloudDefs}/>
        <Car speed={0.25} />
        <Car speed={0.25} />
      </a-scene>
    </div>
  );
}
