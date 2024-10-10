import React from 'react';

const ProcessorFeature = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-32 w-full bg-[linear-gradient(101deg,#D5EEF9_-22.94%,#70A2E1_77.36%)] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-screen-xl max-md:max-w-full">
        <div className="z-10 max-md:pl-5 max-md:-mr-0.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                <h2 className="text-4xl font-medium tracking-tighter leading-10 text-slate-200">
                  Superfast Unisoc T606 Octacore Processor
                </h2>
                <p className="mt-2.5 text-base leading-6 text-white">
                  Experience unparalleled real-time performance and lightning-fast gaming with the Unisoc T606 octa-core processor
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c33003a9273d71a274d75430e5667f833d6c285ce9d0991e747c8b0b6368d249?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Processor diagram" className="object-contain grow w-full aspect-[1.66] fill-slate-900 stroke-[2px] stroke-rose-600 max-md:mt-3.5 max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessorFeature;