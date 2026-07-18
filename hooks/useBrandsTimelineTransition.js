import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useState } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useBrandsTimelineTransition(containerRef, dataLength) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const direction = useRef(1);
  const hasInitialized = useRef(false);

  const { contextSafe } = useGSAP({ scope: containerRef });

  // eslint-disable-next-line react-hooks/refs
  const playIntro = contextSafe((dir = null, isScroll = false) => {
    const d = dir !== null ? dir : direction.current;
    const targets = ['.timeline-main-anim', '.timeline-dot', '.timeline-logo-anim', '.timeline-line-anim'];
    if (isScroll) targets.push('.timeline-buttons-anim');

    gsap.killTweensOf(targets);

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.fromTo(
      '.timeline-line-anim',
      { scaleY: 0 },
      { scaleY: 1, duration: 0.6, transformOrigin: 'top center', ease: 'power2.out' },
      0,
    );

    tl.fromTo(
      '.timeline-main-anim',
      { opacity: 0, x: d * 30 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      0,
    );

    tl.fromTo(
      '.timeline-dot',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' },
      0.3,
    );

    tl.fromTo(
      '.timeline-logo-anim',
      { opacity: 0, x: d * 30 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      0.3,
    );

    if (isScroll) {
      tl.fromTo(
        '.timeline-buttons-anim',
        { opacity: 0, x: d * 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
        0,
      );
    }
  });

  // eslint-disable-next-line react-hooks/refs
  const playOutro = contextSafe((dir, onCompleteCallback, isScroll = false) => {
    const d = dir !== null ? dir : direction.current;
    const targets = ['.timeline-main-anim', '.timeline-dot', '.timeline-logo-anim', '.timeline-line-anim'];
    if (isScroll) targets.push('.timeline-buttons-anim');

    gsap.killTweensOf(targets);

    const tl = gsap.timeline({
      onComplete: () => {
        if (onCompleteCallback) onCompleteCallback();
      },
    });

    tl.to('.timeline-main-anim', { opacity: 0, x: -d * 30, duration: 0.3, stagger: 0.05, ease: 'power2.in' }, 0);
    tl.to('.timeline-dot', { opacity: 0, scale: 0, duration: 0.3, stagger: 0.05, ease: 'power2.in' }, 0);
    tl.to('.timeline-logo-anim', { opacity: 0, x: -d * 30, duration: 0.3, stagger: 0.05, ease: 'power2.in' }, 0);
    tl.to('.timeline-line-anim', { scaleY: 0, duration: 0.3, transformOrigin: 'top center', ease: 'power2.in' }, 0);

    if (isScroll) {
      tl.to('.timeline-buttons-anim', { opacity: 0, x: -d * 30, duration: 0.3, ease: 'power2.in' }, 0);
    }
  });

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          hasInitialized.current = true;
          playIntro(1, true);
        },
        onLeave: () => playOutro(1, null, true),
        onEnterBack: () => playIntro(-1, true),
        onLeaveBack: () => playOutro(-1, null, true),
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (hasInitialized.current) {
        playIntro(null, false);
      } else {
        gsap.set(['.timeline-main-anim', '.timeline-dot', '.timeline-logo-anim', '.timeline-buttons-anim'], {
          opacity: 0,
        });
        gsap.set('.timeline-line-anim', { scaleY: 0 });
      }
    },
    { scope: containerRef, dependencies: [currentIndex] },
  );

  // eslint-disable-next-line react-hooks/refs
  const goNext = contextSafe(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    direction.current = 1;
    playOutro(1, () => setCurrentIndex((prev) => (prev + 1) % dataLength), false);
  });

  // eslint-disable-next-line react-hooks/refs
  const goPrev = contextSafe(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    direction.current = -1;
    playOutro(-1, () => setCurrentIndex((prev) => (prev - 1 + dataLength) % dataLength), false);
  });

  // eslint-disable-next-line react-hooks/refs
  const goTo = contextSafe((index) => {
    if (isAnimating.current || index === currentIndex) return;
    isAnimating.current = true;
    direction.current = index > currentIndex ? 1 : -1;
    playOutro(direction.current, () => setCurrentIndex(index), false);
  });

  return { currentIndex, goNext, goPrev, goTo };
}
