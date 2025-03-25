import React from "react";
import Join from "../components/Join";
import BannerHead from "../components/bannerHead";

function CareersPage() {
  return (
    <div className="2xl:min-h-auto lg:min-h-screen w-full  lg:py-[80px] ">
      <section>
        <BannerHead
          longDesc={`We're always looking for talented individuals to join our team and help us build amazing digital solutions.`}
          desc={`Let's Build Something Amazing Together!`}
          head={"Careers"}
        />
      </section>
      <section className="mt-28 bg-[#fdf9f3]">
        <Join />
      </section>
    </div>
  );
}

export default CareersPage;
