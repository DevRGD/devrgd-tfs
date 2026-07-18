import Image from 'next/image';

export default function BottomBanner() {
  return (
    <section className="relative py-28 md:py-40 bg-black text-white text-center flex items-center justify-center font-sans overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Industrial Banner"
          src="/images/bottom-banner.png"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-[3.5rem] font-medium mb-6 md:mb-8 tracking-tight leading-tight">
            Lorem Ipsum
          </h2>
          <p className="text-[0.95rem] md:text-base text-gray-200 leading-relaxed font-light mx-auto max-w-[85%] md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
            vel facilisis.
          </p>
        </div>
      </div>
    </section>
  );
}
