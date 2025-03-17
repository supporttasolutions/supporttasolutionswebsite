import Image from "next/image";
import React from "react";

function WhoAreWe() {
    return (
        <section className="2xl:min-h-auto lg:min-h-screen w-full  flex items-center justify-center lg:py-[80px]">
            <div className=" w-[83%] flex flex-col items-center justify-center lg:gap-[60px] xl:gap-[80px] container">
                <div className="container  flex flex-col justify-center lg:gap-[12px] xl:gap-[15px] text-center">
                    <div className="xl:text-[20px] text-[#E08F34] font-semibold inter">Who are we</div>
                    <div className="raleway xl:text-[40px] font-medium">We Transform Ideas Into Powerful Digital Realities</div>
                </div>
                <div className="flex justify-between items-center w-full ">
                    <div className="w-1/2 lg:text-[20px] xl:text-[24px] text-[#13112299] font-normal ">
                        The future belongs to those who innovate – and that’s where we come in. With a team of young,
                        dynamic minds, we turn your ideas into digital realities that inspire and deliver. Every project is
                        a promise: 100% satisfaction, unwavering trust, and results that speak for themselves. From concept
                        to execution, we blend creativity, technology, and precision to create solutions that not only meet
                        but exceed expectations. Your vision, powered by our expertise, becomes a reality that drives
                        growth, efficiency, and success. Together,<span className="font-medium text-[#13112299]">we don’t just adapt to the future – we shape it.</span>  Let’s
                        build something extraordinary
                    </div>
                    <div className="relative aspect-[12/11] lg:w-[40%]">
                        <Image src="/who-are-we.png" alt="who-are-we" fill className="object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhoAreWe;
