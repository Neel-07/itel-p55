import React from 'react';

const ComparisonCard = ({ product }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink p-6 rounded-3xl basis-0 bg-white bg-opacity-10 min-w-[240px] max-md:px-5">
      <div className="flex flex-col w-full leading-tight whitespace-nowrap">
        <div className="flex max-w-full min-h-[360px] w-[360px]" />
        <div className="flex gap-10 justify-between items-center mt-4 w-full">
          <h3 className="self-stretch my-auto text-2xl font-medium tracking-tight text-white">{product.name}</h3>
          <div className="self-stretch my-auto text-xl font-bold tracking-wide text-rose-300">{product.price}</div>
        </div>
      </div>
      <div className="flex flex-col mt-7 w-full text-sm leading-relaxed">
        {Object.entries(product).slice(2).map(([key, value]) => (
          <div key={key} className="flex gap-10 justify-between items-center mt-5 w-full first:mt-0">
            <div className="self-stretch my-auto font-medium tracking-tight text-stone-100">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
            <div className="self-stretch my-auto tracking-normal text-zinc-300">{value}</div>
          </div>
        ))}
      </div>
      <button className="flex gap-3 justify-center items-start mt-7 w-full text-base font-bold tracking-normal leading-tight text-center text-white uppercase">
        <div className="flex flex-1 shrink gap-2 justify-center items-center px-6 py-3 w-full rounded-3xl basis-0 bg-zinc-900 min-w-[240px] max-md:px-5">
          <div className="flex overflow-hidden gap-2 items-center self-stretch my-auto">
            <span className="self-stretch my-auto">BUY NOW</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6ddc74bcaf6f7b0062374692235eefb1a8c0b3ee727dbde5fe4f5b98fb9f885?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ComparisonCard;