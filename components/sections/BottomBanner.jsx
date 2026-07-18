import Image from 'next/image';

export default function BottomBanner() {
  return (
    <section className="relative py-28 md:py-40 bg-black text-white text-center flex items-center justify-center font-sans overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Industrial Banner"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUUM53LJyXY4oqxmoRRiNOoTMGwugOqo-B9aTa-iVNd5YHFZI6Qw2egvDtdVXkR7JBwwJTyX3fR3n_IrJZ-7oyVyu5evreUFAp1Yg3Q_OSmGqrPSoS-tc9my73R9X62SGOEOp-hZzmwxaZ5ULXIB68sK0eTi12zfYdVNsfrx7yT4Bb04FvK7Z6DLS6Vh1oEA_C3XFTlSPH_3zU4GtpEuKkymwa8IBqVY-v5IvIs7Lg9IdNt5HeEzQ3U3HnJRWIILJkv5ASy_X_hDY"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-black/60"></div>
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
