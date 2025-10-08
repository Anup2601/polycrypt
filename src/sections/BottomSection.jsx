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
    <section className="relative w-full sm:min-h-screen text-white overflow-hidden flex items-center justify-center ">
      {/* Multiple glow effects */}
      <div className="hidden md:block">
        <div className="absolute top-1.5/4 left-3/9 w-[150px] h-[150px] bg-blue-500/70 rounded-full blur-[30px] pointer-events-none" />
        <div className="absolute top-4/9 right-3/8 w-[150px] h-[150px] bg-blue-500/70 rounded-full blur-[30px] pointer-events-none" />
        <div className="absolute top-4/8 right-2/9 w-[150px] h-[150px] bg-blue-500/70 rounded-full blur-[30px] pointer-events-none" />
        <div className="absolute bottom-2/9 left-9/11 w-[150px] h-[150px] bg-blue-500/80 rounded-full blur-[30px] pointer-events-none" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-center md:mr-32">
        {/* Vertical Heading */}
        <h2
          className={`text-5xl md:text-8xl font-extrabold uppercase text-transparent 
            rotate-0 md:-rotate-90 text-center md:text-center leading-tight mb-8 md:mb-0
            [text-shadow:0_0_10px_rgba(12,202,237,0.3),0_0_20px_rgba(12,202,237,0.3),0_0_40px_rgba(12,202,237,0.3)]
            [-webkit-text-stroke:2px_white]`}
        >
          WHY <br /> POLYCRYPT
        </h2>

        {/* Hexagon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-16 items-center justify-items-center">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`relative w-28 h-32 sm:w-36 sm:h-40 lg:w-48 lg:h-52 flex items-center justify-center text-center transition-all duration-400 brightness-120 hover:scale-105 hover:brightness-135
              ${idx % 2 === 1 ? "mt-10 sm:mt-0 md:mt-[12rem]" : "mt-0"}`}
            >
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 clip-hexagon blur-md opacity-70" />

              {/* Inner highlight */}
              <div className="absolute inset-2 bg-gradient-to-br from-cyan-300/20 to-transparent clip-hexagon" />

              {/* Text */}
              <span className="relative z-10 px-2 text-xs sm:text-sm lg:text-lg font-semibold leading-tight whitespace-pre-line text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hexagon Shape Definition */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            50% 0%,
            95% 25%,
            95% 75%,
            50% 100%,
            5% 75%,
            5% 25%
          );
        }
      `}</style>
    </section>
  );
};

export default BottomSection;
