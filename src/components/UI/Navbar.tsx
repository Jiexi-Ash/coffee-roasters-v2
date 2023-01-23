import React, { useEffect } from "react";
import Image from "next/image";
import Icon from "../../../public/assets/home/mobile/home-icon.png";
import IconHamburger from "../../../public/assets/shared/mobile/icon-hamburger.svg";
import IconClose from "../../../public/assets/shared/mobile/icon-close.svg";
import Link from "next/link";

interface NavbarProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ showModal, setShowModal }: NavbarProps) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (showModal) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [showModal]);

  return (
    <header
      className={`container  mx-auto  w-full max-w-8xl bg-lightCream px-6 pt-8 md:px-10 lg:px-20 `}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={Icon}
            alt="icon"
            width={160}
            height={18}
            className="cursor-pointer"
          />
        </Link>

        <div
          className="cursor-pointer md:hidden"
          onClick={() => setShowModal(true)}
        >
          <Image src={IconHamburger} alt="icon" width={16} height={15} />
        </div>

        <div className="hidden justify-between space-x-10 md:flex">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/about-us" className="link">
            about us
          </Link>
          <Link href="/subscribe" className="link">
            create your plan
          </Link>
        </div>
      </div>

      {showModal && (
        <div className="absolute inset-0 block h-full bg-gradient-to-b from-white to-white/90 px-6 pt-6 md:hidden">
          <div className="flex w-full items-center justify-between ">
            <Link href="/">
              <Image
                src={Icon}
                alt="icon"
                width={160}
                height={18}
                className="cursor-pointer"
              />
            </Link>

            <div
              className="cursor-pointer md:hidden"
              onClick={() => setShowModal(false)}
            >
              <Image src={IconClose} alt="icon" width={16} height={15} />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center space-y-8 bg-white pb-10">
            <Link
              href="/"
              className="cursor-pointer font-Fraunces text-2xl font-black leading-8"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="cursor-pointer font-Fraunces text-2xl font-black leading-8"
            >
              About us
            </Link>
            <Link
              href="/subscribe"
              className="cursor-pointer font-Fraunces text-2xl font-black leading-8"
            >
              Create your plan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
