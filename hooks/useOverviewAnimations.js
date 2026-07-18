import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function useOverviewAnimations(containerRef) {
  useGSAP(
    () => {
      const contentEl = containerRef.current?.querySelector('.container') || containerRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentEl,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: true,
        },
      });

      tl.fromTo(
        '.overview-image-wrapper',
        { clipPath: 'inset(0% 100% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'none' },
      );

      tl.fromTo(
        '.overview-char',
        { opacity: 0 },
        { opacity: 1, stagger: { amount: 0.5 }, duration: 0.1, ease: 'none' },
        '-=0.7',
      );

      tl.fromTo(
        '.overview-word',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: { amount: 0.5 }, duration: 0.4, ease: 'none' },
        '-=0.4',
      );

      tl.to({}, { duration: 3 });

      tl.to('.overview-word', {
        opacity: 0,
        y: 10,
        stagger: { amount: 0.5, from: 'end' },
        duration: 0.4,
        ease: 'none',
      });

      tl.to(
        '.overview-char',
        { opacity: 0, stagger: { amount: 0.5, from: 'end' }, duration: 0.1, ease: 'none' },
        '-=0.2',
      );

      tl.to('.overview-image-wrapper', { clipPath: 'inset(0% 100% 0% 0%)', duration: 1.5, ease: 'none' }, '-=0.3');
    },
    { scope: containerRef },
  );
}
