import React from "react";
import Image from "next/image";
import ImageQualityMobile from "../../../public/assets/about/mobile/image-quality.jpg";
import ImageQualityTablet from "../../../public/assets/about/tablet/image-quality.jpg";
import ImageQualityDesktop from "../../../public/assets/about/desktop/image-quality.jpg";

function Quality() {
  return (
    <>
      <div className="relative flex  w-full flex-col items-center justify-center bg-lightCream px-6  md:mt-0 md:px-10 lg:hidden">
        <div className="relative top-20 z-20 h-[156px] w-[280px] md:top-40 md:h-[320px] md:w-[573px] lg:h-[474px] lg:w-[445px]">
          <Image
            src={ImageQualityMobile}
            alt="quality"
            fill={true}
            className="rounded-lg object-cover md:hidden"
          />
          <Image
            src={ImageQualityTablet}
            alt="quality"
            fill={true}
            className="hidden rounded-lg object-cover md:block"
          />
        </div>
        <div className="h-[509px] w-full max-w-[327px] rounded-lg bg-darkGreyBlue px-6 pt-32  md:max-w-full md:pt-56">
          <div className="flex w-full  flex-col items-center text-center">
            <h2 className="font-Fraunces text-[28px] font-black text-lightCream md:text-[32px]">
              Uncompromising quality
            </h2>
            <p className="mt-6 w-full text-lightCream/80 md:max-w-[540px]">
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </div>
      </div>

      <QualityDesktop />
    </>
  );
}

export default Quality;

export const QualityDesktop = () => {
  return (
    <div className="relative mt-40 hidden  lg:flex">
      <div className="relative mx-20 w-full bg-darkGreyBlue py-20">
        <div className="absolute top-[-60px] right-14">
          <div className="relative h-[350px] w-[300px] rounded-lg ">
            <Image
              src={ImageQualityDesktop}
              alt="quality"
              className="rounded-lg object-cover object-center"
              fill={true}
            />
          </div>
        </div>

        <div className="ml-20">
          <h2 className="font-Fraunces text-[40px] font-black text-lightCream">
            Uncompromising quality
          </h2>
          <p className="mt-8 max-w-[450px] text-sm leading-6 text-lightCream/80">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};
