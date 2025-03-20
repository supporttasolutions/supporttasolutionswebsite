import React from 'react'

function BannerCommon() {
  return (
    <div className='w-full xl:h-[600px] flex items-center justify-center xl:gap-[80px]'>
        <div className="flex lg:gap-[12px]">
            <div className=""></div>
            <div className=""></div>
        </div>
        <div className="flex xl:gap-[60px]">
            <button className=''>Free Consultation</button>
            <button className=''></button>
        </div>
    </div>
  )
}

export default BannerCommon