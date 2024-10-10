import React from 'react';

const GamingFeature = () => {
  return (
    <section className="flex overflow-hidden flex-col w-full rotate-[1.387778863499512e-17rad] max-md:max-w-full">
      <div className="flex flex-col px-20 pt-36 pb-60 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col self-start max-md:max-w-full">
          <p className="text-base leading-6 text-white">
            Discover unparalleled performance with cutting-edge display and processing power. Dominate every battle with lightning-fast responsiveness.
          </p>
          <h2 className="mt-5 text-5xl font-medium tracking-tighter leading-[58px] text-slate-200 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Gaming Revolution: Unleash Supercharged Gameplay
          </h2>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/19616039e6d37c5a9715eb3c4998082bcad522125eb7ad2918df7e26748e82fa?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain self-center mt-6 mb-0 ml-32 aspect-[0.89] w-[42px] max-md:mb-2.5" />
      </div>
    </section>
  );
};

export default GamingFeature;