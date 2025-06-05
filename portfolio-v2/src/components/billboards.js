'use client;'

import Building from "./building";
import Billboard from "./billboard";
import Clouds from "./clouds";
import Car from './car';


export default function Billboards({ camRef }) {
    const buildings = [
        { height: 34, width: 5, depth: 4, position: "51 0 0", color: "#00FFFF" },
        { height: 33, width: 5, depth: 5, position: "52 0 8", color: "#39FF14" },
        { height: 35, width: 7, depth: 7, position: "54 0 16", color: "#FF073A" },
        { height: 37, width: 6, depth: 5, position: "52 0 24", color: "#9D00FF" },
        { height: 31, width: 0.556, depth: 4, position: "50 0 32", color: "#FFFF33" },
        { height: 38, width: 0.388, depth: 7, position: "54 0 40", color: "#9D00FF" },
        { height: 34, width: 0.491, depth: 8, position: "52 0 -8", color: "#39FF14" },
        { height: 32, width: 0.509, depth: 5, position: "50 0 -16", color: "#FFFF33" },
        { height: 37, width: 0.123, depth: 5, position: "51 0 -24", color: "#FFFF33" },
        { height: 36, width: 0.143, depth: 6, position: "53 0 -32", color: "#00FFFF" },
        { height: 33, width: 0.246, depth: 7, position: "52 0 -40", color: "#9D00FF" },
        { height: 35, width: 0.754, depth: 5, position: "54 0 -48", color: "#9D00FF" },
        { height: 31, width: 0.087, depth: 8, position: "51 0 48", color: "#39FF14" },
        { height: 34, width: 5, depth: 4, position: "60 0 0", color: "#00FFFF" },
        { height: 33, width: 5, depth: 5, position: "61 0 6", color: "#39FF14" },
        { height: 35, width: 7, depth: 7, position: "64 0 12", color: "#FF073A" },
        { height: 37, width: 6, depth: 5, position: "62 0 18", color: "#9D00FF" },
        { height: 41, width: 0.556, depth: 4, position: "60 0 24", color: "#FFFF33" },
        { height: 38, width: 0.388, depth: 7, position: "64 0 30", color: "#9D00FF" },
        { height: 34, width: 0.491, depth: 8, position: "62 0 36", color: "#39FF14" },
        { height: 32, width: 0.509, depth: 5, position: "60 0 -6", color: "#FFFF33" },
        { height: 37, width: 0.123, depth: 5, position: "61 0 -12", color: "#FFFF33" },
        { height: 36, width: 0.143, depth: 6, position: "63 0 -18", color: "#00FFFF" },
        { height: 43, width: 0.246, depth: 7, position: "62 0 -24", color: "#9D00FF" },
        { height: 45, width: 0.754, depth: 5, position: "64 0 -30", color: "#9D00FF" },
        { height: 41, width: 0.087, depth: 8, position: "61 0 -48", color: "#39FF14" },
    ];

    const cloudDefs = [
        { pos: [20, 17, 30], size: [4, 1.5], speed: 0.01 },
        { pos: [20, 17, 24], size: [3, 1], speed: 0.015 },
        { pos: [20, 17, 18], size: [5, 1.5], speed: 0.05 },
        { pos: [20, 17, 12], size: [2, 1], speed: 0.08 },
        { pos: [20, 17, 6], size: [3.5, 1], speed: 0.06 },
        { pos: [20, 17, -30], size: [4, 1.5], speed: 0.01 },
        { pos: [20, 17, -24], size: [3, 1], speed: 0.015 },
        { pos: [20, 17, -18], size: [5, 1.5], speed: 0.05 },
        { pos: [20, 17, -12], size: [2, 1], speed: 0.08 },
        { pos: [20, 17, -6], size: [3.5, 1], speed: 0.06 },
    ];

    return (
        <a-scene vr-mode-ui="enabled: false" background="color: black">
            <a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable"></a-entity>
            <a-entity
                ref={camRef}
                camera
                wasd-controls
                fov="90"
                position="-7 1.6 0"
                rotation="5 -90 0"
            />
            <a-light type="ambient" color="#ffffff" intensity="0.4"/>
            <a-plane
                position="0 -2 -5"
                rotation="-90 -90 0"
                width="50"
                height="7"
                material={"shader: standard; color: white;"}
            />
            <a-plane
                position="0 -1.9 0"
                rotation="-90 -90 0"
                width="50"
                height="6"
                material={"shader: standard; color: #000c19;"}
            />
            <a-plane
                position="15 -2.1 0"
                rotation="-90 -90 0"
                width="130"
                height="40"
                material={"shader: standard; color: black;"}
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
            <a-sphere
                id="moon"
                color="orange"
                radius="7"
                position="35 30 0"
                material="shader: flat;"
                animation__scale="property: scale; dir: alternate; dur: 3000; easing: easeInOutSine; loop: true; to: 1.05 1.05 1.05"
            />
            <Billboard logoSrc="/Grid.png" cameraRef={camRef} position="6 -2.5 -13"/>
            <Billboard logoSrc="/Grid.png" cameraRef={camRef} position="10 -2.5 -5"/>
            <Billboard logoSrc="/Grid.png" cameraRef={camRef} position="6 -2.5 13"/>
            <Billboard logoSrc="/Grid.png" cameraRef={camRef} position="8 -2.5 5"/>
            <Clouds cloudDefs={cloudDefs}/>
            <Car speed={0.5} />
        </a-scene>
    )
}