import Link from 'next/link';
import Image from 'next/image';

export default function TopBar() {
  return (
    <header className="hidden lg:flex justify-between items-center">
      <div>
        <Link href="/" className="block w-25 sm:w-50 lg:w-47.5 xl:w-53.75 2xl:w-60">
          <Image
            src="/logos/logo.png"
            alt="Tandhan Group Logo"
            width={240}
            height={60}
            priority
            className="w-full h-full brightness-0 invert object-contain"
          />
        </Link>
      </div>
      <div className="flex gap-8 sm:gap-[1.7rem] lg:gap-[1.6rem] xl:gap-[1.8rem] 2xl:gap-8">
        <div className="flex items-center gap-2 text-white">
          <div className="text-[2rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z" />
            </svg>
          </div>
          <div>
            <span className="block text-[0.8rem] sm:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem] leading-none">
              Visit Us
            </span>
            <Link
              href="/"
              className="block text-[0.9rem] sm:text-[0.8rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]"
            >
              Demo Address, Demo City
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 text-white">
          <div className="text-[2rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div>
            <span className="block text-[0.8rem] sm:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem] leading-none">
              Call Us
            </span>
            <Link
              href="/"
              className="block text-[0.9rem] sm:text-[0.8rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]"
            >
              +91 00000 00000
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 text-white">
          <div className="text-[2rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M13 8H7" />
              <path d="M17 12H7" />
            </svg>
          </div>
          <div>
            <span className="block text-[0.8rem] sm:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem] leading-none">
              Email Us
            </span>
            <Link
              href="/"
              className="block text-[0.9rem] sm:text-[0.8rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]"
            >
              example@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
