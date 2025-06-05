import Sign from './signs';

export default function Building({ height = 5, width = 5, depth = 5, position = '0 0 0', color = "white" }) {
  // Parse the incoming position to an actual array
  const [x, y, z] = position.split(' ').map(Number);

  // Small visual offset to prevent z-fighting
  const epsilonOffset = 0.05;
  const thickness = 0.2;
  const planes = [
    {
      name: 'front',
      position: `${x} ${y} ${z + depth / 2 + epsilonOffset}`,
      rotation: '0 0 0',
      width: width - thickness,
      height: height - thickness,
    },
    {
      name: 'back',
      position: `${x} ${y} ${z - depth / 2 - epsilonOffset}`,
      rotation: '0 180 0',
      width: width - thickness,
      height: height - thickness,
    },
    {
      name: 'right',
      position: `${x + width / 2 + epsilonOffset} ${y} ${z}`,
      rotation: '0 -90 0',
      width: depth - thickness,
      height: height - thickness,
    },
    {
      name: 'left',
      position: `${x - width / 2 - epsilonOffset} ${y} ${z}`,
      rotation: '0 90 0',
      width: depth - thickness,
      height: height - thickness,
    },
    {
      name: 'top',
      position: `${x} ${y + height / 2 + epsilonOffset} ${z}`,
      rotation: '-90 0 0',
      width: width - thickness,
      height: depth - thickness,
    },
  ];

  return (
    <>
      <a-box
        height={height}
        width={width}
        depth={depth}
        position={position}
        color={color}
        material="shader: standard;"
      ></a-box>

      {planes.map((plane, i) => (
        <a-plane
          key={i}
          position={plane.position}
          rotation={plane.rotation}
          width={plane.width}
          height={plane.height}
          color="black"
          material="shader: standard;"
          transparent="true"
        ></a-plane>
      ))}
    </>
  );
}
