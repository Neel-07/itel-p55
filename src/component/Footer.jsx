import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col pt-16 w-full bg-neutral-900 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start px-20 pb-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[328px]">
          <div className="flex flex-col max-w-full w-[328px]">
            <div className="flex flex-col max-w-full w-[255px]">
              <div className="flex gap-1 items-center min-h-[38px] w-[58px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/48471e838c95f821894bd854892ccf426342228e1afd734c855565e844ca963c?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Company logo" className="object-contain self-stretch my-auto aspect-[1.53] w-[58px]" />
              </div>
              <div className="flex gap-10 items-center mt-5 w-full max-w-[255px]">
                <div className="flex gap-3 items-start self-stretch my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82da951698c544c48d5e1ba61c842b4ab6127665846125dfe6ca3ba4bec8931e?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Social media icon" className="object-contain shrink-0 aspect-square rounded-[37px] w-[38px]" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4ac49f915c4487b93e7cdbcf947cc5a6464e4dc3805edcc32c233e4179a7939?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Social media icon" className="object-contain shrink-0 aspect-square rounded-[37px] w-[38px]" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/391d9dc0b5f81209e3abdee0d1a24bb3d22e2259524ba8e03a3789bb07344df2?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Social media icon" className="object-contain shrink-0 aspect-square rounded-[37px] w-[38px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-8 w-full text-sm tracking-normal leading-relaxed text-white rounded-none">
              <h3 className="font-medium tracking-tight opacity-40">Subscribe</h3>
              <form className="flex overflow-hidden flex-col self-stretch mt-3.5 w-full rounded-lg border border-solid bg-white bg-opacity-0 border-white border-opacity-20">
                <div className="flex gap-5 justify-between px-3.5 py-3 bg-white bg-opacity-20">
                  <input type="email" placeholder="Enter your email address" className="bg-transparent border-none text-white" />
                  <button type="submit" aria-label="Subscribe">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54fb1f81d302c66c515453a4b36dcdb703be12030e6007a105f3d0327a82d8ad?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-start aspect-[0.96] w-[23px]" />
                  </button>
                </div>
              </form>
              <p className="mt-4 leading-6">Join our newsletter to stay up to date on features and releases</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-col w-40 leading-relaxed">
          <h3 className="text-sm font-medium tracking-tight text-white opacity-40">Products</h3>
          <ul className="flex flex-col self-start mt-5 text-xs tracking-wide text-white">
            {['Smart phones', 'Feature phones', 'Smart TV', 'Smart Gadgets', 'Home Care', 'Personal Care'].map((item, index) => (
              <li key={index} className="flex gap-0.5 items-center mt-3 first:mt-0">
                <a href="#" className="gap-2 self-stretch my-auto">{item}</a>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea81a802d054dcf3c65d893bc72b627c6b41256e24e0c708512ef3e6ffe4e3e0?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex flex-col w-40 leading-relaxed">
          <h3 className="text-sm font-medium tracking-tight text-white opacity-40">Support</h3>
          <ul className="flex flex-col items-start mt-5 w-full text-xs tracking-wide text-white">
            {['Exchange offer', 'Screen replacement', 'Service Centre', '100 days promise', 'FAQs', 'E-waste management'].map((item, index) => (
              <li key={index} className="flex gap-0.5 items-center mt-3 first:mt-0">
                <a href="#" className="gap-2 self-stretch my-auto">{item}</a>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b611891ccdd9186ef135be1309118d61f05c9e258237852abe28d69ed0966d13?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col w-40 leading-relaxed">
          <nav className="flex flex-col w-40 max-w-full whitespace-nowrap">
            <h3 className="text-sm font-medium tracking-tight text-white opacity-40">Media</h3>
            <ul className="flex flex-col items-start mt-5 w-full text-xs tracking-wide text-white">
              {['News', 'Blogs'].map((item, index) => (
                <li key={index} className="flex gap-0.5 items-center mt-3 first:mt-0">
                  <a href="#" className="gap-2 self-stretch my-auto">{item}</a>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ec59f1584f8939b380e10634451997e41d7ea1bf7c4b62d17a991ebd5793e7?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                </li>
              ))}
            </ul>
          </nav>
          <nav className="flex flex-col mt-10 w-40 max-w-full">
            <h3 className="text-sm font-medium tracking-tight text-white opacity-40">About itel</h3>
            <ul className="flex flex-col items-start mt-5 w-full text-xs tracking-wide text-white">
              {['About us', 'Investor quick links'].map((item, index) => (
                <li key={index} className="flex gap-0.5 items-center mt-3 first:mt-0">
                  <a href="#" className="gap-2 self-stretch my-auto">{item}</a>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ec59f1584f8939b380e10634451997e41d7ea1bf7c4b62d17a991ebd5793e7?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col leading-relaxed whitespace-nowrap w-[177px]">
          <h3 className="text-sm font-medium tracking-tight text-white opacity-40">Contact</h3>
          <div className="flex flex-col items-start mt-5 w-full text-xs tracking-wide text-white">
            <div className="flex flex-col items-start max-w-full w-[138px]">
              <div className="flex gap-2 items-center">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e57bab47568665ea21fc899c79c2f838ab93065e8ccb50d89c2ac5123ff2b3b7?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Phone icon" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" />
                <a href="tel:+911206650888" className="gap-2 self-stretch my-auto">+91-120-6650888</a>
              </div>
            </div>
            <div className="flex flex-col items-start mt-3 max-w-full w-[138px]">
              <div className="flex gap-2 items-center">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f83939465c339a669dc4890f742c8d8b956ea7a946e894e21c94fbf9d278b00?placeholderIfAbsent=true&apiKey=9df870c4752649e79a5fc9825272f886" alt="Email icon" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" />
                <a href="mailto:info.in@transsion.com" className="gap-2 self-stretch my-auto">info.in@transsion.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full text-xs tracking-wide leading-relaxed text-neutral-400 max-md:max-w-full">
        <div className="flex justify-between items-center px-20 py-4 w-full bg-stone-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-1 shrink justify-between items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex gap-10 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
              <p className="text-gray-200 text-opacity-50">© 2021 itel. All right reserved.</p>
              <a href="#" className="gap-2">Privacy policy</a>
              <a href="#" className="gap-2">Terms of service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;