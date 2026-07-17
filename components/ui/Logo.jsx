import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 md:w-9 md:h-9 text-white transition-transform duration-300 group-hover:scale-105"
      >
        <polygon points="12,1.5 20.5,5.25 12,9 3.5,5.25" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <polygon
          points="1.5,9.75 9,13.5 9,22.5 1.5,18.75"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <polygon
          points="22.5,9.75 15,13.5 15,22.5 22.5,18.75"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[22px] md:text-[25px] font-extrabold tracking-wide text-white leading-none mt-1">
        TANDHAN
      </span>
    </Link>
  );
}
