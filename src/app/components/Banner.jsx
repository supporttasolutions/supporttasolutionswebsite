import Image from "next/image";
import Buttons from "./Buttons";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

function Banner() {
  return (
    <>
      <div
        className="w-full h-screen xl:min-h-[800px] lg:min-h-[640px]  md:min-h-[540px]  sm:min-h-[540px] min-h-[640px] flex justify-center items-center relative"
        data-bg="dark"
      >
        <video
          className="absolute top-0 left-0 w-full h-screen xl:min-h-[800px] lg:min-h-[640px]  md:min-h-[540px]  sm:min-h-[540px] min-h-[640px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="container absolute flex text-white h-full w-full justify-between items-center xl:px-[120px] lg:px-[80px] md:px-[40px] px-[16px] ">
          <div className="sm:w-[70%] flex flex-col xl:gap-[60px] gap-[50px] justify-center h-full">
            <div className="flex flex-col ">
              <div className="sm:text-[4.5vw] lg:text-[47px] xl:text-[4.5vw] 2xl:text-[64px] md:text-[40px] text-[56px] font-[inter] sm:w-max bannerHeadingMain">
                Supporting Your Vision with
              </div>
              <TypeAnimation
                sequence={[
                  "E-commerce...",
                  2000,
                  "Digital Marketing...",
                  2000,
                  "Web Development...",
                  2000,
                  "App Development...",
                  2000,
                  "UI / UX Design...",
                  2000,
                  
                ]}
                speed={195}
                deletionSpeed={195}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="sm:text-[4.5vw] lg:text-[47px] xl:text-[64px] md:text-[40px] text-[40px] font-semibold font-[raleway] text-[#E08F34] sm:w-max bannerHeading"
              />
            </div>
            <div className="flex flex-col lg:gap-[40px] xl:gap-[50px] gap-[50px] lg:w-[76%] sm:w-[85%] font-[inter] w-full">
              <div className="xl:text-[24px] lg:text-[19px]  md:text-[18px] text-[16px] capitalize bannerHeadingSub">
                "From concept to execution, we deliver innovative software that
                drives results and scales with your business"
              </div>
              <div className="flex lg:gap-[20px] sm:gap-[15px] w-max">
                <Link href="/connect-us">
                  <Buttons
                    title={"Let's Connect"}
                    textColor={"fff"}
                    bgColor="linear-gradient( #976220, #CC9642), linear-gradient(0deg, #976220, #CC9642)"
                  />
                </Link>
                <button
                  className="relative  xl:py-[15px] lg:px-[20px] lg:py-[10px] text-white overflow-hidden transition-all duration-300 hover:bg-[#C18830]/20 cursor-pointer hidden sm:block"
                  style={{
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    width: "250px",
                  }}
                >
                <Link href="/services">

                  <span className="relative z-10 font-semibold xl:text-[20px] md:text-[18px] text-[16px]">
                    Check Our Services
                  </span>
                  <span
                    className="absolute inset-0 rounded-[10px]"
                    style={{
                      padding: "2px",
                      background:
                        "linear-gradient( #976220,#CC9642), linear-gradient(180deg, #20973A, #326F46)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      maskComposite: "exclude",
                    }}
                  ></span>
                </Link>

                </button>
              </div>
            </div>
          </div>
          <div className="sm:w-[37%] sm:flex flex-col justify-center items-end hidden">
            <Image
              src="/image-three.png"
              alt="Middle image"
              width={280}
              height={280}
              className="object-cover xl:w-[260px] xl:h-[260px] lg:h-[20vw] lg:w-[20vw] sm:h-[22vw] sm:w-[22vw] aspect-square absolute  xl:translate-y-36 lg:translate-y-[11vw] sm:translate-y-[12vw]  rounded-[50%]"
            />

            <Image
              src="/image-two.png"
              alt="Middle image"
              width={280}
              height={280}
              className="object-cover z-20 xl:w-[260px] xl:h-[260px] lg:h-[20vw] lg:w-[20vw] sm:h-[22vw] sm:w-[22vw] aspect-square absolute  xl:-translate-x-40 lg:-translate-x-[12vw] sm:-translate-x-[13vw] rounded-[50%]"
            />

            <Image
              src="/image-one.png"
              alt="Middle image"
              width={280}
              height={280}
              className="object-cover xl:w-[260px] xl:h-[260px] lg:h-[20vw] lg:w-[20vw] sm:h-[22vw] sm:w-[22vw]  aspect-square absolute xl:-translate-y-36 lg:-translate-y-[11vw] sm:-translate-y-[12vw] rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
