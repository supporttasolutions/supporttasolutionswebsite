import Image from 'next/image'

function FooterTwo() {
  return (
    <div className='w-full py-2 lg:pt-[5px] lg:pb-[10px] bg-gradient-to-b from-[#fdf9f3] to-[#FFF3E1]  text-[#05070BB2] raleway xl:h-[83px] lg:h-[73px]'>
        <div className=" flex justify-between lg:w-[100%]">

        <div className=" flex justify-between items-center lg:items-end gap-2 w-full px-4 lg:px-[120px] mx-auto container">
        <Image src='/Logo.png' width={200} height={68} alt='logo'   className="h-auto w-[80px] lg:w-[180px] xl:w-[200px] max-w-full object-contain aspect-[3/1]"/>
        <div className='w-3/4 font-medium text-[12px] lg:text-[14px] xl:text-[16px] font-[raleway] text-justify'>
        Driven by innovation and fueled by passion, Supportta is committed to delivering digital solutions that make a difference. Let’s build the future together.
        </div>
        </div>
        </div>
    </div>
  )
}

export default FooterTwo