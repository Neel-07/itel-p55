import React from 'react';
import SearchBar from './SearchBar';
import CustomerCare from './CustomerCare';
import NearbyStores from './NearbyStores';

const Header = () => {
  return (
    <header className="flex flex-col items-center w-screen">
      <div className="flex relative flex-col w-full max-md:max-w-full">
        <div className="flex overflow-hidden z-0 flex-col pt-4 w-full bg-stone-900 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center self-center w-full max-w-[1281px] max-md:max-w-full">
            <div className="flex gap-1.5 items-center self-stretch my-auto min-h-[47px] w-[71px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/43d5d2c87e566715ffb537a198690e301afecad22c2cabdef15316955d96ce5f?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Company logo" className="object-contain self-stretch my-auto aspect-[1.51] w-[71px]" />
            </div>
            <SearchBar />
            <div className="flex gap-10 items-center self-stretch my-auto leading-relaxed text-white min-w-[240px]">
              <CustomerCare />
              <NearbyStores />
            </div>
          </div>
          <div className="flex mt-4 w-full min-h-0 bg-sky-800 max-md:max-w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;