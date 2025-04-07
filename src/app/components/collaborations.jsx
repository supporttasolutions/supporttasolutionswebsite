import Image from 'next/image';

export default function CollaborationsPage() {
  const collaborators = [
    {
      image: '/device1.png',
      title: 'Android/IOS Applications',
    },
    {
      image: '/device2.png',
      title: 'Custom-built Platforms',
    },
    {
      image: '/device2.png',
      title: 'E-commerce Websites',
    },
  ];

  return (
    <section
      id="white-section"
      className=" w-full inter lg:py-[80px] bg-white  mt-16 lg:mt-8 "
    >
      <h2 className="text-2xl md:text-4xl font-medium  px-6 lg:px-[50px] xl:px-[120px] font-[raleway] text-center mx-auto w-full text-[#E08F34E5] break-words capitalize">
        We are privileged to collaborate with the best, delivering <br />{' '}
        excellence every step of the way.
      </h2>

      <div className="bg-[#FDF9F3] mt-8 py-8 ">
        {/* <div className="flex justify-center"> */}
        <div className=" container mx-auto px-6 lg:px-[50px] xl:px-[120px] flex flex-wrap justify-center lg:justify-center xl:justify-between items-center gap-[50px] w-full ">
          {collaborators.map((collaborator, index) => (
            <div
              key={index}
              className="flex flex-col justify-between  items-center rounded-lg"
            >
              <div className="flex justify-center">
                <Image
                  src={collaborator.image}
                  alt={collaborator.title}
                  width={300}
                  height={215}
                  className="object-contain w-[200px] h-[150px] sm:w-[220px] sm:h-[170px] md:w-[300px] md:h-[215px]"
                />
              </div>

              <p className="mt-4 text-lg font-medium font-[raleway] text-[grey] capitalize">
                {collaborator.title}
              </p>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
