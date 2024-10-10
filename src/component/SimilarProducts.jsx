import React from 'react';
import ProductCard from './ProductCard';

const SimilarProducts = () => {
  const products = [
    { name: 'S24', price: '₹10,999', originalPrice: null },
    { name: 'P55+', price: '₹9,499', originalPrice: '₹13,999.00' },
    { name: 'S23', price: '₹8,199', originalPrice: '₹12,999.00' },
    { name: 'A70', price: '₹6,299', originalPrice: '₹7,299.00' }
  ];

  return (
    <section className="flex flex-col justify-center items-center py-10 mt-32 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className="text-4xl font-medium tracking-tighter leading-tight text-white max-md:max-w-full">
          Similar Products
        </h2>
        <div className="flex flex-wrap gap-5 items-start self-center mt-9 max-md:max-w-full">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;