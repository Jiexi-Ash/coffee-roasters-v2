import React from "react";
import Link from "next/link";
function Hero() {
  return (
    <div className="mx-6 md:mx-10 lg:mx-20 ">
      <div className="mt-10 h-[500px] w-full rounded-lg bg-heroMobile  bg-cover bg-no-repeat md:bg-heroTablet lg:bg-heroDesktop">
        <div className="flex h-full w-full flex-col items-center justify-center md:items-start md:px-14">
          <div className="flex w-full flex-col items-center justify-center px-6 md:items-start md:px-0 lg:px-20">
            <h1 className="w-full max-w-[280px] text-center font-Fraunces text-[40px] font-black leading-10 text-lightCream md:text-left md:text-5xl lg:max-w-md lg:text-7xl">
              Great coffee made simple.
            </h1>
            <p className="mt-6 w-full max-w-[280px] text-center font-barlow leading-6 text-lightCream/60 md:max-w-[450px] md:text-left lg:max-w-[450px]">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
          </div>
          <div className="mt-10 lg:px-20">
            <button type="button" className="btn text-[18px]">
              <Link href="/subscribe">Create your plan</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
