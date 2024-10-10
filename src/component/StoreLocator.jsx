import React from 'react';

const StoreLocator = () => {
  return (
    <section className="flex overflow-hidden flex-col px-5 mt-32 max-w-full text-base text-white rounded-2xl bg-neutral-800 w-[1280px] max-md:mt-10">
      <div className="flex relative flex-col items-start px-6 pt-11 pb-24 min-h-[260px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a60153d8e0fc6a09c6134b59be1704def4fe7d6af84778ac1e1bd56ad444793?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Store locator background" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col max-md:max-w-full">
          <h2 className="text-4xl font-medium tracking-tighter leading-tight max-md:max-w-full">
            Find Your Nearest itel Store!
          </h2>
          <p className="mt-3 leading-relaxed max-md:max-w-full">
            We are here to help you find the right phone.
          </p>
          <a href="#" className="flex gap-1 items-center self-start mt-3 font-bold tracking-normal leading-tight uppercase rounded">
            <span className="self-stretch my-auto">See More</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a2959475fe9c4ec403228b98517817d026ff7c6260f2a9857a9ba426e7e9198?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;