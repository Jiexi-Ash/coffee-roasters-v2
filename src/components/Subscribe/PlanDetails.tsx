import React from "react";

function PlanDetails() {
  return (
    <div className="container mx-auto w-full  max-w-8xl bg-lightCream px-6 pt-8 md:px-10 lg:px-20">
      <div className="flex w-full flex-col rounded-lg bg-darkGreyBlue  px-6 py-20 md:px-10 lg:max-w-[1045px] lg:px-20 xl:max-w-full">
        <Circles />
        <div className="flex w-full flex-col rounded-lg  md:flex-row md:justify-between md:gap-3 lg:gap-10 ">
          <div className="mb-14  flex flex-col text-center md:max-w-[250px] md:text-left lg:max-w-[320px]">
            <span className="font-Fraunces text-7xl font-black text-paleOrange">
              01
            </span>
            <h2 className="font-Fraunces text-[28px] font-black text-white md:mt-10  md:max-w-[150px]">
              Pick your coffee
            </h2>
            <p className="mt-6 leading-6 text-white/80 md:mt-10 lg:leading-6">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="mb-14 flex flex-col text-center  md:max-w-[250px] md:text-left lg:max-w-[320px]">
            <span className="font-Fraunces text-7xl font-black text-paleOrange">
              02
            </span>
            <h2 className="font-Fraunces text-[28px] font-black text-white md:mt-10">
              Choose the frequency
            </h2>
            <p className="mt-6 leading-6 text-white/80 md:mt-10 lg:leading-6">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="flex flex-col text-center   md:max-w-[250px] md:text-left lg:max-w-[320px]">
            <span className="font-Fraunces text-7xl font-black text-paleOrange">
              03
            </span>
            <h2 className="font-Fraunces text-[28px] font-black text-white md:mt-10 md:max-w-[150px]">
              Receive and enjoy!
            </h2>
            <p className="mt-6 leading-6 text-white/80 md:mt-10 lg:leading-6">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanDetails;

export const Circles = () => {
  return (
    <div className="mb-20 hidden w-full md:mb-10 md:block md:max-w-2xl lg:max-w-2xl">
      <div className="relative w-full border border-paleOrange">
        <div className="absolute top-1/2 left-0  h-10 w-10 -translate-y-1/2 transform rounded-full border-2 border-darkCyan  bg-darkGreyBlue"></div>
        <div className="absolute top-1/2 left-1/2 h-10  w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full  border-2 border-darkCyan bg-darkGreyBlue"></div>
        <div className="absolute top-1/2 right-0  h-10 w-10 -translate-y-1/2 transform rounded-full  border-2 border-darkCyan bg-darkGreyBlue"></div>
      </div>
    </div>
  );
};

<div className="flex w-full flex-col rounded-lg bg-darkGreyBlue px-6 py-20 md:flex-row md:justify-between md:gap-3 md:px-10 lg:max-w-[1045px] lg:gap-10 lg:px-20"></div>;
