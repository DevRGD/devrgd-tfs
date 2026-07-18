import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function useGlobeContentTransition(sectionRef) {
  const [targetIndex, setTargetIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const { contextSafe } = useGSAP({ scope: sectionRef });

  const changeLocation = contextSafe((newIndex) => {
    if (newIndex === displayedIndex || newIndex === targetIndex) return;
    setTargetIndex(newIndex);
    
    gsap.to('.dynamic-content', {
      opacity: 0,
      y: 10,
      duration: 0.2,
      stagger: 0.05,
      ease: 'power2.in',
      onComplete: () => {
        setDisplayedIndex(newIndex);
      }
    });
  });

  useGSAP(() => {
    if (targetIndex === displayedIndex) {
      gsap.fromTo('.dynamic-content', 
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, { scope: sectionRef, dependencies: [displayedIndex] });

  return { targetIndex, displayedIndex, changeLocation };
}
