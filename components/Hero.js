import React from 'react'
import '../styles/Hero.module.css'
import Boast from './Boast'
import CardGlass from './CardGlass'

const Hero = () => {
  return (
    <>
      <div className='bg-[url("/Laserworld_BeamBar_Blue_0005_beam.jpg")] bg-no-repeat bg-cover p-10 grid grid-cols-2'>

        <Boast className='col-start-1 col-span-1'/>
        {/* <Boast className='col-start-1 col-span-1'/> */}
        <CardGlass className="col-span-1"/>
      </div>
    </>
  )
}

export default Hero
