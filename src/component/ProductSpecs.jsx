import React from 'react';

const ProductSpecs = () => {
  return (
    <section className="overflow-hidden w-full rotate-90deg max-md:pl-5 max-md:max-w-full text-black"
    style={{
        backgroundImage:`linear-gradient(335.37deg, #00264E 0%, #001F40 100%);`
    }}
    >
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-between self-stretch my-auto text-2xl font-medium tracking-wide leading-7 text-white uppercase min-h-[552px] max-md:mt-10">
            <div className="flex min-h-[232px]" />
            <div className="flex flex-col justify-center mt-40 max-w-full rotate-[3.141592653589793rad] w-[404px] max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c9aeefe52cf9a6e7591f7b2107427cd7d4aee973aefb36538a6a0bb97479a77?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain aspect-[0.71] w-[27px]" />
              <div className="mt-3">
                8GB RAM, expandable upto 24GB* using Memory Fusion | 128GB Memory Storage
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3766e8da5aab4ec8e85cd4698bec3d478915d0b8be8dc5835ad2719d9e6666f6?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Product specifications" className="object-contain grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;