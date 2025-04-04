import { Input } from "@mui/material";
import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import ButtonPage from "./ButtonPage";
import ContactForm from "./ContactForm";

function Connect() {
  return (
    <section
      id="white-section"
      className="bg-[#E08F340F] 2xl:min-h-auto lg:min-h-screen w-full  flex items-center justify-center lg:py-[80px]"
    >
      <div className=" w-[100%] flex flex-col items-center justify-center lg:gap-[60px] xl:gap-[80px] container">
        <Image
          src={"/supporttaLogo.png"}
          alt="Supportta_Logo"
          width={25}
          height={40}
          className="mb-12 block lg:hidden"
        />

        <Heading
          description={"Let's Build Something Amazing!"}
          heading={"Connect with us"}
        />
        <div className="flex flex-col lg:flex-row justify-center  lg:px-[60px] w-full">
          <div className="flex flex-col items-center lg:gap-[20px] w-full lg:w-1/2">
            <div className="font-[raleway] xl:text-[32px] font-medium text-[#2b2938] hidden lg:block">
              Give Your Ideas Life!
            </div>
            <div className="relative w-[50%] aspect-square ">
              <Image
                src={"/amico.png"}
                alt="connect"
                fill
                className=" object-contain"
              />
            </div>
            <div className="font-[raleway] text-[14px] lg:text-[22px] font-medium text-[#13112299]">
              Share a Few Quick Details.
            </div>
          </div>

          <div className="w-full lg:w-1/2 my-12 lg:my-0">
            <ContactForm />
          </div>
          {/*           
          <form className="w-1/2 flex flex-col xl:gap-[30px] lg:gap-[25px] raleway">
            <div className="flex flex-col xl:gap-[30px] lg:gap-[25px]">
              <Input
                placeholder="Full Name"
                sx={{
                  height: "66px",
                  fontWeight: "500",
                  fontSize: { xs: "16", lg: "20", xl: "22" },
                  "& input": {
                    fontSize: { xs: "16", lg: "20", xl: "22" },
                  },
                  "&:before": {
                    borderBottom: "1px solid #ccc",
                  },
                  "&:after": {
                    borderBottom: "1px solid #E08F34",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "1px solid #000",
                  },
                }}
                className="w-full lg:h-[66px] xl:text-[22px] lg:text-[20px] raleway"
              />
              <Input
                placeholder="Email id"
                sx={{
                  height: "66px",
                  fontWeight: "500",
                  fontSize: { xs: "16px", lg: "20px", xl: "22px" },
                  "& input": {
                    fontSize: { xs: "16px", lg: "20px", xl: "22px" },
                  },
                  "&:before": {
                    borderBottom: "1px solid #ccc",
                  },
                  "&:after": {
                    borderBottom: "1px solid #E08F34",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "1px solid #000",
                  },
                }}
                className="w-full lg:h-[66px] xl:text-[22px] lg:text-[20px] raleway"
              />
              <Input
                placeholder="Phone Number"
                sx={{
                  height: "66px",
                  fontWeight: "500",
                  fontSize: { xs: "16px", lg: "20px", xl: "22px" },
                  "& input": {
                    fontSize: { xs: "16px", lg: "20px", xl: "22px" },
                  },
                  "&:before": {
                    borderBottom: "1px solid #ccc",
                  },
                  "&:after": {
                    borderBottom: "1px solid #E08F34",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "1px solid #000",
                  },
                }}
                className="w-full lg:h-[66px] xl:text-[22px] lg:text-[20px] raleway"
              />
              <div className="flex flex-col gap-[2px]">
                <div className="xl:text-[20px] lg:text-[16px] text-[#9e9e9e] font-medium raleway">
                  Message
                </div>
                <textarea
                  placeholder="Enter Message"
                  className="placeholder:text-[#00000080] outline-0 w-full xl:h-[150px] lg:h-[120px] border-[#0000004D] border-1 bg-[#FFFFFF] rounded-[8px] lg:p-[10px] xl:text-[20px] lg:text-[16px] resize-none focus:border-[#E08F34] hover:border-[#000]"
                />
              </div>
            </div>

            <ButtonPage
              btnName={"Let's Connect"}
              className={
                "bg-linear-to-t from-[#20973A] to-[#326F46] text-white"
              }
            />
          </form> */}
        </div>
      </div>
    </section>
  );
}

export default Connect;
