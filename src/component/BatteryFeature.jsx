import React from 'react';

const BatteryFeature = () => {
  return (
    <section className="flex overflow-hidden flex-col w-full max-md:max-w-full"
    style={{
        backgroundImage:`linear-gradient(335.37deg, #00264E 0%, #001F40 100%);`
    }}>
      <div className="flex flex-col justify-center items-start px-20 py-24 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-between max-w-full min-h-[530px] w-[582px]">
          <div className="flex flex-col max-w-full w-[353px]">
            <h2 className="text-5xl font-medium tracking-tighter bg-clip-text bg-[linear-gradient(101deg,#D5EEF9_-22.94%,#70A2E1_77.36%)] leading-[58px] max-md:text-4xl max-md:leading-[54px]">
              Charge Up Full in 170mins
            </h2>
            <p className="mt-6 w-full text-xl tracking-normal leading-8 text-white">
              41 Days Standby Time, 60 Hours Talk time, 24 Hours Video Time
            </p>
          </div>
          <div className="flex flex-col mt-44 w-full max-w-[582px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-7 items-center self-start max-md:max-w-full">
              <div className="flex flex-col justify-center self-stretch my-auto w-[202px]">
                <div className="text-4xl font-medium tracking-tighter leading-tight text-white">
                  5000mAh
                </div>
                <div className="mt-2 text-base leading-relaxed text-white">
                  High-Endurance Battery
                </div>
              </div>
              <div className="shrink-0 self-stretch w-0 bg-white border border-white border-solid h-[81px]" />
              <div className="flex flex-col justify-center self-stretch my-auto w-[175px]">
                <div className="text-4xl font-medium tracking-tighter leading-tight text-white max-md:max-w-full">
                  18 W
                </div>
                <div className="mt-2 text-base leading-relaxed text-white">
                  Type-C Fast Charging
                </div>
              </div>
            </div>
            <p className="mt-9 text-base leading-relaxed text-white max-md:max-w-full">
              Battery Lab: Power Boost | Ultra Power Saving | Battery Optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatteryFeature;