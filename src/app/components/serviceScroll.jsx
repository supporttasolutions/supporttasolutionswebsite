"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import ButtonPage from "./ButtonPage";
export default function ServicesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const services = [
    {
      image: "/serv1.png",
      title: "Mobile App Development",
      description:
        "We build robust and scalable mobile applications for businesses.",
      imgSrc: "/servImage.png",
    },
    {
      image: "/serv2.png",
      title: "Web Development",
      description:
        "Creating responsive and modern web applications tailored to your needs.",
      imgSrc: "/servImage.png",
    },
    {
      image: "/serv3.png",
      title: "eCommerce Development",
      description:
        "Developing seamless eCommerce experiences for online businesses.",
      imgSrc: "/servImage.png",
    },
    {
      image: "/serv4.png",
      title: "UI / UX Design",
      description:
        "Enhancing user experiences with creative and intuitive designs.",
      imgSrc: "/servImage.png",
    },
    {
      image: "/serve5.png",
      title: "Custom Software Development",
      description:
        "Building tailored software solutions to meet unique business needs.",
      imgSrc: "/servImage.png",
    },
  ];
  return (
    <div className=" container  py-[80px] px-[120px] md:px-12 lg:px-20  mx-auto">
      <div className=" py-4 px-4 lg:bg-gradient-to-b from-[#F7F7F7] via-[#F7F7F7] to-[#FFE9D0] rounded-lg items-center ">
        <Swiper
          slidesPerView={1}
          // spaceBetween={25}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            768: { slidesPerView: 4, spaceBetween: 20 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-[250px] lg:h-[180px] px-2"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-4 w-[100%] rounded-lg cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white shadow-[10px_10px_10px_0px_#00000014]"
                    : "bg-[#DDDDDD]"
                } `}
              >
                <div
                  className={`h-[100px]
                flex flex-row-reverse lg:flex-col justify-between md:justify-center items-center
               snap-center lg:w-full
                `}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={100}
                    height={70}
                  />
                  <div className="flex flex-col text-start font-[raleway]">
                    <p className="text-start lg:text-center font-medium text-[16px] mt-2">
                      {service.title}
                    </p>
                    <Image
                      src="/figmaLinear.png"
                      alt="figmaLimg"
                      width={130}
                      height={60}
                      className="block lg:hidden"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-1">
                  <ButtonPage
                    btnName="Let's Connect"
                    className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white px-4 py-2 block md:hidden"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Content Section (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center items-center w-full h-auto px-8 py-8">
          <div className="flex flex-col items-center text-center max-w-[1200px] w-full mx-auto lg:flex-row lg:text-left lg:items-start">
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <Image
                src="/figmaLinear.png"
                alt="figma_linearImg"
                width={200}
                height={50}
                className="mx-auto lg:mx-0"
              />
              <h2 className="text-[#131122E5] font-[raleway] font-medium text-[26px] mt-4">
                {services[activeIndex].title}
              </h2>
              <p className="text-[#13112299]  font-[inter] font-regular text-[20px] mt-4">
                {services[activeIndex].description}
              </p>
              <div className="mt-6">
                <ButtonPage
                  className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white"
                  btnName={"Let’s Connect"}
                />
              </div>
            </div>
            {/* Right: Image */}
            <div className="w-full lg:w-1/2 flex justify-end mt-6 lg:mt-0">
              <Image
                src={services[activeIndex].imgSrc}
                alt="serviceImg"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
