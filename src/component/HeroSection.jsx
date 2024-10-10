import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="flex justify-between items-center  w-full bg-cover bg-center bg-gradient-to-r from-blue-900 to-black text-white max-md:px-5 max-md:py-24"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://s3-alpha-sig.figma.com/img/036c/9aff/440ab8e9daee6ac57c6f7069a0f9cab1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XpJ3K7WIVOwwys-a2a4O3trTSc0tnZm08smPqzikQWrGm2ISJ-cntpgS1xJwEaUCsKcIyRLTknqLsTNChIydwj4g50bdmi4qIirdSBdK~zSLxIoGNzcYz5Yr3P9qyth5JyPoEJo5OxqmhXrIJ3LzgJBQXbLhN9ZuUGOcDStDQ-Cg-BOXwgMVGXv8hcWqDmf01PUpV1q~2Ucriwp2J6ZmVyItuJdiXPhlIP7uMOxzpe90aKrTX66nYTL5qfcslLUpyBvOEkkXeywt3iTxBRr0pAFXiRybPy9VRdUkJQLthJAm25CELYCQM4lLMyfv6QPSh1ijidf8429tR9M6gCXpDQ__')`,
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center w-[50%] px-20 ">
        {/* Power Series Badge */}
        <div className="flex items-center mb-4">
          <div className="flex items-center gap-2 px-2 py-1 rounded-full border border-blue-100">
            <span className="text-xs uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-500 font-extrabold">Power series</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/885ff7b1d4ae630de7c37e15dfea101dd19f7fe36b9769517a0cfecc778953a9?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886"
              alt="Power Series Icon"
              className="w-4 h-4"
            />
          </div>
        </div>

        {/* Model Name and Specs */}
        <h1 className="text-8xl font-[540] font-mono mb-4  text-blue-200">P55</h1>
        <p className="text-lg font-semibold mb-8 w-[80%]">
          24GB* (8GB + 16GB*) RAM + 128GB ROM | 50MP AI Dual Rear Camera | T606 Octacore Processor
        </p>

        {/* Price and Buy Button */}
        <div className="flex flex-col">
          <p className="text-2xl mb-4">
            Starting from <span className="font-bold">₹6,999/-</span>
          </p>
          <button className="flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 w-[160px]">
            <span className="mr-2">BUY NOW</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2d2225652f5d319f4de67a45196f56cee63697b39453cc8a1e4182d0e20957a?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886"
              alt="Arrow Icon"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="hidden md:block mr-32 z-40">
        <img
          loading="lazy"
          src="https://s3-alpha-sig.figma.com/img/bcd4/9c81/94884c56d8ed2562105a89ada7aa30ee?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FphM8vMhG06bS4qiNzuxb2xO4tML4LBCgwbSxGnKCLyqYDx215D7rz~4e1DHoHjuItWQRBia~WhPdoK8vdED5xUyd9X7xReEKjjrGm0XTxdvNpdhPuDvVblFrUQkC7y67s7TYCxpCjzUcLSrXd4FpuwJH1CMJKrwCc~ia7AC9og1su3aAAR0MzcoVI2CrIwSO8LIr5c-02TJyMKp9rR7pDOvI71u8fw1Xe5V5k5jjbARK52B-AfJQmdY3TGc1MLdRih8G4EAgzbUGGiFNBGorAzBRyhtpXpH5cdII08K1Rq68w5ijXQfz-ovHTOUdz1sfbql6niVTRyR9hxJ3effKA__"
          alt="Person holding phone"
          className="object-cover w-[400px] "
        />
        {/* <div className="absolute left-[79.31%]  top-[37.16%] bottom-[30.09%] flex justify-center items-center font-handjet font-medium text-[218.632px] leading-[120%] tracking-[0.04em] rotate-90 z-20">
            P55
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
