import React from "react";
import Buttons from "./Buttons";

function BannerCommon({ button1, button2, description, title, description2 }) {
    return (
        <div className="w-full banner-main flex  items-center justify-center inter  sectionOuter">
            <div className="flex flex-col xl:gap-[80px] gap-[50px] xl:w-[612px]  container">
                <div className="flex flex-col justify-center sm:items-center items-start lg:gap-[12px] gap-[25px]">
                    <div
                        className=" banner-title drop-shadow-[0_4px_4px_#00000025] capitalize
"
                    >
                        {title}
                    </div>
                    <div className="font-semibold banner-description  capitalize">{description}</div>
                </div>
                <div className="flex banner-button-main sm:justify-center justify-start xl:gap-[60px]">
                    {button1 && button2 ? (
                        <>
                            <Buttons title={button1} textColor="fff" />
                            <Buttons
                                title={button2}
                                textColor="2f7644"
                                bgColor="linear-gradient( #fff,#fff), linear-gradient(0deg, #20973A, #326F46)"
                            />
                        </>
                    ) : (
                        <div className="xl:text-[24px] text-center text-[#13112260]">{description2}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BannerCommon;
