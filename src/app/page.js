import Banner from "./components/Banner";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import FooterTwo from "./components/FooterTwo";
import Navbar from "./components/navbar";
import OurStack from "./components/OurStack";
import Socialmedia from "./components/Socialmedia";
import WhoAreWe from "./components/WhoAreWe";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Socialmedia/>
        <Banner/>
        <WhoAreWe/>
        <OurStack/>
        <Connect/>
        <FooterTwo/>
        <Footer/>
        <div></div>
      </div>
    </>
  );
}
