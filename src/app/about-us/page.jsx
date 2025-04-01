import BannerCommon from "../components/BannerCommon";
import BannerHead from "../components/BannerHead";
import Connect from "../components/Connect";
import MissionVision from "../components/MissionVision";
import Overview from "../components/Overview";
import OverviewTwo from "../components/OverviewTwo";

function page() {
  return (
    <>
      <div className="2xl:min-h-auto lg:min-h-screen w-full  lg:py-[80px] ">
        <section className="mt-28">
          <BannerHead
            buttons={[
              {
                text: "Free Consultation",
                className:
                  "bg-linear-to-t from-[#20973A] to-[#326F46] text-white w-[200px] lg:w-[250px] px-3 py-3 md:px-4 md:py-3 ",
              },
              {
                text: "Our services",
                className:
                  "text-linear-to-t from-[#20973A] to-[#326F46] font-[600] w-[200px] lg:w-[250px] px-3 py-3 md:px-4 md:py-3 ",
              },
            ]}
            desc={
              "Specialists in web and digital marketing solutions. Brewed with love in Kottayam."
            }
            head={"About Us"}
          />
        </section>
        <section className=" mt-16 lg:mt-28">
          <MissionVision />{" "}
        </section>
        <section className="mt-28 hidden lg:block">
        <Overview />
        </section>
        <section className="mt-16 lg:mt-28">
        <OverviewTwo />
        </section>
        <section className="mt-16 lg:mt-28">
        <Connect />
        </section>
      </div>

    </>
  );
}

export default page;
