'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sectors } from '@/data/headerData';
import TopBar from './header/TopBar';
import DesktopNav from './header/DesktopNav';
import MobileMenu from './header/MobileMenu';

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
      <TopBar />
      <div className="flex flex-wrap items-center justify-between gap-y-4 mt-[0.2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-8">
        <div className="block lg:hidden w-32.5">
          <Link href="/" className="block w-full">
            <div className="relative w-full" style={{ aspectRatio: '130/32' }}>
              <Image
                src="/logos/logo.png"
                alt="Tandhan Group Logo"
                fill
                sizes="130px"
                className="brightness-0 invert object-contain"
              />
            </div>
          </Link>
        </div>
        <DesktopNav
          handleMegaMenuEnter={handleMegaMenuEnter}
          handleMegaMenuLeave={handleMegaMenuLeave}
          isMegaMenuOpen={isMegaMenuOpen}
          activeSector={activeSector}
          setActiveSector={setActiveSector}
        />
        <div className="hidden sm:block z-10">
          <Link
            className="bg-transparent hover:bg-white text-white hover:text-primary px-3 py-1 text-[0.75rem] md:text-[0.85rem] lg:text-base lg:px-4 lg:py-[0.15rem] border-white font-medium border-2 transition-colors duration-200"
            href="/contact/"
          >
            Contact Us
          </Link>
        </div>
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>
    </nav>
  );
}
