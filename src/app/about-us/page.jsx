import BannerCommon from "../components/BannerCommon";
import BannerHead from "../components/bannerHead";
import Connect from "../components/Connect";
import MissionVision from "../components/MissionVision";
import Overview from "../components/Overview";
import OverviewTwo from "../components/OverviewTwo";

function page() {
  return (
    <>
      <div className="2xl:min-h-auto lg:min-h-screen w-full  lg:py-[80px] ">
        <section>
          <BannerHead
            buttons={[
              {
                text: "Free Consultation",
                className:
                  "bg-linear-to-t from-[#20973A] to-[#326F46] text-white",
              },
              {
                text: "Our services",
                className:
                  "text-linear-to-t from-[#20973A] to-[#326F46] font-[600]",
              },
            ]}
            desc={
              "Specialists in web and digital marketing solutions. Brewed with love in Kottayam."
            }
            head={"About Us"}
          />
        </section>
        <section className="mt-28">
          <MissionVision />{" "}
        </section>
        <section className="mt-28">
        <Overview />
        </section>
        <section className="mt-28">
        <OverviewTwo />
        </section>
        <section className="mt-28">
        <Connect />
        </section>
      </div>

    </>
  );
}

export default page;
