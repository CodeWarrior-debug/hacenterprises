import Image from 'next/image'
import React from 'react'
import Sitemap from './Sitemap'
const Footer = () => {
  return (
    <>
    <div className='bg-slate grid grid-cols-5 '>
      
      <div className='img-["/business_card.png"] col-start:1 col-span-1 mr-4 align-center justify-center'>
        <Image
                    src="/business_card.png"
                    alt="Business Card"
                    width={800}
                    height={200}
                    className=""
        >

        </Image>
      </div>
      <div>

      <Sitemap className=" col-start-3 col-end-5"/>
      </div>

    </div>
    </>
  )
}

export default Footer
