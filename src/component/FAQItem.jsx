import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <button
        className="flex flex-wrap gap-10 justify-between items-center px-1 py-6 w-full text-xl font-medium tracking-normal leading-tight text-white border-t border-b border-stone-500 max-md:max-w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="self-stretch my-auto w-[759px] max-md:max-w-full">{question}</span>
        <img
          loading="lazy"
          src={isOpen ? "https://cdn.builder.io/api/v1/image/assets/TEMP/27419f1aa15930082015c4658e65606cbf016514d7335194e6dbd064f59bf3a1?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" : "https://cdn.builder.io/api/v1/image/assets/TEMP/78fba01120209518f8d3833f2ca86737b57971039128d841c6a13676d117477c?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886"}
          alt={isOpen ? "Collapse" : "Expand"}
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
      </button>
      {isOpen && answer && (
        <div className="mt-4 text-base leading-7 text-zinc-300 max-md:max-w-full">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;