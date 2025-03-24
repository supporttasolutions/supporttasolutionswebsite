import React from 'react'
import BannerCommon from '../components/BannerCommon'
import Join from '../components/Join'

function CareersPage() {
  return (
    <div className=''>
        <BannerCommon description2={`We're always looking for talented individuals to join our team and help us build amazing digital solutions.`} description={`Let's Build Something Amazing Together!`} title={'Careers'}/>
        <Join/>
    </div>
  )
}

export default CareersPage