import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import type { TOrderSummary } from "./Coffee";

import CategoryType from "./CategoryType";

type Tdrink = {
  setOrderPhrase: React.Dispatch<React.SetStateAction<TOrderSummary>>;
};

function GrindOptions({ setOrderPhrase }: Tdrink) {
  const [selected, setSelected] = useState(0);
  const [show, setShow] = useState(true);

  const onClickOrderHandler = (
    orderType: string,
    order: string,
    index: number
  ) => {
    setSelected(index);
    setOrderPhrase((prev) => ({ ...prev, [orderType]: order }));
  };

  return (
    <div className="mt-20 w-full bg-lightCream">
      <div className="flex w-full items-center justify-between ">
        <h1 className="w-full max-w-[200px] font-Fraunces text-2xl font-black text-cusGray md:max-w-full md:text-[40px] md:leading-10">
          Want us to grind them?
        </h1>

        {show ? (
          <ChevronUpIcon
            className="h-6 w-6 cursor-pointer font-bold text-darkCyan"
            onClick={() => setShow(!show)}
          />
        ) : (
          <ChevronDownIcon
            className="h-6 w-6 cursor-pointer font-bold text-darkCyan"
            onClick={() => setShow(!show)}
          />
        )}
      </div>

      {show && (
        <div className="mt-8 flex flex-col gap-6 md:flex-row lg:mt-14">
          <CategoryType
            title="Wholebean"
            description="Best choice if you cherish the full sensory experience."
            selectedIndex={selected}
            index={0}
            handleClick={onClickOrderHandler}
            orderType="grind"
          />
          <CategoryType
            title="Filter"
            description="For drip or pour-over coffee methods such as V60 or Aeropress."
            selectedIndex={selected}
            index={1}
            handleClick={onClickOrderHandler}
            orderType="grind"
          />
          <CategoryType
            title="Cafetiere"
            description="Course ground beans specially suited for french press coffee."
            selectedIndex={selected}
            index={2}
            handleClick={onClickOrderHandler}
            orderType="grind"
          />
        </div>
      )}
    </div>
  );
}

export default GrindOptions;
