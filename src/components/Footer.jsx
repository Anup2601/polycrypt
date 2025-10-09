"use client";

import Image from "next/image";
import Link from "next/link";
import { SlSocialLinkedin } from "react-icons/sl";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-[#041A2F] text-white py-12 md:py-16  overflow-hidden">
      {/* Glow borders on all sides */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[4px] left-[4px] right-[4px] h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-[4px]" />
        <div className="absolute bottom-[4px] left-[4px] right-[4px] h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-[4px]" />
        <div className="absolute top-[4px] bottom-[4px] left-[4px] w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 blur-[4px]" />
        <div className="absolute top-[4px] bottom-[4px] right-[4px] w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 blur-[4px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 lg:space-x-3">
          <Image src="/logo.svg" alt="Polycrypt Logo" width={50} height={50} />
          <span className="font-bold text-lg lg:text-2xl">Polycrypt HQ</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center space-x-10 md:space-x-5 lg:space-x-10 text-base lg:text-lg font-semibold">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-cyan-400 transition">
            About US
          </Link>
          <Link href="/products" className="hover:text-cyan-400 transition">
            Products
          </Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-6 text-xl">
          <Link href="#" className="hover:text-cyan-400 transition">
            <FiFacebook />
          </Link>
          <Link href="#" className="hover:text-cyan-400 transition">
            <FiTwitter />
          </Link>
          <Link href="#" className="hover:text-cyan-400 transition">
            <FiInstagram />
          </Link>
          <Link href="#" className="hover:text-cyan-400 transition">
            <SlSocialLinkedin />
          </Link>
          <Link href="#" className="hover:text-cyan-400 transition">
            <FiYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
}
