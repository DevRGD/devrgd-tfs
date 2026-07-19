'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { brandsTimelineData } from '@/data/brandsTimelineData';
import { useBrandsTimelineTransition } from '@/hooks/useBrandsTimelineTransition';

export default function BrandsTimelineSection() {
  const containerRef = useRef(null);
  const { currentIndex, goNext, goPrev, goTo } = useBrandsTimelineTransition(containerRef, brandsTimelineData.length);

  const currentData = brandsTimelineData[currentIndex];

  return (
    <section ref={containerRef} className="bg-white font-sans w-full flex flex-col relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="w-full grid grid-cols-[55%_45%] sm:grid-cols-[60%_40%]">
          <div className="relative pt-10 sm:pt-20 md:pt-32 pb-12 md:pb-0 pr-4 sm:pr-8 md:pr-12 lg:pr-24 flex flex-col justify-start">
            <h2 className="timeline-main-anim text-2xl sm:text-3xl md:text-[3.5rem] font-medium mb-3 sm:mb-6 text-black tracking-tight leading-tight">
              {currentData.title}
            </h2>
            <p className="timeline-main-anim text-gray-800 text-xs sm:text-sm md:text-[1.05rem] mb-6 sm:mb-10 md:mb-16 leading-relaxed max-w-105">
              {currentData.about}
            </p>

            <h3 className="timeline-main-anim text-xl sm:text-2xl md:text-[2.5rem] font-medium mb-3 sm:mb-6 text-black">
              {currentData.name}
            </h3>
            <div className="timeline-main-anim relative w-full max-w-32 sm:max-w-48 md:max-w-60 lg:max-w-70 aspect-3/2 shadow-sm mb-6 md:mb-8 bg-gray-100 border border-gray-200">
              <Image
                alt={`${currentData.name} Map`}
                src={currentData.map}
                fill
                sizes="(max-width: 768px) 280px, 240px"
                className="object-cover"
                preload={true}
              />
            </div>

            <div className="timeline-buttons-anim flex absolute bottom-0 right-0 z-10 w-fit mt-4 md:mt-0">
              <button
                onClick={goPrev}
                className="cursor-pointer w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white border-2 md:border-[3px] border-black border-r-0 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goNext}
                className="cursor-pointer w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white border-2 md:border-[3px] border-black flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative pt-10 sm:pt-16 md:pt-32 pb-0 flex flex-col gap-8 sm:gap-12 md:gap-16 justify-start">
            <div className="timeline-line-anim absolute left-0 top-14 sm:top-20 md:top-37 bottom-0 w-0.5 sm:w-0.75 md:w-1 bg-black -translate-x-1/2 z-0"></div>

            {currentData.timeline.map((logoUrl, idx) => (
              <div key={idx} className="relative flex items-center w-full h-8 sm:h-10">
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="timeline-dot w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 md:border-[3px] border-black bg-white flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3.5 md:h-3.5 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="timeline-logo-anim flex items-center gap-3 md:gap-4 pl-6 sm:pl-10 md:pl-12 lg:pl-16 w-full">
                  <div className="relative w-16 sm:w-24 md:w-32 h-8 sm:h-12 md:h-16">
                    <Image
                      src={logoUrl}
                      alt={`Timeline logo ${idx + 1}`}
                      fill
                      sizes="128px"
                      className="object-contain"
                      preload={true}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
