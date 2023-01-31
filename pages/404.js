import React from 'react'
import Link from 'next/link'
const Lost = () => {
  return (
    <>
    <div className='text-white h-screen bg-navy'>

      <h1 className='text-center text-uppercase font-extrabold text-5xl m-16'>It seems you&apos;re lost</h1>
      <br/>
      <br/>
    <p className='text-center text-uppercase font-semibold text-3xl m-16'>Luckily, HAC Enterprises can help guide you someplace familiar and safe, like 
     
     <br/>
     <br/>
     <Link href='/'>
     
     <span className='underline text-blue-600 text-4xl font-extrabold text-center '>🏠 SWEET 🏠</span>
     </Link>
     
     
     
        
         </p>
    </div>
    </>
  )
}

export default Lost
