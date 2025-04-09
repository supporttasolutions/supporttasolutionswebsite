import Image from "next/image";
import React from "react";

function OverviewTwo() {
  const datas = [
    {
      title1: "Step 1",
      title2: "Discovery Phase – Laying the Foundation",
      image: "/hero-bg.jpg",
      description:
        "Every great solution starts with understanding. We begin with in-depth research and strategy building, ensuring a strong foundation for your project. Our team crafts lean go-to-market strategies to enhance user experience, align with your objectives, and guarantee a successful launch. By gathering core product insights, we translate your vision into clear, actionable app requirements.",
      description2:
        "A well-defined strategy that ensures an efficient and user-focused product.",
    },
  ];
  return (
    <div className="bg-[#000000] w-full ">
      <div className="w-[100%] flex flex-col xl:gap-[80px]  xl:py-[80px]">
        {datas.flatMap((details, index) =>
          Array(4)
            .fill(details)
            .map((details, i) => (
              <div
                key={`${index}-${i}`}
                className=" flex flex-col sm:flex-row  items-start justify-between gap-[50px] w-full  py-[50px] lg:py-[30px]  px-[16px] md:px-[40px] lg:px-[50px] xl:px-[120px] lg:mx-auto lg:container"
              >
                <div className=" flex flex-col gap:[10px] lg:gap-[35px]  w-full sm:w-[40%] lg:w-[54.1%]">
                  <div className="uppercase font-[inter] text-[#e08f34] font-semibold text-[12px] sm:text-[22px] lg:text-[32px] xl:text-[36px]  text-center sm:text-start">
                    {details.title1}
                  </div>
                  <div className="font-[raleway] text-[24px] sm:text-[28px] lg:text-[48px] xl:text-[68px] text-white font-regular text-center sm:text-start">
                    {details.title2}
                  </div>
                </div>
                <div className="flex flex-col  items-center gap-[15px] lg:gap-[20px] text-white w-auto sm:w-[60%] lg:w-[41.7%]">
                  <div className="w-full relative aspect-[5/3]">
                    <Image
                      src={details.image}
                      alt=""
                      fill
                      className="object-fill relative"
                    />
                  </div>
                  <div className="block lg:hidden  font-[raleway] text-[white] font-semibold sm:text-[22px] text-[18px] text-start">
                    {details.title2}
                  </div>
                  <div className="  ">
                     
                     <p  className="text-justify text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px] font-[inter] font-regular" > {details.description} </p>
                  </div>
                  <div className="">
                  <p  className="text-justify text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px] font-[raleway] font-regular" > {details.description2} </p>

                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default OverviewTwo;
