import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col self-stretch min-w-[240px] w-[337px]">
      <img loading="lazy" src={icon} alt="" className="object-contain w-14 aspect-square" />
      <div className="flex flex-col flex-1 mt-3 max-w-full w-[344px]">
        <h3 className="text-2xl font-medium tracking-tight leading-8 bg-clip-text bg-[linear-gradient(101deg,#D5EEF9_-22.94%,#70A2E1_77.36%)]">
          {title}
        </h3>
        <p className="mt-4 text-base leading-7 text-white opacity-70">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;