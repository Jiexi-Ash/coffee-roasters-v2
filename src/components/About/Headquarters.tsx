import React from "react";
import Image from "next/image";

import UkShape from "../../../public/assets/shared/uk-shape.png";
import CanadaShape from "../../../public/assets/shared/canada-shape.png";
import AusShape from "../../../public/assets/shared/aus-shape.png";

function Headquarters() {
  return (
    <div className="mt-[120px] w-full  px-6 md:mt-36 md:px-10 lg:px-40">
      <div className="flex w-full flex-col ">
        <h3 className="text-center font-Fraunces text-2xl font-black text-cusGray md:text-left">
          Our headquarters
        </h3>

        <div className="flex flex-col md:flex-row md:space-x-24 lg:space-x-48">
          <div className="mt-[72px] flex flex-col items-center md:items-start">
            <Image src={UkShape} alt="uk shape" width={40} height={50} />

            <div className="mt-12 text-center md:text-left">
              <h3 className="font-Fraunces text-[28px] font-black text-darkGreyBlue md:text-2xl">
                United Kingdom
              </h3>

              <div className="mt-5 flex flex-col items-center space-y-2 md:items-start">
                <span className="text-base">68 Asfordby Rd</span>
                <span className="text-base">Alcaston</span>
                <span className="text-base">SY6 1YA</span>
                <span className="text-base">+44 1241 918425</span>
              </div>
            </div>
          </div>

          <div className="mt-[72px] flex flex-col items-center md:items-start">
            <Image src={CanadaShape} alt="uk shape" width={40} height={50} />

            <div className="mt-12 text-center md:text-left">
              <h3 className="font-Fraunces text-[28px] font-black text-darkGreyBlue md:text-2xl">
                Canada
              </h3>

              <div className="mt-5 flex flex-col items-center space-y-2 md:items-start">
                <span className="text-base">1528 Eglinton Avenue</span>
                <span className="text-base">Toronto</span>
                <span className="text-base">Ontario M4P 1A6</span>
                <span className="text-base">+1 416 485 2997</span>
              </div>
            </div>
          </div>

          <div className="mt-[72px] flex flex-col items-center md:items-start">
            <Image src={AusShape} alt="uk shape" width={40} height={50} />

            <div className="mt-12 text-center md:text-left">
              <h3 className="font-Fraunces text-[28px] font-black text-darkGreyBlue md:text-2xl">
                Australia
              </h3>

              <div className="mt-5 flex flex-col items-center space-y-2 md:items-start">
                <span className="text-base">36 Swanston Street</span>
                <span className="text-base">Kewell</span>
                <span className="text-base">Victoria</span>
                <span className="text-base">+61 4 9928 3629</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headquarters;
