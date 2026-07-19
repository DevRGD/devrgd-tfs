import Link from 'next/link';

const BulletIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Our Businesses', href: '/businesses/' },
  { label: 'Sustainability & Impact', href: '/sustainability-impact/' },
  { label: 'Media', href: '/media/' },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact Us', href: '/contact/' },
];

const sectors = [
  { label: 'Sector 1', href: '/' },
  { label: 'Sector 2', href: '/' },
  { label: 'Sector 3', href: '/' },
  { label: 'Sector 4', href: '/' },
];

export default function FooterLinks() {
  return (
    <>
      <div className="w-full lg:w-[32%] text-white mb-4 lg:mb-0">
        <span className="text-[1.3rem] sm:text-[1.4rem] lg:text-[1.15rem] xl:text-[1.35rem] 2xl:text-[1.5rem] font-semibold">
          Quick Links
        </span>
        <ul className="mt-[0.7rem] sm:mt-[0.8rem] lg:mt-4 xl:mt-[1.1rem] 2xl:mt-[1.2rem]">
          {quickLinks.map(({ label, href }) => (
            <li key={label} className="mt-2">
              <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href={href}>
                <BulletIcon /> {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-[32%] text-white mb-4 lg:mb-0">
        <span className="text-[1.3rem] sm:text-[1.4rem] lg:text-[1.15rem] xl:text-[1.35rem] 2xl:text-[1.5rem] font-semibold">
          Our Sectors
        </span>
        <ul className="mt-[0.7rem] sm:mt-[0.8rem] lg:mt-4 xl:mt-[1.1rem] 2xl:mt-[1.2rem]">
          {sectors.map(({ label, href }) => (
            <li key={label} className="mt-2">
              <Link className="flex items-center gap-[0.1rem] hover:text-[#e9e9e9] transition" href={href}>
                <BulletIcon /> {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
