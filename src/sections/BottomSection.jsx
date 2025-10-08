"use client";
import React from "react";

const BottomSection = () => {
  const features = [
    { title: "Trust & Security" },
    { title: "Scalability" },
    { title: "Innovation" },
    { title: "User-Centric Design" },
  ];

  return (
    <section className="relative w-full sm:min-h-screen text-white py-20 md:py-28 px-4 sm:px-8 md:px-16 overflow-hidden flex items-center justify-center">
      {/* Glow background */}
      {/* <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_rgba(12,202,237,0.25),_transparent_60%)] blur-[200px] pointer-events-none" /> */}

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-12 sm:mr-64 mr-0">
        {/* Vertical Heading */}
        <h2
          className={`text-5xl md:text-8xl font-extrabold uppercase text-transparent 
            rotate-0 md:-rotate-90 text-center md:text-center leading-tight
            [text-shadow:0_0_10px_rgba(12,202,237,0.6),0_0_20px_rgba(12,202,237,0.5),0_0_40px_rgba(12,202,237,0.4)]
            [-webkit-text-stroke:2px_white]`}
        >
          WHY <br /> POLYCRYPT
        </h2>

        {/* Hexagon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-row gap-8 md:gap-14 justify-center">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 flex items-center justify-center text-center text-sm sm:text-base font-bold"
            >
              {/* Hexagon Shape */}
              <div className="absolute inset-0 bg-[linear-gradient(145deg,_#0CCAED,_#098CAD)] clip-hexagon shadow-[0_0_25px_rgba(12,202,237,0.6)] transition-transform duration-300 hover:scale-105" />
              <span className="relative z-10 px-3">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hexagon Shape Definition */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            50% 0%,
            93% 25%,
            93% 75%,
            50% 100%,
            7% 75%,
            7% 25%
          );
        }
      `}</style>
    </section>
  );
};

export default BottomSection;
