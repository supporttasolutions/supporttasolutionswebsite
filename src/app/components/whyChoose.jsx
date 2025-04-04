import Image from "next/image";
import CustomizedAccordions from "./Accordian";
import Heading from "./Heading";

export default function WhyChoose() {
  return (
    <section
      id="white-section"
      className="2xl:min-h-auto lg:min-h-screen w-full flex items-center justify-center lg:py-[80px] bg-white min-h-[150vh] container mx-auto"
    >
      <div className="w-[100%] flex flex-col items-center justify-center lg:gap-[60px] xl:gap-[80px] container mx-auto px-6 lg:px-[120px]">
        <Heading
          heading="why choose us"
          description={"Your Trusted Partner for Business Success"}
        />

        {/* Added `flex-col-reverse` for mobile */}
        {/* <div className="flex flex-col-reverse sm:flex-col lg:flex-row justify-between w-full h-auto"> */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Image First on Mobile & Tablet, Second on Desktop */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <Image
                src="/accordian_img.png"
                alt="accordian_Image"
                width={520}
                height={630}
                className="object-cover w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto rounded-[20px] shadow-lg"
              />
            </div>

            {/* Accordion Second on Mobile & Tablet, First on Desktop */}
            <div className="order-2 lg:order-1">
              <CustomizedAccordions />
            </div>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}
