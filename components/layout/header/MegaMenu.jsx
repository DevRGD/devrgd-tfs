import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { brands, sectors } from '@/data/headerData';
import useMegaMenuAnimations from '@/hooks/useMegaMenuAnimations';

export default function MegaMenu({ isMegaMenuOpen, activeSector, setActiveSector }) {
  const container = useRef(null);

  useMegaMenuAnimations(container, activeSector, isMegaMenuOpen);

  return (
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
            <span className="text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold text-black">Our Brands</span>
            <ul className="mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-8">
              {brands.map((logo, i, arr) => (
                <li key={i} className={i === arr.length - 1 ? '' : 'mb-2'}>
                  <div className="relative w-[55%]" style={{ aspectRatio: '14/5' }}>
                    <Image
                      src={`/logos/${logo}`}
                      alt={logo.replace('.png', '').replace(/-/g, ' ')}
                      fill
                      sizes="80px"
                      className="object-contain mix-blend-multiply"
                      preload={true}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[50%] bg-[#eeefea] p-6 2xl:p-8">
            <span className="text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold text-black">Our Sectors</span>
            <ul className="mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-8">
              {sectors.map((sector) => (
                <li key={sector.name} onMouseEnter={() => setActiveSector(sector)}>
                  <Link
                    href={sector.link}
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
        <div ref={container} className="w-[50%] p-6 2xl:p-8">
          <div className="mega-image-wrapper relative overflow-hidden w-full aspect-7/5 group/img">
            <Image
              src={activeSector.img}
              alt={activeSector.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
              preload={true}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-[1.1rem] xl:p-[1.3rem] 2xl:p-6 text-white bg-linear-to-b from-transparent to-primary">
              <span className="text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold">
                {activeSector.name.split('').map((char, index) =>
                  char === ' ' ? (
                    ' '
                  ) : (
                    <span key={index} className="mega-char inline-block opacity-0">
                      {char}
                    </span>
                  ),
                )}
              </span>
              <p className="text-[0.65rem] xl:text-[0.75rem] 2xl:text-[0.85rem] mt-[0.3rem]">
                {activeSector.desc.split(' ').map((word, index) => (
                  <span key={index} className="mega-word inline-block opacity-0 mr-1">
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
