import React from 'react'
import Heading from './Heading'
import Buttons from './Buttons'

function Join() {
  return (
    <div className='flex flex-col gap-[80px]'>
        <Heading heading={'Join'} description={'Be a part of our team,'}/>
        <div className='flex justify-between'>
            <div className=""></div>
            <Buttons title={"Apply Now"} textColor={'fff'}/>
        </div>
    </div>
  )
}

export default Join