import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#060709]">
      <div className="pr-0 lg:pr-[7%] flex justify-between flex-wrap">
        <div className="w-full lg:w-[35%] relative">
          <Image
            src="/images/footer-bg.avif"
            alt="Footer Background"
            width={800}
            height={800}
            className="w-full aspect-square object-cover"
            priority
          />
          <div className="absolute bottom-0 right-[15%] lg:right-0 w-[85%] lg:w-[78%] h-[86%] lg:h-full bg-white/80 text-primary p-4 sm:p-6 lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-8">
            <div className="relative w-35 sm:w-36.25 lg:w-37.5 xl:w-42.5 2xl:w-47.5 aspect-[19/5]">
              <Image
                src="/logos/logo.png"
                alt="Tandhan Group"
                fill
                sizes="(max-width: 640px) 140px, 190px"
                className="object-contain"
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
        <div className="w-full lg:w-[60%] pt-6 sm:pt-8 lg:pt-12 xl:pt-14 2xl:pt-16 flex justify-between flex-wrap px-4 lg:px-0">
          <div className="w-full lg:w-[32%] text-white mb-4 lg:mb-0">
            <span className="text-[1.3rem] sm:text-[1.4rem] lg:text-[1.15rem] xl:text-[1.35rem] 2xl:text-[1.5rem] font-semibold">
              Quick Links
            </span>
            <ul className="mt-[0.7rem] sm:mt-[0.8rem] lg:mt-4 xl:mt-[1.1rem] 2xl:mt-[1.2rem]">
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Home
                </Link>
              </li>
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/about/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/businesses/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Our Businesses
                </Link>
              </li>
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/sustainability-impact/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Sustainability &amp; Impact
                </Link>
              </li>
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/media/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Media
                </Link>
              </li>
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/careers/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Careers
                </Link>
              </li>
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/contact/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[32%] text-white mb-4 lg:mb-0">
            <span className="text-[1.3rem] sm:text-[1.4rem] lg:text-[1.15rem] xl:text-[1.35rem] 2xl:text-[1.5rem] font-semibold">
              Our Sectors
            </span>
            <ul className="mt-[0.7rem] sm:mt-[0.8rem] lg:mt-4 xl:mt-[1.1rem] 2xl:mt-[1.2rem]">
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Sector 1
                </Link>
              </li>
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Sector 2
                </Link>
              </li>
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Sector 3
                </Link>
              </li>
              <li className="mt-2">
                <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href="/">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg> Sector 4
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[32%] text-white">
            <span className="text-[1.3rem] sm:text-[1.4rem] lg:text-[1.15rem] xl:text-[1.35rem] 2xl:text-[1.5rem] font-semibold">
              Get In Touch
            </span>
            <ul className="mt-[0.7rem] sm:mt-[0.8rem] lg:mt-4 xl:mt-[1.1rem] 2xl:mt-[1.2rem]">
              <li className="mt-2">
                <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#e9e9e9] transition">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z" />
                  </svg> Address
                </a>
              </li>
              <li className="mt-2">
                <a href="mailto:example@gmail.com" target="_self" className="flex items-center gap-2 hover:text-[#e9e9e9] transition">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M13 8H7" />
                    <path d="M17 12H7" />
                  </svg> example@gmail.com
                </a>
              </li>
              <li className="mt-2">
                <a href="tel:+910000000000" target="_self" className="flex items-center gap-2 hover:text-[#e9e9e9] transition">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg> +91 00000 00000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 sm:py-4 lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-4 px-4 bg-[#060709] mt-6 lg:mt-0 border-t border-[#2e2e2e]">
        <p className="text-center text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-white">
          Copyright © 2026 | Tandhan Group | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
