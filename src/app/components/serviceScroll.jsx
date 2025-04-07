"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import ButtonPage from "./ButtonPage";
import Heading from "./Heading";

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
    <div className="bg-gradient-to-b from-white via-[#FFE9D0] to-white w-full h-[400px] lg:h-auto container py-[30px] px-6 lg:py-[80px] lg:px-[50px] xl:px-[120px] mx-auto lg-white-bg">
      {/* <div
      className="bg-gradient-to-b from-white via-[#FFE9D0] to-white w- h-[300px]  container py-[30px] lg:py-[80px] px-3 lg:px-[120px] mx-auto"
    > */}
      <div className="block lg:hidden ">
        <Heading heading={"Services we scroll"} />
      </div>
      <div className="py-4 px-2  lg:bg-gradient-to-b from-[#F7F7F7] via-[#F7F7F7] to-[#FFE9D0] rounded-lg items-center SwiperDiv">
        <Swiper
          slidesPerView={1} // Default (mobile screens < 640px)
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            400: { slidesPerView: 1.2, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 }, // Show 2 slides on `sm` screens (≥640px)
            768: { slidesPerView: 2, spaceBetween: 20 }, // Show 2 slides on `md` screens (≥768px)
            1024: { slidesPerView: 4, spaceBetween: 20 }, // Show 4 slides on `lg` screens (≥1024px)
          }}
          spaceBetween={15}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full  px-2 h-[200px] lg:h-[180px] "
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="display-flex justify-center ">
              <div
                className={`p-6 lg:p-4 w-full h-[180px] lg:h-[150px]  rounded-lg cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white shadow-[10px_10px_10px_0px_#00000014]"
                    : " bg-white lg:bg-[#DDDDDD]"
                } `}
               
              >
                <div
                  className={`h-[100px] md:h-[140px] lg:h-[100px]
                flex flex-row-reverse gap-2 lg:gap-[5px] lg:flex-col justify-between md:justify-center lg:justify-between  items-center
               snap-center lg:w-full
                `}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={100}
                    height={70}
                    className="w-[100px] h-[70px] lg:w-[100px] lg:h-[100px] object-cover rounded-lg"
                  />
                  <div className="flex flex-col text-start font-[raleway]">
                    <p className="text-start lg:text-center font-medium text-[20px] lg:text-[16px] mt-2 break-words">
                      {service.title}
                    </p>
                    <Image
                      src="/figmaLinear.png"
                      alt="figmaLimg"
                      width={130}
                      height={60}
                      className="block lg:hidden "
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-2">
                  <ButtonPage
                    btnName="Let's Connect"
                    className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white px-8 py-2 block md:hidden"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Content Section (Hidden on Mobile) */}
        <div className="hidden lg:flex justify-center items-center w-full h-auto px-8 py-8">
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
              <p className="text-[#13112299]  font-[inter] font-regular text-[20px] mt-4 w-[500px]">
                {services[activeIndex].description}
              </p>
              <div className="mt-6">
                <ButtonPage
                  className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white  w-[200px] lg:w-[250px]  px-4 py-3 md:px-4 md:py-3 cursor-pointer"
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
