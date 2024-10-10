import React from 'react';

const ProductImage = () => {
  return (
    <section className="flex overflow-hidden flex-col pt-72 w-full max-md:pt-24 max-md:max-w-full bg-cover bg-center"
    style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/8763/06fd/e53d6292fa0c2b91da74920d8fbeb14d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMEwZVHNm7ftasgAMoUvfobX4rMr8LECb2XTGKNk6S~-Bl8Wl7crIfvD2ms0Heqqi3xqAUK0unXp5hqJxOtXDyy745UztbJVaO6fRbsk~RW3YIVtbVcu19VfkyxcpWBuWKgssuwEF9LC5SKCDFnjbjDSE633Xll3aHerxDau9jyBj6M8cBpwN4RfYa1DNyYx2zW-EP9qrmQM~W4Cfsi-89UHuWQcG5~kpMC1RjNvQW0Hfnk1mJFA9DGJo2OWNdw96Y2Kx2na8LoL5o34ETNmJisFS84gUQ-ZThj8dnJ6EaEOZJeQPdynhGhEhJDpr6RxCV5bdrcVq9uOhSHytUMXTg__')`,
      }}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3885e440d18a484998f532a93221fd54894de96810b5c33fd4e28501bd18942b?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Product" className="object-contain self-center max-w-full aspect-square w-[140px]" />
      <div className="flex mt-36 w-full min-h-[159px] max-md:mt-10 max-md:max-w-full" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/afc4ad9694f94ba388a5cc16257460de94e0d00faff05cb4048a62b536d94dfe?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Product details" className="object-contain w-full aspect-[25.64] max-md:max-w-full" />
    </section>
  );
};

export default ProductImage;