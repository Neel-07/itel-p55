import React from 'react';

const SearchBar = () => {
  return (
    <form className="flex  gap-2 items-center self-stretch px-5 py-3 my-auto text-base leading-relaxed bg-white bg-opacity-10 min-h-[50px] min-w-[240px] text-white text-opacity-50 w-[712px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57466d50c6ca8059f6f67e138b3b59d2da32068fe7b77b3a5aaabea53541346d?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <label htmlFor="searchInput" className="sr-only">What are you looking for...</label>
      <input
        type="text"
        id="searchInput"
        placeholder="What are you looking for..."
        className="bg-transparent border-none text-white text-opacity-50 w-full"
        aria-label="Search input"
      />
    </form>
  );
};

export default SearchBar;