import Image from 'next/image';
import CountryCard from '../ui/CountryCard';

export default function HeroSection() {
  const topRow = [
    {
      name: 'India',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAthkxotFO2WhgT9oXnXdQkYkIFPKY2nOZ581v4AfSbPBJUVH3YbqmqXRKJW-zXcGV3zGbTgKhCG9qXd3zGfcyZ3w3hiWvE8xx012UxlU32Y4eT5k7benQuYBf7Cd_UpLtYUXZpUd1I4m5Zlx7TRZT-3gigvwJrcSs_zm0vAhi9NYdx8-2SkxcfwMqMlQpDbU8SjPukrUoKRQDeRKPyXcSDNxqVovnw6zzi7sUwgsgEOjs2xFI6TLVLv08a4p7XXmFbD4ffE_0BKLY',
    },
    {
      name: 'Dubai',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuACKyAxEEsShwklfg9YLyG0lRKe8UciXPPmEWfvj4E3EDpPXb6K-1ZHufmyUmjEtQzM7ETKs8n0KW_SXUACjGWPROBaBS6HlGPvsaKzEkjhlUluil8FVxQvvmjxWl5Vs5yhz5k5KiZPBlriX9YELYNmsVodvVlXN_wzthjrjpoUbZUNSllbg0TlSN_C4hjumYjI12BLArXC2no9QP_PE3DhdiAz1Ms22xpsT_HoRQo54KDPQmr0OPfUX7Z-YhDYMoobTEuyWvccscU',
    },
    {
      name: 'South Africa',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBm--DO-foynwKydGwnjr3ipLkBqYXsUEFxHTHNddqtc5vOoFX5X-yLSH368WHddqav6278_hSzq4PIaI_3lR4NSGx_-pCnO28XJGSICGuQZs4PuhXV1iQJ9AdCRwaosuMJOO7KeqtOxv8tLlaTV8GroAvnYwme6syZl3M_NGWA5ZhpbptuJAJe2N3DEoAN2sR6VULyy8WtX4SUMxTFZX9RL0LMC8-oQPucYVeVs_iNUgwCyMztxyGDE8IdLnzbiM9tLjoiW_YDOLY',
    },
    {
      name: 'Germany',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBzvtuVvFmkpVFc-_MjVzz1tfOmNYE6SlTA1FGqsjhx6OTJue8irkDdhjHPHyf0dzsKifdZsMIMnseEWtNQit79pOLd9gS-uF3LzUEee-xNsVZtmRxJaUtUEyHbnj8Ne1e1Kg2_vjpAXcSnRv4C55QroAe2hh4sK3eK1s6t4iEviyL7XwQZElL7fqlSu4UCMXCl_2x79fE8IvIkT42y4a5UTHsnjSvyr4sD7IrFY6t4ZMp6EoAr4z0gHlLg1ECAU9CAw-vT6OOjjq4',
    },
  ];

  const bottomRow = [
    {
      name: 'Brazil',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDzEk3OwoI9UeP6shResDwxYtdcMGmt_OpsvlJfyGrr5roIlxNSCVGTO0gIzzri0YRlXBOO0ZriylMmDME1xGBQRQ4KuJWji1c0frg61DxshynkqTvioBtN9dbgD5Agmzq-kqX_5SMJrg1Rci9mHR3knNuQFTEL0uLi276v02rk6BJyyia6WbHmKocmRcP7QA9xhOoz34XIqC3NCYEIuzSE6OJxQlsThB9pKkmkzF0vsMSf9LyAoVH86oj990bSlnv6r3neWf8WJpg',
      flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD92xp8zzFgJMfY3cgZttkl6akQwyNreXGoEWeF_9XzNZZDaPCltUKJTSTG7sYywMFdjPhWQNzvR_NCRxEaXuSFO0gmWHFXGMkNo21zSalVzhXCRHrXNOUhqUCPIP3i_orv060ydLj8bm5n7DZh7v_kiw9FgF33izww24NLs3dqKSD8eRz1-xlL2k02tlD1atS_LHrdA7JbvOOYDbqsndrr-J96yVqc90iAkBeyvUXdZvXDlUL-zHbvvTilOhwCr6v99EoQDUYXawA',
    },
    {
      name: 'zambia',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBFsO9685WrtUq_-oX6dj-qDe6xExU1ipS4tJN0uGnXvgVfWnTvCJKvwm4KD7tr0Gm-NjP30bwiEkNyS8OITRdSvIA5PC6xqovrD8atHRssvc82x2aDGndDBoa84_7HrhZ8jtNEf43KNhm66JK4QsxYFkvbVOfMVFkmVEZJZVx3XR8Gqd5wbwjV6Y9a7KghzP8ahg_VeUZAs-n5v_nLCX0Xbe4oQ9Gb93UvpVtn4t71GQjszrbClvl6sfuNl4v2sBMDhxE4sMHhMN4',
    },
    {
      name: 'Canada',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBsw_ubTbBsoi3wXyb5EGwC0Ouu-mcudPydZt_CaiqIr8naddAJvA_YlXVdMCcOeisBdtfCkfV8ScbZPPfcZroudN46eBV5M_lGwZDSl84ta6tbKn-l-GYIJU1THTKclDT1KdM6kr_vZPtXIJoleMtHXBF33LJbA4Jito2pkxPjX-LpIfkz3doa0qiYvltyl-FwVGt2QVol78BGtL7IEVGa5Pep35kKx7u6Sbczbwqx18mv2NAJVxg2sl9o-Pq8-_CiX77vaAFByHA',
    },
    {
      name: 'Ivory Coast',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD8UWFoqm_raG8xZJPksxqLGn7VfWjpOAax3980RAuGDjjj9H8r4i6sPA92wPCTAjH9CeQsywIoeOTsH8mJK3xV52Io0I-MP6-vH9HXzzrCho671wwcI9s2SBTJ1p69GFLm678_oq8Z4IO74a8B9jMBIZxYazDF-ghW3kBtw1JUJVZ6S538LP1ITFO02fJkJ5x0aL3gFEkXFvlZLDmCxZLA8mLTJm0UEhhqzmnAspdtSgh-sCb_Dep33xOL7VrTB0ia1SwxEDLrwLU',
    },
  ];

  return (
    <section className="relative bg-black text-white py-16 md:py-24 min-h-[80vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Industrial Background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXCJgahloKfEDnyQLR3-TWELrnDmGHzlHBbByF5Xl92lfDIkHXkXqtjSPCsIG64FOsI8OFP67z3PV69ohtb6gm2yUTZrJqenLeLSVPSK0Pbx92dIZgGQQkR_HAWSg_JfrW0c7g-bDDK4VyqVz-nr8MBQnIDzCTQdsAYpXKcve54PdcWF6YN3P2JkaItzBLfN9CW_oFVFduohIlifC06ETLQjF-xapi7haxdL5zrV7lw6KwOAv44hq-JRmFK8j66XAlU-dYlH2yUs"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4">
          {topRow.map((c, i) => (
            <CountryCard key={i} {...c} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full md:w-[85%] mx-auto mb-8">
          {bottomRow.map((c, i) => (
            <CountryCard key={i} {...c} />
          ))}
        </div>

        <div className="mt-24 md:mt-32 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Global Presence</h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
