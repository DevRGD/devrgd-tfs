export default function HeroHeading({ words }) {
  return (
    <div className="hero-text-container container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 mb-4 md:mb-8">
      <div className="max-w-3xl">
        <div className="hero-heading-wrapper inline-block">
          <h1 className="hero-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight opacity-0">
            Global Presence
          </h1>
        </div>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
          {words.map((word, index) => (
            <span key={index} className="hero-word-wrapper inline-block mr-1">
              <span className="hero-word inline-block opacity-0">{word}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
