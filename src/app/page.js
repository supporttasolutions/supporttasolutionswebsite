import Banner from "./components/Banner";
import Connect from "./components/Connect";
import OurStack from "./components/OurStack";
import Socialmedia from "./components/Socialmedia";
import WhoAreWe from "./components/WhoAreWe";
import Solutions from "./components/Business_solutions";
import Collaborations from "./components/Collaborations";
import WhyChoose from "./components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
          <Image src={ "/whatsapp.svg"} alt="whatsappImage" width={40} height={40} className="fixed bottom-5 right-5 z-50 w-12 h-12" />
     
        <Socialmedia />
        <Banner />
        <section className="relative">
          <div className="absolute bottom-0 left-0 w-full h-[150px] 2xl:h-[180px]  bg-gradient-to-b from-transparent to-white"></div>
        </section>

        <WhoAreWe />

        <Solutions />
        <WhyChoose />
        <OurStack />
        <Collaborations />
        <Connect />
      </div>
    </>
  );
}
