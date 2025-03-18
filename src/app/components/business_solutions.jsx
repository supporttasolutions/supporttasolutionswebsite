import Image from "next/image";

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
    <section className=" w-full text-center py-10 bg-[#FBF7F2]  px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="text-lg md:text-xl flex justify-center items-center gap-2 text-[#E08F34] font-semibold">
        <hr className="bg-[#1FD372] w-[12px] h-[3px] rounded-full" />
        SOLUTIONS WE OFFER
        <hr className="bg-[#1FD372] w-[12px] h-[3px] rounded-full" />
      </div>

      <h2 className="text-2xl md:text-4xl font-regular mt-3 text-center mx-auto w-full break-words">
        Explore our cutting-edge <br /> business solutions
      </h2>
      <div className="flex justify-center">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md w-full max-w-[930px] mx-auto min-h-[250px] border border-[#F5E9DA]"
            >
              <div className="flex justify-center bg-[#FDF9F5] w-20 h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 rounded-full">
                <Image
                  src={card.icon}
                  alt={card.head}
                  width={index === 2 ? 40 : 70}
                  height={index === 2 ? 67.82 : 53}
                  className="p-2 object-contain"
                />
              </div>

              <div className="text-center sm:text-start">
                <h4 className="font-semibold text-[20px] text-[#131122E5] mt-3">
                  {card.head}
                </h4>
                <div className="flex justify-center sm:justify-start flex-wrap gap-2 mt-2 text-[12px]  uppercase text-[#131122E5]">
                  {card.services.map((service, i) => (
                    <span key={i} className="flex items-center ">
                      {i !== 0 && <span className="mx-1 text-gray-400">|</span>}
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
