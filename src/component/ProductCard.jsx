import React from 'react';

const ProductCard = ({ name, price, originalPrice }) => {
  return (
    <div className="flex overflow-hidden flex-col px-8 pt-32 pb-11 rounded-2xl bg-neutral-800 min-w-[240px] w-[304px] max-md:px-5 max-md:pt-24">
      <div className="flex shrink-0 ml-3.5 bg-stone-200 bg-opacity-0 h-[124px] rounded-[95px] w-[124px] max-md:ml-2.5" />
      <div className="flex flex-col mt-12 max-md:mt-10">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center self-center whitespace-nowrap">
            <h3 className="text-2xl font-medium tracking-tight leading-tight text-zinc-100">{name}</h3>
            <div className="flex gap-2 items-center mt-3">
              <div className="self-stretch my-auto text-base font-bold tracking-normal leading-tight text-right text-white">
                {price}
              </div>
              {originalPrice && (
                <div className="self-stretch my-auto text-xs tracking-wide leading-relaxed text-neutral-400">
                  {originalPrice}
                </div>
              )}
            </div>
          </div>
          <button className="flex gap-3 justify-center items-center mt-6 w-full text-base font-bold tracking-normal leading-tight text-center uppercase text-stone-100">
            <div className="flex overflow-hidden gap-2 items-center self-stretch my-auto">
              <span className="self-stretch my-auto">Buy Now</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/472ff5c2402edb6b05d0a198fe3fb3bfd286264d3ac4be5c575328d0f1a84f57?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;