import CountryCard from '../../ui/CountryCard';

export default function HeroMarquees({ topRow, bottomRow }) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="marquee-top-wrapper w-full overflow-hidden">
        <div className="marquee-top flex gap-4 w-max">
          {[...topRow, ...topRow].map((c, i) => (
            <CountryCard key={`top-${i}`} {...c} preload={i < 5} />
          ))}
        </div>
      </div>
      <div className="marquee-bottom-wrapper w-full overflow-hidden">
        <div className="marquee-bottom flex gap-4 w-max">
          {[...bottomRow, ...bottomRow].map((c, i) => (
            <CountryCard key={`bottom-${i}`} {...c} textPos="left" />
          ))}
        </div>
      </div>
    </div>
  );
}
