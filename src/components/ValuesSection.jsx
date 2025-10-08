"use client";

import Image from "next/image";

export default function ValuesSection() {
  const values = ["Integrity", "Innovation", "Security", "Customer-Centric"];

  return (
    <section className="relative w-full text-white overflow-hidden mb-16">
      {/* Title */}
      <div className="md:flex md:justify-center md:items-center pl-4 pt-16">
        <h1
          className={`text-5xl md:text-8xl font-extrabold uppercase text-transparent
          [text-shadow:0_0_10px_rgba(12,202,237,0.3),0_0_20px_rgba(12,202,237,0.3),0_0_40px_rgba(12,202,237,0.3)]
          [-webkit-text-stroke:2px_white]`}
        >
          OUR Values
        </h1>
      </div>

      {/* Values Section */}
      <div className="flex flex-col md:flex-row justify-center items-stretch mt-12 md:mt-16 relative mx-6 md:mx-24">
        {/* Left Icon */}
        <div className="flex items-center justify-center w-full md:w-1/4 sm:border-r-2 border-white rounded-full p-8 mb-8 md:mb-0 hover:scale-95">
          <Image
            src="/logo.svg"
            alt="Polycrypt Icon"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Values Cards */}
        <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-4">
          {values.map((title, index) => (
            <div
              key={index}
              className={`relative flex-1 flex items-center justify-center sm:border-r-2 border-white rounded-full h-40 md:h-[600px]
              bg-[#041A2F] hover:scale-95`}
            >
              <span className="text-lg md:text-2xl font-bold tracking-wide text-center md:-rotate-90">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chevron Shape Definition (optional if you still want the effect) */}
      <style jsx>{`
        .before\\:clip-path-chevron::before {
          clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
