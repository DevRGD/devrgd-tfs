'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const sectors = [
  {
    name: 'Protective Solutions',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: '/mega-menu/protective-solutions.avif',
  },
  {
    name: 'Energy Solutions',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: '/mega-menu/energy-solutions.avif',
  },
  {
    name: 'Textiles',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: '/mega-menu/textiles.avif',
  },
  {
    name: 'Hospitality',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: '/mega-menu/hospitality.avif',
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSector, setActiveSector] = useState(sectors[0]);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef(null);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 sm:px-[5%] lg:px-[7%] py-[1.2rem] sm:py-[1.2rem] lg:py-[1.3rem] xl:py-[1.4rem] 2xl:py-6 border-b border-white/20">
      <header className="hidden lg:flex justify-between items-center">
        <div>
          <Link href="/" className="block w-25 sm:w-50 lg:w-47.5 xl:w-53.75 2xl:w-60">
            <Image
              src="/logos/logo.png"
              alt="Tandhan Group"
              width={240}
              height={60}
              priority
              className="w-full h-auto brightness-0 invert object-contain"
            />
          </Link>
        </div>
        <div className="flex gap-8 sm:gap-[1.7rem] lg:gap-[1.6rem] xl:gap-[1.8rem] 2xl:gap-8">
          <div className="flex items-center gap-2 text-white">
            <div className="text-[2rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z" />
              </svg>
            </div>
            <div>
              <span className="block text-[0.8rem] sm:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem] leading-none">
                Visit Us
              </span>
              <Link
                href="/"
                className="block text-[0.9rem] sm:text-[0.8rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]"
              >
                Demo Address, Demo City
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="text-[2rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className="block text-[0.8rem] sm:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem] leading-none">
                Call Us
              </span>
              <Link
                href="/"
                className="block text-[0.9rem] sm:text-[0.8rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]"
              >
                +91 00000 00000
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="text-[2rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M13 8H7" />
                <path d="M17 12H7" />
              </svg>
            </div>
            <div>
              <span className="block text-[0.8rem] sm:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem] leading-none">
                Email Us
              </span>
              <Link
                href="/"
                className="block text-[0.9rem] sm:text-[0.8rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]"
              >
                example@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-y-4 mt-[0.2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-8">
        <div className="block lg:hidden w-32.5">
          <Link href="/" className="block w-full">
            <Image
              src="/logos/logo.png"
              alt="Tandhan Group Logo"
              width={130}
              height={32}
              className="w-full h-auto brightness-0 invert object-contain"
              style={{ width: '100%', height: 'auto' }}
            />
          </Link>
        </div>
        <ul className="hidden sm:flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-[2.3rem] xl:gap-[2.7rem] 2xl:gap-12 list-none static text-[0.75rem] md:text-[0.85rem] lg:text-[1.1rem] 2xl:text-[1.15rem]">
          <li>
            <Link className="transition-colors duration-200 text-white font-bold underline underline-offset-8" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="transition-colors duration-200 text-white" href="/about/">
              About Us
            </Link>
          </li>
          <li className="group static" onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMegaMenuLeave}>
            <button className="transition-colors duration-200 text-white flex items-center">
              Our Businesses
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-[1.6rem] lg:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.6rem] transition duration-300 group-hover:rotate-180 ml-[0.2rem]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="m7 10 5 5 5-5z" />
              </svg>
            </button>
            <div
              className={`absolute top-full left-[7%] w-[86%] z-49 transition-all duration-300 ease-in-out ${
                isMegaMenuOpen
                  ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                  : 'opacity-0 invisible -translate-y-4 pointer-events-none'
              }`}
            >
              <div className="bg-white shadow-2xl flex justify-between overflow-hidden">
                <div className="w-[50%] flex justify-between">
                  <div className="w-[50%] bg-[#e2e3de] p-6 2xl:p-8">
                    <span className="text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold text-black">
                      Our Brands
                    </span>
                    <ul className="mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-8">
                      {[
                        'logo-pat.png',
                        'logo-pgt.png',
                        'logo-denim.png',
                        'logo-fashion.png',
                        'logo-jalan-sarees.png',
                        'nx-hotel.png',
                      ].map((logo, i, arr) => (
                        <li key={i} className={i === arr.length - 1 ? '' : 'mb-2'}>
                          <Image
                            src={`/logos/${logo}`}
                            alt="Brand"
                            width={140}
                            height={50}
                            className="w-[55%] h-auto mix-blend-multiply"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-[50%] bg-[#eeefea] p-6 2xl:p-8">
                    <span className="text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold text-black">
                      Our Sectors
                    </span>
                    <ul className="mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-8">
                      {sectors.map((sector) => (
                        <li key={sector.name} onMouseEnter={() => setActiveSector(sector)}>
                          <Link
                            href="/protective-solutions/"
                            className="flex justify-between items-center py-[0.8rem] xl:py-[0.9rem] 2xl:py-4 px-[0.6rem] xl:px-[0.8rem] 2xl:px-4 border-b border-gray-300 cursor-pointer hover:bg-[#e8e8e4] text-black"
                          >
                            <span className="text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-semibold">
                              {sector.name}
                            </span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              className="text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-[50%] p-6 2xl:p-8">
                  <div className="relative overflow-hidden w-full aspect-7/5 group/img">
                    <Image
                      src={activeSector.img}
                      alt={activeSector.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-[1.1rem] xl:p-[1.3rem] 2xl:p-6 text-white bg-linear-to-b from-transparent to-primary">
                      <span className="text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold">
                        {activeSector.name}
                      </span>
                      <p className="text-[0.65rem] xl:text-[0.75rem] 2xl:text-[0.85rem] mt-[0.3rem]">
                        {activeSector.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link className="transition-colors duration-200 text-white" href="/sustainability/">
              Sustainability &amp; Impact
            </Link>
          </li>
          <li>
            <Link className="transition-colors duration-200 text-white" href="/media/">
              Media
            </Link>
          </li>
          <li>
            <Link className="transition-colors duration-200 text-white" href="/grobal-presence/">
              Global Presence
            </Link>
          </li>
          <li>
            <Link className="transition-colors duration-200 text-white" href="/careers/">
              Careers
            </Link>
          </li>
        </ul>
        <div className="hidden sm:block z-10">
          <Link
            className="bg-transparent hover:bg-white text-white hover:text-primary px-3 py-1 text-[0.75rem] md:text-[0.85rem] lg:text-base lg:px-4 lg:py-[0.15rem] border-white font-medium border-2 transition-colors duration-200"
            href="/contact/"
          >
            Contact Us
          </Link>
        </div>
        <div className="sm:hidden z-10 text-white mt-[0.2rem]">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                height="26"
                width="26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="26"
                width="26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`sm:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-2xl z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0 pointer-events-auto'
            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-5 text-[15px] font-medium text-black">
            <Link href="/" className="font-bold underline">
              Home
            </Link>
            <Link href="/about/">About Us</Link>
            <button className="flex items-center justify-between w-full">Our Businesses</button>
            <Link href="/sustainability/">Sustainability & Impact</Link>
            <Link href="/media/">Media</Link>
            <Link href="/grobal-presence/">Global Presence</Link>
            <Link href="/careers/">Careers</Link>
          </nav>
          <Link
            href="/contact/"
            className="border border-black text-black px-6 py-3 text-center font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
