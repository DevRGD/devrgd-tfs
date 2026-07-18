import Image from 'next/image';

export default function FacilityCard({ activeData, onNext, onPrev }) {
  if (!activeData) return null;

  const { country, facility } = activeData;

  return (
    <div className="w-full lg:w-[40%] xl:w-[35%] bg-white border border-gray-200 shadow-sm relative flex flex-col z-20 anim-slide-right opacity-0">
      <div className="relative w-full h-48 md:h-56 lg:h-64 border-b border-gray-200">
        <div className="dynamic-content w-full h-full relative">
          <Image
            alt={`${country.name} Facility`}
            src={country.image}
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col">
          <h3 className="dynamic-content text-white text-3xl md:text-4xl font-medium mb-2 leading-none">{country.name}</h3>
          <p className="dynamic-content text-white/90 text-xs leading-relaxed max-w-[90%] font-light">{country.description}</p>
        </div>
      </div>

      <div className="p-6 pb-20 md:pb-24 flex flex-col gap-6 bg-white">
        <div>
          <h4 className="dynamic-content text-[1.15rem] md:text-[1.25rem] font-medium text-black mb-2 leading-tight">
            {facility.name}
          </h4>
          <p className="dynamic-content text-[0.85rem] text-black leading-relaxed font-light">
            {facility.address.split(',').map((part, i) => (
              <span key={i}>
                {part.trim()}
                {i < facility.address.split(',').length - 1 && ','}
                {i % 2 !== 0 && <br className="hidden md:block" />}
              </span>
            ))}
          </p>
        </div>

      </div>

      <div className="absolute bottom-0 right-0 flex">
        <button
          onClick={onPrev}
          className="cursor-pointer w-12 h-12 md:w-14 md:h-14 bg-white border-[3px] border-black border-r-0 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={onNext}
          className="cursor-pointer w-12 h-12 md:w-14 md:h-14 bg-white border-[3px] border-black flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
