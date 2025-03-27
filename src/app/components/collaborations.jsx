import Image from "next/image";

export default function CollaborationsPage() {
  const collaborators = [
    {
      image: "/device1.png",
      title: "Android/IOS Applications",
    },
    {
      image: "/device2.png",
      title: "Custom-built Platforms",
    },
    {
      image: "/device2.png",
      title: "E-commerce Websites",
    },
  ];

  return (
    <section id="white-section" className="2xl:min-h-auto lg:min-h-screen w-full inter lg:py-[80px] bg-white min-h-[150vh] ">
      <h2 className="text-2xl md:text-4xl font-medium mt-3 px-[120px] font-[raleway] text-center mx-auto w-full text-[#E08F34E5] break-words capitalize">
        We are privileged to collaborate with the best, delivering <br />{" "}
        excellence every step of the way.
      </h2>

      <div className=" bg-[#FDF9F3] mt-8 py-8 px-[120px]">
        <div className="flex justify-center">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full gap-[10rem]">
          {collaborators.map((collaborator, index) => (
            <div
              key={index}
              className="flex flex-col justify-between  items-center p-4 rounded-lg"
            >
              <Image
                src={collaborator.image}
                alt={collaborator.title}
                width={590}
                height={250}
              />
              <p className="mt-4 text-lg font-medium font-[raleway] text-[grey] capitalize">
                {collaborator.title}
              </p>
            </div>
          ))}
        </div>
        </div>
       
       
      </div>
    </section>
  );
}
