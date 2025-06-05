import Building from "./building";
import Clouds from "./clouds";


export default function About() {
    const buildings = [
        { height: 6, width: 2, depth: 1, position: "9 0 -7", color: "#00FFFF" },
        { height: 6, width: 2, depth: 1, position: "-9 0 -7", color: "#39FF14" },
        { height: 5, width: 2, depth: 1, position: "-8 0 -8", color: "#FF073A" },
        { height: 5, width: 2, depth: 1, position: "8 0 -8", color: "#9D00FF" },
        { height: 6, width: 2, depth: 1, position: "-5 0 -7", color: "#00FFFF" },
        { height: 6, width: 2, depth: 1, position: "5 0 -7", color: "#39FF14" },
        { height: 5.5, width: 2, depth: 1, position: "3 0 -8", color: "#FF073A" },
        { height: 5.5, width: 2, depth: 1, position: "-3 0 -8", color: "#9D00FF" },
        { height: 6, width: 2, depth: 1, position: "-1 0 -7", color: "#FF073A" },
        { height: 6, width: 2, depth: 1, position: "1 0 -7", color: "#9D00FF" },
        { height: 10, width: 10, depth: 3, position: "0 0 0", color: "#9D00FF" },
        { height: 6, width: 2, depth: 1, position: "12 0 -7", color: "#9D00FF" },
        { height: 6, width: 2, depth: 1, position: "-12 0 -7", color: "#39FF14" },
    ];

    const cloudDefs = [
        { pos: [-5, 10, -15], size: [4, 1.5], speed: 0.01 },
        { pos: [5, 10, -13], size: [3, 1], speed: 0.015 },
        { pos: [6, 10, -13], size: [5, 1.5], speed: 0.05 },
        { pos: [6, 10, -14], size: [2, 1], speed: 0.08 },
        { pos: [0, 10, -14], size: [3.5, 1], speed: 0.06 },
    ];

    const text = " \
        I'm Alex Nunez-Carrasquillo, a recent graduate from Computer Science and \
Mathematics at The University of Michigan, Ann Arbor. Originally from Canóvanas, Puerto Rico, I spend my free time \
biking around the Border-to-Border trail, kayaking down the Huron River, building in Cities Skylines, tending to my houseplants, \
or growing crops in Stardew Valley. I visit my home occasionally, where I soak in the sea salt on the beach and visit my family. However, my \
true passion has always been computers, and anything related to them - from scripting in LUA on Roblox as a child, to pursuing a degree in \
Computer Science as an adult, I hope to one day apply my passion to help make people's quality of life better. My skills, experience, \
and passion would make me a perfect fit for your team! \
    ";


    return (
        <div className="w-full h-full fixed top-0 left-0 z-0">
            <a-scene vr-mode-ui="enabled: false" background="color: black">
                <a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable"></a-entity>
                <a-entity wasd-controls camera fov="80" position="0 6 0" rotation="-10 0 0"></a-entity>
                <a-light type="ambient" color="#ffffff" intensity="0.7"/>

                {/* Floor */}
                <a-plane
                    position="0 -3 0"
                    rotation="-90 0 0"
                    width="60"
                    height="20"
                    color="black"
                    material="shader: standard;"
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

                {/* Sign */}
                <a-plane
                    width="20.3"
                    height="8.3"
                    color="white"
                    position="0 6.5 -10.01"
                    rotation="0 0 0"
                    material="shader: standard;"
                />
                <a-plane
                    width="20"
                    height="8"
                    color="black"
                    position="0 6.5 -10"
                    rotation="0 0 0"
                    material="shader: standard;"
                />
                <a-text
                    value={text}
                    align="left"
                    position="-8 6.5 -9.09"
                    wrap-count="70"
                    width="17"
                    color="white"
                    font="sourcecodepro"
                    material="shader: standard;"
                    whiteSpace="nowrap"
                    rotation="0 0 0"
                />
                <a-entity 
                    light="type: spot; angle: -80; penumbra: 0.5; intensity: 2; distance: 15; decay: 1" 
                    position="-3 6 0"
                    rotation="0 0 0">
                </a-entity>
                <a-entity 
                    light="type: spot; angle: 80; penumbra: 0.5; intensity: 2; distance: 15; decay: 1" 
                    position="3 6 0"
                    rotation="0 0 0">
                </a-entity>
                <Clouds cloudDefs={cloudDefs}/>
            </a-scene>
        </div>
    );
}