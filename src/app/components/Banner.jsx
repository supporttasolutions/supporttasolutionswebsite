import Image from "next/image";
import bannerStyle from "./banner.module.css";

function Banner() {
    return (
        <div
            className={`2xl:min-h-screen flex items-center justify-center lg:min-h-screen w-full  ${bannerStyle.bannerMain}`}
        >
            <video className="absolute  left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="/bgvideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute w-[83%] h-full z-10 flex justify-between items-center container text-white">
                <div className="lg:w-[75%] flex flex-col lg:gap-[40px] xl:gap-[60px]">
                    <div className="flex flex-col xl:gap-[10px] lg:gap-[8px]">
                        <div className="xl:text-[64px] lg:text-[47px] inter">Supporting Your Vision with</div>
                        <div className="xl:text-[64px] lg:text-[47px] font-semibold raleway text-[#E08F34]">
                            Web Development...
                        </div>
                    </div>
                    <div className="flex flex-col lg:gap-[40px] xl:gap-[50px] lg:w-[76%] inter">
                        <div className="xl:text-[24px] lg:text-[19px]">
                            From concept to execution, we deliver innovative software that drives results and scales with
                            your business
                        </div>
                        <div className="flex lg:gap-[20px] xl:text-[20px] lg:text-[16px] font-semibold">
                            <button className="flex items-center justify-center bg-gradient-to-b from-[#E08F34] to-[#FFB25B60] xl:px-[30px] xl:py-[15px] lg:px-[20px] lg:py-[10px] rounded-[6px] cursor-pointer">
                                Let’s Connect
                            </button>
                            <button
                                className="relative  xl:py-[15px] lg:px-[20px] lg:py-[10px] text-white overflow-hidden transition-all duration-300 hover:bg-[#C18830]/20 cursor-pointer"
                                style={{
                                    backgroundColor: "transparent",
                                    borderRadius: "10px",
                                }}
                            >
                                <span className="relative z-10">Check Our Services</span>
                                <span
                                    className="absolute inset-0 rounded-[10px]"
                                    style={{
                                        padding: "1px",
                                        background: "linear-gradient(to bottom, #C18830, #E5D1B7)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "destination-out",
                                        maskComposite: "exclude",
                                    }}
                                ></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[25%] flex items-center justify-center">
                <Image
                            src="/image-three.png"
                            alt="image-one"
                            width={280}
                            height={280} // Fixed size
                            className="lg:w-[250px] lg:h-[50%] xl:w-[300px] xl:h-[50%] 2xl:w-[320px] 2xl:h-[320px] object-contain  absolute lg:translate-y-36 xl: translate-y-48"
                        />
                        <Image
                            src="/image-two.png"
                            alt="image-two"
                            width={280}
                            height={280} // Fixed size
                            className="lg:w-[250px] lg:h-[50%] xl:w-[300px] xl:h-[50%] 2xl:w-[320px] 2xl:h-[320px] object-contain  z-[1] absolute lg:-translate-x-40 xl:-translate-x-48"
                        />
                        <Image
                            src="/image-one.png"
                            alt="image-three"
                            width={280}
                            height={280} // Fixed size
                            className="lg:w-[250px] lg:h-[50%] xl:w-[300px] xl:h-[50%] 2xl:w-[320px] 2xl:h-[320px] object-contain  absolute lg:-translate-y-36 xl:-translate-y-48"
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
        </div>
    );
}

export default Banner;
