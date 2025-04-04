import React from "react";

function Buttons({ title, textColor, bgColor }) {
  console.log(bgColor);

  return (
    <button
      type="submit"
      className={`flex  justify-center items-center lg:rounded-[6px] font-regular xl:text-[20px] lg:text-[18px] lg:px-[30px] lg:py-[15px]  border-2 border-transparent  cursor-pointer`}
      style={{
        backgroundImage: bgColor
          ? bgColor
          : `linear-gradient( #326F46,#20973A), linear-gradient(180deg, #20973A, #326F46)`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        color: `#${textColor}`,
        width:"250px"
      }}
    >
      {title}
    </button>
  );
}

export default Buttons;
