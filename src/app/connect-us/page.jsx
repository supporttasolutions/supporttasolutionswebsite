"use client";
import React from "react";
import BannerHead from "../components/BannerHead";
import ConnectProjectPage from "../components/ConnectProject";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

function ConnectPage() {
  return (
    <div className="2xl:min-h-auto lg:min-h-screen w-full lg:py-[80px] ">
      <section className="mt-28">
        <BannerHead
          longDesc={`We’d love to hear from you! Whether you have a project idea, need expert guidance, or just want to explore possibilities, we’re here to help. Share your vision with us, and let’s create something impactful together.`}
          desc={`Let's Build Something Amazing Together!`}
          head={"Connect Us"}
          page={"connect"}
        />

      </section>
      <section className=" mt-12 lg:mt-28 bg-[#fdf9f3]">
        <ConnectProjectPage />
      </section>
    </div>
  );
}

export default ConnectPage;
