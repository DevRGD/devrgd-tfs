'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#080808] text-white w-full border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-5 flex flex-col gap-6 relative">
        <div className="flex justify-between items-center lg:items-start w-full">
          <div className="shrink-0 flex items-center">
            <Logo />
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-3">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] text-gray-300">Visit Us</span>
                <span className="text-[13px] font-medium text-white">Demo Address, Demo City</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.893-1.438-5.219-3.764-6.657-6.657l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] text-gray-300">Call Us</span>
                <span className="text-[13px] font-medium text-white">+91 00000 00000</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.625v5.25c0 1.036-.84 1.875-1.875 1.875H5.625l-3.375 3.375V8.625c0-1.036.84-1.875 1.875-1.875h14.25c1.036 0 1.875.84 1.875 1.875z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5h7.5M8.25 13.5h4.5" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] text-gray-300">Email Us</span>
                <span className="text-[13px] font-medium text-white">example@gmail.com</span>
              </div>
            </div>
          </div>

          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex justify-between items-end w-full">
          <nav className="flex gap-8 text-[13px] font-medium">
            <Link href="#" className="text-white border-b-2 border-white pb-1 font-semibold">
              Home
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition pb-1">
              About Us
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition flex items-center gap-1 pb-1 group">
              Our Businesses
              <svg
                className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition pb-1">
              Sustainability & Impact
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition pb-1">
              Media
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition pb-1">
              Careers
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition pb-1">
              Contact Us
            </Link>
          </nav>

          <Link
            href="#"
            className="bg-white text-black px-6 py-2 text-[13px] font-bold rounded-sm hover:bg-gray-200 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#080808] border-b border-gray-800 shadow-2xl z-50">
          <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-5 text-sm font-medium">
              <Link href="#" className="text-white font-semibold">
                Home
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                About Us
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white flex items-center justify-between">
                Our Businesses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Sustainability & Impact
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Media
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Careers
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </nav>

            <div className="flex flex-col pt-4 border-t border-gray-800">
              <Link
                href="#"
                className="bg-white text-black px-6 py-3 text-center text-[13px] font-bold rounded-sm hover:bg-gray-200 transition shadow-md"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
