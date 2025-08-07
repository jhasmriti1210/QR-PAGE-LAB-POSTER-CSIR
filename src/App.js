import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showHindi, setShowHindi] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Update mouse position for flashlight effect
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  useEffect(() => {
    const langInterval = setInterval(() => {
      setShowHindi((prev) => !prev);
    }, 10000);
    return () => clearInterval(langInterval);
  }, []);

  const handleClick = () => {
    setShowPopup(true);
  };


  return (
    <div className="relative w-full min-h-screen overflow-hidden" onMouseMove={handleMouseMove}>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('bg1.jpg')",
        }}
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-100 z-0"
        style={{
          mask: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
          WebkitMask: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent, black)`,
        }}
      />

      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        {showHindi ? (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide leading-snug animate-fade-in">
              डिजिटल ट्विन आधारित
              <br className="hidden sm:block" />
              <span className="block mt-6">वर्चुअल मापन उपकरण</span>
            </h1>
            <p className="text-3xl sm:text-lg md:text-3xl lg:text-3xl mb-10 text-gray-200 max-w-xl animate-fade-in mt-4">
              मैनुअल माइक्रोमीटर उपयोग हेतु सिम्युलेटर
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide leading-snug animate-fade-in">
              Digital Twin-Based
              <br className="hidden sm:block" />
              <span className="block mt-6">Virtual Measurement Instrument</span>
            </h1>
            <p className="text-3xl sm:text-lg md:text-3xl lg:text-3xl mb-10 text-gray-200 max-w-xl animate-fade-in mt-4">
              Simulator for Using Manual Micrometer
            </p>
          </>
        )}

        <a
          href="https://virtual-project-gamma.vercel.app/"
          className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 
    rounded-full border-2 border-white shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] 
    hover:scale-105 hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.7)] 
    transition-all duration-300 ease-in-out text-sm sm:text-base md:text-lg"
        >
          {showHindi ? "प्रशिक्षण लिंक" : "Training Link"}
        </a>

      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50">
          <div
            className="relative popup-bounce px-8 sm:px-16 py-12 sm:py-16 
        bg-[#ffe6d0]
        text-black text-lg sm:text-xl md:text-3xl font-semibold 
        rounded-3xl shadow-2xl border-4 border-white drop-shadow-lg 
        backdrop-blur-md text-center w-full max-w-3xl"
            style={{ fontFamily: "'Sora', sans-serif", minHeight: "250px" }}
          >
            {/* Close Icon */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-black transition duration-200"
              aria-label="Close popup"
            >
              &times;
            </button>

            <img
              src="/gif2.gif"
              alt="Cartoon Girl"
              className="w-32 sm:w-40 md:w-48 mb-4 mx-auto animate-wiggle"
            />
            Coming Soon on <span className="underline">CSIR Jigyasa Portal</span>
            <br />
            <span className="text-xl sm:text-lg italic block mt-4">In Progress... Stay Tuned!</span>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
