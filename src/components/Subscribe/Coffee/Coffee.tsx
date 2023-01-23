import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import CategoryType from "./CategoryType";
import BeanType from "./BeanType";
import Quantity from "./Quantity";
import GrindOptions from "./GrindOptions";
import Delivery from "./Delivery";
import OrderSummery from "./OrderSummery";

export type TOrderSummary = {
  preference: string;
  beanType: string;
  quantity: string;
  grind: string;
  delivery: string;
};

interface CoffeeProps {
  handleOrder: (orderType: string, order: string, index: number) => void;
  selected: number;
  setOrderPhrase: React.Dispatch<React.SetStateAction<TOrderSummary>>;
  orderPhrase: TOrderSummary;
  setShowSummary: React.Dispatch<React.SetStateAction<boolean>>;
}

function Coffee({
  handleOrder,
  selected,
  setOrderPhrase,
  orderPhrase,
  setShowSummary,
}: CoffeeProps) {
  const handlePlan = () => {
    setShowSummary(true);
  };
  return (
    <div className="container mx-auto mt-[120px] min-h-screen  w-full max-w-8xl bg-lightCream  px-6 md:px-10 lg:px-[155px]">
      <div className="flex w-full items-start md:px-10 lg:px-0">
        <CoffeeMenu />
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <h1 className="w-full max-w-[200px] font-Fraunces text-2xl font-black text-cusGray md:max-w-full md:text-[40px] md:leading-10">
              How do you drink your coffee?
            </h1>

            <ChevronUpIcon className="h-6 w-6 font-bold text-darkCyan" />
          </div>
          <div className="mt-8 flex flex-col gap-6 md:flex-row lg:mt-14">
            <CategoryType
              title="Capsule"
              description="Compatible with Nespresso systems and similar brewers"
              selectedIndex={selected}
              index={0}
              handleClick={handleOrder}
              orderType="preference"
            />
            <CategoryType
              title="Filter"
              description="For pour over or drip methods like Aeropress, Chemex, and V60"
              selectedIndex={selected}
              index={1}
              handleClick={handleOrder}
              orderType="preference"
            />
            <CategoryType
              title="Espresso"
              description="Dense and finely ground beans for an intense, flavorful experience"
              selectedIndex={selected}
              index={2}
              handleClick={handleOrder}
              orderType="preference"
            />
          </div>

          <BeanType setOrderPhrase={setOrderPhrase} />
          <Quantity setOrderPhrase={setOrderPhrase} />
          <GrindOptions setOrderPhrase={setOrderPhrase} />
          <Delivery setOrderPhrase={setOrderPhrase} />
          <OrderSummery phrase={orderPhrase} handlePlan={handlePlan} />
        </div>
      </div>
    </div>
  );
}

export default Coffee;

export const CoffeeMenu = () => {
  return (
    <div className="mr-28 hidden w-full max-w-[220px] flex-col divide-y-2 xl:flex">
      <div className="flex w-full gap-7 pb-4">
        <span className="font-Fraunces text-2xl font-black">01</span>
        <span className="font-Fraunces text-2xl font-black capitalize text-darkGreyBlue">
          Preferences
        </span>
      </div>
      <div className="flex w-full gap-7 py-4">
        <span className="font-Fraunces text-2xl font-black">02</span>
        <span className="font-Fraunces text-2xl font-black capitalize text-darkGreyBlue">
          Bean Type
        </span>
      </div>
      <div className="flex w-full gap-7 py-4">
        <span className="font-Fraunces text-2xl font-black">03</span>
        <span className="font-Fraunces text-2xl font-black capitalize text-darkGreyBlue">
          Quantity
        </span>
      </div>
      <div className="flex w-full gap-7 py-4">
        <span className="font-Fraunces text-2xl font-black">01</span>
        <span className="whitespace-nowrap font-Fraunces text-2xl font-black capitalize text-darkGreyBlue">
          Grind Option
        </span>
      </div>
      <div className="flex w-full gap-7 py-4">
        <span className="font-Fraunces text-2xl font-black">01</span>
        <span className="font-Fraunces text-2xl font-black capitalize text-darkGreyBlue">
          Delivery
        </span>
      </div>
    </div>
  );
};
