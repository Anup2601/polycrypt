import Image from "next/image";

export default function CustomerVoices() {
  return (
    <section className="relative w-full text-white py-20 px-4 sm:px-6 md:px-10 overflow-hi
    dden  ">

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 xl:mb-0">
          <h2
            className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase text-transparent text-center lg:text-left
           [text-shadow:0_0_10px_rgba(12,202,237,0.3),0_0_20px_rgba(12,202,237,0.3),0_0_40px_rgba(12,202,237,0.3)]
           [-webkit-text-stroke:1px_white]"
          >
            Customer&nbsp;
                <span className="inline md:hidden lg:inline"><br /></span>
            Voices
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="flex flex-col gap-12 xl:ml-72 m-2 items-center ">
          {/* Testimonial 1 */}
          <div className="border-y border-r border-white p-4 max-w-2xl ml-auto relative ">
            <div className="absolute left-0 top-0 h-full w-[10px] bg-[#0CCAED]" />
            <p className="text-lg md:text-2xl leading-relaxed font-semibold">
              “This solution has transformed our HR processes with
              blockchain-powered security, transparency, and efficiency. Its
              decentralized system ensures data integrity, enhances compliance,
              and builds trust across our workforce.”
            </p>
            <p className="mt-2 text-lg md:text-2xl font-semibold text-[#0CCAED]">
              - Garima Bhadri, HR Head, BlockSynergy Technology
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="border-y border-r border-white p-4  max-w-2xl mr-auto relative ">
            <div className="absolute left-0 top-0 h-full w-[10px] bg-[#0CCAED]" />
            <p className="text-lg md:text-2xl leading-relaxed font-semibold">
              “Polycrypt HQ has revolutionized our document management with
              secure e-signing, safe storage, and seamless access—streamlining
              workflows, saving time, and boosting collaboration.”
            </p>
            <p className="mt-2 text-lg md:text-2xl font-semibold text-[#0CCAED]">
              - Manavi Singhal, Founder, Ravisi
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="border-y border-r border-white p-4 max-w-2xl ml-auto relative ">
            <div className="absolute left-0 top-0 h-full w-[10px] bg-[#0CCAED]" />
            <p className="text-lg md:text-2xl leading-relaxed font-semibold">
              “Before BlockPen, signing MoUs and agreements was slow and manual.
              Now, I just upload, sign on blockchain in 4 steps, and let
              automated emails handle the rest—secure, authentic, and
              time-saving.”
            </p>
            <p className="mt-2 text-lg md:text-2xl font-semibold text-[#0CCAED]">
              - Sarang Pani, Founder, Inovact
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="border-y border-r border-white p-4 max-w-2xl mr-auto relative  ">
            <div className="absolute left-0 top-0 h-full w-[10px] bg-[#0CCAED]" />
            <p className="text-lg md:text-2xl leading-relaxed font-semibold">
              “Polycrypt's Blockpen made signing documents so much easier and
              safer for us. We love knowing our files are secure, and tracking
              signatures is super simple. It’s fast, reliable, and gives us
              peace of mind!”
            </p>
            <p className="mt-2 text-lg md:text-2xl font-semibold text-[#0CCAED]">
              - Vivek Mehta, Founder, Pixel(n)Path
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
