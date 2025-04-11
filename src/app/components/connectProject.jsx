import Heading from "./Heading";
import { TextField } from "@mui/material";
import { useState } from "react";
import ButtonPage from "./ButtonPage";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ConnectProjectPage() {
  return (
    <div className="py-8 lg:py-12">
      <Heading
        heading="Tell Us About Your Project"
        description="Give Your Ideas Life!"
      />

      <div className="flex flex-col md:flex-row gap-8 items-center w-full py-[30px] lg:py-[80px] px-[16px]  md:px-[40px] lg:px-[50px] xl:px-[120px] mx-auto container">
        {/* Contact Details Section */}
        <div className="bg-[#FCEED7] p-3 md:p-10  w-full md:2/3 lg:w-2/3   h-auto md:h-150 rounded-l-lg ">
          <div className="flex flex-wrap gap-2 sm:flex-row md:flex-col  lg:bg-[#FCEED7] px-2 lg:p-0 xl:p-6 lg:rounded-lg space-y-6 lg:space-y-4">
            <div className="flex items-start space-x-2">
              <IoMdMail className="text-[#E08F34]" size={25} />
              <div className="font-[raleway] w-full">
                <p className="font-semibold text-md text-[#E08F34]">Email</p>
                <p className="text-gray-500 text-base uppercase">
                  qwer2qwertyui
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <FaPhone className="text-[#E08F34]" size={25} />
              <div className="font-[raleway] w-full">
                <p className="font-semibold text-md text-[#E08F34]">Phone</p>
                <p className="text-gray-500 text-base uppercase">
                  qwer2qwertyui
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <MdLocationPin className="text-[#E08F34]" size={25} />
              <div className="font-[raleway] w-full">
                <p className="font-semibold text-md text-[#E08F34]">
                  Our Office Location
                </p>
                <p className="text-gray-500 text-base uppercase">
                  qwer2qwertyui
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}

        <div className="w-full flex flex-col md:3 lg:2/3  h-full">
          <div className="flex flex-col items-center justify-center  md:hidden ">
            <Image
              src={"/supporttaLogo.svg"}
              alt="Supportta_Logo"
              width={25}
              height={40}
              className="mb-12 block lg:hidden"
            />

            <h3 className="font-[raleway] font-[500] text-[18px] text-[#131122E5] mb-2 text-center">
              HAVE A PROJECT ?
            </h3>
            <p className="font-[raleway] font-[500] text-[12px] text-[#13112299] text-center">
              SEND A MESSAGE
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* image section */}
      <div className="flex flex-col justify-center items-center ">
        <p className=" font-[raleway] text-[14px] lg:text-[26px] mx-auto container text-center px-4 lg:px-[120px]">
          Our team will get back to you as soon as possible.
        </p>
        <div className=" relative flex items-center justify-center w-[86.75%] aspect-[1/.28] mt-12  mx-auto container ">
          <div className="absolute z-10 bg-[#ffffff50] h-full w-full"></div>
          {/* <Image src={"/hero-bg.jpg"} fill className="object-fill" alt="" /> */}
          <Image src={"/hero-bg.jpg"} fill className="object-fill" alt="" />
        </div>
      </div>
    </div>
  );
}
