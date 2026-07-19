import Image from 'next/image';
import Link from 'next/link';

export default function FooterBrand() {
  return (
    <div className="w-full lg:w-[35%] relative">
      <Image
        src="/images/footer-bg.avif"
        alt="Footer Background"
        width={800}
        height={800}
        className="w-full aspect-square object-cover"
        preload={true}
      />
      <div className="absolute bottom-0 right-[15%] lg:right-0 w-[85%] lg:w-[78%] h-[86%] lg:h-full bg-white/80 text-primary p-4 sm:p-6 lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-8">
        <div className="relative w-35 sm:w-36.25 lg:w-37.5 xl:w-42.5 2xl:w-47.5 aspect-19/5">
          <Image
            src="/logos/logo.png"
            alt="Tandhan Group Logo"
            fill
            sizes="(max-width: 640px) 140px, (max-width: 1024px) 150px, 190px"
            preload={true}
            className="brightness-0 object-contain"
          />
        </div>
        <p className="font-medium mt-[1.2rem] lg:mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit error enim assumenda pariatur,
          delectus consequatur eos! Id, sed corrupti.
        </p>
        <p className="font-medium mt-2 lg:mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit error enim assumenda pariatur.
        </p>
      </div>
    </div>
  );
}
