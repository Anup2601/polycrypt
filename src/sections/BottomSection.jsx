"use client";
import React from "react";

const BottomSection = () => {
  const features = [
    { title: `Trust & Security` },
    { title: "Scalability" },
    { title: "Innovation" },
    { title: "User-Centric Design" },
  ];

  return (
    <section className="relative w-full text-white overflow-hidden flex items-center justify-center lg-pt-20  xl:py-20">
      {/* Glow effects */}
      <div className="hidden xl:block">
        <div className="absolute top-5/15 left-5/14 w-[150px] h-[150px] bg-blue-500/40 rounded-full blur-[30px]" />
        <div className="absolute top-3/7 right-5/13 w-[150px] h-[150px] bg-blue-500/70 rounded-full blur-[30px]" />
        <div className="absolute bottom-3/9 right-3/13 w-[150px] h-[150px] bg-blue-500/70 rounded-full blur-[30px]" />
        <div className="absolute bottom-1/6 right-1/9 w-[150px] h-[150px] bg-blue-500/70 rounded-full blur-[30px]" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-10 md:gap-0 px-4 xl:px-8 md:px-0 lg:min-h-[380px] min-h-[300px] md:mt-32 md:mr-32">
        {/* Vertical Heading */}
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase text-transparent 
            rotate-0 md:-rotate-90 text-center leading-tight mb-8 md:mb-0
            [text-shadow:0_0_10px_rgba(12,202,237,0.3),0_0_20px_rgba(12,202,237,0.3),0_0_40px_rgba(12,202,237,0.3)]
            [-webkit-text-stroke:1px_white]`}
        >
          WHY <br /> POLYCRYPT
        </h2>

        {/* ✅ Hexagon Grid */}
        <div
          className={`grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-4 
          sm:gap-x-21 xl:gap-x-12 sm:gap-y-12 lg:gap-x-28 lg:gap-y-20 justify-items-center 
          max-w-[90vw] sm:max-w-none`}
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`relative w-24 h-28 sm:w-28 sm:h-32 md:w-36 md:h-40 lg:w-44 lg:h-48 
                flex items-center justify-center text-center
                transition-transform duration-300 hover:scale-105
                ${idx % 2 === 1 ? "translate-y-0 sm:translate-y-8 md:translate-y-32" : ""}
              `}
            >
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 clip-hexagon blur-md opacity-70" />

              {/* Inner highlight */}
              <div className="absolute inset-1 bg-gradient-to-br from-cyan-300/20 to-transparent clip-hexagon" />

              {/* Text */}
              <span className="relative z-10 px-1 text-sm sm:text-xl  lg:text-2xl font-semibold leading-tight text-center break-words">
                {item.title === "Trust & Security"
                  ? (
                    <>
                      Trust <br /> & <br/> Security
                    </>
                  )
                  : item.title}
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
