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
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden bg-with-gradient"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: "url('bg.jpg')", // Ensure bg.jpg is in public/
      }}
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

      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide leading-snug animate-fade-in">
          डिजिटल ट्विन आधारित <br className="hidden sm:block" />
          वर्चुअल माप उपकरण
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-xl animate-fade-in">
          तकनीकी शिक्षा में नवाचार का एक अभिनव कदम
        </p>

        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 
            rounded-full border-2 border-white shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] 
            hover:scale-105 hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.7)] 
            transition-all duration-300 ease-in-out text-sm sm:text-base md:text-lg"
        >
          View on CSIR Portal
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="popup-bounce px-8 sm:px-16 py-12 sm:py-16 
        bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 
        text-white text-lg sm:text-xl md:text-3xl font-semibold 
        rounded-3xl shadow-2xl border-4 border-white drop-shadow-lg 
        backdrop-blur-md text-center w-full max-w-3xl"
            style={{ fontFamily: "'Sora', sans-serif", minHeight: "250px" }}
          >
            {/* Cartoon Animation */}
            <img
              src="/gif1.gif"
              alt="Cartoon Girl"
              className="w-32 sm:w-40 md:w-48 mb-4 mx-auto animate-wiggle"
            />
            Coming Soon in <span className="underline text-">Jigyasa CSIR Portal</span><br />
            <span className="text-xl sm:text-lg italic block mt-4">In Progress... Stay Tuned!</span>
          </div>
        </div>
      )}


    </div>
  );
}

export default App;
