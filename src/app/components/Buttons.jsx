import React from "react";

function Buttons({ title, textColor, bgColor }) {

  return (
    <button
      type="submit"
      className={`flex  justify-center items-center lg:rounded-[6px] rounded-[8px] font-regular xl:text-[20px] lg:text-[18px] sm:text-[16px] lg:px-[30px] lg:py-[15px]  md:px-[10px] sm:py-[8px] px-[12px] py-[12px] border-2 border-transparent  cursor-pointer lg:w-[250px] w-[180px] font-semibold`}
      style={{
        backgroundImage: bgColor
          ? bgColor
          : `linear-gradient( #326F46,#20973A), linear-gradient(180deg, #20973A, #326F46)`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        color: `#${textColor}`
            }}
    >
      {title}
    </button>
  );
}

export default Buttons;
