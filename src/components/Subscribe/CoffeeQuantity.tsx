import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

type TQuantityType = {
  title: string;
  description: string;
  style?: string;
  selectedIndex?: number;
  index?: number;
  handleClick?: () => void;
};

function CoffeeQuantity() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="container mx-auto mt-24 w-full  max-w-8xl bg-lightCream px-6  md:px-10 lg:px-20">
      <div className="flex w-full items-center justify-between ">
        <h1 className="w-full max-w-[200px] font-Fraunces text-2xl font-black text-cusGray">
          How much would you like?
        </h1>

        <ChevronUpIcon className="h-6 w-6 font-bold text-darkCyan" />
      </div>

      <div className="mt-8">
        <Drink
          title="250g"
          description="Perfect for the solo drinker. Yields about 12 delicious cups."
          selectedIndex={selected}
          index={0}
          handleClick={() => setSelected(0)}
        />
        <Drink
          title="500g"
          description="Perfect option for a couple. Yields about 40 delectable cups."
          selectedIndex={selected}
          index={1}
          handleClick={() => setSelected(1)}
        />
        <Drink
          title="1000g"
          description="Perfect for offices and events. Yields about 90 delightful cups."
          selectedIndex={selected}
          index={2}
          handleClick={() => setSelected(2)}
        />
      </div>
    </div>
  );
}

export default CoffeeQuantity;

export const Drink = ({
  title,
  description,
  selectedIndex,
  index,
  handleClick,
}: TQuantityType) => {
  return (
    <div
      className={`${
        selectedIndex === index ? "rounded-lg bg-darkCyan py-6" : ""
      } mb-4 flex flex-col`}
      onClick={handleClick}
    >
      <div className="px-6">
        <span
          className={`${
            selectedIndex === index ? "text-white" : "text-darkGreyBlue"
          } font-Fraunces text-2xl font-black leading-8 `}
        >
          {title}
        </span>
        <p
          className={`${
            selectedIndex === index ? "text-white" : ""
          } mt-2 text-base leading-6`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
