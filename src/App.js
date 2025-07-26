import React, { useEffect, useState } from "react";
import "./index.css";

let bubbleId = 0;

function App() {
  const [bubbles, setBubbles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseMove = (e) => {
    const newBubbles = Array.from({ length: 3 }).map(() => ({
      id: bubbleId++,
      x: e.clientX + Math.random() * 40 - 20,
      y: e.clientY + Math.random() * 40 - 20,
      size: 15 + Math.random() * 25,
    }));
    setBubbles((prev) => [...prev, ...newBubbles]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => prev.slice(3));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div
      className="relative w-full h-screen bg-gradient-to-br from-cyan-900 to-teal-700 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble-div"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
          }}
        />
      ))}

      {/* Centered Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide leading-tight animate-fade-in">
          डिजिटल ट्विन आधारित <br className="hidden md:block" />
          वर्चुअल माप उपकरण
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl animate-fade-in">
          तकनीकी शिक्षा में नवाचार का एक अभिनव कदम
        </p>

        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 
             rounded-full border-2 border-white shadow-[0_0_25px_5px_rgba(0,255,255,0.5)] 
             hover:scale-110 hover:shadow-[0_0_35px_10px_rgba(0,255,255,0.7)] 
             transition-all duration-300 ease-in-out"
        >
          View on CSIR Portal
        </button>
      </div>

      {showPopup && (
        <div
          className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50 px-10 py-6 
               bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white 
               text-lg md:text-2xl font-semibold rounded-2xl shadow-2xl animate-fadeInPopup
               border-4 border-white drop-shadow-lg backdrop-blur-md"
        >
          🚀 Coming Soon in <span className="underline">Jigyasa CSIR Portal</span><br />
          <span className="text-sm italic">In Progress...</span>
        </div>
      )}
    </div>
  );
}

export default App;
