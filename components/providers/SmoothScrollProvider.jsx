'use client';
import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={{ lerp: 0.1, duration: 1.5, smoothTouch: false }}>
      {children}
    </ReactLenis>
  );
}
