import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative w-full text-white px-4 sm:px-6 md:px-10 overflow-hidden sm:mt-24 ">
      {/* Radial gradient glow */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[radial-gradient(circle_at_top_left,_rgba(9,140,173,0.4),_transparent_50%)] blur-[300px] z-0 pointer-events-none" />

      {/* Background Texture */}
      <Image
        src="/bg-texture.png"
        alt="Texture"
        fill
        className="absolute top-20 left-0 w-full h-screen pointer-events-none z-0 xl:mt-20 mt-40 md:mt-20 lg:mt-30"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto sm:text-left text-center p-2">
        {/* Section Heading */}
        <div className="mb-12 max-w-xl">
          <h2
            className="text-5xl md:text-8xl font-extrabold uppercase text-transparent 
           my-12 mb-6
           [text-shadow:0_0_10px_rgba(12,202,237,0.5),0_0_20px_rgba(12,202,237,0.5),0_0_40px_rgba(12,202,237,0.5)]
           [-webkit-text-stroke:1px_white]"
          >
            OUR STORY
          </h2>

          <p className="text-white mt-6 max-w-lg text-base md:text-xl xl:text-2xl font-semibold leading-relaxed">
            Polycrypt HQ is a forward-thinking product company building
            innovative blockchain-powered solutions for businesses,
            institutions, and individuals.
          </p>
        </div>

        {/* Vision and Mission Grid */}
        <div className="">
          {/* Vision */}
          <div className="grid md:grid-cols-2 mb-16">
            <div></div>
            <div className="flex flex-col gap-3 ">
              <h2 className="text-4xl sm:text-6xl font-bold sm:mb-3">01</h2>
              <h4 className="text-3xl sm:text-4xl font-bold sm:mb-3">Our Vision</h4>
              <p className="text-white text-base font-semibold leading-relaxed md:text-xl xl:text-2xl">
                To build a world where digital trust is universal, empowering
                every individual and organization with secure, transparent, and
                scalable blockchain solutions.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col gap-3 ">
              <h2 className="text-4xl sm:text-6xl font-bold sm:mb-3">02</h2>
              <h4 className="text-3xl sm:text-4xl font-bold sm:mb-3">Our Mission</h4>
              <p className="text-white font-semibold leading-relaxed text-base md:text-xl  xl:text-2xl">
                Our mission is to empower organizations with next-generation
                transparency and efficiency through blockchain technology.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
