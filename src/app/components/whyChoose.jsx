import Image from 'next/image';
import CustomizedAccordions from './Accordian';
import Heading from './Heading';

export default function WhyChoose() {
  return (
    <section
      id="white-section"
      className="w-full  flex items-center justify-center bg-white mt-16 lg:mt-8"
    >
      <div className=" w-full mx-auto px-6 lg:px-[50px] xl:px-[120px] flex flex-col items-center justify-center py-8 lg:py-[80px] gap-[20px] md:gap-[30px] lg:gap-[50px] container">
        <Heading
          heading="why choose us"
          description={'Your Trusted Partner for Business Success'}
        />
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-4  h-auto">
          {/* <div className="flex justify-center items-center "> */}
          {/* <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  w-full gap-6"> */}
            <CustomizedAccordions />

          <div className=" flex justify-center py-4">
            <Image
              src="/accordian_img.png"
              alt="accordian_Image"
              width={500}
              height={450}
              className="object-contain  w-[400px] h-[340px] sm:w-[360px] lg:w-[560px] lg:h-[390px]"
            />
          </div>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
