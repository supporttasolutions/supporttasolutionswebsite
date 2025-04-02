import React from "react";

function Heading({ heading, description }) {
  return (
    <div className=" flex flex-col justify-center items-center lg:gap-[12px] xl:gap-[15px] text-center">
      <div className="flex items-center gap-[5px] lg:gap-[10px]">
        <div className="bg-[#1FD372] rounded-[99px] w-[10px] h-[4px] lg:w-[20px] lg:h-[8px]"></div>
        <div className="text-sm lg:text-xl text-[#E08F34] font-semibold font-[inter] uppercase">
          {heading}
        </div>
        <div className="bg-[#1FD372] rounded-[99px] w-[10px] h-[4px] lg:w-[20px] lg:h-[8px]"></div>
      </div>
      <div className="font-[raleway] text-2xl lg:text-4xl font-medium w-[100%] text-[#2b2938] mt-1 p-[15px] md:p-0">
        {description}
      </div>
    </div>
  );
}

export default Heading;
