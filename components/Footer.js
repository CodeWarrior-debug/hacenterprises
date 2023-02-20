import Image from 'next/image'
import React from 'react'
import Sitemap from './Sitemap'
const Footer = () => {
  return (
    <>
    <div className='bg-navy '>
      

      <Sitemap />

      
      <p className='text-white text-center mt-12 pb-4 italic'>
      ©2023 HAC Enterprise - SMS & ISMS Systems Solutions. All Rights Reserved.
      </p>
      <p className='text-white text-end pr-8 font-bold'>
        HAX-00XX23™
      </p>

    </div>
    </>
  )
}

export default Footer
