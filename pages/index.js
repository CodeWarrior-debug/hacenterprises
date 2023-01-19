import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>


<div className='heroWrapper'>
      <div className='imageWrapper'>
        <Image
          priority
          src="/homepage-header-background-V2.gif"
          alt="hero image example"
          width={1000}
          height={100}
        />
      </div>
      <div className='heroContent'>
        <h1>Hero Image</h1>
        <p>Next.js hero image example.</p>
      </div>

    </div>



    </>
  )
}

export default Home
