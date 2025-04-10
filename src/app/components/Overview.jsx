import React from "react";
import Heading from "./Heading";
import Image from "next/image";

function Overview() {
  return (
    <div className="  mx-auto container w-full py-[80px] px-[16px] md:px-[40px] lg:px-[50px] xl:px-[120px] ">
      <div className="flex flex-col items-center justify-center lg:gap-[50px] xl:gap-[80px] w-[100%]">
        <Heading
          heading={"Overview"}
          description={
            "Your Vision, Our Innovation – Building Success Together."
          }
        />
        
          <div className=" relative flex items-center justify-center w-[100%] aspect-[1/.28] mt-12  ">
            <div className="absolute z-10 bg-[#ffffff50] h-full w-full"></div>
            {/* <Image src={"/hero-bg.jpg"} fill className="object-fill" alt="" /> */}
            <Image src={"/hero-bg.jpg"} fill className="object-fill" alt="" />
          </div>
        <div className="text-justify xl:text-[24px] font-[raleway] font-medium  tracking-[5%] mx-auto container ">
          Welcome to Supportta –{" "}
          <span className="font-bold">
            Your Success, Our Priority – For You, With You.
          </span>{" "}
          We’re not just a software development company; we’re your partners in
          turning bold ideas into game-changing digital solutions. With a team
          of young, brilliant minds and a passion for problem-solving, we
          deliver tailored solutions that are as unique as your vision. From
          concept to launch, we’re with you every step of the way, ensuring 100%
          satisfaction and results that speak for themselves.{" "}
          <span className="font-bold">“Your success is our mission”</span>
        </div>
      </div>
    </div>
  );
}

export default Overview;
