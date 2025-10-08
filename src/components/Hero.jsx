"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex  text-center overflow-hidden mt-18">
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0  z-10" />

      {/* Text content */}
      <div className="relative z-20 px-4 sm:px-6 md:px-10 max-w-3xl mx-auto mt-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Secure Your Business with <br className="hidden sm:block" />
          Blockchain Technology
        </h1>

        <Link
          href="/contact"
          className="inline-block bg-white text-[#00B8F1] font-semibold text-base sm:text-lg px-6 py-3 rounded-md shadow-md hover:scale-105 transition"
        >
          Let’s Talk
        </Link>
      </div>
    </section>
  );
}
