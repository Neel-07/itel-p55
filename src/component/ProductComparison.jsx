import React from 'react';
import ComparisonCard from './ComparisonCard';

const ProductComparison = () => {
  const products = [
    {
      name: 'S23+',
      price: '₹12,999.00',
      camera: '50MP AI Dual Rear Camera',
      memory: 'Up to 32+4(2+2)GB*',
      dimensions: '16.4 x 7.5 x 0.8 cm',
      processor: 'Octa-core Processor',
      battery: '4000mAh'
    },
    {
      name: 'S24',
      price: '₹10,999.00',
      camera: '50MP AI Dual Rear Camera',
      memory: 'Up to 32+4(2+2)GB*',
      dimensions: '16.4 x 7.6 x 0.8 cm',
      processor: 'Octa-core Processor',
      battery: '4000mAh'
    },
    {
      name: 'A70',
      price: '₹6,799.00',
      camera: '50MP AI Dual Rear Camera',
      memory: 'Up to 32+4(2+2)GB*',
      dimensions: '16.4 x 7.6 x 0.9 cm',
      processor: 'Octa-core Processor',
      battery: '4000mAh'
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center py-16 mt-32 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1280px]">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full font-medium max-md:max-w-full">
          <h2 className="self-stretch my-auto text-4xl tracking-tighter leading-tight text-stone-100">Compare Models</h2>
          <a href="#" className="flex gap-2 items-center self-stretch my-auto text-sm leading-relaxed text-zinc-100">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9efe271bfa397a5d76a4d77316edd8e640e9d744c230866d5b347a633726b51c?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.04] w-[25px]" />
            <span className="self-stretch my-auto underline">Compare other models</span>
          </a>
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-9 w-full max-md:max-w-full">
          {products.map((product, index) => (
            <ComparisonCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;