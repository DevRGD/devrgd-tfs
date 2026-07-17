import Image from 'next/image';

export default function CountryCard({ name, image, flag }) {
  return (
    <div className="relative group overflow-hidden cursor-pointer aspect-4/3 md:aspect-video border border-gray-800">
      <Image
        alt={name}
        src={image}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-4 flex items-center space-x-2">
        {flag && (
          <div className="relative w-6 h-4">
            <Image alt={`${name} Flag`} src={flag} fill sizes="24px" className="object-cover rounded-sm" />
          </div>
        )}
        <h3 className="text-white text-sm md:text-base font-semibold tracking-wide">{name}</h3>
      </div>
    </div>
  );
}
