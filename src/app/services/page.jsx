import Image from "next/image";
import BannerHead from "../components/BannerHead";
import Phases from "../components/Phases";
import ServicesScroll from "../components/ServiceScroll";
export default function Services() {
  return (
    <div className="2xl:min-h-auto lg:min-h-screen w-full  lg:py-[80px] ">
      <section className=" mt-28 relative z-[1] flex flex-col items-center  justify-center">
        <BannerHead
          head={"Our Tech Services"}
          desc="Empowering Businesses with Tailored Digital Solutions"
          buttons={[
            {
              text: "Free Consultation",
              className:
                "bg-linear-to-t from-[#20973A] to-[#326F46] text-white w-[200px] lg:w-[250px] px-3 py-3 md:px-4 md:py-3 cursor-pointer",
                href:"/connect-us"
            },
            {
              text: "Let’s Build Together",
              className:
                "text-linear-to-t from-[#20973A] to-[#326F46] font-[600] w-[200px] lg:w-[250px] px-3 py-3 md:px-4 md:py-3 ",
                href:"/connect-us"

            },
          ]}
        />
      </section>

     
      <section className=" mt-12 lg:mt-28">
        <ServicesScroll />
      </section>

      <section className="mb-[25px]">
        <Phases />
      </section>
    </div>
  );
}
