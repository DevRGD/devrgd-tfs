'use client';
import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function OverviewSection() {
  const container = useRef(null);

  const headingText = 'Global Presence Overview';
  const headingChars = headingText.split('');

  const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ];

  // Helper to split paragraph into spans for GSAP
  const renderParagraph = (text) => {
    const words = text.split(' ');
    return (
      <p className="mb-6">
        {words.map((word, index) => (
          <span key={index} className="overview-word inline-block opacity-0 mr-[0.25rem]">
            {word}
          </span>
        ))}
      </p>
    );
  };

  useGSAP(
    () => {
      // --- ANIMATE IN ---
      const tlIn = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%', // Triggers when section enters 80% down viewport
          end: 'top 30%', // Finishes assembling when it reaches 30% from top
          scrub: true,
        },
      });

      // 1. Image Wipe Reveal
      tlIn.fromTo(
        '.overview-image-wrapper',
        { clipPath: 'inset(0% 100% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'none' },
      );

      // 2. Heading Typewriter
      tlIn.fromTo(
        '.overview-char',
        { opacity: 0 },
        { opacity: 1, stagger: { amount: 0.5 }, duration: 0.1, ease: 'none' },
        '-=0.7',
      );

      // 3. Word-by-word fade up for paragraphs
      tlIn.fromTo(
        '.overview-word',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: { amount: 0.5 }, duration: 0.4, ease: 'none' },
        '-=0.4',
      );

      // --- ANIMATE OUT ---
      const tlOut = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top -5%', // Start animating out only when user reaches the bottom of the section
          end: 'bottom 5%', // Finish animating out as it leaves
          scrub: true,
        },
      });

      // 4. Word-by-word fade down (starting from end of paragraph)
      tlOut.fromTo(
        '.overview-word',
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: 10,
          stagger: { amount: 0.5, from: 'end' },
          duration: 0.4,
          ease: 'none',
          immediateRender: false,
        },
      );

      // 5. Heading untype (starting from end of heading)
      tlOut.fromTo(
        '.overview-char',
        { opacity: 1 },
        { opacity: 0, stagger: { amount: 0.5, from: 'end' }, duration: 0.1, ease: 'none', immediateRender: false },
        '-=0.2',
      );

      // 6. Image Wipe Out (masks back to the left)
      tlOut.fromTo(
        '.overview-image-wrapper',
        { clipPath: 'inset(0% 0% 0% 0%)' },
        { clipPath: 'inset(0% 100% 0% 0%)', duration: 1.5, ease: 'none', immediateRender: false },
        '-=0.3',
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Newspaper Layout Block (clearfix to contain float) */}
        <div className="text-gray-600 leading-relaxed text-sm md:text-base clearfix">
          {/* Floated Image: 4:3 aspect ratio */}
          <div className="overview-image-wrapper float-none md:float-left w-full md:w-[45%] aspect-[4/3] mr-0 md:mr-10 lg:mr-12 mb-6 md:mb-4 relative overflow-hidden rounded-sm shadow-xl">
            <Image
              alt="Global Presence Overview"
              src="/images/global-presence.png"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Typewriter Heading */}
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

          {/* Rendered Paragraphs */}
          {paragraphs.map((para, i) => (
            <div key={i}>{renderParagraph(para)}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
