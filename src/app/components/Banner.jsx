import Image from "next/image";
import Buttons from "./Buttons";

function Banner() {
  return (
    // <div
    //   className={`2xl:min-h-screen lg:min-h-screen  flex items-center justify-center w-full `}
    // >

    <div className="relative min-h-[120vh] flex flex-col justify-center items-center w-full  pb-[200px]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute   h-full z-10 flex justify-between items-center container text-white px-6 lg:px-[50px] xl:px-[120px]">
        <div className="lg:w-[75%] flex flex-col lg:gap-[40px] xl:gap-[60px]">
          <div className="flex flex-col xl:gap-[10px] lg:gap-[8px]">
            <p className="text-[56px] lg:text-[47px] xl:text-[56px]  font-[inter]">
              Supporting Your Vision with
            </p>
            <p className=" text-[36px] lg:text-[47px]  xl:text-[56px] font-semibold font-[raleway] text-[#E08F34]">
              Web Development...
            </p>
          </div>
          <div className="flex flex-col lg:gap-[40px] xl:gap-[50px] lg:w-[76%] font-[inter]">
            <p className="text-[16px] lg:text-[19px] xl:text-[24px] capitalize">
              From concept to execution, we deliver innovative software that
              drives results and scales with your business
            </p>
            <div className="flex lg:gap-[20px] xl:text-[20px] lg:text-[16px] font-regular font-[inter]">
              <Buttons
                title={"Let's Connect"}
                textColor={"fff"}
                bgColor="linear-gradient( #326F46, #20973A), linear-gradient(0deg, #326F46, #20973A)"
              />

              <button
                className="relative hidden lg:block lg:py-[10px] xl:py-[15px] lg:px-[20px]  text-white overflow-hidden transition-all duration-300 hover:bg-[#C18830]/20 cursor-pointer"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "10px",
                  width: "250px",
                }}
              >
                <span className="relative z-10">Check Our Services</span>
                <span
                  className="absolute inset-0 rounded-[10px]"
                  style={{
                    padding: "2px",
                    background:
                      "linear-gradient( #326F46,#20973A), linear-gradient(180deg, #20973A, #326F46)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                  }}
                ></span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] flex items-center justify-center mt-50 hidden lg:block">
          {/* className="lg:w-[250px] lg:h-[50%] xl:w-[300px] xl:h-[50%] 2xl:w-[280px] 2xl:h-[280px]  */}
          <Image
            src="/image-three.png"
            alt="image-one"
            width={280}
            height={280} // Fixed size
            className=" object-cover  absolute lg:translate-y-28 xl: translate-y-50"
          />
          <Image
            src="/image-two.png"
            alt="image-two"
            width={280}
            height={280} // Fixed size
            className=" object-cover  z-[1] absolute -translate-x-43"
          />
          <Image
            src="/image-one.png"
            alt="image-three"
            width={280}
            height={280} // Fixed size
            className="object-cover  relative lg:-translate-y-36 xl:-translate-y-48"
          />
        </div>
        {/* <div className="h-fit lg:w-[400px] absolute right-0 flex flex-col items-end justify-between z-50">
                    <div className="absolute lg:w-[50%] xl:w-[70%] h-full flex flex-col items-end justify-center">
                        <Image
                            src="/image-one.png"
                            alt="image-one"
                            width={280}
                            height={280} // Fixed size
                            className="lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px] 2xl:w-[320px] 2xl:h-[320px] object-contain xl:translate-y-30 lg:translate-y-[90px]"
                        />
                        <Image
                            src="/image-two.png"
                            alt="image-two"
                            width={280}
                            height={280} // Fixed size
                            className="lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px] 2xl:w-[320px] 2xl:h-[320px] object-contain xl:-translate-x-40 lg:-translate-x-[130px] z-[1]"
                        />
                        <Image
                            src="/image-three.png"
                            alt="image-three"
                            width={280}
                            height={280} // Fixed size
                            className="lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px] 2xl:w-[320px] 2xl:h-[320px] object-contain xl:-translate-y-30 lg:-translate-y-[90px]"
                        />
                    </div>
                </div> */}
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent to-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-transparent to-white"></div> */}
      {/* <div className="relative h-[200px]"></div> */}
    </div>
  );
}

export default Banner;
