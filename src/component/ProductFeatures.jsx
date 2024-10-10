import React from 'react';
import FeatureCard from './FeatureCard';

const ProductFeatures = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ab9cdf2f782f21025241d93870c562526c344b526cd1c936536317eb44515aa?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886",
      title: "Blazing Speed: 24GB* (8GB + 16GB*) RAM + 128GB Storage",
      description: "Experience lightning-fast performance with 8GB RAM, expandable upto 24GB* using Memory Fusion."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4cc42292d16fbc150ba64051224288a064584428113a4f638ac3598ea0fb6ba6?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886",
      title: "Capture Brilliance: 50MP AI Dual Rear Camera",
      description: "Elevate your photography with an intelligent 50 MP AI dual camera to get stunning clarity in every frame."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3296a283a09921faf754baafe1eb47a3c495fba763914eeb9a67bb017c4f816?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886",
      title: "Gaming Powerhouse: Unisoc T606 Octa-Core Processor with iBoost Tech",
      description: "Level up your seamless gaming experience with the T606 Octa-Core processor and iBoost gaming technology."
    }
  ];

  return (
    <section className="flex flex-col px-20 py-20 w-full bg-black bg-opacity-40 rotate-[3.141592653589793rad] max-md:px-5 max-md:max-w-full text-blue-200
    "
    style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://s3-alpha-sig.figma.com/img/036c/9aff/440ab8e9daee6ac57c6f7069a0f9cab1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XpJ3K7WIVOwwys-a2a4O3trTSc0tnZm08smPqzikQWrGm2ISJ-cntpgS1xJwEaUCsKcIyRLTknqLsTNChIydwj4g50bdmi4qIirdSBdK~zSLxIoGNzcYz5Yr3P9qyth5JyPoEJo5OxqmhXrIJ3LzgJBQXbLhN9ZuUGOcDStDQ-Cg-BOXwgMVGXv8hcWqDmf01PUpV1q~2Ucriwp2J6ZmVyItuJdiXPhlIP7uMOxzpe90aKrTX66nYTL5qfcslLUpyBvOEkkXeywt3iTxBRr0pAFXiRybPy9VRdUkJQLthJAm25CELYCQM4lLMyfv6QPSh1ijidf8429tR9M6gCXpDQ__')`,
      }}>
      <div className="flex flex-wrap gap-5 items-start min-h-[174px] rotate-[3.141592653589793rad]">
        <h2 className="flex-1 shrink text-5xl font-medium tracking-tighter leading-[58px] min-h-[174px] min-w-[240px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Zap, Play, Win: All Possible with 24GB* (8GB + 16GB*) RAM
        </h2>
        <p className="text-base leading-7 text-white w-[675px] max-md:max-w-full">
          Introducing the all-new itel P55 – your ultimate power play! With a whopping 8GB RAM, expandable up to 24GB* using Memory Fusion and 128GB ROM, capture every moment in stunning detail with the 50MP AI dual camera. Stay charged up with 18W- Type C fast charging and a massive 5000 mAh battery. Immerse yourself in a visual feast with the beautiful 6.6" HD+ display boasting a smooth 90Hz refresh rate. Plus, the punch-hole display with a dynamic bar makes accessing notifications a breeze.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-start pt-2 mt-20 rounded-xl h-[285px] rotate-[3.141592653589793rad] max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;