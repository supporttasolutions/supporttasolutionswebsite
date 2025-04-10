import Image from "next/image";
import React from "react";

function MissionVision() {
  const ourMissionVision = [
    {
      image: "/our-mission.svg",
      title: "Our Mission",
      description:
        "Our mission is to create user-friendly, impactful solutions that help businesses thrive while building lasting trust and meaningful experiences.",
    },
    {
      image: "/our-vision.svg",
      title: "Our Vision",
      description:
        "To empower businesses with smart, seamless digital solutions that drive real growth and success. not to make you look good but us too.",
    },
  ];
  return (
    <div className=" container mx-auto w-full py-[40px] lg:py-[80px] px-[16px]  md:px-[40px] lg:px-[50px] xl:px-[120px]  flex items-center justify-center">
      <div className="w-[100%]  flex-wrap flex ">
        <div className=" flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] ">
          {ourMissionVision.map((details, index) => (
            <div
              key={index}
              className="flex w-[calc(50%-30px)] w-full flex-col gap-[15px] lg:gap-[50px] font-[raleway]  p-[20px] lg:p-[40px] bg-[#fdf9f3] rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-col gap-4  lg:gap-2 items-center justify-between ">
                <Image
                  width={66}
                  height={66}
                  src={`${details.image}`}
                  alt="mission   "
                />
                <div className="font-bold  text-[20px] sm:text-[22px] lg:text-[40px]">{details.title}</div>
              </div>
              <div className=" text-[#716e76] font-medium text-[14px] lg:text-[18px] xl:text-[24px]  capitalize text-justify xl:text-center transform-capitalize">
                <p>{details.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
