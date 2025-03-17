import bannerStyle from './banner.module.css'

function Banner() {
  return (
    <div className={`2xl:min-h-auto lg:min-h-screen w-full  ${bannerStyle.bannerMain}`}>
      <div className="relative  lg:min-h-screen w-full bg-red z-10 flex items-center justify-center bg-[#0A0A0AB2]">dfd</div>
      
    </div>
  )
}

export default Banner