import React from "react";

type Tdrink = {
  title: string;
  description: string;
  style?: string;
  selectedIndex?: number;
  index: number;
  handleClick: (orderType: string, order: string, index: number) => void;
  orderType: string;
};

function CategoryType({
  title,
  description,
  selectedIndex,
  index,
  handleClick,
  orderType,
}: Tdrink) {
  const onClickOrderHandler = (order: string, index: number) => {
    // handleOrder(orderType, order);
    console.log(orderType, order, index);
    handleClick(orderType, order, index);
  };
  return (
    <div
      className={`${
        selectedIndex === index ? "bg-darkCyan" : ""
      } mb-4 flex w-full flex-col rounded-lg py-6 transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-paleOrange md:h-[220px] md:max-w-[220px] lg:max-w-[500px]`}
      onClick={() => onClickOrderHandler(title, index)}
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
          } mt-2 text-base leading-6 md:mt-6`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default CategoryType;
