import Image from 'next/image';

export default function BrandsTimelineSection() {
  return (
    <section className="bg-white font-sans w-full flex flex-col relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="w-full flex flex-col md:grid md:grid-cols-[60%_40%]">
          <div className="relative pt-20 md:pt-32 pb-12 md:pb-0 md:pr-12 lg:pr-24 flex flex-col justify-start">
            <h2 className="text-4xl md:text-[3.5rem] font-medium mb-6 text-black tracking-tight leading-tight">
              Lorem Ipsum
            </h2>
            <p className="text-gray-800 text-sm md:text-[1.05rem] mb-10 md:mb-16 leading-relaxed max-w-105">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>

            <h3 className="text-3xl md:text-[2.5rem] font-medium mb-6 text-black">India</h3>
            <div className="relative w-full max-w-70 md:max-w-60 aspect-3/2 shadow-sm mb-6 md:mb-8 bg-gray-100 border border-gray-200">
              <Image
                alt="India Flag"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9MtTUUuJtAK-FtJ4jc6Kb8KTPkf9rEwrx2OKL6VUdSdWmHmAVzZQtDERTtgoutoBNWs8uBo4ZPXhKrSrJ3S1Z3iVzQlaK3ku_GjBfWrGFFkgCDUH86SEyHKEJQyLP1qXP_dkCK6D9fAxoCsRG1HTiOsYEBYhrAbtm1z6IX9jZ7TDC6pfZp94c9USlTPvWVvbSN5s8fqH6EBfFwzLbUnjsXmLwXFzgdAWhQjcRUonOTWTciYw5L9yvDLe7P-L7tM5U3bccYnMcCUQ"
                fill
                sizes="(max-width: 768px) 280px, 240px"
                className="object-cover"
              />
            </div>

            <div className="flex md:absolute bottom-0 md:right-0 md:bottom-0 z-10 w-fit mt-4 md:mt-0">
              <button className="w-14 h-14 md:w-16 md:h-16 bg-white border-[3px] border-black border-r-0 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button className="w-14 h-14 md:w-16 md:h-16 bg-white border-[3px] border-black flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-black"
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

          <div className="relative pt-12 md:pt-32 pb-20 md:pb-32 flex flex-col gap-12 md:gap-16 justify-start ml-4 md:ml-0">
            <div className="absolute left-4 md:left-0 top-17 md:top-37 bottom-0 w-1 bg-black -translate-x-1/2 z-0"></div>

            <div className="relative flex items-center w-full h-10">
              <div className="absolute left-4 md:left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-black bg-white flex items-center justify-center z-10">
                <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
              </div>
              <div className="flex items-center gap-3 md:gap-4 pl-16 md:pl-12 lg:pl-16">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 md:w-12 md:h-12 text-[#2d3748] shrink-0"
                >
                  <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.2l7.5 4.2-3.8 2.1-7.5-4.2 3.8-2.1zm-8.8 6.5l7.3 4v7.7l-7.3-4v-7.7zm17.6 0v7.7l-7.3 4v-7.7l7.3-4z" />
                </svg>
                <div className="flex flex-col pt-1">
                  <span className="text-2xl md:text-[1.75rem] font-bold tracking-tight text-black leading-none uppercase">
                    Tandhan
                  </span>
                  <span className="text-[11px] md:text-[1.05rem] font-bold tracking-[0.15em] text-[#2d3748] leading-none mt-1.5 text-right">
                    POLYPLAST
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center w-full h-10">
              <div className="absolute left-4 md:left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-black bg-white flex items-center justify-center z-10">
                <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
              </div>
              <div className="flex items-center gap-3 md:gap-4 pl-16 md:pl-12 lg:pl-16">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 md:w-12 md:h-12 text-[#4a5568] shrink-0"
                >
                  <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.2l7.5 4.2-3.8 2.1-7.5-4.2 3.8-2.1zm-8.8 6.5l7.3 4v7.7l-7.3-4v-7.7zm17.6 0v7.7l-7.3 4v-7.7l7.3-4z" />
                </svg>
                <div className="flex flex-col pt-1">
                  <span className="text-2xl md:text-[1.75rem] font-bold tracking-tight text-black leading-none uppercase">
                    Tandhan
                  </span>
                  <span className="text-[11px] md:text-[1.05rem] font-bold tracking-[0.15em] text-[#4a5568] leading-none mt-1.5 text-right">
                    DENIM
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center w-full h-10">
              <div className="absolute left-4 md:left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-black bg-white flex items-center justify-center z-10">
                <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
              </div>
              <div className="flex items-center pl-16 md:pl-12 lg:pl-16">
                <div className="flex flex-col items-center">
                  <div
                    className="text-[2.75rem] md:text-[3.25rem] font-serif text-black leading-none tracking-tighter"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    NX
                  </div>
                  <div className="text-[11px] md:text-[0.85rem] font-semibold tracking-[0.2em] text-black mt-1">
                    HOTEL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="flex flex-col md:grid md:grid-cols-[60%_40%] w-full">
            <div className="relative py-12 md:py-16 md:pr-12 lg:pr-16 flex items-center z-10">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-0.5 w-screen bg-black -z-10"></div>
              <p className="leading-relaxed text-[13px] md:text-[0.95rem] font-medium text-[#a3a3a3]">
                <strong className="text-white text-sm md:text-[1.05rem]">India</strong> | Bangladesh | Myanmar | Dubai |
                Germany | South Africa
                <br className="hidden md:block" />
                Kenya | Sudan | Canada | Brazil | Australia | Nigeria | Afghanistan
                <br className="hidden md:block" />
                Zambia | Tanzania | Ivory Coast | DRC | Azerbaijan
              </p>
            </div>

            <div className="relative py-12 md:py-16 md:pl-12 lg:pl-16 flex items-center z-10">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0.5 w-screen bg-[#9e9e9e] -z-10"></div>
              <p className="text-sm md:text-[1.1rem] font-medium leading-relaxed text-white max-w-120">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
