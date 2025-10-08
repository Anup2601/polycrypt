"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0A1F33] text-white py-4 px-6 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Polycrypt logo"
              width={60}
              height={60}
              priority
            />
            <span className="text-xl font-bold">Polycrypt HQ</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-24">
          {["Home", "About Us", "Products"].map((label, index) => {
            const href =
              label === "Home"
                ? "/"
                : "/" + label.toLowerCase().replace(" ", "");
            return (
              <Link
                key={index}
                href={href}
                className="relative font-bold text-2xl hover:text-cyan-400 transition-colors group"
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
          className="hidden md:inline-block ml-6 bg-white text-[#00B8F1] font-semibold px-6 py-3 rounded-md hover:scale-105 transition-all"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-[#0A1F33] border-t border-gray-700 pt-4 pb-6 text-center">
          {["Home", "About Us", "Products"].map((label, index) => {
            const href =
              label === "Home"
                ? "/"
                : "/" + label.toLowerCase().replace(" ", "");
            return (
              <Link
                key={index}
                href={href}
                className="block font-medium hover:text-cyan-400 transition-colors"
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
      )}
    </nav>
  );
}
