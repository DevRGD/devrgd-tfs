import Image from 'next/image';

export default function OverviewSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative w-full aspect-video md:aspect-square overflow-hidden">
          <Image
            alt="Global Presence Overview"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Y3LmxEcI_tRnvOdWNgWWCg-vox0pSKt8Yp3PXo6eGWQKtIDGLWz114biJWHry9PJLpGn4puWVICROFcnrowsW8c1WWhj8AvlI8q1vlWQH9DWwwyQp571mzvt3QcqBt2t10zTbQ2U29To6IjYGGbqYa0X3rtmDmU_mwLAqKRLCB0tzucSsvUz1wtmIbr4Kr7UoouRFuRqIEtR5BVuIv_NPtfoGE1LTupaJYgFr8jnNGvHUvsuH4igH8Ar44i47BWuKEsXG9kBWx8"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-sm shadow-xl"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            Global Presence
            <br />
            Overview
          </h2>
          <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
