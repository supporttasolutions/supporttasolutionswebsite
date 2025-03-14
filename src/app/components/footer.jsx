import Footerstyle from './footer.module.css'


function Footer() {
  return (
    <div className={`${Footerstyle.footerMain} relative text-white xl:pt-[60px] xl:pb-[10px] flex flex-col justify-center items-center`}>
        <div className="flex flex-col xl:gap-[40px] xl:w-[83%]">
            <div></div>
            <div className='flex justify-between'>
                <div className='flex flex-col xl:gap-[12px] xl:w-[180px]'>
                    <div className='text-[#E08F34] xl:text-[20px]'>Follow us</div>
                    <div className=''></div>
                </div>
                <form className='flex lg:gap-[20px]'>
                    <input className='bg-[#FDF9F3] xl:px-[20px] xl:py-[10px] lg:rounded-[8px]  border-[.5px] border-[#00000033]' type="text" placeholder='Enter your Number'/>
                    <button className='flex justify-center items-center lg:rounded-[50px] font-semibold bg-gradient-to-b from-[#C18830] to-[#976220] lg:p-[10px]'>Let’s Connect</button>
                </form>


            </div>
            <div className='flex justify-center items-center xl:text-[16px]w-full'>Copyright @ 2025 Supportta Solutions Private Limited. All rights reserved</div>
        </div>
    </div>
  )
}

export default Footer