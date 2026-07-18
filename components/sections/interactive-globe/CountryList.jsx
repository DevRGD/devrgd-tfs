import { brandsTimelineData } from '@/data/brandsTimelineData';

export default function CountryList({ activeIndex, onSelect, data = [], displayedIndex = 0 }) {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col md:grid md:grid-cols-[60%_40%] w-full">
          <div className="anim-slide-up opacity-0 relative py-6 md:py-8 md:pr-12 lg:pr-16 flex items-center z-10">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-0.5 w-screen bg-black -z-10"></div>
            <p className="leading-relaxed text-[13px] md:text-[0.95rem] font-medium text-[#a3a3a3] flex flex-wrap gap-x-2 gap-y-1">
              {data.map((item, idx) => (
                <span key={item.country.name} className="flex items-center">
                  <span 
                    onClick={() => onSelect(idx)}
                    className={`transition-colors text-left cursor-pointer hover:text-white ${
                      idx === activeIndex ? 'text-white text-sm md:text-[1.05rem] font-bold' : ''
                    }`}
                  >
                    {item.country.name}
                  </span>
                  {idx < data.length - 1 && <span className="ml-2">|</span>}
                </span>
              ))}
            </p>
          </div>

          <div className="anim-slide-up opacity-0 relative py-6 md:py-8 md:pl-12 lg:pl-16 flex items-center z-10">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0.5 w-screen bg-[#9e9e9e] -z-10"></div>
            <p className="dynamic-content text-sm md:text-[1.1rem] font-medium leading-relaxed text-white max-w-120">
              {data[displayedIndex]?.facility.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
