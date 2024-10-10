import React from 'react';
import { Zap } from 'lucide-react';

const ScrollingBanner = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center py-1 w-full text-xl font-extrabold tracking-widest leading-tight text-blue-100 uppercase bg-slate-900 max-md:max-w-full">
      <div className="flex flex-col justify-center py-2.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-2.5 items-center max-md:max-w-full">
          {['intensively powerful', 'Power Series','intensively powerful','Power Series'].map((text, index) => (
            <React.Fragment key={index}>
              <div className="self-stretch my-auto">{text}</div>
              <div className='rounded-full bg-blue-400 w-6 h-6 flex justify-center items-center'>
            <Zap size={20} fill='white' />
          </div>
            </React.Fragment>
          ))}
          <div className="self-stretch my-auto ">intensively powerful</div>
          <div className='rounded-full bg-blue-400 w-6 h-6 flex justify-center items-center'>
            <Zap size={16} fill='white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;