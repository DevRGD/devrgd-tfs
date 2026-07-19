'use client';

import CountryList from './interactive-globe/CountryList';
import FacilityCard from './interactive-globe/FacilityCard';
import Globe from './interactive-globe/Globe';
import { useRef, useState, useEffect } from 'react';
import { useInteractiveGlobeTransition } from '@/hooks/useInteractiveGlobeTransition';
import { globeLocationsData } from '@/data/globeLocationsData';
import { useGlobeContentTransition } from '@/hooks/useGlobeContentTransition';

if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return;
    originalWarn(...args);
  };
}

export default function InteractiveGlobeSection() {
  const sectionRef = useRef(null);

  const controlsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragClosestIndexRef = useRef(-1);
  const dragTimeoutRef = useRef(null);

  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const hasInteractedRef = useRef(false);
  const autoPlayTimeoutRef = useRef(null);
  const autoPlayIntervalRef = useRef(null);

  useInteractiveGlobeTransition(sectionRef);
  const { targetIndex, displayedIndex, changeLocation } = useGlobeContentTransition(sectionRef);

  const stopAutoPlay = () => {
    hasInteractedRef.current = true;
    setIsAutoPlaying(false);
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasInteractedRef.current && !isAutoPlaying) {
            autoPlayTimeoutRef.current = setTimeout(() => {
              if (!hasInteractedRef.current) {
                setIsAutoPlaying(true);
              }
            }, 3000);
          }
        } else {
          if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
          setIsAutoPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        changeLocation((targetIndex + 1) % globeLocationsData.length);
      }, 4000);
    }
    return () => {
      if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
    };
  }, [isAutoPlaying, targetIndex, changeLocation]);

  const handleNext = () => {
    stopAutoPlay();
    changeLocation((targetIndex + 1) % globeLocationsData.length);
  };

  const handlePrev = () => {
    stopAutoPlay();
    changeLocation((targetIndex - 1 + globeLocationsData.length) % globeLocationsData.length);
  };

  const handleDragStart = () => {
    stopAutoPlay();
    setIsDragging(true);
    if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);
  };

  const handleClosestChange = (idx) => {
    dragClosestIndexRef.current = idx;
    if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);
    dragTimeoutRef.current = setTimeout(() => {
      if (idx !== targetIndex && isDragging) {
        changeLocation(idx);
      }
    }, 20);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);
    if (dragClosestIndexRef.current !== -1 && dragClosestIndexRef.current !== targetIndex) {
      changeLocation(dragClosestIndexRef.current);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <CountryList
        activeIndex={targetIndex}
        onSelect={(idx) => {
          stopAutoPlay();
          changeLocation(idx);
        }}
        data={globeLocationsData}
        displayedIndex={displayedIndex}
      />

      <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#f6f6f6] z-0"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 py-6 md:py-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 xl:gap-16">
          <FacilityCard activeData={globeLocationsData[displayedIndex]} onNext={handleNext} onPrev={handlePrev} />

          <div className="w-full lg:w-[60%] xl:w-[65%] flex justify-center items-center relative z-10">
            <Globe
              activeLocation={globeLocationsData[targetIndex]}
              controlsRef={controlsRef}
              isDragging={isDragging}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onClosestChange={handleClosestChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
