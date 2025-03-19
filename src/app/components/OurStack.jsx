import Image from "next/image";
import React from "react";
import Heading from "./Heading";

function OurStack() {
    const stacks = [
        { src: "/next.png", label: "Next Js" },
        { src: "/javascript.png", label: "Javascript" },
        { src: "/android.png", label: "Android" },
        { src: "/ios.png", label: "IOS" },
        { src: "/mongo.png", label: "MongoDB" },
        { src: "/html.png", label: "HTML" },
        { src: "/css.png", label: "CSS" },
        { src: "/figma.png", label: "Figma" },
        { src: "/react.png", label: "React" },
        { src: "/flutter.png", label: "Flutter" },
        { src: "/nodejs.png", label: "Node Js" },
    ];
    return (
        <section className="2xl:min-h-auto lg:min-h-screen  w-full inter flex items-center justify-center lg:py-[80px] bg-gradient-to-b from-white via-[#FDF9F3] to-white">
            <div className=" w-[83%] flex flex-col items-center justify-center lg:gap-[60px] xl:gap-[80px] container lg:px-[30px] xl:px-[40px]">
                <Heading description={"The Technologies behind our Innovation"} heading={"our stack"} />
                <div className="flex flex-wrap justify-center items-center w-full xl:gap-x-[100px] lg:gap-x-[80px]  xl:gap-y-[50px] lg:gap-y-[40px]">
                    {stacks.map((stack, index) => (
                        <div
                            key={index}
                            className="xl:w-[calc(25%-75px)] lg:w-[calc(25%-60px)] aspect-square lg:rounded-[20px] flex flex-col xl:gap-[25px] lg:gap-[20px] shadow-[0px_8px_16px_0px_#00000014,0px_0px_4px_0px_#0000000A] justify-center items-center group"
                        >   
                            <div className="lg:rounded-[25px] lg:w-[40%] aspect-square bg-[#131122] flex items-center justify-center relative overflow-hidden  ">
                                <Image
                                    fill
                                    alt={stack.label}
                                    src={stack.src}
                                    className="lg:p-[30%] object-contain transition-transform duration-300 group-hover:scale-[1.25]"
                                />
                            </div>

                            <div className="sora text-[#00000040] font-semibold xl:text-[20px] lg:text-[18px]">
                                {stack.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurStack;
