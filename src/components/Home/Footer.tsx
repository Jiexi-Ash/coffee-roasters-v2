/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "../../../public/assets/home/mobile/footer-icon.png";
import FacebookIcon from "../../..//public/assets/shared/desktop/icon-facebook.svg";
import TwitterIcon from "../../..//public/assets/shared/desktop/icon-twitter.svg";
import InstagramIcon from "../../..//public/assets/shared/desktop/icon-instagram.svg";

function Footer() {
  return (
    <footer className="container mx-auto w-full  max-w-8xl px-6 pb-[72px] lg:px-20">
      <div className="flex flex-col items-center justify-center bg-darkGreyBlue py-14 lg:flex-row lg:items-center lg:justify-between lg:px-20">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center">
          <Image src={Icon} alt="icon" width={218} height={24} />

          <div className="my-12 flex flex-col items-center md:flex-row md:space-x-12 lg:my-0 lg:ml-[100px]">
            <Link href="" className="footer-link">
              Home
            </Link>
            <Link href="" className="footer-link">
              About Us
            </Link>
            <Link href="" className="footer-link">
              Create Your Plan
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <Image src={FacebookIcon} alt="icon" width={24} height={24} />
          <Image src={TwitterIcon} alt="icon" width={24} height={24} />
          <Image src={InstagramIcon} alt="icon" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
