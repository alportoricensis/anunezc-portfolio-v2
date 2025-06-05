'use client';

import React, { useEffect, useRef, useState } from 'react';


function genColor() {
  const neonColors = [
    '#00FFFF', // Cyan
    '#FF00FF', // Magenta
    '#39FF14', // Neon Green
    '#FF073A', // Neon Red
    '#FFFF00', // Neon Yellow
    '#FF1493', // Deep Pink
    '#00FF00', // Lime Green
    '#FF4500', // Orange Red
  ];

  // Return a random color from the array
  return neonColors[Math.floor(Math.random() * neonColors.length)];
};

export default function Car({ speed = 0.2 }) {
  const [cars, setCars] = useState([]);
  const carId = useRef(0); // Unique ID for each car
  const color = genColor();

  // Function to spawn a new car at random intervals
  const spawnCar = () => {
    // Random direction: north or south
    const direction = Math.random() > 0.5 ? 'north' : 'south';
    
    const car = {
      id: carId.current++, // Unique ID for each car
      direction: direction,
      color: color,
      zPosition: direction === 'north' ? -10 : 30, // Initial position
      xOffset: direction === 'north' ? -0.5 : 0.5, // Offset based on direction
      trail: [], // Trail for the car
    };

    setCars((prevCars) => [...prevCars, car]);
  };

  // Function to move the cars and manage their trail
  const moveCars = () => {
    setCars((prevCars) => {
      return prevCars
        .map((car) => {
          let newZ = car.zPosition + (car.direction === 'north' ? 1 : -1) * speed;

          // If the car moves off-screen, remove it (or handle differently if needed)
          if (newZ > 30 || newZ < -10) {
            return null; // Remove car from list when it goes off-screen
          }

          // Update car position and trail
          car.zPosition = newZ;
          car.trail.push({
            z: newZ,
            x: car.xOffset,
            time: Date.now(),
          });

          // Remove old trail segments
          car.trail = car.trail.filter((t) => Date.now() - t.time < 1500);

          return car;
        })
        .filter((car) => car !== null); // Remove null cars (off-screen)
    });
  };

  useEffect(() => {
    // Spawn a new car every 2-5 seconds
    const spawnInterval = setInterval(spawnCar, Math.random() * 3000 + 2000);

    // Start moving the cars every frame
    const moveInterval = setInterval(moveCars, 16); // Roughly 60 FPS

    return () => {
      clearInterval(spawnInterval);
      clearInterval(moveInterval);
    };
  }, []);

  return (
    <>
      {cars.map((car) => (
        <React.Fragment key={car.id}>
          {/* Car */}
          <a-box
            position={`${car.xOffset} -1.7 ${car.zPosition}`}
            width="0.5"
            height="0.25"
            depth="1"
            color={car.color}
            material="emissive: #00ffff; emissiveIntensity: 1; shader: flat"
          />
          {/* Trail */}
          {car.trail.map((trail, i) => (
            <a-plane
              key={i}
              position={`${trail.x} -1.79 ${trail.z}`}
              width="0.2"
              height="0.05"
              color={color}
              rotation="-90 0 0"
              material="shader: flat; opacity: 0.6"
            />
          ))}
        </React.Fragment>
      ))}
    </>
  );
}
