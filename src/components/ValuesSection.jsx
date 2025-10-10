"use client";

import Image from "next/image";

export default function ValuesSection() {
  const values = ["Integrity", "Innovation", "Security", "Client-First"];

  return (
    <section className="relative w-full text-white overflow-hidden mb-16">
      {/* Title */}
      <div className="flex justify-center items-center sm:pt-4 pt-16">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase text-transparent text-center xl:mb-28 md:mb-20
          [text-shadow:0_0_10px_rgba(12,202,237,0.3),0_0_20px_rgba(12,202,237,0.3),0_0_40px_rgba(12,202,237,0.3)]
          [-webkit-text-stroke:1px_white]`}
        >
          OUR Values
        </h1>
      </div>

      {/* Values Section */}
      <div className="flex flex-col md:flex-row justify-center items-stretch mt-12 md:mt-16 mx-4 sm:mx-8 md:mx-12 lg:mx-20 ">
        {/* Left Icon */}
        <div className="flex items-center justify-center w-full md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 border-white rounded-full p-4 sm:p-6 md:p-8 lg:p-10 hover:scale-95 transition-transform duration-300">
          <div className="relative w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
            <Image
              src="/logo.svg"
              alt="Polycrypt Icon"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 15vw"
            />
          </div>
        </div>

        {/* Values Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap w-full md:w-3/4 ">
          {values.map((title, index) => (
            <div
              key={index}
              className={`relative flex-1 flex items-center justify-center border-b-2 sm:border-r-2 sm:border-b-0 border-white rounded-full h-32 sm:h-40 lg:h-[500px] md:h-[400px] xl:h-[550px] bg-[#041A2F] hover:scale-95 transition-transform duration-300 p-8 sm:p-0`}
            >
              <span className="text-2xl lg:text-3xl  font-bold w-full text-center md:-rotate-90  overflow-hidden text-ellipsis ">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chevron Shape Definition (if still needed) */}
      <style jsx>{`
        .before\\:clip-path-chevron::before {
          clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
