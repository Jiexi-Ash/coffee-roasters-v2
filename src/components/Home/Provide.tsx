/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Image from "next/image";
import IconCoffeeBean from "../../../public/assets/home/desktop/icon-coffee-bean.svg";
import IconTruck from "../../../public/assets/home/desktop/icon-truck.svg";
import IconGift from "../../../public/assets/home/desktop/icon-gift.svg";

function Provide() {
  return (
    <section className="relative mx-6 md:mx-10 md:mt-[800px] lg:mt-[400px] lg:px-20">
      <div className="relative h-[1000px] w-full rounded-[10px] bg-[#2C343E] px-6 lg:mx-0 lg:h-[500px] lg:max-w-8xl lg:px-10">
        <div className="flex  w-full flex-col items-center py-16 ">
          <h2 className="text-center font-Fraunces text-[28px] font-black text-lightCream md:text-[32px] lg:text-[40px]">
            Why choose us?
          </h2>
          <p className="mx-auto mt-6 w-full max-w-sm text-center leading-6 text-lightCream/70 md:max-w-xl lg:text-[16px]">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="flex flex-col justify-center md:px-10 lg:flex-row lg:justify-center lg:space-x-8 ">
          <div className="mb-6 flex flex-col items-center  justify-center rounded-lg bg-darkCyan pt-[72px] md:flex-row md:space-x-14 md:pt-10 lg:h-96 lg:w-full lg:max-w-[300px] lg:flex-col lg:space-x-0 xl:max-w-[350px]">
            <Image
              src={IconCoffeeBean}
              alt="icon-coffee-bean"
              width={80}
              height={80}
              className="object-cover object-center"
              priority
            />

            <div className="mt-14 mb-[50px] text-center md:text-left lg:text-center">
              <span className="text-center font-Fraunces text-2xl font-black text-lightCream">
                Best quality
              </span>

              <p className="mt-6 max-w-[230px] font-barlow text-[15px] leading-6 tracking-normal text-lightCream/80 md:max-w-sm lg:max-w-xs lg:px-12">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className="mb-6 flex flex-col items-center  justify-center rounded-lg bg-darkCyan pt-[72px] md:flex-row md:space-x-14 md:pt-10 lg:h-96 lg:w-full lg:max-w-[300px] lg:flex-col lg:space-x-0 xl:max-w-[350px]">
            <Image
              src={IconGift}
              alt="icon-coffee-bean"
              width={80}
              height={80}
              className="object-cover object-center"
              priority
            />

            <div className="mt-14 mb-[50px] text-center md:text-left lg:text-center">
              <span className="text-center font-Fraunces text-2xl font-black text-lightCream">
                Exclusive benefits
              </span>

              <p className="mt-6 max-w-[230px] font-barlow text-[15px] leading-6 tracking-normal text-lightCream/80 md:max-w-sm lg:max-w-xs lg:px-12">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className="mb-6 flex flex-col items-center  justify-center rounded-lg bg-darkCyan pt-[72px] md:flex-row md:space-x-14 md:pt-10 lg:h-96 lg:w-full lg:max-w-[300px] lg:flex-col lg:space-x-0 xl:max-w-[350px]">
            <Image
              src={IconTruck}
              alt="icon-coffee-bean"
              width={80}
              height={80}
              className="object-cover object-center"
              priority
            />

            <div className="mt-14 mb-[50px] text-center md:text-left lg:text-center">
              <span className="text-center font-Fraunces text-2xl font-black text-lightCream">
                Free shipping
              </span>

              <p className="mt-6 max-w-[230px] font-barlow text-[15px] leading-6 tracking-normal text-lightCream/80 md:max-w-sm lg:max-w-xs lg:px-12">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Provide;
