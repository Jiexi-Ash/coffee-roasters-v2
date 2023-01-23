import React from "react";
import type { TOrderSummary } from "./Coffee";

interface SummaryModalProps {
  summary: TOrderSummary;
  setShowSummary: React.Dispatch<React.SetStateAction<boolean>>;
}

function SummaryModal({ summary, setShowSummary }: SummaryModalProps) {
  return (
    <div
      className="absolute inset-0  flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={() => setShowSummary(false)}
    >
      <div className="mx-6 w-full rounded-lg bg-white md:max-w-[540px]">
        <div className="flex bg-darkGreyBlue px-6 py-7 md:px-14">
          <span className="font-Fraunces  text-[28px] font-black text-white ">
            Order Summary
          </span>
        </div>
        <div className="mt-10 flex flex-col rounded-lg px-6 md:px-14">
          <div className="  rounded-lg font-Fraunces text-2xl font-black leading-10 text-darkGreyBlue">
            I drink my coffee as
            <span className="text-2xl text-darkCyan">
              &nbsp;{summary.preference}
            </span>
            , with a
            <span className="text-2xl text-darkCyan">
              &nbsp;{summary.beanType}&nbsp;
            </span>
            <span className="text-2xl text-darkCyan">
              {summary.quantity}&nbsp;
            </span>
            type of bean.
            <span className="text-2xl text-darkCyan">
              {summary.grind}&nbsp;
            </span>
            ground ala, sent to me
            <span className="text-2xl text-darkCyan">
              &nbsp;{summary.delivery}
            </span>
            .
          </div>

          <p className="mt-2 mb-6 text-[15px] leading-6 text-darkGreyBlue">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>

          <div className="mb-6 w-full">
            <button className="btn text-lg">Checkout - $14.00/mo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryModal;
