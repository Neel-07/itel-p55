import React, { useState } from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('calls & contacts');

  const categories = [
    'calls & contacts',
    'camera & picture',
    'Charging',
    'internet & network'
  ];

  const faqs = [
    { question: 'How to set music as a ringtone?', answer: '' },
    { question: 'Cannot make a call after activating data.', answer: 'IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe its not a phone issue.\nMake sure the SIM account has enough balance and the place has a good signal.\nCheck whether the phone is on 4G only mode, if yes, change to other modes.\nTry to reset factory settings, but remember to take data back up first.\nVisit the nearest customer service Centre for further check.' },
    { question: 'Cannot add new contacts to phone book or view phone book.', answer: '' },
    { question: 'Copy contacts to another phone.', answer: '' }
  ];

  return (
    <section className="flex flex-col items-center mt-32 max-w-full w-[1280px] max-md:mt-10">
      <h2 className="text-5xl font-medium tracking-tighter leading-tight text-center text-white max-md:max-w-full max-md:text-4xl">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="flex flex-col items-center mt-10 max-w-full w-[844px]">
        <div className="flex flex-wrap gap-5 items-start text-base font-bold tracking-normal leading-tight text-white uppercase max-md:max-w-full">
          {categories.map((category) => (
            <button
              key={category}
              className={`gap-2.5 self-stretch px-5 py-4 rounded-[50px] ${
                activeCategory === category ? 'bg-white text-stone-900' : 'border-2 border-solid border-zinc-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-col mt-10 w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <button className="flex gap-1 items-center mt-10 text-base font-medium tracking-tight leading-tight text-center text-white">
        <span className="self-stretch my-auto">Read More</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/48ecc04ccf38e6172a8a8b821f9bc46bd01d7f897f2e0ecae75ca087cd264b32?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
      </button>
    </section>
  );
};

export default FAQSection;