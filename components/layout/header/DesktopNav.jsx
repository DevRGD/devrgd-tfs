import Link from 'next/link';
import MegaMenu from './MegaMenu';

export default function DesktopNav({ handleMegaMenuEnter, handleMegaMenuLeave, isMegaMenuOpen, activeSector, setActiveSector }) {
  return (
    <ul className="hidden sm:flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-[2.3rem] xl:gap-[2.7rem] 2xl:gap-12 list-none static text-[0.75rem] md:text-[0.85rem] lg:text-[1.1rem] 2xl:text-[1.15rem]">
      <li>
        <Link className="transition-colors duration-200 text-white font-bold underline underline-offset-8" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="transition-colors duration-200 text-white" href="/about/">
          About Us
        </Link>
      </li>
      <li className="group static" onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMegaMenuLeave}>
        <button className="transition-colors duration-200 text-white flex items-center">
          Our Businesses
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[1.6rem] lg:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.6rem] transition duration-300 group-hover:rotate-180 ml-[0.2rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z" /><path d="m7 10 5 5 5-5z" /></svg>
        </button>
        <MegaMenu
          isMegaMenuOpen={isMegaMenuOpen}
          activeSector={activeSector}
          setActiveSector={setActiveSector}
        />
      </li>
      <li>
        <Link className="transition-colors duration-200 text-white" href="/sustainability/">
          Sustainability &amp; Impact
        </Link>
      </li>
      <li>
        <Link className="transition-colors duration-200 text-white" href="/media/">
          Media
        </Link>
      </li>
      <li>
        <Link className="transition-colors duration-200 text-white" href="/grobal-presence/">
          Global Presence
        </Link>
      </li>
      <li>
        <Link className="transition-colors duration-200 text-white" href="/careers/">
          Careers
        </Link>
      </li>
    </ul>
  );
}
