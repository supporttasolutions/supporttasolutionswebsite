import Image from 'next/image'

function FooterTwo() {
  return (
    <div className='w-full flex justify-center lg:pt-[5px] lg:pb-[10px] bg-[#B0B0B0] text-[#05070BB2] raleway xl:h-[83px] lg:h-[73px]'>
        <div className="container flex justify-center lg:w-[83%]">

        <div className=" flex justify-between items-end  w-full">
        <Image src='/Logo.png' width={200} height={68} alt='logo'   className="h-auto lg:w-[180px] xl:w-[200px] max-w-full object-contain aspect-[3/1]"/>
        <div className='w-3/4 font-medium xl:text-[16px] lg:text-[14px]'>
        Driven by innovation and fueled by passion, Supportta is committed to delivering digital solutions that make a difference. Let’s build the future together.
        </div>
        </div>
        </div>
    </div>
  )
}

export default FooterTwo