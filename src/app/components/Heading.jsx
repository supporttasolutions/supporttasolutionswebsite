import React from "react";

function Heading({ heading, description }) {
  return (
    <div className=" flex flex-col justify-center items-center lg:gap-[12px] xl:gap-[15px] text-center">
      <div className="flex items-center lg:gap-[10px]">
        <div className="bg-[#1FD372] rounded-[99px] w-[20px] h-[8px]"></div>
        <div className="xl:text-[20px] text-[#E08F34] font-semibold font-[inter] uppercase">
          {heading}
        </div>
        <div className="bg-[#1FD372] rounded-[99px] w-[20px] h-[8px]"></div>
      </div>
      <div className="font-[raleway] xl:text-[40px] font-medium w-[100%] text-[#2b2938]">
        {description}
      </div>
    </div>
  );
}

export default Heading;
