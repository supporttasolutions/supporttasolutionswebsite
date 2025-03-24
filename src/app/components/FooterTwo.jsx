import Image from "next/image";

function FooterTwo() {
    return (
        <div className="w-full flex justify-center lg:pt-[5px] lg:pb-[10px] bg-gradient-to-b from-[#fdf9f3] to-[#FFF3E1]  text-[#05070BB2] raleway h-auto sectionOuter">
            <div className="container flex justify-center ">
                <div className=" flex justify-between sm:items-end items-center gap-[15px]  w-full">
                    <Image
                        src="/Logo.png"
                        width={200}
                        height={68}
                        alt="logo"
                        className="h-auto lg:w-[180px] xl:w-[200px] max-w-full object-contain aspect-[3/1] w-1/4"
                    />
                    <div className="w-3/4 font-medium xl:text-[16px] lg:text-[14px] text-[12px]">
                        Driven by innovation and fueled by passion, Supportta is committed to delivering digital solutions
                        that make a difference. Let’s build the future together.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterTwo;
