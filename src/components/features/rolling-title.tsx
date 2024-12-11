import React, { useState, useEffect } from "react";

const RollingTitle = () => {
  const items = ["Builder", "Developers", "Entrepreneurs", "Creative"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); // Adjust the interval to change the speed
    return () => clearInterval(timer); // Cleanup on unmount
  }, [items.length]);

  return (
    <h2 className="text-3xl font-semibold text-center mb-8 flex flex-col items-center">
      Cutting edge technology for
      <div className="overflow-hidden h-8 mt-4">
        <ul
          className={`transition-transform duration-500 ease-out`}
          style={{
            transform: `translateY(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="h-8 flex items-center justify-center text-lg text-gray-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </h2>
  );
};

export default RollingTitle;
