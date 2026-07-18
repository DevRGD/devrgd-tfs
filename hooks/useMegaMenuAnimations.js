import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function useMegaMenuAnimations(containerRef, activeSector, isMegaMenuOpen) {
  useGSAP(
    () => {
      if (!isMegaMenuOpen) return;

      const tl = gsap.timeline();

      tl.fromTo(
        '.mega-image-wrapper',
        { clipPath: 'inset(0% 100% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.6, ease: 'power2.inOut' },
      );

      tl.fromTo(
        '.mega-char',
        { opacity: 0 },
        { opacity: 1, stagger: 0.02, duration: 0.1, ease: 'power1.out' },
        '-=0.3',
      );

      tl.fromTo(
        '.mega-word',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.01, duration: 0.3, ease: 'power1.out' },
        '-=0.2',
      );
    },
    { scope: containerRef, dependencies: [activeSector, isMegaMenuOpen] },
  );
}
