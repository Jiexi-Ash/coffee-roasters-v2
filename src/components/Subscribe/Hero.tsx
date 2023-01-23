import React from "react";

function Hero() {
  return (
    <div className="container mx-auto w-full  max-w-8xl bg-lightCream px-6 pt-8 md:px-10 lg:px-20">
      <div className="flex h-[500px] w-full flex-col items-center justify-center rounded-lg bg-heroSubscribeMobile bg-cover bg-no-repeat md:items-start md:bg-heroSubscribeTablet lg:bg-heroSubscribeDesktop">
        <div className="px-6 text-center md:max-w-lg md:pl-14 md:text-left lg:max-w-xl lg:pl-20">
          <h1 className="font-Fraunces text-[40px] font-black text-lightCream md:text-5xl lg:text-6xl 2xl:text-7xl">
            Create a plan
          </h1>
          <p className="mt-5 text-[15px] text-lightCream/80 lg:text-base">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
