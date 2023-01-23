import React from "react";
import Image from "next/image";
import ImageGExpress from "../../../public/assets/home/desktop/image-gran-espresso.png";

type TCollectionItemProps = {
  image: string;
  title: string;
  description: string;
};

const coffeeData: TCollectionItemProps[] = [
  {
    image: "/assets/home/desktop/image-gran-espresso.png",
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    image: "/assets/home/desktop/image-planalto.png",
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    image: "/assets/home/desktop/image-piccollo.png",
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
  },
  {
    image: "/assets/home/desktop/image-danche.png",
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

type ItemProps = {
  data: TCollectionItemProps[];
};

function Collection() {
  return (
    <div className="relative mx-6 mt-[120px]   w-full bg-lightCream pt-8 lg:mx-10">
      <div className="mx-auto  flex w-full max-w-[1111px] flex-col items-center">
        <h2 className="font-Fraunces text-[40px] font-black text-cusGray md:text-8xl md:leading-[72px] lg:text-[150px]">
          our collection
        </h2>

        <div className="mt-3 ">
          <CollectionItem data={coffeeData} />
        </div>
      </div>
    </div>
  );
}

export default Collection;

export const CollectionItem = ({ data }: ItemProps) => {
  return (
    <div className="flex w-full max-w-[1111px] flex-col  items-center  md:absolute md:top-[80px] md:left-[50%] md:-translate-x-1/2 md:transform lg:flex-row lg:justify-between lg:space-x-6">
      {data.map((item) => {
        return (
          <div
            key={item.title}
            className="mb-12 flex flex-col items-center md:flex-row lg:flex-col"
          >
            <Image src={item.image} alt={item.title} width={200} height={150} />
            <div className="flex flex-col text-center md:text-left lg:mt-16 lg:text-center">
              <span className=" font-Fraunces text-2xl font-black leading-8">
                {item.title}
              </span>
              <p className="mt-4 max-w-xs text-[15px] text-darkGreyBlue lg:max-w-[255px]">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
