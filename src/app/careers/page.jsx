import React from "react";
import Join from "../components/Join";
import BannerHead from "../components/BannerHead";

function CareersPage() {
  return (
    <div className="2xl:min-h-auto lg:min-h-screen w-full  lg:py-[80px] ">
      <section className="mt-28">
        <BannerHead
          longDesc={`We're always looking for talented individuals to join our team and help us build amazing digital solutions.`}
          desc={`Let's Build Something Amazing Together!`}
          head={"Careers"}
          buttonsMob={[
            {
              text: "Our Services",
              className:
                "bg-linear-to-t from-[#20973A] to-[#326F46] text-white",
            },
          ]}
        />
      </section>
      <section className="mt-28 bg-[#fdf9f3]">
        <Join />
      </section>
    </div>
  );
}

export default CareersPage;
