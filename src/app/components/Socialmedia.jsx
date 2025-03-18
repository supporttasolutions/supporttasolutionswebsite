import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Socialmedia() {
    return (
        <div className="absolute z-50 flex items-center justify-center flex-col gap-[20px] translate-x-[20px] translate-y-[50%]">
            <FaFacebook className="lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px]  text-[#fff] cursor-pointer" />
            <FaLinkedin className="lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px]  text-[#fff] cursor-pointer" />
            <FaInstagram className="lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px]  text-[#fff] cursor-pointer" />
            <div className="h-[141px] w-[2px] bg-[#fff]"></div>
            <div className="relative h-[24px] w-auto">
                <div className="absolute top-0 left-0 rotate-90 origin-left text-white whitespace-nowrap lg:text-[12px] tracking-[0.2rem]">
                    Follow us
                </div>
            </div>
        </div>
    );
}

export default Socialmedia;
