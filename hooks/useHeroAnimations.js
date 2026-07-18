import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function useHeroAnimations(containerRef) {
  useGSAP(
    () => {
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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const velocity = Math.abs(self.getVelocity());
            const newTimeScale = 1 + velocity / 50;
            const skewAmount = Math.min(velocity / 30, 25);

            gsap.to([tlTop, tlBottom], {
              timeScale: newTimeScale,
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => {
                gsap.to([tlTop, tlBottom], { timeScale: 1, duration: 0.8 });
              },
            });

            gsap.to('.marquee-top .country-card', {
              skewX: -skewAmount,
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => gsap.to('.marquee-top .country-card', { skewX: 0, duration: 0.8 }),
            });
            gsap.to('.marquee-top .country-card-text', {
              skewX: skewAmount,
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => gsap.to('.marquee-top .country-card-text', { skewX: 0, duration: 0.8 }),
            });

            gsap.to('.marquee-bottom .country-card', {
              skewX: skewAmount,
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => gsap.to('.marquee-bottom .country-card', { skewX: 0, duration: 0.8 }),
            });
            gsap.to('.marquee-bottom .country-card-text', {
              skewX: -skewAmount,
              duration: 0.2,
              overwrite: 'auto',
              onComplete: () => gsap.to('.marquee-bottom .country-card-text', { skewX: 0, duration: 0.8 }),
            });
          },
        },
      });

      tl.to('.hero-bg', { yPercent: 30, ease: 'none' }, 0);
      tl.to('.hero-heading-wrapper', { x: 150, opacity: 0, ease: 'none' }, 0);
      tl.to('.hero-word-wrapper', { y: 15, opacity: 0, ease: 'none', stagger: { amount: 0.5, from: 'end' } }, 0);
    },
    { scope: containerRef },
  );
}
