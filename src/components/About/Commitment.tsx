import React from "react";
import Image from "next/image";
import ImageCommitment from "../../../public/assets/about/tablet/image-commitment.jpg";

function Commitment() {
  return (
    <div className="container mx-auto mt-[120px]  w-full max-w-8xl bg-lightCream px-6 md:px-10 lg:mt-40 lg:px-40">
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:items-start md:justify-start lg:items-center">
        <div className="mb- relative flex h-[400px] w-[327px] flex-col rounded-lg md:mr-[70px] md:h-[470px] md:w-[280px] lg:h-[520px] lg:w-[445px]">
          <Image
            src={ImageCommitment}
            alt="imageCommitment"
            fill={true}
            className="rounded-lg object-center"
            // width auto
            // height auto
          />
        </div>

        <div className="mt-12 flex w-full  max-w-xs flex-col text-center md:mt-0 md:max-w-[350px] md:text-left lg:max-w-[450px]">
          <h2 className="font-Fraunces text-[32px] font-black text-darkGreyBlue lg:text-[40px]">
            Our commitment
          </h2>

          <p className="mt-8 text-[15px] leading-6 text-darkGreyBlue ">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Commitment;
