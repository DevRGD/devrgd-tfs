'use client';
import { useRef } from 'react';
import Image from 'next/image';
import CountryCard from '../ui/CountryCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
  const allCountries = [
    { name: 'Afghanistan', image: '/maps/Afganistan.png' },
    { name: 'Australia', image: '/maps/Austrila.png' },
    { name: 'Azerbaijan', image: '/maps/Azerbaijan.png' },
    { name: 'Bangladesh', image: '/maps/Bangladesh.png' },
    { name: 'Brazil', image: '/maps/Brazile.png' },
    { name: 'DCR', image: '/maps/DCR.png' },
    { name: 'India', image: '/maps/India.png' },
    { name: 'Kenya', image: '/maps/Keneya.png' },
    { name: 'Myanmar', image: '/maps/Mayanmar.png' },
    { name: 'Nigeria', image: '/maps/Nigeria.png' },
    { name: 'South Africa', image: '/maps/South africa.png' },
    { name: 'Sudan', image: '/maps/Sudan.png' },
    { name: 'Tanzania', image: '/maps/Tanzania.png' },
    { name: 'Canada', image: '/maps/canada.png' },
    { name: 'Dubai', image: '/maps/dubai.png' },
    { name: 'Germany', image: '/maps/germaney.png' },
    { name: 'Ivory Coast', image: '/maps/ivory cost.png' },
    { name: 'Zambia', image: '/maps/zambia.png' },
  ];

  const topRow = allCountries.slice(0, 9);
  const bottomRow = allCountries.slice(9, 18);

  const paragraphText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.';
  const words = paragraphText.split(' ');

  const container = useRef();

  useGSAP(
    () => {
      // Infinite Marquees
      const tlTop = gsap.fromTo(
        '.marquee-top',
        { xPercent: -50 },
        { xPercent: 0, ease: 'none', duration: 45, repeat: -1 },
      );
      const tlBottom = gsap.fromTo(
        '.marquee-bottom',
        { xPercent: 0 },
        { xPercent: -50, ease: 'none', duration: 45, repeat: -1 },
      );

      // Initial Text Load Animation
      gsap.fromTo(
        '.hero-heading',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 },
      );

      gsap.fromTo(
        '.hero-word',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.03, ease: 'power2.out', delay: 0.6 },
      );

      // ScrollTrigger Animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top', // Unpinned, scrubs naturally as it leaves the screen
          scrub: true,
          onUpdate: (self) => {
            // Get scroll velocity and map it to a timeScale multiplier
            const velocity = Math.abs(self.getVelocity());
            const newTimeScale = 1 + velocity / 50; // Increased velocity multiplier
            
            // Calculate dynamic skew based on velocity (max 25 degrees)
            const skewAmount = Math.min(velocity / 30, 25); // Increased skew sensitivity and max angle

            // Animate timeScale up based on velocity
            gsap.to([tlTop, tlBottom], {
              timeScale: newTimeScale,
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => {
                // When scrolling stops, smoothly return to normal speed
                gsap.to([tlTop, tlBottom], { timeScale: 1, duration: 0.8 });
              },
            });
            
            // Dynamic Skew: Top row moves right, leans right (-skewAmount)
            gsap.to('.marquee-top .country-card', {
              skewX: -skewAmount,
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => gsap.to('.marquee-top .country-card', { skewX: 0, duration: 0.8 })
            });
            gsap.to('.marquee-top .country-card-text', {
              skewX: skewAmount, // reverse text skew
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => gsap.to('.marquee-top .country-card-text', { skewX: 0, duration: 0.8 })
            });

            // Dynamic Skew: Bottom row moves left, leans left (skewAmount)
            gsap.to('.marquee-bottom .country-card', {
              skewX: skewAmount,
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => gsap.to('.marquee-bottom .country-card', { skewX: 0, duration: 0.8 })
            });
            gsap.to('.marquee-bottom .country-card-text', {
              skewX: -skewAmount, // reverse text skew
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => gsap.to('.marquee-bottom .country-card-text', { skewX: 0, duration: 0.8 })
            });
          },
        },
      });

      // Parallax Background (Positive yPercent makes it scroll slower than the page)
      tl.to('.hero-bg', { yPercent: 30, ease: 'none' }, 0);

      // Text Reverse Animation (Using wrapper to avoid conflict)
      // Heading slides out to the right
      tl.to('.hero-heading-wrapper', { x: 150, opacity: 0, ease: 'none' }, 0);

      // Paragraph slides back down slightly, word by word from the end
      tl.to('.hero-word-wrapper', { y: 15, opacity: 0, ease: 'none', stagger: { amount: 0.5, from: 'end' } }, 0);
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative bg-black text-white min-h-screen pt-45 md:pt-60 pb-12 flex flex-col justify-center overflow-hidden"
    >
      <div className="hero-bg absolute inset-0 z-0 h-[130%] top-[-15%]">
        <Image
          alt="Industrial Background"
          src="/images/home-banner.png"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col justify-between gap-12">
        {/* Marquees Top */}
        <div className="flex flex-col gap-6 w-full">
          <div className="marquee-top-wrapper w-full overflow-hidden">
            <div className="marquee-top flex gap-4 w-max">
              {[...topRow, ...topRow].map((c, i) => (
                <CountryCard key={`top-${i}`} {...c} priority={i < 5} />
              ))}
            </div>
          </div>

          <div className="marquee-bottom-wrapper w-full overflow-hidden">
            <div className="marquee-bottom flex gap-4 w-max">
              {[...bottomRow, ...bottomRow].map((c, i) => (
                <CountryCard key={`bottom-${i}`} {...c} textPos="left" />
              ))}
            </div>
          </div>
        </div>

        {/* Text Area Bottom */}
        <div className="hero-text-container container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 mb-4 md:mb-8">
          <div className="max-w-3xl">
            <div className="hero-heading-wrapper inline-block">
              <h1 className="hero-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight opacity-0">
                Global Presence
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
              {words.map((word, index) => (
                <span key={index} className="hero-word-wrapper inline-block mr-1">
                  <span className="hero-word inline-block opacity-0">{word}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
