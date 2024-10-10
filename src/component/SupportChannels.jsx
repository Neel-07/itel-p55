import React from 'react';
import SupportCard from './SupportCard';

const SupportChannels = () => {
  const supportItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b5b2aac6689117a6e1f17b8c7cddfb38a3a4c651211ac1f46dd36b5cc511b7f?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886",
      title: "100 Days Promise",
      link: "#"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e577fdbbb55c5ecdfc84487611e44e16fb20578f5565f00fa067919e97ae0d8?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886",
      title: "Screen Replacement",
      link: "#"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/585778390a962a40e441a8155cd42fb540fe7908df7f6b5dc4dafda189bcefd1?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886",
      title: "Service Centre",
      link: "#"
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center py-16 mt-32 w-full font-medium text-center max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className="text-4xl tracking-tighter leading-tight text-white max-md:max-w-full">
          Support Channels
        </h2>
        <div className="flex flex-wrap gap-10 justify-between items-start self-center mt-9 max-w-full w-[1064px]">
          {supportItems.map((item, index) => (
            <SupportCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;