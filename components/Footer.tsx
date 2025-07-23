import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10 px-4 sm:px-8 lg:px-16 overflow-hidden">
  {/* Background Grid */}
  <div className="w-full absolute left-0 -bottom-72 min-h-96">
    <img
      src="/footer-grid.svg"
      alt="grid"
      className="w-full h-190 object-cover opacity-50"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col items-center text-center">
    <h1 className="heading lg:max-w-[45vw]">
      Ready to take <span className="text-purple">your</span> digital presence to the next level?
    </h1>
    <p className="text-white-200 md:mt-10 mt-5 text-sm md:text-base max-w-xl">
      Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
    </p>
  </div>

  {/* Bottom Bar */}
  <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-4">
    <p className="text-sm md:text-base font-light text-white text-center md:text-left">
      © 2025 Oussama SAIDI. All rights reserved.
    </p>

    <div className="flex items-center gap-4">
      {socialMedia.map((info) => (
        <a
          key={info.id}
          href={info.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center items-center backdrop-blur-md bg-black-200 bg-opacity-70 border border-black-300 rounded-lg hover:scale-105 transition-transform"
        >
          <img src={info.img} alt="icon" width={20} height={20} />
        </a>
      ))}
    </div>
  </div>
</footer>

  );
};

export default Footer;