"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#041A2F] text-white py-12 md:py-16 shadow-[0_0_25px_rgba(12,202,237,0.25)] overflow-hidden">
      {/* Glow borders on all sides */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-[2px]" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-[2px]" />
        <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 blur-[2px]" />
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 blur-[2px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Polycrypt Logo" width={60} height={60} />
          <span className="font-bold text-xl md:text-2xl">Polycrypt HQ</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center space-x-10 text-base md:text-lg font-semibold">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/about" className="hover:text-cyan-400 transition">About US</Link>
          <Link href="/products" className="hover:text-cyan-400 transition">Products</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-6 text-2xl">
          <Link href="#" className="hover:text-cyan-400 transition"><FaFacebookF /></Link>
          <Link href="#" className="hover:text-cyan-400 transition"><FaTwitter /></Link>
          <Link href="#" className="hover:text-cyan-400 transition"><FaInstagram /></Link>
          <Link href="#" className="hover:text-cyan-400 transition"><FaLinkedinIn /></Link>
          <Link href="#" className="hover:text-cyan-400 transition"><FaYoutube /></Link>
        </div>
      </div>
    </footer>
  );
}
