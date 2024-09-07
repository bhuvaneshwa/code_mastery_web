import React, { useState, useRef } from 'react';
import './Home.css'; // Ensure Tailwind CSS is imported here

export default function Home() {
  const [drops, setDrops] = useState([]);
  const audioRef = useRef(null);

  const handleScreenClick = (e) => {
    const { clientX: x, clientY: y } = e;
    setDrops((prevDrops) => [
      ...prevDrops,
      { x: x - 25, y: y - 25 }, // Adjust offset based on size
    ]);

    // Play the sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to the beginning
      audioRef.current.play().catch((error) => {
        console.error('Error playing sound:', error);
      });
    }

    // Remove drops after animation ends
    setTimeout(() => setDrops((prevDrops) => prevDrops.slice(1)), 800);
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-gray-100"
      onClick={handleScreenClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-white to-black bg-[length:300%_300%] animate-gradientAnimation z-0"></div>
      <div className="absolute text-center p-4 text-7xl font-bold text-black cursor-pointer z-10">
        <div>Welcome to Code Mastery</div>
        <button className='text-xl border border-black p-4 hover:bg-white hover:text-black italic'>Learn more</button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjMyMCI+PHBhdGggZmlsbD0iIzI3MzAzIiBmaWxsLW9wYWNpdHk9IjEuMCIgZD0iTTAsOTZMMjQsOTZDOzgsOTYsMTQsOTYsMTQsOTYsMjQsOTZsMjQsOTZMNDAsOTYsMTIsMTAwOCxMNDAsMzg0LDE2OSwyNDIsMTI4LDIxMSwxMDg7MTg4LDEwNyw2OTQsMTIuN0wxNDQwLDk2Ii8+PC9zdmc+')] bg-cover bg-no-repeat animate-waveAnimation z-0"></div>
      {drops.map((drop, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-red-600 opacity-60 pointer-events-none"
          style={{
            top: drop.y + 'px',
            left: drop.x + 'px',
            width: '50px',
            height: '50px',
            transform: 'scale(0)',
            animation: 'waterDropAnimation 0.8s forwards',
          }}
        >
          <div
            className="rounded-full border border-white"
            style={{
              width: '40px',
              height: '40px',
              margin: '5px', // Space between the border and the outer drop
            }}
          />
        </div>
      ))}
      {/* Audio element */}
      <audio ref={audioRef} src="/sounds/water-drop.mp3" />
    </div>
  );
}
