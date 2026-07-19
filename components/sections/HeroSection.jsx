'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { topRow, bottomRow, paragraphText } from '@/data/heroData';
import useHeroAnimations from '@/hooks/useHeroAnimations';
import HeroMarquees from './hero/HeroMarquees';
import HeroHeading from './hero/HeroHeading';

export default function HeroSection() {
  const words = paragraphText.split(' ');
  const container = useRef(null);

  useHeroAnimations(container);

  return (
    <section
      ref={container}
      className="relative bg-black text-white min-h-screen pt-45 md:pt-60 pb-12 flex flex-col justify-center overflow-hidden"
    >
      <div className="hero-bg absolute inset-0 z-0 h-[130%] top-[-15%]">
        <Image
          alt="Industrial Background"
          src="/banners/banner.png"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          preload={true}
        />
      </div>
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between gap-12">
        <HeroMarquees topRow={topRow} bottomRow={bottomRow} />
        <HeroHeading words={words} />
      </div>
    </section>
  );
}
