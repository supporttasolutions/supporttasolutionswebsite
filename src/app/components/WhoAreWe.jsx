import Image from "next/image";
import React from "react";
import whoWeAreStyle from "./whoweare.module.css";
import Heading from "./Heading";
function WhoAreWe() {
  return (
    <section
      id="white-section"
      className="2xl:min-h-auto lg:min-h-screen w-full  flex items-center justify-between  lg:py-[80px] min-h-[200vh] bg-white"
    >
      <div className=" w-[100%]  px-[120px] flex flex-col items-center justify-center lg:gap-[60px] xl:gap-[80px] ">
        <Heading
          description={"We Transform Ideas Into Powerful Digital Realities"}
          heading={"Who are we"}
        />
        <div className="flex justify-between   w-full  h-auto">
          <div className="lg:w-[100%] lg:text-[20px] xl:text-[24px] text-justify text-[#13112299] font-normal font-[inter]">
            The future belongs to those who innovate – and that’s where we come
            in. With a team of young, dynamic minds, we turn your ideas into
            digital realities that inspire and deliver. Every project is a that
            not only meet but exceed expectations. Your vision, powered by our
            expertise, becomes a reality that drives growth, efficiency, and
            success. Together,{" "}
            <span className="font-medium text-[#13112299]">
              we don’t just adapt to the future – we shape it.
            </span>{" "}
            Let’s build something extraordinary
          </div>
          <div
            className={`${whoWeAreStyle.imagediv} w-[100%] relative flex items-center justify-center`}
          >
            <Image
              src="/who-are-we.png"
              width={500}
              height={500}
              className="h-full w-[70%] object-cover rounded-[20px]"
              alt=""
            />
          </div>
        </div>
        {/* <div className="relative aspect-[12/11] lg:w-[53%] flex items-center justify-center">
                        <Image src="/who-are-we.png" alt="who-are-we" fill className="object-contain" />
                    </div> */}
      </div>
    </section>
  );
}

export default WhoAreWe;
