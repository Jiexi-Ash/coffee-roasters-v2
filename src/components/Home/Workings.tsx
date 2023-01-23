import exp from "constants";
import React from "react";

function Workings() {
  return (
    <section className="mx-6 mt-[620px] mb-[120px]  md:mx-10 md:mt-[144px]  lg:mt-[400px] lg:px-20">
      <div className="flex flex-col items-center justify-center md:items-start lg:w-full lg:max-w-[1045px] lg:px-20">
        <h2 className=" mb-20 text-center font-Fraunces text-[24px] font-black leading-8 text-cusGray md:text-left">
          How it works
        </h2>
        <Circles />
        <div className="flex w-full  flex-col md:flex-row md:justify-between lg:space-x-20">
          <div className="mb-14 flex flex-col items-center justify-center">
            <span className="font-Fraunces text-7xl font-black text-paleOrange md:w-full  md:text-left">
              01
            </span>

            <div className="mt-6 flex w-full flex-col items-center justify-center text-center md:max-w-[223px] md:items-start md:text-left lg:max-w-xs ">
              <h3 className="font-Fraunces text-3xl font-black text-darkGreyBlue md:max-w-[200px] lg:max-w-[200px]">
                Pick your coffee
              </h3>
              <p className="mt-4   text-[15px] leading-6 text-darkGreyBlue lg:text-base ">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
          </div>
          <div className="mb-14 flex flex-col items-center justify-center ">
            <span className="font-Fraunces text-7xl font-black text-paleOrange md:w-full md:text-left">
              02
            </span>

            <div className="mt-6 flex w-full flex-col items-center justify-center text-center md:max-w-[223px] md:items-start md:text-left lg:max-w-[285px]">
              <h3 className="font-Fraunces text-3xl font-black text-darkGreyBlue">
                Choose the frequency
              </h3>
              <p className="mt-4 text-center text-[15px] leading-6 text-darkGreyBlue md:text-left">
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>
          </div>
          <div className="mb-14 flex flex-col items-center justify-center">
            <span className="font-Fraunces text-7xl font-black text-paleOrange md:w-full md:text-left">
              03
            </span>

            <div className="mt-6 flex w-full flex-col items-center justify-center text-center md:max-w-[210px] md:items-start md:text-left lg:w-full lg:max-w-[250px]">
              <h3 className="font-Fraunces text-3xl font-black text-darkGreyBlue lg:max-w-[210px]">
                Receive and enjoy!
              </h3>
              <p className="mt-4  text-center text-[15px] leading-6 text-darkGreyBlue md:text-left">
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[250px]">
          <button className="btn text-2xl">Create your plan</button>
        </div>
      </div>
    </section>
  );
}

export default Workings;

export const Circles = () => {
  return (
    <div className="mb-20 hidden w-full md:mb-10 md:block md:max-w-2xl lg:max-w-2xl">
      <div className="relative w-full border border-paleOrange">
        <div className="absolute top-1/2 left-0  h-10 w-10 -translate-y-1/2 transform rounded-full border-2 border-darkCyan bg-white"></div>
        <div className="absolute top-1/2 left-1/2 h-10  w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full  border-2 border-darkCyan bg-white"></div>
        <div className="absolute top-1/2 right-0  h-10 w-10 -translate-y-1/2 transform rounded-full  border-2 border-darkCyan bg-white"></div>
      </div>
    </div>
  );
};
