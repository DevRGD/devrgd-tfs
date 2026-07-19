import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function useBottomBannerAnimations(containerRef) {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', end: 'bottom 15%', scrub: true },
      });

      tl.fromTo('.bb-heading-wrapper', { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: 'none' }, 0);
      tl.fromTo(
        '.bb-word',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: { amount: 0.6 }, ease: 'none' },
        '-=0.8',
      );
      tl.to({}, { duration: 2 });
      tl.to('.bb-word', { y: 15, opacity: 0, stagger: { amount: 0.6, from: 'end' }, duration: 0.8, ease: 'none' });
      tl.to('.bb-heading-wrapper', { x: 150, opacity: 0, duration: 1.5, ease: 'none' }, '-=0.6');
    },
    { scope: containerRef },
  );
}
