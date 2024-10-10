import React from 'react';

const ProductInfo = () => {
  return (
    <section className="flex flex-col justify-center px-20 py-6 w-full text-base tracking-normal leading-tight bg-blue-300 min-h-[96px] text-neutral-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="flex gap-3 items-center self-stretch my-auto text-4xl font-medium tracking-tighter leading-tight whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/69dbeebc6c2d002454dad3b791823559149c05c17f55407101cb82467bed5ad4?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="P55 logo" className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[1.1] w-[53px]" />
          <div className="self-stretch my-auto">P55</div>
        </div>
        <nav className="flex gap-8 items-start self-stretch my-auto whitespace-nowrap">
          <a href="#overview" className="font-bold">Overview</a>
          <a href="#specifications">Specifications</a>
        </nav>
        <button className="flex gap-2 items-center self-stretch px-6 py-3 my-auto font-bold text-center text-white uppercase rounded-3xl border border-solid bg-neutral-900 border-neutral-600 max-md:px-5">
          <div className="flex overflow-hidden gap-2 items-center self-stretch my-auto">
            <div className="self-stretch my-auto">BUY NOW</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0a666d2965a2213345da062ede2d62cc50574d8b25bacfa8c2db75b180c661a?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default ProductInfo;