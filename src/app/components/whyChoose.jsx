import Image from "next/image";
import CustomizedAccordions from "./Accordian";
import Heading from "./Heading";

export default function WhyChoose() {
  return (
    <section id="white-section" className="2xl:min-h-auto lg:min-h-screen w-full  flex items-center justify-center lg:py-[80px] bg-white min-h-[150vh]">
     
      <div className=" w-[83%] flex flex-col items-center justify-center lg:gap-[60px] xl:gap-[80px] container">
        <Heading
          heading="why choose us"
          description={"Your Trusted Partner for Business Success"}
        />
        <div className="flex justify-between   w-full  h-auto">
          {/* <div className="flex justify-center items-center "> */}
          <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  w-full gap-6">
            <div>
              <CustomizedAccordions />
            </div>

            <div className="  flex justify-end items-center">
              <Image
                src="/accordian_img.png"
                alt="accordian_Image"
                width={520}
                height={630}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
