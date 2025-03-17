import Banner from "./components/Banner";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import FooterTwo from "./components/FooterTwo";
import Navbar from "./components/navbar";
import OurStack from "./components/OurStack";
import WhoAreWe from "./components/WhoAreWe";
import Solutions from "./components/business_solutions";
import Collaborations from "./components/collaborations";
import WhyChoose from "./components/whyChoose";


export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner/>
        <WhoAreWe/>
        <Solutions/>
        <WhyChoose/>
        <OurStack/>
        <Collaborations/>
        <Connect/>
        <FooterTwo/>
        <Footer/>
        <div></div>
      </div>
    </>
  );
}
