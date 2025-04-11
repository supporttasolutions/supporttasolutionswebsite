import Image from 'next/image';
import React from 'react';
import whoWeAreStyle from './whoweare.module.css';
import Heading from './Heading';
function WhoAreWe() {
  return (
    <section
      id="white-section"
      className=" w-full  flex items-center justify-between  lg:py-[80px] bg-white mt-16 lg:mt-8"
    >
      <div className=" w-full mx-auto container  px-[16px] md:px-[40px] lg:px-[50px] xl:px-[120px] flex flex-col items-center justify-center lg:gap-[60px] ">
        <Heading
          description={'We Transform Ideas Into Powerful Digital Realities'}
          heading={'Who are we'}
        />
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-2 w-full  h-auto mt-10 lg:mt-0">
          <div className="w-full text-[14px] lg:text-[20px] xl:text-[24px] text-justify text-[#13112299] font-normal font-[inter]">
            The future belongs to those who innovate – and that’s where we come
            in. With a team of young, dynamic minds, we turn your ideas into
            digital realities that inspire and deliver. Every project is a that
            not only meet but exceed expectations. Your vision, powered by our
            expertise, becomes a reality that drives growth, efficiency, and
            success. Together,{' '}
            <span className="font-medium text-[#13112299]">
              we don’t just adapt to the future – we shape it.
            </span>{' '}
            Let’s build something extraordinary
          </div>
          <div
            className={`${whoWeAreStyle.imagedivLarge} w-full relative flex items-center justify-center hidden md:block`}
          >
            <div className={``}></div>
            <Image
              src="/who-are-we.png"
              width={500}
              height={500}
              className="relative left-1/2 transform -translate-x-1/2 object-cover rounded-[20px] md:w-[250px] lg:w-[340px] xl:w-[380px] "
              alt=""
            />
          </div>




          {/* Image Section with Overlapping Effect */}
          <div className={`${whoWeAreStyle.imagediv} relative w-full flex items-center justify-center block md:hidden`}>
            {/* Main Image */}
            <Image
              src="/whoare.png"
              width={500}
              height={500}
              className="h-full  object-cover rounded-[20px] shadow-lg z-9 w-[230px] sm:w-[350px]  md:w-[380px] aspect-[3/2] "
              alt="Who We Are"
            />
            
            {/* Overlapping Effect for Mobile */}
            <div className="absolute w-[230px] sm:w-[350px] md:w-[380px] top-[10%] md:transform translate-x-[8%] md:-translate-y-[0%] h-full  rounded-[20px] ">
            <Image
              src="/whoree.png"
              width={508}
              height={358}
              className="h-full object-cover rounded-[20px] shadow-lg"
              alt="Who We Are"
            />
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default WhoAreWe;
