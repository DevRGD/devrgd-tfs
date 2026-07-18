'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { headingChars, paragraphs } from '@/data/overviewData';
import useOverviewAnimations from '@/hooks/useOverviewAnimations';

export default function OverviewSection() {
  const container = useRef(null);

  useOverviewAnimations(container);

  const renderParagraph = (text) => {
    return (
      <p className="mb-4">
        {text.split(' ').map((word, index) => (
          <span key={index} className="overview-word inline-block opacity-0 mr-1">
            {word}
          </span>
        ))}
      </p>
    );
  };

  return (
    <section ref={container} className="relative bg-white min-h-screen py-24 pb-0 flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="text-gray-600 leading-relaxed text-sm md:text-base clearfix">
          <div className="overview-image-wrapper float-none md:float-left w-full md:w-[45%] aspect-4/3 mr-0 md:mr-10 lg:mr-12 mb-6 md:mb-4 relative overflow-hidden rounded-sm shadow-xl">
            <Image
              alt="Global Presence Overview"
              src="/images/global-presence.png"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 45vw"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {headingChars.map((char, index) =>
              char === ' ' ? (
                ' '
              ) : (
                <span key={index} className="overview-char opacity-0 inline-block">
                  {char}
                </span>
              ),
            )}
          </h2>
          {paragraphs.map((p, i) => (
            <div className="text-xl" key={i}>
              {renderParagraph(p)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
