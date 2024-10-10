import React from 'react';

const SocialMediaSection = () => {
  const socialImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9db69ef4efda5ffd9c45470fa0bcf10a035c13300447b7f28a37a165e1714f44?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886", alt: "Social media post 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/36e4f42b4e1eb6bc71949c883707628c52a644c9ec33375a829514eccf03cbe3?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886", alt: "Social media post 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/32a79607df1479daf0cff5a0c81a5d7fa961b67a2b6ba5182bc1c560ce1fd231?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886", alt: "Social media post 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2593337d43bf81cc2e752d788a3368930da8b3bccb6caa2dc83e194a5ef42820?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886", alt: "Social media post 4" }
  ];

  return (
    <section className="flex overflow-hidden flex-col px-16 pt-14 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-6 items-start min-h-[408px]">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-h-[408px] min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap justify-between items-start w-full text-white max-md:max-w-full">
            <h2 className="flex-1 shrink text-4xl font-medium tracking-tighter leading-tight basis-12 max-md:max-w-full">
              Follow us and stay updated
            </h2>
            <a href="#" className="flex gap-2 items-center px-6 py-3 text-base font-bold tracking-normal leading-tight text-center uppercase rounded-3xl bg-zinc-900 min-w-[240px] max-md:px-5">
              <span className="flex overflow-hidden gap-2 items-center self-stretch my-auto min-w-[240px]">
                <span className="self-stretch my-auto">Follow us on Instagram</span>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8dbd416b3f7555a1ab99a42f11709da13c04fe0cb0818ff6411e36d4d528b4c?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              </span>
            </a>
          </div>
          <div className="flex flex-wrap gap-5 items-start mt-8 w-full max-md:max-w-full">
            {socialImages.map((image, index) => (
              <div key={index} className="flex flex-col grow shrink items-end px-16 pt-60 pb-8 min-w-[240px] w-[244px] max-md:pt-24 max-md:pl-5">
                <img loading="lazy" src={image.src} alt={image.alt} className="object-contain w-8 aspect-square" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;