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
        <div className="flex items-center justify-center sectionOuter">
            <div className=" raleway flex-wrap flex container">
                <div className=" flex xl:gap-[60px] gap-[80px] ">
                    {ourMissionVision.map((details, index) => (
                        <div
                            key={index}
                            className="flex w-[calc(50%-30px)] flex-col xl:gap-[50px] p-[40px] bg-[#fdf9f3] rounded-[8px]"
                        >
                            <div className="flex flex-col items-center justify-between xl:gap-[10px]">
                                <Image width={66} height={66} src={`${details.image}`} alt="mission   " />
                                <div className="font-bold xl:text-[40px]">{details.title}</div>
                            </div>
                            <div className=" text-[#13112290] font-medium xl:text-[24px] capitalize text-center">
                                {details.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MissionVision;
