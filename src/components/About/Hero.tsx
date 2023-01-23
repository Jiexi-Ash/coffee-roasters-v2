import React from "react";

function Hero() {
  return (
    <div className="mx-6 md:mx-10 lg:mx-20">
      <div className="mt-10  h-[400px] w-full  rounded-lg bg-heroAboutMobile bg-cover bg-no-repeat md:bg-heroAboutTablet lg:bg-heroAboutDesktop">
        <div className="mx-auto flex h-full w-full max-w-[280px] flex-col items-center justify-center px-6 text-center md:mx-0 md:max-w-lg md:items-start md:px-[58px] md:text-left lg:px-20 xl:max-w-xl">
          <h1 className="font-Fraunces text-[28px] font-black capitalize text-lightCream md:text-[32px] lg:text-[40px]">
            About Us
          </h1>

          <p className="mt-6  w-full text-[15px] leading-6 text-lightCream/70 lg:text-base">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
