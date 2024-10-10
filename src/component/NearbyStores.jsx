import React from 'react';

const NearbyStores = () => {
  return (
    <div className="flex gap-6 items-center self-stretch my-auto">
      <div className="flex gap-2 items-center self-stretch my-auto">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/308ebeb7134da212a90f6316c21dbd8f66df8b95112d5658c10bdae05b03f295?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <div className="flex flex-col justify-center self-stretch my-auto">
          <div className="text-xs tracking-wide">Nearby Stores</div>
          <div className="text-xs tracking-wide">Get Direction</div>
        </div>
      </div>
    </div>
  );
};

export default NearbyStores;