"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Heading from "./Heading";
import Image from "next/image";

const phases = [
  {
    title: "Discovery Phase - Laying the Foundation",
    description:
      "Every great solution starts with understanding. We begin with in-depth research and strategy building, ensuring a strong foundation for your project.",
    sub: "A well-defined strategy that ensures an efficient and user-focused product.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Planning Phase - Structuring Success",
    description:
      "The planning phase is where we map out the key features, technical requirements, and overall framework of your project.",
    sub: "A structured development process that accelerates project success.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Design Phase - Crafting Intuitive Experiences",
    description:
      "In this phase, we bring your vision to life through visually compelling, user-friendly, and functional designs.",
    sub: "A prototype-driven, user-friendly design ready for development.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Development Phase - Building the Solution",
    description:
      "With a strong strategy and design in place, our expert developers begin coding your application.",
    sub: "A functional, high-performance digital solution.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Quality Assurance & Testing – Ensuring Perfection",
    description:
      "Before launch, our dedicated QA team rigorously tests the application across multiple parameters.",
    sub: "A flawless, high-performing solution ready for deployment.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Deployment & Maintenance – Continuous Growth",
    description:
      "Once your app or website is launched, we ensure smooth deployment with manual or automated processes based on your business needs.",
    sub: "A well-maintained, adaptable product that meets market demands.",
    image: "/servScroll_Img.png",
  },
];

export default function Phases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = phases.map(() => useInView({ threshold: 0.5 }));

  useEffect(() => {
    refs.forEach(({ inView }, index) => {
      if (inView) setActiveIndex(index);
    });
  }, [refs]);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex justify-center">
        <Heading heading="Phases" description="How do we work as a team!" />
      </div>
      <div className="flex justify-center mt-20">
        <div className="relative flex flex-col gap-y-16 max-w-full mx-auto">
          {/* Background Line (Grey) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-10 h-full w-0.5 bg-gray-300"></div>

          {/* Progress Line (Orange) - FIXED */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-10 w-0.5 bg-[#E08F34] transition-all duration-500 ease-in-out"
            style={{
              height: `${(activeIndex / (phases.length - 1)) * 100}%`,
            }}
          ></div>

          {phases.map((phase, index) => (
            <div
              key={index}
              ref={refs[index].ref}
              className={`flex flex-col lg:flex-row items-center mx-auto w-full h-full relative ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Image Section */}
              <div
                className={`w-full lg:w-1/2 flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <Image
                  src={phase.image}
                  alt={phase.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-[500px] h-[300px]"
                />
              </div>

              {/* Text Section */}
              <div
                className={`w-full lg:w-1/2 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } items-start`}
              >
                <div className="flex flex-col lg:w-[80%] items-start ">
                  <h3 className="text-[26px] font-[600] text-[#131122E5]">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-[#13112299] text-[18px] font-[400] text-justify">
                    {phase.description}
                  </p>
                  <p className="mt-2 text-[#131122E5] text-[20px] font-[500] text-justify">
                    {phase.sub}
                  </p>
                </div>
              </div>

              {/* Step Number */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-10 w-12 h-12 flex items-center justify-center px-8 rounded-[100px] border-2 border-[#E08F34] text-[#E08F34] font-bold text-lg bg-white ${
                  activeIndex === index ? "bg-[#E08F34" : ""
                }`}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
