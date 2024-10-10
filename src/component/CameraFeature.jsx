import React from 'react';

const CameraFeature = () => {
  return (
    <section className="flex flex-col justify-center px-20 py-32 w-full bg-neutral-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1282px] max-md:max-w-full">
        <div className="max-md:mr-0.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col px-9 pt-10 pb-96 w-full font-medium rounded-2xl max-md:pb-24 max-md:pl-5 max-md:mt-5 max-md:max-w-full">
                <div className="flex flex-col max-w-full text-4xl tracking-tighter leading-10 w-[409px]">
                  <h2 className="flex flex-col w-full">
                    <span className="flex max-w-full min-h-[16px] w-[103px]"></span>
                    <span className="mt-1 bg-clip-text bg-[linear-gradient(101deg,#D5EEF9_-22.94%,#70A2E1_77.36%)]">
                      Pixel Prodigy: 50MP AI Dual Rear Camera & 8MP Front Camera
                    </span>
                  </h2>
                </div>
                <div className="flex justify-between items-start mt-9 text-2xl tracking-wide leading-7 text-white uppercase whitespace-nowrap">
                  <div className="flex flex-col flex-1 shrink justify-center basis-0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bab8216e4131c279d74ff77a8d1c81840fa47e39d687b1def2d3aaafa0eeb03?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain aspect-square w-[34px]" />
                    <div className="mt-3">
                      AI <br /> Powered
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 shrink justify-center basis-0">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c41d381b871b3183f6db1a38cfe6b431f125386d1dd648e71eec30ff1305af8?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain aspect-square w-[34px]" />
                    <div className="mt-3">
                      Multiple <br /> modes
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                <div className="flex overflow-hidden flex-col rounded-2xl max-md:max-w-full">
                  <div className="flex flex-col pb-10 pl-8 w-full rounded-2xl max-md:pl-5 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col self-stretch my-auto text-4xl font-medium tracking-tighter leading-10 whitespace-nowrap max-md:mt-10">
                            <h3 className="flex flex-col max-w-full w-[181px]">
                              <span className="flex max-w-full min-h-[16px] w-[103px]"></span>
                              <span className="mt-1 bg-clip-text bg-[linear-gradient(101deg,#D5EEF9_-22.94%,#70A2E1_77.36%)]">
                                Supreme <br /> Battery
                              </span>
                            </h3>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/029095b0462882f00f76da3de4fb99d4bc5e72913fbd5c4bfc56ab0cfb03d512?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Battery illustration" className="object-contain grow w-full rounded-none aspect-[1.83] max-md:mt-10" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-20 max-w-full text-2xl tracking-wide leading-7 text-white w-[303px] max-md:mt-10">
                      <p className="opacity-90">
                        <span className="font-bold">5000 mAh</span> Battery Lab with <span className="font-bold">18W</span>{" "}
                        Type-C Fast Charging
                      </p>
                    </div>
                  </div>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b89199c08b44b29f90fe1bb8e07458bed12425040225c7de1e7ca73ed210596?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Camera features" className="object-contain mt-5 w-full rounded-2xl aspect-[1.97] max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraFeature;