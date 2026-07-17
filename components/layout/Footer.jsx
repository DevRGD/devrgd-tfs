import Image from 'next/image';
import Link from 'next/link';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full min-h-100">
          <div className="relative py-12 md:py-20 flex flex-col justify-center">
            <div className="absolute inset-y-0 right-0 w-screen z-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXCJgahloKfEDnyQLR3-TWELrnDmGHzlHBbByF5Xl92lfDIkHXkXqtjSPCsIG64FOsI8OFP67z3PV69ohtb6gm2yUTZrJqenLeLSVPSK0Pbx92dIZgGQQkR_HAWSg_JfrW0c7g-bDDK4VyqVz-nr8MBQnIDzCTQdsAYpXKcve54PdcWF6YN3P2JkaItzBLfN9CW_oFVFduohIlifC06ETLQjF-xapi7haxdL5zrV7lw6KwOAv44hq-JRmFK8j66XAlU-dYlH2yUs"
                alt="Footer Background"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute inset-y-0 -left-6 md:-left-8 right-0 bg-white/10 backdrop-blur-lg z-0"></div>

            <div className="relative z-10 flex flex-col gap-6 pr-6 md:pr-12">
              <div className="scale-90 origin-left -ml-1 mb-2">
                <Logo />
              </div>
              <p className="text-[13px] text-gray-200 leading-[1.8] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit error enim assumenda pariatur,
                delectus consequatur eos! Id, sed corrupti.
              </p>
              <p className="text-[13px] text-gray-200 leading-[1.8] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit error enim assumenda pariatur.
              </p>
            </div>
          </div>

          <div className="py-12 md:py-20 md:pl-12 lg:pl-16 flex flex-col justify-start relative z-10">
            <h4 className="text-[1.1rem] font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-[13.5px] text-gray-300 font-light">
              {['Home', 'About Us', 'Our Businesses', 'Sustainability & Impact', 'Media', 'Careers', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition flex items-center gap-2">
                      <span className="text-[10px] opacity-60">•</span> {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="py-12 md:py-20 md:pl-8 lg:pl-12 flex flex-col justify-start relative z-10">
            <h4 className="text-[1.1rem] font-bold mb-6 text-white tracking-wide">Our Sectors</h4>
            <ul className="space-y-4 text-[13.5px] text-gray-300 font-light">
              {['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-[10px] opacity-60">•</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="py-12 md:py-20 md:pl-4 lg:pl-8 flex flex-col justify-start relative z-10">
            <h4 className="text-[1.1rem] font-bold mb-6 text-white tracking-wide">Get In Touch</h4>
            <ul className="space-y-5 text-[13.5px] text-gray-300 font-light">
              <li className="flex items-start gap-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-4.5 h-4.5 mt-0.75 opacity-80 shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="leading-relaxed">Address</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-4.5 h-4.5 mt-0.75 opacity-80 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <span className="leading-relaxed">example@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-4.5 h-4.5 mt-0.75 opacity-80 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.893-1.438-5.219-3.764-6.657-6.657l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="leading-relaxed">+91 00000 00000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
