import FooterBrand from './footer/FooterBrand';
import FooterLinks from './footer/FooterLinks';
import FooterContact from './footer/FooterContact';
import FooterCopyright from './footer/FooterCopyright';

export default function Footer() {
  return (
    <footer className="bg-[#060709]">
      <div className="pr-0 lg:pr-[7%] flex justify-between flex-wrap">
        <FooterBrand />
        <div className="w-full lg:w-[60%] pt-6 sm:pt-8 lg:pt-12 xl:pt-14 2xl:pt-16 flex justify-between flex-wrap px-4 lg:px-0">
          <FooterLinks />
          <FooterContact />
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
