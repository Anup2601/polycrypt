"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0A1F33] text-white py-2 px-6 fixed top-0 left-0 z-50 backdrop-blur-md bg-opacity-90 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.5),0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Polycrypt logo"
            width={55}
            height={55}
            priority
          />
          <span className="text-lg sm:text-xl font-bold whitespace-nowrap">
            Polycrypt HQ
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10 lg:space-x-24 transition duration-300">
          {["Home", "About Us", "Products"].map((label, index) => {
            const href =
              label === "Home"
                ? "/"
                : "/" + label.toLowerCase().replace(" ", "");
            return (
              <Link
                key={index}
                href={href}
                className="relative font-semibold text-lg lg:text-2xl hover:text-cyan-400 transition-colors group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block ml-4 lg:ml-6 bg-white text-[#00B8F1] font-bold text-sm lg:text-xl px-4 lg:px-6 py-2 lg:py-3 rounded-md hover:scale-105 transition-all whitespace-nowrap"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-white transition duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu with transition */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full bg-[#0A1F33] border-t border-gray-700 pt-4 pb-6 text-center transition-all duration-500 ease-in-out z-50 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {["Home", "About Us", "Products"].map((label, index) => {
          const href =
            label === "Home" ? "/" : "/" + label.toLowerCase().replace(" ", "");
          return (
            <Link
              key={index}
              href={href}
              className="block font-medium text-lg py-2 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="inline-block mt-4 bg-white text-[#00B8F1] font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition-all"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
