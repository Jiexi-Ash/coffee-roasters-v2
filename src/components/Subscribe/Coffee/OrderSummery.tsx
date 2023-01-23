import React from "react";
import type { TOrderSummary } from "./Coffee";

type TSummary = {
  phrase: TOrderSummary;
  handlePlan: () => void;
};

function OrderSummery({ phrase, handlePlan }: TSummary) {
  return (
    <div className="mt-[120px] w-full ">
      <div className="flex w-full flex-col rounded-lg bg-[#2C343E] px-6 py-8 md:px-12 lg:px-6">
        <div className="text-white/80">ORDER SUMMARY</div>

        <div className="mt-2 font-Fraunces text-2xl font-black leading-10 text-white">
          I drink my coffee as
          <span className="text-2xl text-darkCyan">
            &nbsp;{phrase.preference}
          </span>
          , with a
          <span className="text-2xl text-darkCyan">
            &nbsp;{phrase.beanType}&nbsp;
          </span>
          <span className="text-2xl text-darkCyan">
            {phrase.quantity}&nbsp;
          </span>
          type of bean.
          <span className="text-2xl text-darkCyan">{phrase.grind}&nbsp;</span>
          ground ala, sent to me
          <span className="text-2xl text-darkCyan">
            &nbsp;{phrase.delivery}
          </span>
          .
        </div>
      </div>
      <div className="my-14 text-center lg:text-right">
        <button
          type="button"
          className="rounded-lg bg-darkCyan py-4 px-12 font-Fraunces text-lg font-black text-white transition duration-200 ease-in-out hover:bg-[#66D2CF]"
          onClick={handlePlan}
        >
          Create my Plan!
        </button>
      </div>
    </div>
  );
}

export default OrderSummery;
