import React from 'react';

const SupportCard = ({ image, title, link }) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[322px]">
      <img loading="lazy" src={image} alt={title} className="object-contain max-w-full aspect-[1.11] w-[322px]" />
      <div className="flex flex-col items-center mt-6 w-full max-w-[321px]">
        <h3 className="text-2xl tracking-tight leading-8 text-stone-100">{title}</h3>
        <a href={link} className="flex gap-0.5 items-center mt-2 text-base tracking-tight leading-tight text-white">
          <span className="self-stretch my-auto">Read more</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b70f6c7bd5eddb133ed5759bc9ede15c869dfeadfdf1910ef6d93cda5570078?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </a>
      </div>
    </div>
  );
};

export default SupportCard;