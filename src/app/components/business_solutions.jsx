import Image from "next/image";
import Heading from "./Heading";

export default function SolutionsPage() {
  const cards = [
    {
      icon: "/custom1.png",
      head: "Custom Software Development",
      services: ["Product Development", "POC Development"],
    },
    {
      icon: "/custom2.png",
      head: "Web Development",
      services: ["Web Development", "Node.js", "Next.js"],
    },
    {
      icon: "/custom3.png",
      head: "Mobile App Development",
      services: ["Flutter", "Android", "iOS"],
    },
    {
      icon: "/custom4.png",
      head: "UI / UX Design",
      services: ["Figma", "HTML", "CSS"],
    },
    {
      icon: "/custom5.png",
      head: "E-commerce Development",
      services: ["Shopify", "WooCommerce"],
    },
    {
      icon: "/custom6.png",
      head: "Digital Marketing",
      services: ["SEO", "Google Ads"],
    },
  ];
  return (
    <section
      id="white-section"
      className=" w-full  flex items-center justify-center bg-[#FDF9F3]   mt-16 lg:mt-8  "
    >
      <div className=" w-full flex flex-col items-center justify-center gap-[20px] md:gap-[30px] lg:gap-[50px]  container  py-8 lg:py-[80px] px-6 lg:px-[50px] xl:px-[120px]">
        <Image
          src={"/supporttaLogo.png"}
          alt="Supportta_Logo"
          width={25}
          height={40}
          className=" block lg:hidden"
        />

        <Heading
          heading="solutions we offer"
          description="Explore our cutting-edge  business solutions"
          className="text-center"
        />

        <div className="flex justify-between w-full h-auto">
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md w-full  max-w-[930px] mx-auto min-h-[285px] border border-[#F5E9DA] transition-transform duration-300 hover:scale-[1.05]"
              >
                <div className="flex justify-center md:justify-start">
                <div className="flex justify-center bg-[#FDF9F5] w-20 h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 rounded-full">
                  <Image
                    src={card.icon}
                    alt={card.head}
                    width={index === 2 ? 40 : 70}
                    height={index === 2 ? 67.82 : 53}
                    className="p-2 object-contain"
                  />
                </div>


                </div>
               
                <div className="text-center sm:text-start font-[raleway]">
                  <h4 className="font-semibold text-[18px] xl:text-[20px] text-[#131122E5] mt-3">
                    {card.head}
                  </h4>
                  <div className="flex justify-center sm:justify-start flex-wrap gap-2 mt-2 text-[12px]  uppercase text-[#131122E5]">
                    {card.services.map((service, i) => (
                      <span key={i} className="flex items-center ">
                        {i !== 0 && (
                          <span className="mx-1 text-gray-400">|</span>
                        )}
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
