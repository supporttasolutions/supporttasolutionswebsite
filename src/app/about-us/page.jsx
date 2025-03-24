import BannerCommon from "../components/BannerCommon"
import Connect from "../components/Connect"
import MissionVision from "../components/MissionVision"
import Overview from "../components/Overview"
import OverviewTwo from "../components/OverviewTwo"

function page() {
  return (
     
        <>
            <BannerCommon button1={' Free Consultation'} button2={'our services'} description={'Specialists in web and digital marketing solutions. Brewed with love in Kottayam.'} title={'About Us'}/>
            <div className=" flex flex-col gap-[180px]">

            <MissionVision/>
            <Overview/>
            <OverviewTwo/>
            <Connect/>
</div>
            </>
  )
}

export default page