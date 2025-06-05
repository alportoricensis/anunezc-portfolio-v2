// components/Billboard.js
export default function Billboard({ logoSrc, cameraRef, position = "0 0 0" }) {
  const [x, y, z] = position.split(' ').map(Number);

  const width = 10;
  const height = 5;
  const legHeight = 1.5;
  const depthOffset = 0.05;

  const neonColors = ["#00FFFF", "#FF00FF", "#39FF14", "#FF073A"];
  const neon = neonColors[Math.floor(Math.random() * neonColors.length)];

  const handleClick = () => {
    if (cameraRef?.current) {
      // e.g. move camera position or update a React state to show project modal
    }
  };

  return (
    <a-entity position={`${x} ${y} ${z}`}>
      {/* Back glowing frame */}
      <a-plane
        width={width}
        height={height}
        color={neon}
        emissive={neon}
        emissiveIntensity="1"
        position={`0 ${legHeight + height / 2} ${-depthOffset}`}
        rotation="0 -90 0"
      ></a-plane>

      {/* Front display with project logo */}
      <a-plane
        width={width * 0.9}
        height={height * 0.9}
        color="#000000"
        src={logoSrc}
        transparent="true"
        position={`-0.01 ${legHeight + height / 2} 0`}
        class="clickable"
        rotation="0 -90 0"
        onClick={handleClick}
      ></a-plane>

        {/* Left support leg */}
        <a-plane
        width="0.2"
        height={legHeight}
        color="#666"
        rotation="0 -90 0"
        position={`0 ${legHeight / 2} ${-width / 2 + 0.2}`}
        />

        {/* Right support leg */}
        <a-plane
        width="0.2"
        height={legHeight}
        color="#666"
        rotation="0 -90 0"
        position={`0 ${legHeight / 2} ${width / 2 - 0.2}`}
        />
    </a-entity>
  );
}
