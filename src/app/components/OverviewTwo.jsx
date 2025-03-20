
import Image from 'next/image'
import React from 'react'

function OverviewTwo() {
    const datas=[{
        title1:"Step 1",
        title2:"Discovery Phase – Laying the Foundation",
        image:"/hero-bg.jpg",
        description:"Every great solution starts with understanding. We begin with in-depth research and strategy building, ensuring a strong foundation for your project. Our team crafts lean go-to-market strategies to enhance user experience, align with your objectives, and guarantee a successful launch. By gathering core product insights, we translate your vision into clear, actionable app requirements.",
        description2:"A well-defined strategy that ensures an efficient and user-focused product."
    }]
  return (
    <div className="bg-[#000000] flex items-center justify-center w-full">
    <div className='w-[83%] flex flex-col xl:gap-[80px]  xl:py-[80px]'>
            {datas.flatMap((details, index) =>  Array(4).fill(details).map((details,i)=>(
                <div key={`${index}-${i}`} className=" flex items-start justify-between w-full xl:py-[30px]">
                <div className=" flex flex-col xl:gap-[35px] w-[54.1%]">
                    <div className="uppercase inter text-[#e08f34] font-semibold xl:text-[36px]">{details.title1}</div>
                    <div className="raleway text-[68px] text-white font-normal">{details.title2}</div>
                </div>
                <div className="flex flex-col items-center xl:gap-[20px] text-white w-[41.7%]">
                    <div className='w-full relative aspect-[5/3]'>
                    <Image src={details.image} alt='' fill  className='object-fill relative'/>
                    </div>
                    <div className=" inter text-[18px]">{details.description}</div>
                    <div className="raleway text-[20px]">{details.description2}</div>
                </div>
            </div>)))}
    </div>
    </div>

  )
}

export default OverviewTwo