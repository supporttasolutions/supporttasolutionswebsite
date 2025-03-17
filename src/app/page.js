import Banner from "./components/Banner";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import FooterTwo from "./components/FooterTwo";
import Navbar from "./components/navbar";
import OurStack from "./components/OurStack";
import WhoAreWe from "./components/WhoAreWe";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner/>
        <WhoAreWe/>
        <OurStack/>
        <Connect/>
        <FooterTwo/>
        <Footer/>
      </div>
    </>
  );
}
