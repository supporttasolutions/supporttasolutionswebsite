import Banner from "./components/Banner";
import Connect from "./components/Connect";
import OurStack from "./components/OurStack";
import Socialmedia from "./components/Socialmedia";
import WhoAreWe from "./components/WhoAreWe";
import Solutions from "./components/Business_solutions";
import Collaborations from "./components/Collaborations";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <>
      <div>
        <Socialmedia />
        <Banner />
        <section className="relative">
          <div className="absolute bottom-0 left-0 w-full h-[150px]  bg-gradient-to-b from-transparent to-white"></div>
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
