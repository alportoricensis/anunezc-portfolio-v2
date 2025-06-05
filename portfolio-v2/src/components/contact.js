'use client;'

import React, { useRef, useState } from "react";
import Building from "./building";
import Sign from "./signs";
import Clouds from "./clouds";

export default function Contacts({}) {
    const buildings = [
        { height: 14, width: 3, depth: 3, position: "-7 0 0", color: "#00FFFF" },
        { height: 13, width: 1, depth: 3, position: "-8 0 4", color: "#9d00ff" },
        { height: 9, width: 1, depth: 4, position: "-7 0 10", color: "#FF073A" },
        { height: 7, width: 1, depth: 3, position: "-6 0 6", color: "#39FF14" },
        { height: 13, width: 1, depth: 3, position: "-8 0 -4 ", color: "#39FF14" },
        { height: 9, width: 1, depth: 3, position: "-7 0 -10", color: "#FF073A" },
        { height: 7, width: 1, depth: 3, position: "-6 0 -6 ", color: "#39FF14" },
        { height: 25, width: 1, depth: 3, position: "-9 0 -12 ", color: "#39FF14" },
        { height: 25, width: 1, depth: 3, position: "-9 0 12", color: "#39FF14" },
    ];

    const signs = [
        { z: 6, x: -5, y: 0, height: 1.5, width: 2.5, label: "E-Mail", link: "/resume", rotation: "0 90 0" },
        { z: 5.5, x: -7, y: 3.75, height: 1.5, width: 2.5, label: "GitHub", link: "/projects", rotation: "0 90 0" },
        { z: 5.5, x: -7, y: -3.75, height: 1.5, width: 2.5, label: "LinkedIn", link: "/projects", rotation: "0 90 0" },
    ];

    const cloudDefs = [
        { pos: [20, 17, 30], size: [4, 1.5], speed: 0.001 },
        { pos: [20, 17, 24], size: [3, 1], speed: 0.0015 },
        { pos: [20, 17, 18], size: [5, 1.5], speed: 0.005 },
        { pos: [20, 17, 12], size: [2, 1], speed: 0.008 },
        { pos: [20, 17, 6], size: [3.5, 1], speed: 0.006 },
        { pos: [20, 17, -30], size: [4, 1.5], speed: 0.001 },
        { pos: [20, 17, -24], size: [3, 1], speed: 0.0015 },
        { pos: [20, 17, -18], size: [5, 1.5], speed: 0.005 },
        { pos: [20, 17, -12], size: [2, 1], speed: 0.008 },
        { pos: [20, 17, -6], size: [3.5, 1], speed: 0.06 },
    ];

    const cameraRef = useRef();
    const [fadeOut, setFadeOut] = useState(false);

    return (
        <div className="w-full h-full fixed top-0 left-0 z-0">
            <a-scene background="color: black">
                <a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable"></a-entity>
                <a-entity camera wasd-controls fov="80" position="1 5 0" rotation="0 90 0"></a-entity>
                <a-light type="ambient" color="#ffffff" intensity="1"/>

                {/* Floor */}
                <a-plane 
                    position="-2 -3 0"
                    material="shader: flat; color: black"
                    rotation="-90 -90 0"
                    width="40"
                    height="10"
                />

                {/* Buildings */}
                {buildings.map((b, i) => (
                    <Building
                    key={i}
                    height={b.height}
                    width={b.width}
                    depth={b.depth}
                    position={b.position}s
                    color={b.color}
                    />
                ))}

                {/* Signs */}
                {signs.map((s, i) => (
                    <a-entity key={i}>
                        <a-plane
                            position={`${s.x - 0.01} ${s.z} ${s.y}`}
                            rotation={s.rotation}
                            link={s.link}
                            height={s.height}
                            width={s.width}
                            color="white"
                        />
                        <a-plane
                            position={`${s.x} ${s.z} ${s.y}`}
                            rotation={s.rotation}
                            link={s.link}
                            height={s.height - 0.1}
                            width={s.width - 0.1}
                            color="black"
                        />
                        <a-text
                            value={s.label}
                            height={s.height + 5}
                            width={s.width + 5}
                            align="center"
                            baseline="bottom"
                            position={`${s.x + 0.01} ${s.z} ${s.y}`}
                            color="white"
                            rotation={s.rotation}
                        />
                    </a-entity>
                ))}

                {/* Clouds */}
                <Clouds cloudDefs={cloudDefs}/>
                <a-sphere
                    id="moon"
                    color="orange"
                    radius="9"
                    position="-30 28 0"
                    material="shader: flat;"
                    animation__scale="property: scale; dir: alternate; dur: 3000; easing: easeInOutSine; loop: true; to: 1.05 1.05 1.05"
                />

            </a-scene>
        </div>
    );
}