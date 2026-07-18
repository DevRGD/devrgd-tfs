import Image from 'next/image';

export default function CountryCard({ name, image, priority = false, textPos = 'right' }) {
  return (
    <div className={`country-card relative overflow-hidden cursor-pointer w-[150px] md:w-[200px] shrink-0 aspect-[3/2]`}>
      <Image
        alt={name}
        src={image}
        fill
        sizes="280px"
        className="object-cover scale-[1.15]"
        priority={priority}
      />
      <div 
        className={`absolute bottom-0 w-full px-3 py-1.5 md:px-4 md:py-2 flex ${
          textPos === 'left' 
            ? 'justify-start bg-linear-to-r' 
            : 'justify-end bg-linear-to-l'
        } from-black/90 via-black/40 to-transparent`}
      >
        <h3 className={`country-card-text text-white text-sm md:text-base font-semibold tracking-wider uppercase`}>
          {name}
        </h3>
      </div>
    </div>
  );
}
