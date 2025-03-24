"use client";
import { useState } from "react";
import Image from "next/image";
import ButtonPage from "./button";

export default function ServicesScroll() {
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
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-gradient-to-b from-[#F7F7F7] via-[#F7F7F7] to-[#FFE9D0] items-center">
        {/* Cards Section (Scrollable on Mobile) */}
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 px-6 lg:overflow-visible lg:justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`shadow-[0px 8px 16px 0px #00000014] 
        flex flex-col justify-center items-center 
        p-4 rounded-lg cursor-pointer transition-all duration-300 
        w-[90%] snap-center lg:w-64 
        ${activeIndex === index ? "bg-white" : "bg-[#DDDDDD]"}`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={66}
              />
              <p className="text-center font-medium text-lg mt-2">
                {service.title}
              </p>
            </div>
          ))}
        </div>

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
              <h2 className="text-[#131122E5] font-lg text-[26px] mt-4">
                {services[activeIndex].title}
              </h2>
              <p className="text-[#13112299] font-[400] text-[20px] mt-4">
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
