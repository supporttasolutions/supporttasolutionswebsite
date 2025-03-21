import BannerHead from "../components/bannerHead";
import Phases from "../components/phases";
import ServicesScroll from "../components/serviceScroll";
export default function Services() {
  return (
    <div className="2xl:min-h-auto lg:min-h-screen w-full  lg:py-[80px] ">
      <section className=" flex flex-col items-center  justify-center">
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
                "text-linear-to-t from-[#20973A] to-[#326F46] text-[20px]font-[600]",
            },
          ]}
        />
      </section>

      <section className="mt-28">
        <ServicesScroll />
      </section>
      <section>
        <Phases/>
      </section>
    </div>
  );
}
