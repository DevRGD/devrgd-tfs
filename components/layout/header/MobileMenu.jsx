import Link from 'next/link';

export default function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <>
      <div className="sm:hidden z-10 text-white mt-[0.2rem]">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          ) : (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          )}
        </button>
      </div>
      <div
        className={`sm:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-2xl z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-x-0 pointer-events-auto'
            : 'opacity-0 invisible translate-x-8 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-5 text-[15px] font-medium text-black">
            <Link href="/" className="font-bold underline">
              Home
            </Link>
            <Link href="/about/">About Us</Link>
            <button className="flex items-center justify-between w-full">Our Businesses</button>
            <Link href="/sustainability/">Sustainability &amp; Impact</Link>
            <Link href="/media/">Media</Link>
            <Link href="/grobal-presence/">Global Presence</Link>
            <Link href="/careers/">Careers</Link>
          </nav>
          <Link
            href="/contact/"
            className="border border-black text-black px-6 py-3 text-center font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
