import React from 'react';

const ProductCategory = ({ title, image, size }) => {
  const isLarge = size === 'large';

  return (
    <div className={`flex overflow-hidden flex-col grow shrink rounded-2xl bg-neutral-800 min-w-[240px] ${isLarge ? 'w-[569px]' : 'w-[243px]'} max-md:max-w-full`}>
      <div className={`flex relative flex-col items-start px-8 pt-6 pb-28 w-full ${isLarge ? 'min-h-[258px]' : 'aspect-[1.178]'} max-md:px-5 max-md:pb-24 max-md:max-w-full`}>
        <img loading="lazy" src={image} alt={title} className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col mb-0 max-w-full w-[258px] max-md:mb-2.5">
          <h3 className="text-2xl font-medium tracking-tight leading-8 text-white">
            {title}
          </h3>
          <a href="#" className="flex overflow-hidden gap-2 items-center self-start mt-3 text-base font-bold tracking-normal leading-tight text-center uppercase text-stone-100">
            <span className="self-stretch my-auto">Read more</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/472ff5c2402edb6b05d0a198fe3fb3bfd286264d3ac4be5c575328d0f1a84f57?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;