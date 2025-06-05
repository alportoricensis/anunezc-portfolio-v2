import Building from "./building";
import Clouds from "./clouds";

export default function Plaza() {
    const buildings = [
        { height: 12, width: 2, depth: 1, position: "9 0 -7", color: "#00FFFF" },
        { height: 12, width: 2, depth: 1, position: "-9 0 -7", color: "#39FF14" },
        { height: 11, width: 2, depth: 1, position: "-8 0 -8", color: "#FF073A" },
        { height: 11, width: 2, depth: 1, position: "8 0 -8", color: "#9D00FF" },
    ];

    const cloudDefs = [
        { pos: [-5, 10, -12], size: [4, 1.5], speed: 0.01 },
        { pos: [5, 10, -11], size: [3, 1], speed: 0.015 },
        { pos: [6, 10, -10], size: [5, 1.5], speed: 0.05 },
        { pos: [6, 10, -9], size: [2, 1], speed: 0.08 },
        { pos: [0, 10, -8], size: [3.5, 1], speed: 0.06 },
    ];

    return (
        <div className="w-full h-full fixed top-0 left-0 z-0">
            <a-scene vr-mode-ui="enabled: false" background="color: black">
                <a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable"></a-entity>
                <a-entity wasd-controls camera fov="80" position="0 -2 0" rotation="10 0 0"></a-entity>
                <a-light type="ambient" color="#ffffff" intensity="0.7"/>
                

                {/* Floor */}
                <a-plane
                    position="0 -3 0"
                    rotation="-90 0 0"
                    width="60"
                    height="20"
                    color="black"
                    material="shader: standard; metalness: 0.6; roughness: 0.2; opacity: 0.7; transparent: true"
                />

                {/* Block M Pedestal */}
                <a-box
                    position="0 -3 -7"
                    rotation="0 0 0"
                    width="6"
                    height="4"
                    depth="4"
                    color="#00274c"
                    material="shader: standard;"
                />
                <a-box
                    position="0 -3 -7"
                    rotation="0 0 0"
                    width="6.5"
                    height="2"
                    depth="4.5"
                    color="#00274c"
                    material="shader: standard;"
                />
                <a-entity
                    gltf-model={"./BlockM.glb"}
                    id="model-root"
                    animation__float="property: position; dir: alternate; dur: 4000; easing: easeInOutSine; loop: true; to: 0 0.5 -7"
                    position="0 0 -7"
                    scale="0.1 0.1 0.1"
                />
                <a-entity 
                    light="type: spot; angle: 20; penumbra: 0.5; intensity: 2; distance: 20; decay: 1" 
                    position="0 -3.5 -7"
                    rotation="90 0 0">
                </a-entity>
                <a-entity 
                    light="type: spot; angle: 20; penumbra: 0.5; intensity: 2; distance: 10; decay: 1" 
                    position="-4 -3.5 -7"
                    rotation="100 0 0">
                </a-entity>
                <a-entity 
                    light="type: spot; angle: 20; penumbra: 0.5; intensity: 2; distance: 10; decay: 1" 
                    position="4 -3.5 -7"
                    rotation="100 0 0">
                </a-entity>

                {/* Panel */}
                <a-text
                    value={"The University of Michigan"}
                    align="center"
                    scale="1.8 1.8 1.8"
                    font="sourcecodepro"
                    position="0 -1.5 -5"
                    rotation="0 0 0"
                    color="white"
                />
                <a-text
                    value={"B.S.E. in Computer Science"}
                    align="center"
                    font="sourcecodepro"
                    scale="1 1 1"
                    position="0 -2.25 -4"
                    color="white"
                />
                <a-text
                    value={"May 2025 | Magna Cum Laude"}
                    align="center"
                    font="sourcecodepro"
                    scale="1 1 1"
                    position="0 -2.5 -4"
                    color="white"
                />

                {/* Buildings */}
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
                <Clouds cloudDefs={cloudDefs}/>
            </a-scene>
        </div>
    )
}