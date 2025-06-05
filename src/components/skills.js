import Building from "./building";
import Clouds from "./clouds";


export default function Skills() {
    const buildings = [
        { height: 11, width: 4, depth: 1, position: "12 0 -7", color: "#00FFFF" },
        { height: 11, width: 4, depth: 1, position: "-12 0 -7", color: "#39FF14" },
        { height: 12, width: 5, depth: 1, position: "-12.5 0 -7.5", color: "#FF073A" },
        { height: 12, width: 5, depth: 1, position: "12.5 0 -7.5", color: "#9D00FF" },
        { height: 15, width: 7, depth: 1, position: "7 0 -9", color: "#00FFFF" },
        { height: 15, width: 7, depth: 1, position: "-7 0 -9", color: "#39FF14" },
        { height: 18, width: 8, depth: 1, position: "0 0 -11", color: "#FF073A" },
    ];

    const cloudDefs = [
        { pos: [-5, 10, -15], size: [4, 1.5], speed: 0.01 },
        { pos: [5, 10, -13], size: [3, 1], speed: 0.015 },
        { pos: [6, 10, -13], size: [5, 1.5], speed: 0.05 },
        { pos: [6, 10, -14], size: [2, 1], speed: 0.08 },
        { pos: [0, 10, -14], size: [3.5, 1], speed: 0.06 },
    ];

    const titles = [
        { position: "0 8.1 -9.9", text: "Tools & Frameworks", color: "#FF073A" },
        { position: "6.5 6.5 -7.9", text: "Programming Languages", color: "#00FFFF" },
        { position: "-6.5 6.5 -7.9", text: "Professional Skills", color: "#39FF14" },
    ];

    const skill = [
        { position: [0, 7, -9.9], text: "React / Next.js", color: "#FF073A" },
        { position: [0, 6, -9.9], text: "FastAPI / Flask", color: "#FF073A" },
        { position: [0, 5, -9.9], text: "Docker", color: "#FF073A" },
        { position: [0, 4, -9.9], text: "Git", color: "#FF073A" },
        { position: [0, 3, -9.9], text: "Blender", color: "#FF073A" },
        { position: [0, 2, -9.9], text: "Unity", color: "#FF073A" },
        { position: [0, 1, -9.9], text: "Figma", color: "#FF073A" },
        { position: [0, 0, -9.9], text: "SQL / NoSQL DBs", color: "#FF073A" },
        { position: [7, 5.5, -8.4], text: "JavaScript", color: "#00FFFF" },
        { position: [7, 4.5, -8.4], text: "Python", color: "#00FFFF" },
        { position: [7, 3.5, -8.4], text: "Java", color: "#00FFFF" },
        { position: [7, 2.5, -8.4], text: "C/C++", color: "#00FFFF" },
        { position: [7, 1.5, -8.4], text: "MATLAB", color: "#00FFFF" },
        { position: [7, 0.5, -8.4], text: "HTML/CSS", color: "#00FFFF" },
        { position: [-7, 5.5, -8.4], text: "Growth-Oriented Mindset", color: "#39FF14" },
        { position: [-7, 4.5, -8.4], text: "Cross-Functional Communication", color: "#39FF14" },
        { position: [-7, 3.5, -8.4], text: "Adaptability", color: "#39FF14" },
        { position: [-7, 2.5, -8.4], text: "Leadership", color: "#39FF14" },
        { position: [-7, 1.5, -8.4], text: "Self-Driven Learning", color: "#39FF14" },
        { position: [-7, 0.5, -8.4], text: "Design & UX Awareness", color: "#39FF14" },
        { position: [-7, -0.5, -8.4], text: "Bilingual: English & Spanish", color: "#39FF14" },
    ];

    return (
        <div className="w-full h-full fixed top-0 left-0 z-0">
            <a-scene vr-mode-ui="enabled: false" background="color: black">
                <a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable"></a-entity>
                <a-entity wasd-controls camera fov="80" position="0 1.6 0" rotation="0 0 0"></a-entity>
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

                {/* Titles */}
                {titles.map((t, i) => (
                    <a-text
                        key={i}
                        value={t.text}
                        position={t.position}
                        color={t.color}
                        width="12"
                        align="center"
                    />
                ))}

                {/* Skills */}
                {skill.map((t, i) => (
                    <a-entity key={i}>
                        <a-plane
                            value={t.text}
                            position={`${t.position[0]} ${t.position[1]} ${t.position[2]}`}
                            color={t.color}
                            height="0.7"
                            width="6.8"
                            align="center"
                        />
                        <a-text
                            value={t.text}
                            position={`${t.position[0]} ${t.position[1]} ${t.position[2]}`}
                            color="white"
                            width="9"
                            align="center"
                            font="sourcecodepro"
                        />
                    </a-entity>
                ))}
                <Clouds cloudDefs={cloudDefs}/>
            </a-scene>
        </div>
    );
}