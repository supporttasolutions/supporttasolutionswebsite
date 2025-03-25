import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import ButtonPage from "./button";

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
  return (
    <div className="w-full px-[120px] py-[80px]">
      <Heading
        heading={"Join"}
        description={"Be a part of our team,"}
        className="text-center"
      />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 mt-8">
        {careers.map((career, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg flex justify-between items-center"
          >
            <div className="flex flex-col items-start ">
              <div className="flex justify-center bg-[#FDF9F5] w-20 h-20 rounded-full">
                <Image
                  src={career.image}
                  alt="CareerImg"
                  width={80}
                  height={50}
                  className="p-2 object-contain"
                />
              </div>
              <div className="mt-3">
                <h2 className="text-2xl font-bold text-[rgba(19, 17, 34, 0.90))] mb-2 ">{career.title}</h2>
                <p className="text-lg font-semibold text-[rgba(19, 17, 34, 0.60))] mb-2">
                  {career.category} | {career.type}
                </p>
                <p className="text-[rgba(19, 17, 34, 0.90))] text-lg">{career.description}</p>
              </div>
            </div>
            <ButtonPage
              btnName={"Apply Now"}
              className="bg-linear-to-t from-[#20973A] to-[#326F46] text-white"
            />
          </div>
        ))}
      </div>
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
