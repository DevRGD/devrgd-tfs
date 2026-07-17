import Image from 'next/image';

function GlobePlaceholder() {
  return (
    <div className="relative w-full max-w-125 lg:max-w-175 xl:max-w-200 aspect-square">
      <Image
        alt="Interactive Globe"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI813_hLa0j7rmXqtrcgKpiPH-JAA-ufTz2Mb7uwjzKSeks0v3NrARQiDinfgvhrpG7upFICvpD6wLBEVdZyoS1ca97RVWlufW27aDDn2hkdL2ZtEduAMAs-WS6BoCx8XLDu7muVLGbdiIvfMW2cBTmH9NSbX67U5o58DegJrSmFaHf3O95qYSLT9_okObEhTw5JCOaG_V32v-kzCucPMoOztSMO9mFAii363Bo1iS6PyVl4WBlqt6v8_QBxdkTcR__OwkLss_AQE"
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-contain drop-shadow-2xl"
        priority
      />
    </div>
  );
}

export default function InteractiveGlobeSection() {
  return (
    <section className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#f6f6f6] z-0"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-12 xl:gap-20">
          <div className="w-full lg:w-[40%] xl:w-[35%] bg-white border border-gray-200 shadow-sm relative flex flex-col z-20">
            <div className="relative w-full h-64 md:h-72 lg:h-80 border-b border-gray-200">
              <Image
                alt="India Facility"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8XShvAaQkXdGI0cGhMs21PrZvtmGlQQODjO-riSZADDzYfNGvsmUTZMbHf94gACHAW7vHgMCmmA422KIaW1gIEss1XBMlSpotjxKTA-Kae9uCmMSu0xxYKcRHuzBAHXfiuy_2LGlp3MMngmllCrhGEJ7H00sew0BDCuciO2MoIyTpZkKNoENeYWgMBburyIFUatm5if8wNq1DRFsIce4RCHNVrRhWjmyD9BMXKfzd6izyRwjwstksFmNil7eNU_6tP4sE-OHv5Pk"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col">
                <h3 className="text-white text-[2.5rem] md:text-[3.25rem] font-medium mb-2 leading-none">India</h3>
                <p className="text-white/90 text-xs leading-relaxed max-w-[90%] font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 pb-28 md:pb-36 flex flex-col gap-10 bg-white">
              <div>
                <h4 className="text-[1.35rem] md:text-[1.5rem] font-medium text-black mb-3 leading-tight">
                  Tandhan Polyplast Limited
                </h4>
                <p className="text-[0.95rem] text-black leading-relaxed font-light">
                  JL-15, Kashyabpur, Uluberia-Amta Rd, Kulgachia,
                  <br className="hidden md:block" />
                  Howrah-711303, West Bengal, India
                </p>
              </div>

              <div>
                <h4 className="text-[1.35rem] md:text-[1.5rem] font-medium text-black mb-3 leading-tight">
                  Tandhan Denim
                </h4>
                <p className="text-[0.95rem] text-black leading-relaxed font-light">
                  Martin Burn Business Park, 18th floor, Plot 3. Salt
                  <br className="hidden md:block" />
                  Lake Bypa BP Block, Sector V. Bidhannagar, Kolkata,
                  <br className="hidden md:block" />
                  West Bengal 700091
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 flex">
              <button className="w-16 h-16 md:w-18 md:h-18 bg-white border-[3px] border-black border-r-0 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-16 h-16 md:w-18 md:h-18 bg-white border-[3px] border-black flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-black"
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

          <div className="w-full lg:w-[60%] xl:w-[65%] flex justify-center items-center relative z-10">
            <GlobePlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
