import Image from "next/image";
import BannerHead from "../components/bannerHead";
import Phases from "../components/phases";
import ServicesScroll from "../components/serviceScroll";
export default function Services() {
  return (
    <div className="2xl:min-h-auto lg:min-h-screen w-full  lg:py-[80px] ">
      <div className="absolute inset-0 bg-[#FFEBD5]/40 backdrop-blur-[400px] z-[-1] md:hidden">
      </div>

      <section className="relative z-[1] flex flex-col items-center  justify-center ">
        <BannerHead
          head={"Our Tech Services"}
          desc="Empowering Businesses with Tailored Digital Solutions"
          buttons={[
            {
              text: "Free Consultation",
              className:
                "bg-linear-to-t from-[#20973A] to-[#326F46] text-white",
            },
            {
              text: "Let’s Build Together",
              className:
                "text-linear-to-t from-[#20973A] to-[#326F46] font-[600]",
            },
          ]}
        />
      </section>

      <section className="relative  mt-28">
        <ServicesScroll />
      </section>

      <section className="mt-28">
        <Phases />
      </section>
    </div>
  );
}
