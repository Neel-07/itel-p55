import React from 'react';
import ProductCategory from './ProductCategory';

const OtherProducts = () => {
  const categories = [
    {
      title: "Smart Gadgets and Wearables, Exquisite Design and Power",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1303a410a7da5e312cebd7859ece400ac18a3ff2f0efb19cfa3bb60ef7c0006a?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886",
      size: "large"
    },
    {
      title: "Smart TV, Non-Stop Entertainment",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1df41753255caaf25c823d2253d38cecf3e2c6465aa9959d1538dc237fbd0390?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886",
      size: "small"
    },
    {
      title: "Feature Phones- Stay Connected All Day Long",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1df41753255caaf25c823d2253d38cecf3e2c6465aa9959d1538dc237fbd0390?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886",
      size: "small"
    }
  ];

  return (
    <section className="flex flex-col items-center pt-10 pb-20 mt-32 w-full min-h-[461px] max-md:mt-10 max-md:max-w-full ">
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className="text-4xl font-medium tracking-tighter leading-tight text-white max-md:max-w-full">
          Check out our other Products
        </h2>
        <div className="flex flex-wrap gap-5 items-start self-center mt-9 w-full rounded-[32px]">
          {categories.map((category, index) => (
            <ProductCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;