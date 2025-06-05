import { useEffect, useState } from 'react';
import Clouds from './clouds';

export default function Terminal() {
    const [docType, setDocType] = useState(null); // 'resume' or 'cv'
    const windowClouds = [
        { pos: [-10, 20, -30], size: [5, 1.5], speed: 0.005 },
        { pos: [-14, 21, -27], size: [3.5, 1.2], speed: 0.005 },
        { pos: [8, 28, -29], size: [4.5, 1], speed: 0.005 },
        { pos: [20, 20, -28], size: [3.5, 1.2], speed: 0.005 },
        { pos: [-20, 23, -26], size: [4.5, 1], speed: 0.005 },
    ];
    const windowBuildings = [
        { pos: [4, -4, -50], height: 20, width: 5, color: "#00FFFF" },
        { pos: [-1, -5, -50], height: 18, width: 5, color: "#FF073A" },
        { pos: [-4, -3, -50], height: 22, width: 3, color: "#39FF14" },
    ]

    useEffect(() => {
        const camera = document.querySelector('[camera]');

        const handleClick = (type, rotation) => {
            // Remove old animation if exists
            camera.removeAttribute('animation__rotate');

            // Apply new animation
            camera.setAttribute('animation__rotate', {
                property: 'rotation',
                to: rotation,
                dur: 1000,
                easing: 'easeInOutQuad',
            });

            // Delay showing document until camera finishes rotating
            setTimeout(() => {
                setDocType(type);
            }, 1000);
        };

        const resumeScreen = document.querySelector('#resume-screen');
        const cvScreen = document.querySelector('#cv-screen');

        if (resumeScreen) {
            resumeScreen.addEventListener('click', () =>
                handleClick('resume', '0 45 0')
            );
        }

        if (cvScreen) {
            cvScreen.addEventListener('click', () =>
                handleClick('cv', '0 -45 0')
            );
        }

        return () => {
            if (resumeScreen) resumeScreen.removeEventListener('click', handleClick);
            if (cvScreen) cvScreen.removeEventListener('click', handleClick);
        };
    }, []);

    const closeDoc = () => {
        const camera = document.querySelector('[camera]');

        setDocType(null);

        // Remove old animation if exists
        camera.removeAttribute('animation__rotate');

        // Rotate camera back to center
        camera.setAttribute('animation__rotate', {
            property: 'rotation',
            to: '0 0 0',
            dur: 1000,
            easing: 'easeInOutQuad',
        });
    };

    const getDocSrc = () => {
        if (docType === 'resume') return '/Resume.pdf';
        if (docType === 'cv') return '/CV.pdf'; // Replace with your actual CV file path
        return '';
    };

    return (
        <div className="w-full h-full fixed top-0 left-0 z-0">
            <a-scene background="color: black">
                <a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable"></a-entity>
                <a-entity camera fov="80" position="0 0 10" rotation="0 0 0"></a-entity>
                <a-light type="ambient" color="#ffffff" intensity="1"/>

                {/* Right screen */}
                <a-plane
                    id="cv-screen"
                    class="clickable"
                    position="12 0 -9.9"
                    rotation="0 -45 0"
                    width="25"
                    height="14"
                    material="shader: flat; src: /CVTexture.png"
                />
                <a-plane
                    position="12 0 -10"
                    rotation="0 -45 0"
                    width="27"
                    height="15.5"
                    color="#FF073A"
                    material="shader: standard;"
                />
                <a-plane
                    position="13 -8 -11"
                    rotation="0 -45 0"
                    width="10"
                    height="5"
                    color="#FF073A"
                    material="shader: standard;"
                />
                <a-plane
                    position="13 -10 -11"
                    rotation="-90 -45 0"
                    width="15"
                    height="4"
                    color="#FF073A"
                    material="shader: flat;"
                />

                {/* Left screen with clickable resume */}
                <a-plane
                    position="-12 0 -10"
                    rotation="0 45 0"
                    width="27"
                    height="15.5"
                    color="#00FFFF"
                    material="shader: flat;"
                />
                <a-plane
                    id="resume-screen"
                    class="clickable"
                    position="-12 0 -9.9"
                    rotation="0 45 0"
                    width="25"
                    height="14"
                    material="shader: flat; src: /ResumeTexture.png"
                />
                <a-plane
                    position="-13 -8 -11"
                    rotation="0 45 0"
                    width="10"
                    height="5"
                    color="#00ffff"
                    material="shader: flat;"
                />
                <a-plane
                    position="-13 -10 -11"
                    rotation="-90 45 0"
                    width="15"
                    height="4"
                    color="#00ffff"
                    material="shader: flat;"
                />

                {/* Desk + keyboard */}
                <a-plane
                    position="0 -10.1 -11"
                    rotation="-90 0 0"
                    width="70"
                    height="30"
                    color="#111111"
                    material="shader: flat;"
                />
                <a-plane
                    position="0 -10 -5"
                    rotation="-90 0 0"
                    width="13"
                    height="3"
                    color="white"
                    material="shader: flat;"
                />
                <a-box
                    position="9 -9.5 -3"
                    rotation="0 0 0"
                    width="1.3"
                    height="0.25"
                    depth="2"
                    color="white"
                    material="shader: flat;"
                />

                {/* Cactus */}
                <a-box
                    position="-3 -9.5 -15"
                    rotation="0 0 0"
                    width="3"
                    height="3"
                    depth="3"
                    color="orange"
                    material="shader: flat;"
                />
                <a-box
                    position="-3 -9.5 -15"
                    rotation="0 0 0"
                    width="2"
                    height="10"
                    depth="2"
                    color="green"
                    material="shader: flat;"
                />

                {/* Window */}
                <a-plane
                    position="0 11 -30"
                    rotation="0 0 0"
                    width="80"
                    height="40"
                    color="white"
                    material="shader: flat; opacity: 0.2"
                />
                <a-circle
                    position="0 36 -60"
                    radius="17"
                    color="#ffaa00"
                    animation="property: scale; dir: alternate; dur: 3000; to: 1.05 1.05 1.05; loop: true"
                />
                <Clouds cloudDefs={windowClouds} />
                {windowBuildings.map((b, i) => (
                    <a-plane
                        key={i}
                        position={`${b.pos[0]} ${b.pos[1]} ${b.pos[2]}`}
                        width={b.width}
                        height={b.height}
                        color={b.color}
                        material="shader: flat;"
                        rotation="0 0 0"
                    />
                ))}
            </a-scene>

            {/* Resume IFrame Overlay */}
            {docType && (
                <div className="fixed top-1/2 left-1/2 w-[80vw] h-[90vh] z-50 -translate-x-1/2 -translate-y-1/2 border-4 border-cyan-400 bg-black shadow-[0_0_40px_#00ffff]">
                    <button
                        onClick={closeDoc}
                        className="absolute top-2 right-2 bg-cyan-500 text-black px-4 py-1 rounded hover:bg-cyan-400"
                    >
                        Close
                    </button>
                    <iframe
                        src={getDocSrc()}
                        className="w-full h-full"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>
            )}
        </div>
    );
}
