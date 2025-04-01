"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Heading from "./Heading";
import Image from "next/image";

const phases = [
  {
    title: "Discovery Phase - Laying the Foundation",
    description:
      "Every great solution starts with understanding. We begin with in-depth research and strategy building, ensuring a strong foundation for your project. Our team crafts lean go-to-market strategies to enhance user experience, align with your objectives, and guarantee a successful launch. By gathering core product insights, we translate your vision into clear, actionable app requirements.",
    sub: "A well-defined strategy that ensures an efficient and user-focused product.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Planning Phase - Structuring Success",
    description:
      "The planning phase is where we map out the key features, technical requirements, and overall framework of your project. Our approach covers:*Performance benchmarks & usability *Security & data protection *Failure prevention & recovery strategies *Scalability & accessibility *With a detailed roadmap in place, we minimize risks, streamline workflows, and maximize productivity.",
    sub: "A structured development process that accelerates project success.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Design Phase - Crafting Intuitive Experiences",
    description:
      "In this phase, we bring your vision to life through visually compelling, user-friendly, and functional designs. We focus on: *User interface (UI) and experience (UX) design *Wireframing & prototyping *Seamless interaction design *Our goal is to create a visually stunning, intuitive, and accessible product that reflects your brand and resonates with your audience.",
    sub: "A prototype-driven, user-friendly design ready for development.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Development Phase - Building the Solution",
    description:
      "With a strong strategy and design in place, our expert developers begin coding your application. Depending on your business needs and complexity, we: * Build applications using low-code/no-code or custom development. *Optimize for performance, security, and scalability. *Continuously test and iterate for a bug-free experience. *Our team ensures seamless integration with third-party services, databases, and cloud platforms, making your app future-ready.",
    sub: "A functional, high-performance digital solution.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Quality Assurance & Testing – Ensuring Perfection",
    description:
      "Before launch, our dedicated QA team rigorously tests the application across multiple parameters, including: *Performance & security testing *Integration & compatibility checks *Bug detection & resolution *We deliver a fully optimized, reliable, and market-ready product only after resolving all identified issues.",
    sub: "A flawless, high-performing solution ready for deployment.",
    image: "/servScroll_Img.png",
  },
  {
    title: "Deployment & Maintenance – Continuous Growth",
    description:
      "Once your app or website is launched, we ensure smooth deployment with manual or automated processes based on your business needs. Post-launch, we provide: *Regular updates & performance monitoring *User feedback-driven improvements *Security patches & scalability enhancements *Your success doesn’t stop at launch—we help your solution evolve to stay relevant, competitive, and efficient in a fast-changing digital landscape.",
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
    <div className="container mx-auto w-full pb-[30px] lg:py-[80px] px-3 lg:px-[120px] lg-white-bg">
      <div className="flex justify-center items-center mb-10 block lg:hidden">
        <Image src={"/supporttaLogo.png"} alt="" width={25} height={40} />
      </div>
      <div className="flex justify-center">
        <Heading heading="Phases" description="How do we work as a team!" />
      </div>
      <div className="flex justify-center mt-16">
        <div className="relative flex flex-col gap-y-16 max-w-full mx-auto">
          {/* Background Line (Grey) */}
          <div className="absolute left-6 lg:left-1/2 transform -translate-x-1/2 top-10 h-full w-0.5 bg-gray-300"></div>

          {/* Progress Line (Orange) - FIXED */}
          <div
            className={`absolute left-6  lg:left-1/2 transform -translate-x-1/2 top-10 w-0.5 bg-[#E08F34] transition-all duration-500 ease-in-out`}
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
                  index % 2 === 0 ? " justify-end lg:justify-end" : " justify-end lg:justify-start"
                }`}
              >
                <Image
                  src={phase.image}
                  alt={phase.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-[290px] h-[165px] lg:w-[500px] lg:h-[300px]"
                />
              </div>

              {/* Text Section */}
              <div
                className={`w-full lg:w-1/2 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } items-start`}
              >
                <div className="flex flex-col lg:w-[80%] items-start pl-16">
                  <h3 className="text-[18px] lg:text-[26px] font-semibold font-[raleway] text-[#131122E5]">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-[#13112299] text-[14px] lg:text-[18px]  font-[inter] font-regular text-justify">
                    {phase.description}
                  </p>
                  <p className="mt-3 text-[#131122E5] text-[14px] lg:text-[20px] font-[raleway] font-medium text-justify">
                    {phase.sub}
                  </p>
                </div>
              </div>

              {/* Step Number */}
              <div
                className={`absolute left-6 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-10 w-12 h-8 lg:w-12 lg:h-12 flex items-center justify-center px-4 lg:px-8 rounded-[100px] border-2 border-[#E08F34] text-[#E08F34] font-bold text-sm lg:text-lg bg-white ${
                  activeIndex === index ? "bg-[#E08F34]" : ""
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
