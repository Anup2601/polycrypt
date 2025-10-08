"use client";

import Image from "next/image";

export default function ValuesSection() {
  const values = ["Integrity", "Innovation", "Security", "Customer-Centric"];

  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Title */}
      <div className="flex justify-center items-center pt-16  ">
        <h1
          className={`text-5xl md:text-8xl font-extrabold uppercase text-transparent
          [text-shadow:0_0_10px_rgba(12,202,237,0.3),0_0_20px_rgba(12,202,237,0.3),0_0_40px_rgba(12,202,237,0.3)]
          [-webkit-text-stroke:2px_white]`}
        >
          OUR Values
        </h1>
      </div>

      {/* Values Section */}
      <div className="flex flex-col md:flex-row justify-center items-stretch mt-12 md:mt-16 relative ml-24">
        {/* Left Icon */}
        <div className="flex items-center justify-center w-full md:w-3/10 mb-8 md:mb-0">
          <Image
            src="/logo.svg"
            alt="Polycrypt Icon"
            width={250}
            height={250}
            className=""
          />
        </div>

        {/* Values Cards */}
        <div className="flex flex-col md:flex-row w-full ">
          {values.map((title, index) => (
            <div
              key={index}
              className={`relative flex-1 flex items-center justify-center 
              h-50 md:h-[500px] border-t md:border-t-0 md:border-l-2 border-white
              before:absolute before:inset-y-0 before:right-0 before:w-10 
              before:bg-[#041A2F] before:clip-path-chevron before:z-10`}
            >
              <span className="text-lg md:text-3xl font-bold rotate-0 md:-rotate-90 tracking-wide z-20">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chevron Shape Definition */}
      <style jsx>{`
        .before\\:clip-path-chevron::before {
          clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
