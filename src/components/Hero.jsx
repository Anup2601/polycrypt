"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] xl:h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Hero background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text content */}
      <div
        className={`
          relative z-20 px-4 sm:px-6 md:px-10 max-w-3xl mx-auto
          flex flex-col items-center 
          text-white
          h-full
          justify-start pt-32
        `}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Secure Your Business with <br className="hidden sm:block" />
          Blockchain Technology
        </h1>

        <Link
          href="/contact"
          className="inline-block bg-white text-[#00B8F1] font-bold text-base sm:text-lg px-6 py-3 rounded-md shadow-md hover:scale-105 transition"
        >
          Let’s Talk
        </Link>
      </div>
    </section>
  );
}
