import Image from 'next/image';
import React from 'react';
import Heading from './Heading';

function OurStack() {
  const stacks = [
    { src: '/next.png', label: 'Next Js' },
    { src: '/javascript.png', label: 'Javascript' },
    { src: '/android.png', label: 'Android' },
    { src: '/ios.png', label: 'IOS' },
    { src: '/mongo.png', label: 'MongoDB' },
    { src: '/html.png', label: 'HTML' },
    { src: '/css.png', label: 'CSS' },
    { src: '/figma.png', label: 'Figma' },
    { src: '/react.png', label: 'React' },
    { src: '/flutter.png', label: 'Flutter' },
    { src: '/nodejs.png', label: 'Node Js' },
  ];
  return (
    <section
      id="white-section"
      className="  w-full inter flex items-center justify-center bg-[#FDF9F3] mt-16 lg:mt-8"
    >
      <div className=" w-full mx-auto flex flex-col items-center justify-center gap-[20px] md:gap-[30px] lg:gap-[50px] container py-12 lg:py-[80px] px-[16px] md:px-[40px] lg:px-[50px] xl:px-[120px]">
        <Heading
          description={'The Technologies behind our Innovation'}
          heading={'our stack'}
        />
        <div className=" mt-6 flex flex-wrap justify-center items-center w-full gap-[30px] sm:gap-x-[20px] sm:gap-y-[20px] md:gap-x-[50px] md:gap-y-[50px] lg:gap-x-[80px] xl:gap-x-[100px] lg:gap-y-[40px] xl:gap-y-[50px]">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="bg-white w-[140px] lg:w-[180px]  rounded-[20px] shadow-md  p-5 sm:p-5 md:p-5 group"
            >
              <div className='flex flex-col gap-[10px] sm:gap-[10px] md:gap-[10px] lg:gap-[30px] items-center justify-center '>
                <div className=" rounded-[18px] lg:rounded-[30px] w-[60%] sm:w-[70%] md:w-[60%] lg:w-[60%] aspect-square  bg-[#131122] flex items-center justify-center relative overflow-hidden  ">
                  <Image
                    fill
                    alt={stack.label}
                    src={stack.src}
                    className="p-[25%] sm:p-[25%] md:p-[20%] lg:p-[30%] object-contain transition-transform duration-300 group-hover:scale-[1.25]"
                  />
                </div>

                <div className="font-[sora] text-[#00000040] font-semibold xl:text-[20px] lg:text-[18px]">
                  {stack.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStack;
