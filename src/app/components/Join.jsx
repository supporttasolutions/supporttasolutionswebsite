"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import ButtonPage from "./ButtonPage";
import ContactDialog from "./contactModal";

function Join() {
  const careers = [
    {
      title: "Senior Software Developer",
      category: "ENGINEERING",
      type: "REMOTE | FULL-TIME",
      description:
        "We're looking for an experienced software developer to join our team...",
      image: "/custom2.png",
    },
    {
      title: "Senior Software Developer",
      category: "ENGINEERING",
      type: "REMOTE | FULL-TIME",
      description:
        "We're looking for an experienced software developer to join our team...",
      image: "/custom2.png",
    },
    {
      title: "Senior Software Developer",
      category: "ENGINEERING",
      type: "REMOTE | FULL-TIME",
      description:
        "We're looking for an experienced software developer to join our team...",
      image: "/custom2.png",
    },
  ];
  const [open, setOpen] = useState(false); // Modal state

  const onApplyClick = () => {
    setOpen(true);
  };
  return (
    <div className="container mx-auto w-full py-[80px] px-2 lg:px-20 ">
      <Heading
        heading={"Join"}
        description={"Be a part of our team,"}
        className="text-center"
      />
      <div className="max-w-[100%]  flex flex-col gap-6 mt-8">
        {careers.map((career, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg flex flex-col lg:flex-row justify-between items-center w-full"
          >
            <div className="flex flex-col items-start ">
              <div className="flex justify-center bg-[#FDF9F5] w-15 h-15 lg:w-20 lg:h-20 rounded-full">
                <Image
                  src={career.image}
                  alt="CareerImg"
                  width={80}
                  height={50}
                  className="p-2 object-contain"
                />
              </div>
              <div className="mt-3">
                <h2 className=" text-lg lg:text-2xl font-[raleway] font-semibold text-[rgba(19, 17, 34, 0.90)] mb-2 ">
                  {career.title}
                </h2>
                <p className="text-[12px] lg:text-base font-[raleway] font-semibold text-[#71707A] mb-2">
                  {career.category} | {career.type}
                </p>
                <p className="text-[12px] lg:text-base font-[raleway] font-medium text-[rgba(19, 17, 34, 0.90))] text-lg">
                  {career.description}
                </p>
              </div>
            </div>
            <div className="flex justify-end w-full lg:w-auto mt-5">
              <ButtonPage
                btnName={"Apply Now"}
                className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white"
                onHandleClick={onApplyClick}
              />{" "}
            </div>
          </div>
        ))}
      </div>

      <ContactDialog open={open} setOpen={setOpen} />
    </div>

    // <div className="flex flex-col  items-center gap-[80px]">
    //   <Heading
    //     heading={"Join"}
    //     description={"Be a part of our team,"}
    //     className="text-center"
    //   />

    //   <div className="flex flex-col gap-6  w-full ">
    //     {careers.map((career, index) => (
    //       <div
    //         key={index}
    //         className="p-6 bg-white shadow-lg rounded-lg flex justify-between items-center mx-[120px]"
    //       >
    //         <div>
    //           <div className="flex justify-center bg-[#FDF9F5] w-20 h-20 rounded-full">
    //             <Image
    //               src={career.image}
    //               alt="CareerImg"
    //               width={80}
    //               height={50}
    //               className="p-2 object-contain"
    //             />
    //           </div>
    //           <div className="mt-3">
    //             <h2 className="text-xl font-bold">{career.title}</h2>
    //             <p className="text-sm font-semibold">
    //               {career.category} | {career.type}
    //             </p>
    //             <p className="text-gray-600">{career.description}</p>
    //           </div>
    //         </div>
    //         <ButtonPage
    //           btnName={"Apply Now"}
    //           className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Join;
